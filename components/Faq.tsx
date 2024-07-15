"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { MinusCircle } from "lucide-react";
import Link from "next/link";
import { useMessages, useTranslations } from "next-intl";

const Faq: React.FC = () => {
  const t = useTranslations("faq");
  const messages:any = useMessages()
  const sectionKey = Object.keys(messages.faq.sections);

  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleSection = (index: number) => {
  
    if (activeSection === index) return setActiveSection(null);
    setActiveSection(index);
  };

  const toggleQuestion = (itemIndex: number) => {
    if (activeQuestion === itemIndex) return setActiveQuestion(null);
    setActiveQuestion(itemIndex);
  };

  const getSectionQuestionsKeys = (section: string) => {
    let questionsKeys = Object.keys(messages.faq.sections[section].questions);
    
    return questionsKeys;
  };

  useEffect(()=>{
    setActiveQuestion(null)
  },[activeSection])

  return (
    <section id="faq" className="story px-6 md:px-20 py-16 bg-[#F0F9FF]">
      <div className="block md:flex gap-2 md:gap-32 container mx-auto">
        <div className="w-full md:w-[40%]">
          <p className="text-[#0129A4] font-bold">FAQ</p>
          <p className="text-[#18254A] text-4xl font-bold mt-2 mb-5">
            {t("title")}
          </p>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="mt-12">
            {sectionKey.map((section, sectionIndex) => (
              <div key={section} className="mb-4">
                <div
                  className="flex justify-between cursor-pointer border-b mt-6 mb-4"
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <h2 className="text-gray-800 text-xl cursor-pointer font-bold">
                    {// @ts-ignore
                    t(`sections.${section}.title`)}
                  </h2>
                  {/* <Image src={section.isOpen ? '/close2.svg' : '/open.svg'} alt='icon' width={10} height={10}  className='h-8 w-8'/> */}
                  {activeSection === sectionIndex ? (
                    <MinusCircle />
                  ) : (
                    <PlusCircle />
                  )}
                </div>

                {activeSection === sectionIndex &&
                  getSectionQuestionsKeys(section).map((item, itemIndex) => (
                    <div
                      key={// @ts-ignore
                        t(`sections.${section}.questions.${item}.question`)}
                      className="mb-3 ml-4"
                    >
                      <div
                        className={`cursor-pointer flex border-b font-semibold pb-2 text-md items-center justify-between ${
                          activeQuestion === itemIndex
                            ? "text-gray-600"
                            : "text-gray-600"
                        }`}
                        onClick={() => toggleQuestion(itemIndex)}
                      >
                        {// @ts-ignore
                        t(`sections.${section}.questions.${item}.question`)}
                        <Image
                          src={
                            activeQuestion === itemIndex ? "/Frame 136 (2).svg" : "/subopen.svg"
                          }
                          alt="icon"
                          width={10}
                          height={10}
                          className="h-5 w-5 mr-1"
                        />
                      </div>
                      {activeQuestion === itemIndex && (
                        <div className="text-gray-600 pt-4 pl-2 text-sm">
                          {// @ts-ignore
                          t(`sections.${section}.questions.${item}.answer`)}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
            {/* {visibleItems < accordionItems.length && (
              <button
                onClick={() => setVisibleItems(visibleItems + 6)}
                className="text-blue-700 font-bold cursor-pointer"
              >
                See More
              </button>
            )} */}
          </div>
          <div className="flex justify-between">
            <p></p>
            <Link
              href="/aircrafts"
              className="bg-[#18254A] justify-end font-semibold text-white rounded-md text-md py-2 mt-3 px-3"
            >
              {t("types")} &#x2192;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
