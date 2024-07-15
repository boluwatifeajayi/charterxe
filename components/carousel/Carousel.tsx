import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import place1 from "../../assets/images/place1.svg";
import place2 from "../../assets/images/place2.svg";
import place3 from "../../assets/images/place3.svg";
//import place4 from "../../assets/images/abj.jpeg";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

const Carousel = () => {
  var [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = 890;

      if (width >= breakpoint) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <h1>hey</h1>,
    prevArrow: <h1>hi</h1>,
    responsive: [
      // Responsive settings...
    ],
  };

  const t = useTranslations("explore.locations");
  const messages: any = useMessages();
  const locations = messages.explore.locations as any;
  const cardsKeys = Object.keys(locations);
  const cardImages = [place1, place2, place3, place2];

  useEffect(() => {}, [locations]);

  const cards = [
    {
      image: place1,
      title: "Abuja",
      date: "On Demand",
      price: "From $5,000",
    },
    {
      image: place2,
      title: "Accra",
      date: "On Demand",
      price: "From $10,000",
    },
    {
      image: place3,
      title: "Lagos",
      date: "On Demand",
      price: "From $5,000",
    },
    {
      image: place2,
      title: "London",
      date: "On Demand",
      price: "From $50,000",
    },

    // Add more cards here
  ];

  return (
    <section className="banner-container mx-auto ml-4 overflow-x-hidden overflow-y-hidden">
      <Slider {...settings}>
        {cardsKeys.map((card, index) => (
          <div className="individual-slides" key={index}>
            <Image
              src={cardImages[index]}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
              alt={`place${index + 1}`}
            />
            <p className="mt-3 text-xl md:text-2xl  font-bold text-blue-950">
              {
                // @ts-ignore
                t(`${card}.title`)
              }
            </p>
            <div className="flex gap-2 mt-3">
              <Image
                src="/calendar.svg"
                width={0}
                height={0}
                className="w-8 h-8"
                alt="caly"
              />
              <p className="text-blue-950 text-lg">
                {
                  // @ts-ignore
                  t(`${card}.date`)
                }
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/moneys.svg"
                width={0}
                height={0}
                className="w-8 h-8"
                alt="many"
              />
              <p className="text-blue-950 text-lg">
                {
                  // @ts-ignore
                  t(`${card}.price`)
                }
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
