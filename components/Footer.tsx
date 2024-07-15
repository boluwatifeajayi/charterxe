"use client";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useMessages, useTranslations } from "next-intl";
import LocaleSwitcher from "./languageSwitch";
import { Locale } from "@/i18n.config";

const Footer: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  const t = useTranslations("footer");
  const locale= useLocale() as Locale;
  const messages:any = useMessages();

  const menuKeys = Object.keys(messages.footer.menu);
  const connectKeys = Object.keys(messages.footer.connect.socials);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#18254A] text-white py-16 px-6 md:px-20">
      <div className="container mx-auto block md:flex flex-col md:flex-row justify-between">
        {/* Column 1: Logo */}
        <div className="mb-8 md:mb-0">
          <Image src={logo} className="w-52" alt="Logo" />
          <LocaleSwitcher locale={locale} />
        </div>

        {/* Column 2: Menu */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Menu</h3>
          <ul>
            {menuKeys.map((key) => (
              <li key={key} className="mb-3 cursor-pointer">
                <Link href={// @ts-ignore
                t(`menu.${key}.link`)}>
                  {// @ts-ignore
                  t(`menu.${key}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">{t("connect.title")}</h3>
          <ul>
            {connectKeys.map((key) => (
              <li key={key} className="mb-3 cursor-pointer">
                <Link href={// @ts-ignore
                t(`connect.socials.${key}.link`)}>
                  {// @ts-ignore
                  t(`connect.socials.${key}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2">{t("contact.title")}</h3>
          <p className="mb-3">{t("contact.email")}</p>
          <p className="mb-3">{t("contact.phone")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
