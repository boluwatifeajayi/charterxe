'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import planea from '../assets/images/plane-a.png';
import planeb from '../assets/images/planeb.png';
import planec from '../assets/images/planec.png';
import tag from '../assets/images/plane-tag.png'

const Explore: React.FC = () => {
  const cardData = [
    { id: 1, imageSrc: planea, title: 'Cessna Citation X', smallText: 'Small Text 1' },
    { id: 2, imageSrc: planeb, title: 'Global 7500', smallText: 'Small Text 2' },
    { id: 3, imageSrc: planec, title: 'Bombardier Challenger 350', smallText: 'Small Text 3' },
    { id: 4, imageSrc: planea, title: 'Cessna Citation X', smallText: 'Small Text 4' },
    { id: 5, imageSrc: planeb, title: 'Global 7500', smallText: 'Small Text 5' },
    { id: 6, imageSrc: planec, title: 'Bombardier Challenger 350', smallText: 'Small Text 6' },
   
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const cardsPerPage = 3;

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentCard((currentCard - 1 + cardData.length) % cardData.length);
  };

  const visibleCards = cardData.slice(currentCard, currentCard + cardsPerPage);

  return (
    <section className='story px-20 py-20 bg-[#F8F8F8]'>
      <div className='hero'>
        <div>
          <p className='text-[#0129A4] font-bold text-center'>EXPLORE</p>
          <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5 text-center'>
            Unveiling a world of luxury aviation
          </p>
          <p className='text-[#18254A] text-center'>
            Delve into our curated collection of premium jets, each crafted to redefine your travel experience.
          </p>

          <div className='relative mt-8'>
            <div className='overflow-hidden'>
              <div className='flex gap-6 transition-transform duration-300 ease-in-out transform -translate-x-${currentCard * (100 / cardsPerPage)}%'>
                {visibleCards.map((card) => (
                  <div key={card.id} className={`w-full bg-center text-center justify-center bg-white rounded-lg p-4 md:w-${100 / cardsPerPage}`}>
                    <div className='rounded-lg overflow-hidden'>
                      <Image src={card.imageSrc} alt='Card Image' className='bg-center pl-8  plane-img'/>
                    </div>
                    <h3 className='text-[#18254A] text-xl mt-2 font-bold'>{card.title}</h3>
                    <Image src={tag} alt="tag" className='plane-img mt-4 pl-16'/>
                  </div>
                ))}
              </div>
            </div>
            {cardData.length > cardsPerPage && (
              <>
                <div className='absolute inset-y-0 left-0 flex items-center justify-center'>
                  <button
                    onClick={prevCard}
                    className='bg-blue-300 text-white p-2 rounded-full hover:bg-blue-600'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 19l-7-7 7-7'
                      />
                    </svg>
                  </button>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center justify-center'>
                  <button
                    onClick={nextCard}
                    className='bg-blue-300 text-white p-2 rounded-full hover:bg-blue-600'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;