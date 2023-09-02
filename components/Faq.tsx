'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/images/phone-middle.png';
import close from '../assets/images/close-circle.png';
import plus from '../assets/images/plus-circle.png';
import radar from '../assets/images/radar-2.png';

const Faq: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState([
    { title: 'How do I book a private jet through Charter XE?', content: 'Booking a private jet with Charter XE is easy. Simply visit our website or app, choose your preferred jet, select your travel dates, and submit your booking request. Our team will get in touch with you to finalize the details.', isOpen: false },
    { title: 'What types of private jets are available?', content: 'Content 2', isOpen: false },
    { title: 'Can I customize my flight itinerary?', content: 'Our no-code and API solutions support 20+ payment methods,  and we offer bank payouts in 11 countries so you can getpaid quickly.', isOpen: false },
    { title: 'How far in advance should I book a private jet?', content: 'Content 4', isOpen: false },
    { title: 'What happens if my flight gets delayed or canceled?', content: 'Content 5', isOpen: false },
  ]);

  const toggleAccordion = (index: number) => {
    const updatedItems = [...accordionItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setAccordionItems(updatedItems);
  };

  return (
    <section id="faq" className='story px-20 py-16 bg-[#F0F9FF]'>
      <div className='flex gap-32'>
        <div className='w-1/2'>
          <p className='text-[#0129A4] font-bold'>FAQ</p>
          <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5'>
            Frequently Asked <br />
            Questions
          </p>
        </div>
        <div className='w-1/2'>
          <div className='mt-12'>
            {/* Accordions */}
            {accordionItems.map((item, index) => (
              <div key={index} className='mb-5'>
                <div
                  className={`cursor-pointer flex border-b font-bold pb-4 items-center justify-between ${
                    item.isOpen ? 'text-gray-900' : 'text-gray-800'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <Image src={item.isOpen ? close : plus} alt='icon' />
                </div>
                {item.isOpen && (
                  <div className='pl-9 text-gray-600 pt-4 text-sm'>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
