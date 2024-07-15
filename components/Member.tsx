'use client'

import React from 'react';
import Image from 'next/image';
import join from '../assets/images/imgg.png';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const Member: React.FC = () => {
  // const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const subscribeUser = async (e: React.FormEvent) => {
    e.preventDefault();
  
   
  
   
  };
const t= useTranslations("member")

  return (
    <div className='bg-[#F8F8F8]'>
      <section id="membership-form" className='story px-1 container mx-auto  sm:px-20 py-20  relative'>
      <div className='hero relative'>
        {/* <Image alt='img' src={join} className='w-full' /> */}

        <div className='bg-[#0129A4] mx-2 sm:mx-6 my-8 rounded-2xl p-3 sm:p-24 px-4 sm:px-32 py-10 sm:py-24 text-center text-white'>
      
          <p className='mb-4'>{t('badge')}</p>
          <h2 className='text-xl sm:text-3xl font-bold'>{t('title')}</h2>
          <p className='mt-4'>{t('sub')}</p>
         
       
        <form
          action="https://viva-jets.us8.list-manage.com/subscribe/post?u=775ebfd74ac13f416e56a8db7&amp;id=ce982e1469&amp;f_id=001377e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
        >
          <div id="mc_embed_signup_scroll" className="flex mt-10 flex-col gap-4">
           <div className='flex w-full gap-4'>
           <div className="w-full gap-2">
             
              <input
                type="email"
                name="EMAIL"
                className="required email w-full bg-transparent border border-gray-400 p-2 rounded"
                id="mce-EMAIL"
                placeholder={t('form.email.placeholder')}
                required
                
              />
            </div>
            <div className="w-full gap-2">
             
              <input
                type="text"
                name="FNAME"
                className="required w-full text bg-transparent border border-gray-400 p-2 rounded"
                id="mce-FNAME"
                placeholder={t('form.name.placeholder')}
                required
               
              />
            </div>
           </div>
            
            <div id="mce-responses" className="clear">
              <div className="response text-red-500" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response text-green-500" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden={true} style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_775ebfd74ac13f416e56a8db7_ce982e1469" tabIndex={-1} value="" />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="text-[#0129A4] cursor-pointer px-5 py-3 text-sm font-semibold bg-[#fff] w-full mt-1 rounded-lg"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
   
       
       
        </div>
        
      </div>
      
    </section>
    {/* <section className='bg-[#0129A4] mx-6 vis text-white my-8 rounded-lg px-5 py-6'>
    <p className='mb-4'>BECOME A MEMBER</p>
          <h2 className='text-xl md:text-3xl font-bold'>Ready To Be Part Of Us ?</h2>
          <p className='mt-4'>Kindly provide your email address below to initiate your membership registration with Charter XE. Our team will promptly reach out to you upon receiving your information.</p>

          <div className=" mt-7">
                <div className="flex-1">
                 
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full px-2 mt-2 py-2 border-[#d4d6dc] bg-transparent border rounded-lg"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="flex-1">
                 
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded-lg"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
          
        <button className="text-[#0129A4] px-5 py-3 text-sm font-semibold bg-[#fff] w-full mt-4 rounded-lg">Submit</button>
    </section> */}
    </div>
    
  );
};

export default Member;
