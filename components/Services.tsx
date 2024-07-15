"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import phone from "../assets/images/phone-middle.png";
import radar from "../assets/images/radar-2.png";
import { useTranslations, useMessages } from "next-intl";

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<null | number>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const t = useTranslations("services");
  const messages: any = useMessages();
  const services = messages.services as any;
  const messagesKeys = Object.keys(messages.services?.services);

  const imageSources = [
    "/one.svg",
    "/two.svg",
    "/three.svg",
    "/four.svg",
    "/five.svg",
    "/six.svg",
  ];

  const toggleAccordion = (index: number) => {
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
      setCurrentImageIndex(index);
    }
  };

  return (
    <section id="services" className="story px-6 md:px-16 py-16 bg-[#fff]">
      <div className="block container mx-auto md:flex hero gap-2 md:gap-32">
        <div className="w-full sm:w-1/2">
          <p className="text-[#0129A4] font-bold ">
            {
              // @ts-ignore
              t("badge")
            }
          </p>
          <p className="text-[#18254A] text-3xl sm:text-4xl font-bold mt-2 mb-5">
            {t("title")}
          </p>
          <Image
            src={imageSources[currentImageIndex]}
            width={100}
            height={100}
            alt="image"
            className="w-full h-full mt-8 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <p className="text-gray-500 mt-12">{t("p1")}</p>

          <div className="mt-12">
            {messagesKeys.map((item: any, index: number) => (
              <div key={index} className="mb-5">
                <div
                  className={`cursor-pointer flex border-b pb-4 font-semibold items-center ${
                    activeService === index ? "text-gray-900" : "text-gray-500"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {activeService === index ? (
                    <Image src={radar} alt="radar" className="mr-3" />
                  ) : (
                    <Image src={radar} alt="radar" className="mr-3" />
                  )}
                  {
                    // @ts-ignore
                    t(`services.${item}.title`)
                  }
                </div>
                {activeService === index && (
                  <div className="pl-9 text-gray-600 pt-4 w-96 text-sm">
                    {
                      // @ts-ignore
                      t(`services.${item}.content`)
                    }
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
