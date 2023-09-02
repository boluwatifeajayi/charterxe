'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import apple from '../assets/images/apple.png';
import Link from 'next/link';
import play from '../assets/images/play.png';
import country from '../assets/images/country.png';
import phone from '../assets/images/phone-hero.svg';

const Hero = () => {
  const gradientBackground = {
    backgroundImage: 'linear-gradient(to bottom left, #020d1f, #072a63',
  };

  const phoneVariants = {
    hidden: {
      y: 200
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" style={gradientBackground} className='px-5 hero-2 md:px-3 bg-blue-950 w-full'>
      <div className='block md:flex pt-52 pb-48 md:pb-0 md:pt-24 md:gap-28 hero'>
        <div className="flex flex-col">
          <div>
            <h2 className='text-5xl font-bold text-blue-50'>
              We offer the <br /> ultimate experience <br /> in luxury travel
            </h2>
            <p className='text-white mt-6'>
              Immerse yourself in the ultimate luxury travel experience with<br /> us. Our world of opulence is tailored to elevate every moment <br /> of your journey.
            </p>
          </div>
          <div className='flex mt-4 md:mt-auto'>
            <Link href="#">
              <Image className='' src={play} alt='playstore' />
            </Link>
            <Link href="#">
              <Image className='' src={apple} alt='appstore' />
            </Link>
          </div>
          <Image className='ml-0 md:ml-3' src={country} alt='countries' />
        </div>
        <motion.div 
          className="flex items-end"
          initial="hidden"
          animate="visible"
          variants={phoneVariants}
        >
          <div className='inv'>
            <Image className='ml-3 animate-floating' src={phone} alt='phone' />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;