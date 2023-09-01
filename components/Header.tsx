'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.svg'

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <nav
      className={`${
        scrolling ? 'header-scroll' : 'bg-transparent'
      } px-20 py-5 flex nav items-center fixed w-full top-0 z-10`}
    >
      <div className="flex items-center">
      <Image alt='logo' src={logo} className='mr-20'/>
        <ul className="flex space-x-6 text-sm text-gray-100 font-thin mr-32">
          <li className='cursor-pointer hover:font-bold'>About Us</li>
          <li className='cursor-pointer hover:font-bold'>Membership Form</li>
          <li className='cursor-pointer hover:font-bold'>Explore</li>
          <li className='cursor-pointer hover:font-bold'>Testimonials</li>
          <li className='cursor-pointer hover:font-bold'>FAQ</li>
          <li className='cursor-pointer hover:font-bold'>Request Quote</li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-500 px-5 py-3 text-sm text-white border-gray-50 bg-opacity-30 p-2 rounded">Contact Us</button>
        <button className="text-white px-5 py-3 text-sm font-semibold primary-bg rounded">Request Quote</button>
      </div>
    </nav>
  );
};

export default Header;
