"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

function Specifications() {
  const t = useTranslations("aircraft.specs");
  const messages: any = useMessages();
  const specsKeys = Object.keys(messages.aircraft.specs.items);

  const getStyle = (key: string | number) => {
    return messages.aircraft.specs.items[key].style;
  };

  useEffect(() => {
    getStyle(1);
  }, [messages]);
  return (
    <div className="bg-[#F0F9FF]">
      <div className="container mx-auto py-10 sm:py-14 ">
        <p className="uppercase text-sm font-bold text-center text-[#0129A4] py-3">
          {t("badge")}
        </p>
        <p className="sm:text-3xl text-xl text-gray-700 text-center font-bold">
          {t("title")}
        </p>

        <div className="md:grid grid-cols-1 md:grid-cols-12 hidden  gap-6 justify-center mt-10">
          {specsKeys.map((key) => (
            <div
              style={getStyle(key)}
              className="bg-white w-full rounded-md px-4 py-3"
            >
              <Image
                src={
                  // @ts-ignore
                  t(`items.${key}.img`)
                }
                alt=""
                width={50}
                height={50}
                className="pt-3"
              />
              <p className="text-lg font-bold text-gray-800 pt-2">
                {
                  // @ts-ignore
                  t(`items.${key}.title`)
                }
              </p>
              <p className="text-gray-500 text-sm">
                {
                  // @ts-ignore
                  t(`items.${key}.desc`)
                }
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:hidden gap-6 justify-center mt-10">
          {specsKeys.map((key) => (
            <div
              className="bg-white w-full rounded-md px-4 py-3"
            >
              <Image
                src={
                  // @ts-ignore
                  t(`items.${key}.img`)
                }
                alt=""
                width={50}
                height={50}
                className="pt-3"
              />
              <p className="text-lg font-bold text-gray-800 pt-2">
                {
                  // @ts-ignore
                  t(`items.${key}.title`)
                }
              </p>
              <p className="text-gray-500 text-sm">
                {
                  // @ts-ignore
                  t(`items.${key}.desc`)
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specifications;
