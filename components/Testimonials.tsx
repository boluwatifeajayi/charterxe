'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';

const Testimonials: React.FC = () => {
  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      imageSrc: person1,
      name: 'Toluwani Lasisi',
      location: 'Lagos To South Africa',
      rating: 5,
      comment:
        'Charter XE provided an unparalleled travel experience. From the luxurious jet options to the impeccable service, every detail was taken care of. Traveling has never been this seamless and opulent.',
    },
    {
        id: 2,
        imageSrc: person2,
        name: 'Chioma Adebimpe',
        location: 'Lagos To South Africa',
        rating: 3,
        comment:
          'Charter XE provided an unparalleled travel experience. From the luxurious jet options to the impeccable service, every detail was taken care of. Traveling has never been this seamless and opulent.',
      },
      {
        id: 3,
        imageSrc: person3,
        name: 'Anthony and Grace',
        location: 'Lagos To South Africa',
        rating: 4,
        comment:
          'Charter XE provided an unparalleled travel experience. From the luxurious jet options to the impeccable service, every detail was taken care of. Traveling has never been this seamless and opulent.',
      },
    // Add more testimonials as needed
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="testimonials" className='px-20 py-16 bg-[#fff]'>
      <div className='flex gap-32'>
        <div className='w-1/2'>
          <p className='text-[#0129A4] font-bold'>TESTIMONIALS</p>
          <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5'>
            Hear from passengers who <br /> have experienced us
          </p>
        </div>
        <div className='w-1/2'>
          <p className='text-gray-500 mt-8'>
            Charter XE provided an unparalleled travel experience. From the<br/> luxurious jet options to the impeccable service, every detail was taken <br/> care of. Traveling has never been this seamless and opulent.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='relative group cursor-pointer transition-transform transform hover:scale-105'
            onMouseEnter={() => setHoveredCard(testimonial.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className='relative h-96 overflow-hidden rounded-lg'>
              {/* Testimonial Image */}
              <Image
                src={testimonial.imageSrc}
                alt={`${testimonial.name}'s testimonial`}
                layout='fill'
                objectFit='cover'
                className={`transform ${hoveredCard === testimonial.id ? 'blur-md' : 'blur-0'} rounded-lg h-32`}
              />
            </div>

            {/* Testimonial Text */}
            <div className='bg-opacity-80 absolute bottom-0 w-full py-4 px-4 bg-gray-700 text-white rounded-bl-lg rounded-br-lg'>
              <p className='text-lg font-semibold'>{testimonial.name}</p>
              <div className='flex justify-between items-center'>
              <p className='text-sm'>{testimonial.location}</p>
              <div className='flex space-x-1 mt-1'>
  {Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className='w-4 h-4'>
      {index < testimonial.rating ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75648 4.41369L6.55045 0.778717C6.73386 0.407094 7.26378 0.407094 7.44719 0.778717L9.24115 4.41369L13.2526 4.99659C13.6627 5.05618 13.8265 5.56016 13.5297 5.84943L10.627 8.67887L11.3122 12.6741C11.3823 13.0825 10.9536 13.394 10.5868 13.2012L6.99882 11.3149L3.41089 13.2012C3.04407 13.394 2.61536 13.0825 2.68541 12.6741L3.37065 8.67887L0.467947 5.84943C0.171188 5.56016 0.334943 5.05618 0.745053 4.99659L4.75648 4.41369Z" fill="white"/>
        </svg>
        
      ) : (
        <svg
          width='14'
          height='14'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
          fill='none'
        >
          <path
            d='M4.75648 4.41369L6.55045 0.778717C6.73386 0.407094 7.26378 0.407094 7.44719 0.778717L9.24115 4.41369L13.2526 4.99659C13.6627 5.05618 13.8265 5.56016 13.5297 5.84943L10.627 8.67887L11.3122 12.6741C11.3823 13.0825 10.9536 13.394 10.5868 13.2012L6.99882 11.3149L3.41089 13.2012C3.04407 13.394 2.61536 13.0825 2.68541 12.6741L3.37065 8.67887L0.467947 5.84943C0.171188 5.56016 0.334943 5.05618 0.745053 4.99659L4.75648 4.41369Z'
            fill='white'
            fillOpacity='0.4'
          />
        </svg>
      )}
    </div>
  ))}
</div>

              </div>
              
            </div>

            {/* Testimonial Comment */}
            {hoveredCard === testimonial.id && (
              <div className='absolute inset-0 p-4'>
                <p className='mt-2 text-white font-semibold'>{testimonial.comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
