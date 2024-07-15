'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import country from '../../assets/images/countries.svg';
import bg from '../../assets/images/bg-plane.png';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import {motion as m} from 'framer-motion'
import play from '../../public/play.png'
import app from '../../public/app.png'
import count from '../../public/countries.svg';
import { useTranslations } from "next-intl";
import Form from '../bookFlow/Form';


const Main = () => {
  

const [scrolling, setScrolling] = useState(false);
const [showText, setShowText] = useState(false);
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

  useEffect(() => {
    // Trigger the animation after a delay (e.g., 1 second)
    const animationTimeout = setTimeout(() => {
      setShowText(true);
    }, 4000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 1000 },
  });

  return (

    <div>
      <div className='sm:block hidden'>
      <motion.div
  initial={{ y: '100%' }}
  animate={{ y: 0 }}
  exit={{ y: '-100%' }}
  transition={{ type: 'spring', duration: 1.5 }}
  className="w-screen"
>
     <div style={{ position: 'relative' }}>
      <Image src={bg} alt="Background" style={{ width: '200', }} />
      <section
        id="hero"
        className=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div className="flex mx-auto px-8 py-40 pt-60 justify-between gap-10 container">
          <div className="flex flex-col">
            <div className='p-1 overflow-hidden'>
            <Image className="ml-0 md:ml-0 mt-6 w-[100%] mb-4 h-14" src={count} width={0} height={0} alt="countries" />
              <m.h1  animate={{y:0}} initial={{y:"100%"}} transition={{delay:0.4, duration:0.5}} className="text-5xl sm:text-5xl font-bold text-blue-50">
              {t(`hero.title.one`)}<br />{t(`hero.title.two`)} <br />{t(`hero.title.three`)}.
              </m.h1>
            </div>

            
          </div>
          <div className='mr-20 mt-4 max-w-sm'>
            <p className="text-white text-md  mt-10">
              {t(`hero.sub`)}
            </p>
            <div className="flex ml-[-18px]">
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.falcon.charterxe&hl=en&gl=US">
                <Image src={play} className='w-full h-16' alt="playstore" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/ng/app/charterxe/id6464529229">
              <Image src={app} className='w-full h-16' alt="appstore" />
              </a>
            </div>
          </div>
         
        </div>
        <Form/>
      </section>
    </div>
    </motion.div>
      </div>


      <div className='sm:hidden block'>
      <div
  className="w-screen"
>
     <div style={{ position: 'relative' }}>
      <Image src={bg} alt="Background" style={{ width: '100%',  height: '100vh'}} />
      <section
        id="hero"
        className="px-5 main-hero hero-2 md:px-3"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div className="block md:flex main-hero mt-2 md:mt-52 pb-52 main-hero md:pb-0 pt-10 md:pt-5 md:gap-44 hero">
          <div className="flex mt-36 flex-col">
            <div>
              <h2 className={`text-4xl sm:text-5xl font-bold text-blue-50 ${
          showText ? 'fade-in' : ''
        }`}>
                {t(`hero.title.one`)}<br />{t(`hero.title.two`)} <br />{t(`hero.title.three`)}.
              </h2>
            </div>

            <Image className="ml-0 md:ml-0 mt-6 w-full h-full" src={country} width={0} height={0} alt="countries" />
          </div>
          <div>
            <p className="text-white text-md mt-6">
            {t(`hero.sub`)}

            </p>
            <div className="flex ml-[-22px] mt-0 md:mt-auto">
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.falcon.charterxe&hl=en&gl=US">
                <Image src={play} className='w-full h-16' alt="playstore" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/ng/app/charterxe/id6464529229">
              <Image src={app} className='w-full h-16' alt="appstore" />
              </a>
            </div>
          </div>
          <div className='mt-10'>
          <Form/>
          </div>
         
        </div>
       
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 10 }}
            className="text-center"
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
              delay: 0.5,
            }}
          >

              <span onClick={() => scrollToSection('about-us')} className='cursor-pointer'>
              <Image className="h-full w-6 text-white mx-auto" src='/scroll.svg' width={6} height={6} alt="acroll" />
             
              </span>
              
            
          </motion.div>
        </div>
      </section>
    </div>
    </div>

      </div>
    </div>
    
  );
};

export default Main;
