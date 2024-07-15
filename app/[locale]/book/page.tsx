'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'
import { FaPlane, FaCalendarAlt, FaUser, FaExchangeAlt } from 'react-icons/fa'
import { PiArrowsDownUpFill } from "react-icons/pi"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, parse } from "date-fns"
import { BiRightTopArrowCircle } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { GrMultiple } from "react-icons/gr";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { PiAirplaneLandingBold } from "react-icons/pi";
import { TbCalendarMonth } from "react-icons/tb";
import { PiUsersBold } from "react-icons/pi";

function Page() {
    const [tripType, setTripType] = useState<any>('One Way')
    const [fromLocation, setFromLocation] = useState<any>('')
    const [fromLocationId, setFromLocationId] = useState<any>('')
    const [toLocation, setToLocation] = useState<any>('')
    const [toLocationId, setToLocationId] = useState<any>('')
    const [travelDate, setTravelDate] = useState<Date | undefined>(undefined)
    const [passengers, setPassengers] = useState<any>('')
    const [selectedJets, setSelectedJets] = useState<any[]>([])
    const [jetCategories, setJetCategories] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [availableJets, setAvailableJets] = useState<any[]>([])

    useEffect(() => {
        setTripType(localStorage.getItem('tripType') || 'One Way')
        setFromLocation(localStorage.getItem('fromLocation') || '')
        setFromLocationId(localStorage.getItem('fromLocationId') || '')
        setToLocation(localStorage.getItem('toLocation') || '')
        setToLocationId(localStorage.getItem('toLocationId') || '')
        const savedDate = localStorage.getItem('travelDate')
        setTravelDate(savedDate ? parse(savedDate, 'yyyy-MM-dd', new Date()) : undefined)
        setPassengers(localStorage.getItem('passengers') || '')
        setSelectedJets(JSON.parse(localStorage.getItem('selectedJets') || '[]'))
    }, [])

    useEffect(() => {
        if (fromLocationId && toLocationId && passengers) {
            fetchJetCategories()
        }
    }, [fromLocationId, toLocationId, passengers])

    const fetchJetCategories = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://chaterxe-staging.azurewebsites.net/api/Book/getjetcategoriesbydistance?takeOffAirportId=${fromLocationId}&destinationAirportId=${toLocationId}&noOfPassanger=${passengers}`)
            if (response.data.code === 200) {
                setJetCategories(response.data.data.jetCategories)
            } else {
                setJetCategories([])
            }
        } catch (error) {
            console.error('Error fetching jet categories:', error)
            setJetCategories([])
        }
        setLoading(false)
    }

    const handleTripTypeChange = (type: any) => {
        setTripType(type)
        localStorage.setItem('tripType', type)
    }

    const handleInputChange = (setter: any, key: any) => (e: any) => {
        setter(e.target.value)
        localStorage.setItem(key, e.target.value)
    }

    const handleDateChange = (date: Date | undefined) => {
        setTravelDate(date)
        if (date) {
            localStorage.setItem('travelDate', format(date, 'yyyy-MM-dd'))
        } else {
            localStorage.removeItem('travelDate')
        }
    }

    const handleJetSelection = (category: any) => {
        const updatedJets = selectedJets.includes(category.id)
            ? selectedJets.filter(jet => jet !== category.id)
            : [...selectedJets, category.id]
        setSelectedJets(updatedJets)
        localStorage.setItem('selectedJets', JSON.stringify(updatedJets))
    }

    const handleShowAvailableFlights = async () => {
        setLoading(true);
        try {
            const selectedCategoryIds = selectedJets.filter(id => typeof id === 'number');
            const response = await axios.post('https://chaterxe-staging.azurewebsites.net/api/book/getjetbycategories', {
                takeOffAirportId: fromLocationId,
                destinationAirportId: toLocationId,
                noOfPassanger: passengers,
                selectedJetCategoriesId: selectedCategoryIds
            });
    
            if (response.data.code === 200) {
                setAvailableJets(response.data.data.jetTypes);
            } else {
                setAvailableJets([]);
            }
        } catch (error) {
            console.error('Error fetching available jets:', error);
            setAvailableJets([]);
        }
        setLoading(false);
    };

    function removeTrailingSemicolon(url:any) {
        if (url.endsWith(';')) {
          return url.slice(0, -1);
        }
        return url;
    }

    const tripTypeIcons: any = {
        'One Way': <BiRightTopArrowCircle />,
        'Round Trip': <LuArrowDownUp />,
        'Multi-Leg': <GrMultiple />
    }

  return (
    <>
      <Navbar/>
      <div className='container sm:mx-auto mx-0 py-32 sm:flex justify-between gap-10'>
        <div className='sm:w-[60%]'>
          <div className='bg-white rounded-lg border p-2 sm:p-8'>
            <div className='sm:flex gap-4 mb-4'>
              {['One Way', 'Round Trip', 'Multi-Leg'].map((type) => (
                <button 
                  key={type}
                  onClick={() => handleTripTypeChange(type)}
                  className={`px-4 sm:w-[33.33%] py-2 mb-1 rounded-full font-semibold flex items-center justify-center ${
                    tripType === type ? 'bg-[#E0E9F6] text-[#0129A4]' : 'text-[#969EB6] bg-[#F5F7FA]'
                  }`}
                >
                  {tripTypeIcons[type]}
                  <span className="ml-2">{type}</span>
                </button>
              ))}
            </div>
            <h2 className='text-md font-semibold text-[#18254A] mb-4'>FLIGHT INFORMATION</h2>
            <div className='space-y-4 border p-4 rounded-md'>
              <div className='flex items-center bg-[#F5F7FA] rounded-md p-3'>
              <PiAirplaneTakeoffBold className='text-gray-400 mr-3' />
                <input 
                  value={fromLocation}
                  onChange={handleInputChange(setFromLocation, 'fromLocation')}
                  className='w-full bg-[transparent] outline-none'
                  placeholder='From'
                />
              </div>
              <div className='flex items-center bg-[#F5F7FA] rounded-md p-3'>
                <PiAirplaneLandingBold className='text-gray-400 mr-3' />
                <input 
                  value={toLocation}
                  onChange={handleInputChange(setToLocation, 'toLocation')}
                  className='w-full bg-[transparent] outline-none'
                  placeholder='To'
                />
              </div>
              <div className='sm:flex  gap-4'>
                <div className='flex sm:w-[50%] items-center bg-[#F5F7FA] rounded-md p-3'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                       
                        className={`w-full flex justify-start bg-[transparent] text-left font-normal ${
                          !travelDate && "text-muted-foreground"
                        }`}
                      >
                        <TbCalendarMonth className='text-gray-400 mt-1 mr-3' />
                        {travelDate ? format(travelDate, "PPP") : <span>Pick a date</span>}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={travelDate}
                        onSelect={handleDateChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className='flex sm:w-[50%] mt-2 sm:mt-0 items-center bg-[#F5F7FA] rounded-md p-3'>
                <PiUsersBold className='text-gray-400 mr-2' />
                  <input 
                    type='number'
                    value={passengers}
                    onChange={handleInputChange(setPassengers, 'passengers')}
                    className='w-full bg-[transparent] outline-none'
                    placeholder='Passengers'
                  />
                </div>
              </div>
            </div>
            <h3 className='text-md font-semibold text-[#18254A] mt-6 mb-4'>JET CATEGORY</h3>
            {loading ? (
              <div>Loading jet categories...</div>
            ) : jetCategories.length > 0 ? (
              <div className='grid border rounded-md p-4 grid-cols-2 sm:grid-cols-5 gap-3'>
                {jetCategories.map((category) => (
                  <button 
                    key={category.id} 
                    onClick={() => handleJetSelection(category)}
                    className={`p-2 text-left rounded-md text-sm ${selectedJets.includes(category.id) ? 'bg-[#E4EAFE] text-[#0129A4]' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <span className='font-semibold'>{category.name}</span>
                    <div className='text-xs mt-1'>Available Jets {category.availableJets}</div>
                  </button>
                ))}
              </div>
            ) : (
              <div>No jet categories available for the selected route and passengers.</div>
            )}
            <button 
              className='w-full bg-[#0129A4] text-white py-4 rounded-md mt-6 font-semibold'
              onClick={handleShowAvailableFlights}
              disabled={loading || selectedJets.length === 0}
            >
              {loading ? 'Loading...' : 'SHOW AVAILABLE FLIGHTS'}
            </button>
          </div>
        </div>
        <div className='sm:w-[40%] sm:mt-0 mt-3 border rounded-md p-3'>
          {availableJets.length > 0 ? (
            availableJets.map((jet) => (
              <div key={jet.id} className='bg-[#F5F7FA] border rounded-lg mb-4 overflow-hidden'>
              <div className='relative'>
                <img src={removeTrailingSemicolon(jet.imageUrls)} alt={jet.name} className="w-full h-48 object-cover" />
                <div className='absolute top-2 right-2 bg-white/80 text-xs font-semibold px-2 py-1 rounded'>
                  SUBJECT TO AVAILABILITY
                </div>
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex items-center'>
                  
                    <div className='flex gap-3'>
                      {/* <span className='text-xs font-semibold text-gray-500 uppercase'>VISTA MEMBER'S FLEET</span> */}
                      <span className='text-xs font-semibold text-[#18254A] bg-[#D1DEF2] rounded-md p-1'>{jet.category}</span>
                    </div>
                    
                  </div>
                  <span className='text-sm font-semibold text-gray-700'>{jet.seats} Seats</span>
                </div>
               
                <div className='flex justify-between mt-2 items-center'>
                  <h3 className='text-xl font-semibold text-[#18254A] mb-2'>{jet.name}</h3>
                  <span className='text-lg font-bold text-gray-800'>${jet.estimateFare}</span>
                </div>
              </div>
            </div>
            ))
          ) : (
            <div>No available jets for the selected criteria yet.</div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page