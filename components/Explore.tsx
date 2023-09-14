'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import place1 from '../assets/images/place1.png'
import place2 from '../assets/images/place2.png'
import place3 from '../assets/images/place3.png'
import calendar from '../assets/images/calendar.png'
import money from '../assets/images/moneys.png'
import tag from '../assets/images/plane-tag.png'
import { useMediaQuery } from '@react-hook/media-query';

const Explore: React.FC = () => {
 

  return (
    <section id="explore" className='story px-6 md:px-20 py-20 bg-[#F8F8F8]'>
      <div className='hero'>
        <div>
          <p className='text-[#0129A4] font-bold text-center'>EXPLORE</p>
          <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5 text-center'>
            Unveiling a world of luxury aviation
          </p>
          <p className='text-[#18254A] text-center'>
          Explore our thoughtfully curated collection of premium destinations, <br/> each chosen to redefine your travel experience.
          </p>
         
          <div className='block md:flex gap-8 hero mt-10'>
            <div className='mb-6'>
              <Image src={place1} alt="place1"/>
              <p className='mt-3 text-2xl font-bold text-blue-950'>Great Barrier Reef, Australia</p>
              <div className='flex gap-2 mt-3'>
                <Image src={calendar} width={0} height={0} className='w-8 h-8' alt="caly" />
                <p className='text-blue-950 text-lg'>September 1-30 2023</p>
              </div>
              <div className='flex gap-2'>
                <Image src={money}  width={0} height={0} className='w-8 h-8' alt="many" />
                <p className='text-blue-950 text-lg'>From $3,000</p>
              </div>
            </div>
            <div className='mb-6'>
              <Image src={place2}  alt="place2"/>
              <p className='mt-3 text-2xl font-bold text-blue-950'>Oahu, Hawaii, USA</p>
              <div className='flex gap-2 mt-3'>
                <Image src={calendar} width={0} height={0} className='w-8 h-8' alt="caly" />
                <p className='text-blue-950 text-lg'>September 1-30 2023</p>
              </div>
              <div className='flex gap-2'>
                <Image src={money}  width={0} height={0} className='w-8 h-8' alt="many" />
                <p className='text-blue-950 text-lg'>From $3,000</p>
              </div>
            </div>
            <div className='mb-6'>
              
              <Image src={place3} alt="place3"/>
              <p className='mt-3 text-2xl font-bold text-blue-950'>Cote d’Azur, France</p>
              <div className='flex gap-2 mt-3'>
                <Image src={calendar} width={0} height={0} className='w-8 h-8' alt="caly" />
                <p className='text-blue-950 text-lg'>September 1-30 2023</p>
              </div>
              <div className='flex gap-2'>
                <Image src={money}  width={0} height={0} className='w-8 h-8' alt="many" />
                <p className='text-blue-950 text-lg'>From $3,000</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Explore;