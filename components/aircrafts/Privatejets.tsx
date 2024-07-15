import React from "react";
import Image from "next/image";
import types from "../../assets/images/planetypes.png";
import vlj from "../../assets/images/lj.png";
import lj from "../../assets/images/lg.png";
import mj from "../../assets/images/mj.png";
import smj from "../../assets/images/smj.png";
import hj from "../../assets/images/hj.png";
import ulrj from "../../assets/images/ulrj.png";
import ea from "../../assets/images/ea.png";

import { CircleDot } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

function Privatejets() {
  const t = useTranslations("aircraft.privateJet");
  const messages:any = useMessages();
  const typesKeys = Object.keys(messages.aircraft.privateJet.types);

  const planeImages = [lj, mj, smj, vlj, hj, ulrj, ea];

  const getSectionQuestionsKeys = (section: string) => {
    let questionsKeys = Object.keys(
      messages.aircraft.privateJet.types[section].items
    );
    
    return questionsKeys;
  };

  return (
    <div className="bg-[#F0F9FF]">
      <div className="container px-3 sm:px-1 mx-auto py-10 sm:py-14 ">
        <p className="uppercase  text-sm font-bold text-left text-[#0129A4] py-3">
         {t(`badge`)}
        </p>
        <p className="sm:text-3xl max-w-xl text-xl text-gray-700 text-left font-bold">
          {t(`title`)}
        </p>
        <p className="text-sm max-w-xl text-gray-500 text-left py-3 mb-20">
          {t(`sub`)}
        </p>

        {typesKeys.map((key, typesIndex) => (
          <div
            className=" grid grid-col-1 md:grid-cols-2 gap-x-10 mb-24
          "
          >
            <div
              style={{
                order: typesIndex % 2 === 0 ? 1 : 0,
              }}
              className="w-full"
            >
              <Image src={planeImages[typesIndex]} alt="" className="w-[100%] h-[400px]" />
            </div>
            <div className="w-full max-w-md">
              <p className="text-gray-700 font-bold text-2xl">
                {// @ts-ignore
                t(`types.${key}.title`)}
              </p>
              <p className="pt-3 text-sm text-gray-500">
                {// @ts-ignore
                t(`types.${key}.desc`)}
              </p>

              <ul className="flex flex-wrap md:grid grid-cols-2 w-full gap-x-4 md:gap-x-10 gap-y-2 md:pl-6 mt-3">
                {getSectionQuestionsKeys(key).map((item) => (
                  <li
                    key={// @ts-ignore
                      t(`types.${key}.items.${item}`)}
                    className="text-gray-600 w-max text-sm font-semibold flex space-y-2 items-center"
                  >
                    <CircleDot color="#1840B9" className="w-4 h-4 mr-2" />{" "}
                    {// @ts-ignore
                    t(`types.${key}.items.${item}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Privatejets;
