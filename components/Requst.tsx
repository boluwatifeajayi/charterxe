'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import tick from '../assets/images/ticket.png'


const Request: React.FC = () => {
  

  return (
    <section className='story bg-[#F0F9FF]'>
      <div className='flex'>
        <div className='w-1/2 hero'>
          <Image src={tick} alt="image" />
        </div>
        <div className='bg-[#F0F9FF] w-1/2'>
          <div className='mt-16 hero mx-14'>
          <p className='text-[#0129A4] font-bold'>REQUEST QUOTE</p>
          <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5'>
            We leave the customising<br/> to you.
          </p>

          <form className='mt-10'>

            <div className='flex gap-5'>
            <div>
            <label className='text-[#18254A] mb-3'>Full Name</label>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full px-2 mt-2 py-2 border-[#d4d6dc] bg-transparent border rounded"
                placeholder='Enter Your Full name'
                required
            />
            </div>
            <div>
            <label className='text-[#18254A] mb-3'>Email Address</label>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                placeholder='Enter Your Email address'
                required
            />
            </div>
           
            </div>
            <div className='flex mt-7 gap-5'>
            <div>
            <label className='text-[#18254A] mb-3'>Take Off</label>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full px-2 mt-2 py-2 border-[#d4d6dc] bg-transparent border rounded"
                placeholder='Enter Take Off Location'
                required
            />
            </div>
            <div>
            <label className='text-[#18254A] mb-3'>Destination</label>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                placeholder='Where Are You heading Too'
                required
            />
            </div>
           
            </div>

            <div className='flex mt-7 gap-5'>
            <div className='w-1/2' >
            <label className='text-[#18254A] mb-3'>Choose Date</label>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full px-2 mt-2 py-2 border-[#d4d6dc] bg-transparent border rounded"
                placeholder='Choose Date'
                required
            />
            </div>
            <div className='w-1/2'>
            <label className='text-[#18254A] mb-3'>Jet Type</label>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                placeholder='Select Jet Type'
                required
            />
            </div>
           
            </div>
            <button className="text-white px-5 py-3 text-sm font-semibold bg-[#0129A4] w-full mt-10 rounded">Request Quote</button>
          </form>

        </div>

         
        </div>
      </div>
    </section>
  );
};

export default Request;
