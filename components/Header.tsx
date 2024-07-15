"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import axios from "axios";
import Link from "next/link";
import { useMessages, useTranslations } from "next-intl";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";


const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  const t = useTranslations("header");
  const messages: any = useMessages();
  const menuKeys = Object.keys(messages.header.menu);

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
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSidebarOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/contact", {
        fullname,
        email,
        message,
      });
      if (response.status === 200) {
        setIsSubmitting(false);
      }
    } catch (error: any) {
      setIsSubmitting(false);
    }
  };

  return (
    <nav
      className={`${
        scrolling ? "header-scroll" : "bg-transparent"
      } px-4 sm:px-16 w-full items-center fixed top-0 z-10`}
    >
      <div className="sm:container mx-auto sm:px-4 py-4">
        <div className="flex justify-between sm:items-center">
          <Link href="/">
            <Image
              alt="logo"
              src={logo}
              onClick={() => scrollToSection("hero")}
              className="w-36 sm:mt-0 mt-3 sm:w-52"
            />
          </Link>
          <ul className="sm:flex hidden sm:space-x-6 text-sm text-gray-100">
            {menuKeys.map((key) => (
              <li
                key={key}
                className="cursor-pointer hover:font-bold"
                onClick={() =>
                  // @ts-ignore
                  scrollToSection(t(`menu.${key}.link`))
                }
              >
                {
                  // @ts-ignore
                  t(`menu.${key}.title`)
                }
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <button
              onClick={openModal}
              className="px-3 md:px-5 py-3 text-sm md:text-sm cursor-pointer text-white border border-gray-100 bg-opacity-30 p-2 rounded hidden sm:block"
            >
              {t("cta")}
            </button>
            <button
              onClick={() => scrollToSection("request-quote")}
              className="text-blue-700 hidden sm:block px-2 md:px-5 py-3 text-xs md:text-sm font-bold bg-white rounded"
            >
              {t("request")}
            </button>
            <button
              onClick={toggleSidebar}
              className="sm:hidden text-white mt-2 text-2xl"
            >
             <HiBars3BottomRight size={30}/>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0129A4] z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 text-white">
          {menuKeys.map((key) => (
            <li
              key={key}
              className="cursor-pointer hover:font-bold"
              onClick={() =>
                // @ts-ignore
                scrollToSection(t(`menu.${key}.link`))
              }
            >
              {
                // @ts-ignore
                t(`menu.${key}.title`)
              }
            </li>
          ))}
          <li>
            <button
              onClick={openModal}
              className="w-full px-3 py-2 text-sm cursor-pointer text-blue-700 bg-white rounded"
            >
              {t("cta")}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("request-quote")}
              className="w-full px-3 py-2 text-sm cursor-pointer text-white border border-white rounded"
            >
              {t("request")}
            </button>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 sm:right-0 w-full h-full flex items-center justify-end sm:pr-20 bg-black bg-opacity-50 z-50">
          <div className="bg-white pt-10 sm:pt-5 p-4 sm:p-10 rounded-lg shadow-lg w-full md:w-[600px] mx-0">
            <div className="flex justify-between">
              <div></div>
              <div className="mb-1 sm:mb-6">
                <button className="text-gray-600" onClick={closeModal}>
                  <Image
                    src="/close.svg"
                    width={0}
                    height={0}
                    className="w-8 h-8"
                    alt="many"
                  />
                </button>
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl mb-4">
              Get in touch today to <br />
              explore the best customized <br />
              solutions just for you.
            </h2>
            <form
              action="https://viva-jets.us8.list-manage.com/subscribe/post?u=775ebfd74ac13f416e56a8db7&amp;id=b6a9c0bafc&amp;f_id=00bf74e0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate rounded"
              target="_self"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL" className="mb-4 pb-10 text-md">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email p-2 rounded-lg border w-full mt-2"
                    id="mce-EMAIL"
                    required
                    placeholder="Your Email Address"
                  />
                  <span
                    id="mce-EMAIL-HELPERTEXT"
                    className="helper_text"
                  ></span>
                </div>
                <div className="mc-field-group mt-3">
                  <label htmlFor="mce-FNAME" className="mt-3">
                    Full name <span className="asterisk"></span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="FNAME"
                    className="required email p-2 rounded-lg border w-full mt-2"
                    id="mce-FNAME"
                    required
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="mc-field-group mt-3">
                  <label htmlFor="mce-MMERGE2" className="mt-3">
                    Message <span className="asterisk"></span>
                  </label>
                  <br />
                  <textarea
                    name="MMERGE2"
                    className="required email p-2 rounded-lg border w-full mt-2"
                    id="mce-MMERGE2"
                    required
                    rows={5}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  aria-hidden
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  <input
                    type="text"
                    name="b_775ebfd74ac13f416e56a8db7_b6a9c0bafc"
                    tabIndex={-1}
                    value=""
                  />
                </div>
                <div className="clear mt-3">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="bg-blue-700 cursor-pointer w-full text-white py-2 px-4 rounded-lg"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;