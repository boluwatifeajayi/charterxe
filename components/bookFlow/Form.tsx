import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FaPlane, FaExchangeAlt} from 'react-icons/fa';
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';
import { PiArrowsDownUpFill } from "react-icons/pi";
import axios from 'axios';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

interface Location {
  id: number;
  name: string;
  countryIso2Code: string;
  cityCode: string;
}

function Form() {
  const [selectedTab, setSelectedTab] = useState('oneWay');
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState<Location[]>([]);
  const [toSuggestions, setToSuggestions] = useState<Location[]>([]);
  const [recentLocations, setRecentLocations] = useState<Location[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState('');
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const storedLocations = localStorage.getItem('recentLocations');
    if (storedLocations) {
      setRecentLocations(JSON.parse(storedLocations));
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setFromSuggestions([]);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setToSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async (query: string) => {
    if (query.length < 1) return [];
    
    try {
      const response = await axios.get(`https://chaterxe-staging.azurewebsites.net/api/Book/searchlocation?query=${query}`);
      if (response.data.code === 200) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(async (input: string, setterFunction: React.Dispatch<React.SetStateAction<Location[]>>) => {
      const suggestions = await fetchSuggestions(input);
      setterFunction([...suggestions, ...recentLocations]);
    }, 300),
    [recentLocations]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setterFunction: React.Dispatch<React.SetStateAction<string>>, suggestionSetter: React.Dispatch<React.SetStateAction<Location[]>>) => {
    const value = e.target.value;
    setterFunction(value);
    debouncedFetchSuggestions(value, suggestionSetter);
  };

  const handleSuggestionSelect = (suggestion: Location, inputSetter: React.Dispatch<React.SetStateAction<string>>, suggestionSetter: React.Dispatch<React.SetStateAction<Location[]>>, type: 'from' | 'to') => {
    const locationString = `${suggestion.name} (${suggestion.cityCode})`;
    inputSetter(locationString);
    suggestionSetter([]);

    const updatedRecentLocations = [suggestion, ...recentLocations.filter(loc => loc.id !== suggestion.id)].slice(0, 5);
    setRecentLocations(updatedRecentLocations);
    localStorage.setItem('recentLocations', JSON.stringify(updatedRecentLocations));

    if (type === 'from') {
      localStorage.setItem('fromLocation', locationString);
      localStorage.setItem('fromLocationId', suggestion.id.toString());
    } else {
      localStorage.setItem('toLocation', locationString);
      localStorage.setItem('toLocationId', suggestion.id.toString());
    }
  };

  const handleBookFlight = () => {
    localStorage.setItem('tripType', selectedTab);
    localStorage.setItem('travelDate', selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '');
    localStorage.setItem('passengers', passengers);
    router.push('/book');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full container bg-gradient-to-b from-white/5 to-[#2F3049] backdrop-blur-sm border border-[#F0F0F04D] rounded-md py-4 shadow-lg overflow-visible">
        <div className="p-0 sm:p-8">
          <div className='sm:flex gap-5'>
            <h2 className="text-2xl sm:text-4xl text-white font-bold mb-4 sm:mb-6">Book A Trip Today</h2>

            <div className="pb-3 sm:pt-0 pt-3 grid sm:grid-cols-3 grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedTab('oneWay')}
                className={`flex items-center sm:mr-2 mb-1 text-sm px-4 py-2 rounded-full ${
                  selectedTab === 'oneWay'
                    ? 'border text-white'
                    : 'text-white/50 bg-white/10'
                }`}
              >
                <FaPlane className="mr-2" />
                One Way
              </button>
              <button
                onClick={() => setSelectedTab('roundTrip')}
                className={`flex items-center mb-1 text-sm sm:mr-2 px-4 py-2 rounded-full ${
                  selectedTab === 'roundTrip'
                  ? 'border text-white'
                  : 'text-white/50 bg-white/10'
                }`}
              >
                <FaExchangeAlt className="mr-2" />
                Round Trip
              </button>
              <button
                onClick={() => setSelectedTab('multiLeg')}
                className={`flex items-center text-sm px-4 py-2 rounded-full ${
                  selectedTab === 'multiLeg'
                  ? 'border text-white'
                  : 'text-white/50 bg-white/10'
                }`}
              >
               <PiArrowsDownUpFill className='mr-2'/>
                Multi-leg
              </button>
            </div>
          </div>
          <div className="sm:flex sm:space-x-4 mb-6">
            <div className="flex-grow mb-2 sm:mb-0 sm:w-[35%] relative" ref={fromRef}>
              <div className="relative">
                <MdFlightTakeoff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="text"
                  value={fromInput}
                  onChange={(e) => handleInputChange(e, setFromInput, setFromSuggestions)}
                  placeholder="From"
                  className="w-full bg-white/5 border border-gray-200 text-white rounded-md py-3 pl-10 pr-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {fromSuggestions.length > 0 && (
                <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
                  {fromSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionSelect(suggestion, setFromInput, setFromSuggestions, 'from')}
                    >
                      {suggestion.name} ({suggestion.cityCode}) - {suggestion.countryIso2Code}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex-grow sm:w-[35%] mb-2 sm:mb-0 relative" ref={toRef}>
              <div className="relative">
                <MdFlightLand className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="text"
                  value={toInput}
                  onChange={(e) => handleInputChange(e, setToInput, setToSuggestions)}
                  placeholder="To"
                  className="w-full bg-white/5 border border-gray-200 text-white rounded-md py-3 pl-10 pr-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {toSuggestions.length > 0 && (
                <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
                  {toSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="px-4 text-sm py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionSelect(suggestion, setToInput, setToSuggestions, 'to')}
                    >
                      {suggestion.name} ({suggestion.cityCode}) - {suggestion.countryIso2Code}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="sm:w-[15%] mb-2 sm:mb-0">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                   
                    className={`w-full bg-white/5 border text-left flex relative border-gray-200 text-white rounded-md py-3 pl-10 pr-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      !selectedDate && "text-muted-foreground"
                    }`}
                  >
                    <LuCalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"  />
                    {selectedDate ? format(selectedDate, "PPP") : <span className='text-gray-400'>Date</span>}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="sm:w-[15%] mb-2 sm:mb-0">
              <div className="relative">
                <HiOutlineUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="number"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  placeholder="No Of Persons"
                  className="w-full bg-white/5 border border-gray-200 text-white rounded-md py-3 pl-10 pr-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          
          <button 
            className="w-full bg-[#0129A4] text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleBookFlight}
          >
            Book A Flight
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;