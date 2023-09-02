'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/images/phone-middle.png';
import radar from '../assets/images/radar-2.png'

const Services: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState([
    { title: 'Private Jet Charters', content: 'Our no-code and API solutions support 20+ payment methods,  and we offer bank payouts in 11 countries so you can getpaid quickly.', isOpen: false },
    { title: 'Personalized Itineraries', content: 'Content 2', isOpen: false },
    { title: 'Effortless Booking', content: 'Our no-code and API solutions support 20+ payment methods,  and we offer bank payouts in 11 countries so you can getpaid quickly.', isOpen: false },
    { title: 'Exclusive Membership', content: 'Content 4', isOpen: false },
    { title: '24/7 Concierge', content: 'Content 5', isOpen: false },
    { title: 'Global Destinations', content: 'Content 6', isOpen: false },
   
  ]);

  const toggleAccordion = (index: number) => {
    const updatedItems = [...accordionItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setAccordionItems(updatedItems);
  };

  return (
    <section className='story px-6 md:px-20 py-16 bg-[#fff]'>
      <div className='block md:flex hero gap-2 md:gap-32'>
        <div>
          <p className='text-[#0129A4] font-bold'>OUR SERVICES</p>
          <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5'>
            Where luxury and travel <br />
            converge at 30,000 feet
          </p>
          <Image src={phone} alt="image" className='mt-8' />
        </div>
        <div>
          <p className='text-gray-500 mt-12'>
            Step into a world where luxury and travel seamlessly unite
            <br />at soaring altitudes. Elevate your experience with opulent
            <br /> interiors, personalized service, and breathtaking vistas.
          </p>

          <div className='mt-12'>
            {/* Accordions */}
            {accordionItems.map((item, index) => (
              <div key={index} className='mb-5'>
                <div
                  className={`cursor-pointer flex border-b pb-4 font-semibold items-center ${
                    item.isOpen ? 'text-gray-900' : 'text-gray-500'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.isOpen ? (
                   <Image src={radar} alt='radar' className='mr-3'/>
                  ) : (
                    <Image src={radar} alt='radar' className='mr-3'/>
                  )}
                  {item.title}
                  
                </div>
                {item.isOpen && (
                  <div className='pl-9 text-gray-600 pt-4 w-96 text-sm'>{item.content}</div>
                )}
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
