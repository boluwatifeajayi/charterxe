// 'use client'
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import phone from '../assets/images/phone-middle.png';
// import close from '../assets/images/close-circle.png';
// import plus from '../assets/images/plus-circle.png';
// import radar from '../assets/images/radar-2.png';
// import Slider from "react-slick";
// import place1 from '../assets/images/plane-a.png';
// import place2 from '../assets/images/planeb.png';
// import place3 from '../assets/images/planec.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// const Aircrafts: React.FC = () => {

//     var [isMobile, setIsMobile] = useState(true);

//     useEffect(() => {
//       const handleResize = () => {
//         const width = window.innerWidth;
//         const breakpoint = 890;
  
//         if (width >= breakpoint) {
//           setIsMobile(false);
//         } else {
//           setIsMobile(true);
//         }
//       };
  
//       handleResize();
//       window.addEventListener("resize", handleResize);
  
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);
  
//     const settings = {
//       dots: true,
//       autoplay: true,
//       autoplayspeed: 4000,
//       infinite: true,
//       speed: 500,
//       slidesToShow: isMobile?1:1,
//       slidesToScroll: 1,
//       nextArrow: <h1>hey</h1>,
//       prevArrow: <h1>hi</h1>,
//       responsive: [
//         // Responsive settings...
//       ],
//     };
  
//     const cards = [
//       {
//           image: place1,
//           title: 'Abuja',
//           date: 'On Demand',
//           price: 'From $20,000',
//         },
//         {
//           image: place2,
//           title: 'Accra',
//           date: 'On Demand',
//           price: 'From $40,000',
//         },
//         {
//           image: place3,
//           title: 'Lagos',
//           date: 'On Demand',
//           price: 'From $20,000',
//         },
//         {
//           image: place2,
//           title: 'London',
//           date: 'On Demand',
//           price: 'From $50,000',
//         },
     
//       // Add more cards here
//     ];
 
//   return (
//     <section id="faq" className='story px-6 md:px-20 py-16 bg-[#F0F9FF]'>
//       <div className='block md:flex gap-2 md:gap-32'>
//         <div className='w-full md:w-1/2'>
//           <p className='text-[#0129A4] font-bold'>FAQ</p>
//           <p className='text-[#18254A] text-4xl font-bold mt-2 mb-5'>
//             Frequently Asked <br />
//             Questions of what
//           </p>
//         </div>
//         <div className='w-full md:w-1/2'>
//           <div className='mt-12'>
//             jdbsjd
//           <Slider {...settings}>
//     {cards.map((card, index) => (
//       <div className="individual-slides" key={index}>
//          <Image
//                     src={card.image}
//                     className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
//                     alt={`place${index + 1}`}
//                   />
//                   <p className="mt-3 text-xl md:text-2xl  font-bold text-blue-950">{card.title}</p>
//                   <div className="flex gap-2 mt-3">
//                     <Image src='/calendar.svg' width={0} height={0} className="w-8 h-8" alt="caly" />
//                     <p className="text-blue-950 text-lg">{card.date}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     <Image src='/moneys.svg' width={0} height={0} className="w-8 h-8" alt="many" />
//                     <p className="text-blue-950 text-lg">{card.price}</p>
//                   </div>
//       </div>
//     ))}
//   </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Aircrafts;

