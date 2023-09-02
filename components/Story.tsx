'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import man from '../assets/images/man-video.png';

const Story: React.FC = () => {
  

  return (
    <section id="about-us" className='story px-20 py-16 bg-[#F0F9FF]'>
        <div className='flex hero gap-32'>
            <div>
                <p className='text-[#0129A4] font-bold'>OUR STORY</p>
                <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5'>Extraordinary private <br/> jet experiences</p>
                <p className='text-[#18254A]'>
                Embark on a voyage into the very soul of luxury travel with <br/> Charter XE, where each flight transforms into a captivating tale  <br/> of impeccable elegance, unbridled innovation, and service beyond <br/> compare. 
                </p>
                <p className='text-[#18254A] mt-7'>
                Our commitment resonates in every air mile, crafting experiences <br/> that elevate your journey to a realm of unparalleled opulence <br/> and unforgettable memories
                </p>
                <button className="text-[#18254A] mt-5 px-5 py-3 text-sm font-bold bg-[#C0E1F4] rounded">View Our Services</button>
            </div>
            <div>
                <Image src={man} alt="man"/>
            </div>
        </div>
    </section>
  );
};

export default Story;
