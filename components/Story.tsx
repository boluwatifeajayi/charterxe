'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import man from '../assets/images/man-video.png';
import { useTranslations } from "next-intl";



const Story: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
  <section id="about-us" className=' px-2 md:px-3  py-16 pt-[350px] bg-[#F0F9FF]'>
  <div className='block mx-auto container md:flex gap-2 md:gap-32 justify-center'>
    <div className='w-full md:w-1/2'>
      <p className='text-[#0129A4] font-bold'>{t('story.badge')}</p>
      <p className='text-[#18254A]  text-3xl sm:text-4xl font-bold mt-2 mb-5'>{t('story.title')}</p>
      <p className='text-[#18254A]'>
      {t('story.p1')}
      </p>
      <p className='text-[#18254A] mt-7'>
      {t('story.p2')}

      </p>
      <button onClick={() => scrollToSection('services')} className="text-[#18254A] mt-5 px-5 py-3 text-sm font-bold bg-[#C0E1F4] rounded">{t('story.cta')}</button>
    </div>
    <div className='sm:block hidden w-1/2'>
      <video autoPlay muted loop className="w-full h-full rounded-xl">
        <source src='https://res.cloudinary.com/kaypappi/video/upload/v1698235374/falcon/VN20231023_152545.mp4' type="video/mp4" />
      </video>
    </div>
  </div>
</section>

  );
};

export default Story;
