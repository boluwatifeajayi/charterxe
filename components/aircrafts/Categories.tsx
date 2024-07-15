"use client";
import React, { useState } from "react";
import Image from "next/image";

import air from "../../assets/images/airplane.png";
import { useMessages, useTranslations } from "next-intl";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const t = useTranslations("aircraft.categories");
  const messages: any = useMessages();
  const categoryKeys = Object.keys(messages.aircraft.categories.items);

  return (
    <div className="bg-[#0129A4] hidden sm:block">
      <div className="container mx-auto py-10 sm:py-14 ">
        <p className="uppercase text-sm font-bold text-center text-[#fff] py-3">
          {t(`badge`)}
        </p>
        <p className="text-xl sm:text-3xl text-white text-center font-bold">
          {t(`title`)}
        </p>
        <p className="text-sm text-gray-300 text-center py-3">{t(`sub`)}</p>

        <div className="flex text-white gap-4 mt-8 items-center justify-center container">
          {categoryKeys.map((category) => (
            <span
              // @ts-ignore: Unreachable code error
              key={t(`items.${category}.name`)}
              className={`px-10 py-2 rounded-md ${
                selectedCategory === parseInt(category)
                  ? "border border-white"
                  : ""
              } bg-[#1E49D1] cursor-pointer`}
              onClick={() => setSelectedCategory(parseInt(category))}
            >
              <p
                className="font-semibold pt-3 text-sm"
                
>
                {// @ts-ignore
                t(`items.${category}.name`)}
              </p>
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <Image src={air} alt="" className="w-[80%] h-[80%]" />
        </div>

        <div className="flex py-3 px-4 items-center justify-center mt-10 rounded-md mx-56 border-[#1840B9] border">
          <p className="text-white text-sm text-center">
            {// @ts-ignore
            t(`items.${selectedCategory}.desc`)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
