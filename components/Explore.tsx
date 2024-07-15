'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import place1 from '../assets/images/place1.png';
import place2 from '../assets/images/place2.png';
import place3 from '../assets/images/place3.png';
import calendar from '../assets/images/calendar.png';
import money from '../assets/images/moneys.png';
import tag from '../assets/images/plane-tag.png';
import Carousel from './carousel/Carousel';
import { useMediaQuery } from '@react-hook/media-query';
import { useTranslations } from 'next-intl';

const Explore: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Define your breakpoint
  const numberOfCardsToShow = isSmallScreen ? 1 : 3; // Number of cards to show initially

  const [currentCard, setCurrentCard] = useState(0);
  const t= useTranslations("explore")

  const cards = [
    {
      image: place1,
      title: 'Abuja',
      date: 'On Demand',
      price: 'From $20,000',
    },
    {
      image: place2,
      title: 'Accra',
      date: 'On Demand',
      price: 'From $10,000',
    },
    {
      image: place3,
      title: 'Lagos',
      date: 'On Demand',
      price: 'From $5,000',
    },
    {
      image: place1,
      title: 'London',
      date: 'On Demand',
      price: 'From $50,000',
    },
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <section id="explore" className="story px-4 py-20 bg-[#F8F8F8]">
      <div className='container mx-auto'>
        <div>
          <p className="text-[#0129A4] font-bold text-center">{t('badge')}</p>
          <p className="text-[#18254A] text-4xl font-bold mt-2 mb-5 text-center">
            {t('title')}
          </p>
          <p className="text-[#18254A] text-center max-w-lg mx-auto">
           {t('sub')}
          </p>
<div className='mt-8'>
  <Carousel/>
</div>
         
        </div>
      </div>
    </section>
  );
};

export default Explore;
