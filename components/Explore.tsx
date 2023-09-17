'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import place1 from '../assets/images/place1.png';
import place2 from '../assets/images/place2.png';
import place3 from '../assets/images/place3.png';
import calendar from '../assets/images/calendar.png';
import money from '../assets/images/moneys.png';
import tag from '../assets/images/plane-tag.png';
import { useMediaQuery } from '@react-hook/media-query';

const Explore: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Define your breakpoint
  const numberOfCardsToShow = isSmallScreen ? 1 : 3; // Number of cards to show initially

  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: place1,
      title: 'Great Barrier Reef, Australia',
      date: 'September 1-30 2023',
      price: 'From $3,000',
    },
    {
      image: place2,
      title: 'Oahu, Hawaii, USA',
      date: 'September 1-30 2023',
      price: 'From $3,000',
    },
    {
      image: place3,
      title: 'Cote d’Azur, France',
      date: 'September 1-30 2023',
      price: 'From $3,000',
    },
    {
      image: place1,
      title: 'Great Barrier Reef, Australia',
      date: 'September 1-30 2023',
      price: 'From $3,000',
    },
    {
      image: place2,
      title: 'Oahu, Hawaii, USA',
      date: 'September 1-30 2023',
      price: 'From $3,000',
    },
    {
      image: place3,
      title: 'Cote d’Azur, France',
      date: 'September 1-30 2023',
      price: 'From $3,000',
    },
    // Add more cards here
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <section id="explore" className="story px-6 md:px-20 py-20 bg-[#F8F8F8]">
      <div className="hero">
        <div>
          <p className="text-[#0129A4] font-bold text-center">EXPLORE</p>
          <p className="text-[#18254A] text-4xl font-bold mt-2 mb-5 text-center">
            Unveiling a world of luxury aviation
          </p>
          <p className="text-[#18254A] text-center">
            Explore our thoughtfully curated collection of premium destinations,
            <br /> each chosen to redefine your travel experience.
          </p>

          <div className="relative mt-10">
            <div className={`flex gap-6 hero ${isSmallScreen ? 'carousel' : ''}`}>
              {cards.slice(currentCard, currentCard + numberOfCardsToShow).map((card, index) => (
                <div key={index} className="mb-6 card relative">
                  <Image src={card.image} alt={`place${index + 1}`} />
                  <p className="mt-3 text-xl sm:text-2xl  font-bold text-blue-950">{card.title}</p>
                  <div className="flex gap-2 mt-3">
                    <Image src={calendar} width={0} height={0} className="w-8 h-8" alt="caly" />
                    <p className="text-blue-950 text-lg">{card.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={money} width={0} height={0} className="w-8 h-8" alt="many" />
                    <p className="text-blue-950 text-lg">{card.price}</p>
                  </div>
                </div>
              ))}
             
                <div className="carousel-controls absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                  <button
                    className="prev rounded-full bg-blue-500 text-white p-3 px-5 absolute top-1/2 left-1 sm:left-0 transform -translate-y-1/2"
                    onClick={handlePrev}
                  >
                    &lt;
                  </button>
                  <button
                    className="next rounded-full bg-blue-500 text-white p-3 px-5 absolute top-1/2 right-1 sm:right-0 transform -translate-y-1/2"
                    onClick={handleNext}
                  >
                    &gt;
                  </button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
