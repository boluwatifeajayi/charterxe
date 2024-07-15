'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tick from '../assets/images/ticket.png';
import { useMessages, useTranslations } from 'next-intl';

const Request: React.FC = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageSources = ['/aa.svg', '/bb.svg', '/cc.svg'];

  const t= useTranslations('requests')
  const messages:any = useMessages()
  const requests=messages.request as any
  const tripOptionsKey=Object.keys(messages.requests?.form?.tripType?.options)
  const jetOptionsKey=Object.keys(messages.requests?.form?.jetType?.options)



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <section id="request-quote" className="py-8 story bg-[#F0F9FF]">
      <div className="block md:flex">
        <div className="w-full sm:flex py-10  md:w-1/2 hero bg-[#18254A] hidden items-center justify-center">
      <Image
        src={imageSources[currentImageIndex]}
        alt="option"
        width={400}
        height={200}
        className="max-w-full h-[600px]"
      />
    </div>
        <div className="bg-[#F0F9FF] w-full md:w-1/2">
          <div className="mt-16 hero mx-6 md:mx-14">
            <p className="text-[#0129A4] font-bold">{t('badge')}</p>
            <p className="text-[#18254A] text-3xl sm:text-4xl max-w-xs font-bold mt-2 mb-5">{t('title')}</p>

            <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://viva-jets.us8.list-manage.com/subscribe/post?u=775ebfd74ac13f416e56a8db7&amp;id=b704103efd&amp;f_id=006b77e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate flex flex-wrap"
          target="_self"
          noValidate
        >
          <div id="mc_embed_signup_scroll" className="w-full">
            
          
            <div className="mc-field-group flex gap-3 justify-between w-full">
              <div className="w-1/2">
               <p className='text-sm'>{t('form.email.label')}</p>
                <input
                  type="email"
                  name="EMAIL"
                  className="w-full mt-1 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                  placeholder={t('form.email.placeholder')}
                  id="mce-EMAIL"
                  required
                
                />
             
              </div>
              <div className="w-1/2">
              <p className='text-sm'>{t('form.name.label')}</p>
                <input
                  type="text"
                  name="FNAME"
                  className="w-full mt-1 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                  id="mce-FNAME"
                  placeholder={t('form.name.placeholder')}
                  required
                
                />
               
              </div>
            </div>
            <div className="mc-field-group mt-4 gap-3 flex justify-between w-full">
              <div className="w-1/2">
              <p className='text-sm'>{t('form.phone.label')}</p>
                <input
                  type="text"
                  name="PHONE"
                  className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                  id="mce-PHONE"
                  placeholder={t('form.phone.placeholder')}
                  required
                
                />
              
              </div>
              <div className="w-1/2">
              <p className='text-sm'>{t('form.tripType.label')}</p>
                <select
                  name="MMERGE5"
                  className="w-full mt-2 px-2 py-3 border-[#d6d6d8] bg-transparent border rounded"
                  id="mce-MMERGE5"
                  required
                >
                  <option></option>
                  {tripOptionsKey.map((key) => (
                    <option key={// @ts-ignore
                      t(`form.tripType.options.${key}`)} value={t(`form.tripType.options.${key}`)}>
                      {// @ts-ignore
                      t(`form.tripType.options.${key}`)}
                    </option>
                  ))}
                  {/* <option value="One way">One way</option>
                  <option value="Round trip">Round trip</option>
                  <option value="Multi-leg">Multi-leg</option> */}
                </select>
               
              </div>
            </div>
            <div className="mc-field-group flex gap-3 mt-4 justify-between w-full">
            <div className="w-1/2">
              <p className='text-sm'>{t('form.takeoff.label')}</p>
                <input
                  type="text"
                  name="MMERGE2"
                  className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                  id="mce-MMERGE2"
                  placeholder={t('form.takeoff.placeholder')}
                  required
                
                />
               
              </div>
            <div className="w-1/2">
              <p className='text-sm'>{t('form.destination.label')}</p>
                <input
                  type="text"
                  name="MMERGE7"
                  className="w-full mt-2 px-2 py-2 border-[#d6d6d8] bg-transparent border rounded"
                  id="mce-MMERGE7"
                  placeholder={t('form.destination.placeholder')}
                  required
                 
                />
               
              </div>
             
             
            </div>
            <div className="mc-field-group gap-3 flex mt-3 justify-between w-full">
              
              

            <div className="w-1/2">
  <p className='text-sm'>{t('form.date.label')}</p>
  <div className="datefield w-full mt-2 px-2 border-[#d6d6d8] bg-transparent border rounded">
    <div className="justify-between flex">
      <span className="subfield dayfield">
        <input
          className="w-full sm:w-20 mr-3 px-2 py-2 bg-transparent outline-none"
          type="number"
          pattern="[0-9]*"
          placeholder="DD"
          size={2}
          maxLength={2}
          name="MMERGE3[day]"
          id="mce-MMERGE3-day"
          required
        />
      </span>{' '}
      <span className="subfield monthfield">
        <input
          className="w-full sm:w-20 px-2 py-2 bg-transparent outline-none"
          type="number"
          pattern="[0-9]*"
          placeholder="MM"
          size={2}
          maxLength={2}
          name="MMERGE3[month]"
          id="mce-MMERGE3-month"
          required
        />
      </span>{' '}
      <span className="subfield yearfield">
        <input
          className="w-full sm:w-20 px-2 py-2 bg-transparent outline-none"
          type="number"
          pattern="[0-9]*"
          placeholder="YYYY"
          size={4}
          maxLength={4}
          name="MMERGE3[year]"
          id="mce-MMERGE3-year"
          required
        />
      </span>
    </div>
  </div>
</div>

              <div className="w-1/2">
              <p className='text-sm'>{t('form.jetType.label')}</p>
                <select
                  name="MMERGE6"
                  className="w-full px-2 py-3 border-[#d6d6d8] bg-transparent border rounded"
                  id="mce-MMERGE6"
                  required
                >
                  <option></option>
                  {jetOptionsKey.map((key) => (
                    <option key={// @ts-ignore
                      t(`form.jetType.options.${key}`)} value={t(`form.jetType.options.${key}`)}>
                      {// @ts-ignore
                      t(`form.jetType.options.${key}`)}
                    </option>
                  ))}
                </select>
              
              </div>
            </div>
          </div>
          <div id="mce-responses" className="clear">
            <div id="mce-error-response" className="response text-red-500" style={{ display: 'none' }}></div>
            <div id="mce-success-response" className="response text-green-500" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden={true} style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_775ebfd74ac13f416e56a8db7_b704103efd" tabIndex={-1} value="" />
          </div>
          <div className="clear w-full">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="text-white px-5 mb-6 py-3 text-sm font-semibold cursor-pointer bg-[#0129A4] w-full mt-5 rounded"
              value={t('form.cta')}
              
            />
          </div>
        </form>
      </div>
    </div>


          </div>
        </div>

        <div className="w-full sm:hidden py-10 md:w-1/2 hero bg-[#18254A] flex items-center justify-center">
      <Image
        src={imageSources[currentImageIndex]}
        alt="option"
        width={400}
        height={200}
        className="max-w-full"
      />
    </div>
      </div>
    </section>
  );
};

export default Request;
