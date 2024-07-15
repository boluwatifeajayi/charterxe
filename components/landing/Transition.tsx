'use client'
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Charter from './Charter';
import Main from './Main';

const Transition = () => {
  const [currentScreen, setCurrentScreen] = useState('blue');

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      if (currentScreen === 'blue') {
        setCurrentScreen('main');
      } 
    }, 1300); // Change screens every 1000 milliseconds (1 second).

    // Clear the timeout when the component unmounts to avoid memory leaks.
    return () => clearTimeout(transitionTimeout);
  }, [currentScreen]);

  return (
    <div>
      <div className="hidden sm:block w-screen h-screen bg-[#042AA1]">
      <AnimatePresence mode='wait'>
        {currentScreen === 'blue' && <Charter key="blue" />}
        {currentScreen === 'main' && <Main key="main" />}
      </AnimatePresence>
    </div>
    <div className='block sm:hidden'>
      <Main/>
    </div>

    </div>
    
  );
};

export default Transition;
