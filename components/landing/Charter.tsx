'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import { useSpring, animated } from 'react-spring';

const Charter = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    // Trigger the transition after 1 second
    const transitionTimeout = setTimeout(() => {
      setTransition(true);
    }, 100);

    return () => clearTimeout(transitionTimeout);
  }, []);

  const animationProps = useSpring({
    from: { opacity: 1, },
    to: { opacity: 0, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 300 },
  });

  return (
    <div
      className={`w-full h-screen flex items-center justify-center transition-all duration-1000 ${
        transition
          ? 'bg-[#042AA1] text-[#000927]'
          : 'bg-[#042AA1] text-white'
      }`}
    >
      <animated.h1 style={animationProps} className="text-4xl sm:text-5xl font-bold text-blue-50">
        <Image
          src={logo}
          width={100}
          height={100}
          className={`w-96 transform ${transition ? 'scale-110' : ''}`}
          alt="logo"
        />

        
</animated.h1>
    </div>
  );
};

export default Charter;
