import React from 'react';
import Image from 'next/image';
import join from '../assets/images/imgg.png';

const Member: React.FC = () => {
  return (
    <div>
      <section id="membership-form" className='inv story px-20 py-20 bg-[#F8F8F8] relative'>
      <div className='hero relative'>
        <Image alt='img' src={join} className='w-full' />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <p className='mb-4'>BECOME A MEMBER</p>
          <h2 className='text-3xl font-bold'>Ready To Be Part Of Us ?</h2>
          <p className='mt-4'>Kindly provide your email address below to initiate your membership registration with Charter XE. Our team will promptly reach out to you upon receiving your information.</p>

          <input
                type="email"
                id="email"
                name="email"
                className="w-full px-6 mt-6 py-2 border-[#fff] bg-transparent border rounded"
                placeholder='Enter Your Email'
                required
            />
        <button className="text-[#0129A4] px-5 py-3 text-sm font-semibold bg-[#fff] w-full mt-4 rounded">Submit</button>
        </div>
      </div>
    </section>
    <section className='bg-[#0129A4] mx-6 vis text-white my-8 rounded-lg px-5 py-6'>
    <p className='mb-4'>BECOME A MEMBER</p>
          <h2 className='text-3xl font-bold'>Ready To Be Part Of Us ?</h2>
          <p className='mt-4'>Kindly provide your email address below to initiate your membership registration with Charter XE. Our team will promptly reach out to you upon receiving your information.</p>

          <input
                type="email"
                id="email"
                name="email"
                className="w-full px-6 mt-6 py-2 border-[#fff] bg-transparent border rounded"
                placeholder='Enter Your Email'
                required
            />
        <button className="text-[#0129A4] px-5 py-3 text-sm font-semibold bg-[#fff] w-full mt-4 rounded">Submit</button>
    </section>
    </div>
    
  );
};

export default Member;
