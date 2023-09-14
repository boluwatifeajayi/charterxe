'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import apple from '../assets/images/apple.png';
import Link from 'next/link';
import play from '../assets/images/play.png';
import country from '../assets/images/country.png';
import phone from '../assets/images/phone-hero.svg';
import bg from '../assets/images/bg-plane.png'

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
   <div style={{ position: 'relative' }}>
      <Image
        src={bg}
        alt="Background"
        style={{ width: '100%', height: '100vh' }}
      />
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
        <div className="block md:flex main-hero mt-2 md:mt-60 pb-52 main-hero md:pb-0 pt-32 md:pt-24 md:gap-44 hero">
          <div className="flex flex-col">
            <div>
              <h2 className="text-5xl font-bold text-blue-50">
                We offer the <br /> ultimate experience <br /> in luxury travel
              </h2>
            </div>
            
            <Image className="ml-0 md:ml-0 mt-6" src={country} alt="countries" />
          </div>
          <div>
          <p className="text-white text-lg mt-6">
            Immerse yourself in the ultimate luxury travel experience with<br /> us. Our world of opulence is tailored to elevate every moment <br /> of your journey.
          </p>
          <div className='flex mt-4 md:mt-auto'>
            <Link href="#">
              <Image className='' src={play} alt='playstore' />
            </Link>
            <Link href="#">
              <Image className='' src={apple} alt='appstore' />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;