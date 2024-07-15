"use client";

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Story from "@/components/Story"
import Services from "@/components/Services"
import Explore from "@/components/Explore"
import Request from "@/components/Requst"
import Member from "@/components/Member"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"
import { useTranslations } from "next-intl";




export default function Home() {
  const t = useTranslations()
  return (
    <main>
       <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <Header/>
      <Hero/>
      <Story/>
      <Services/>
      <Explore/>
      <Request/>
      <Member/>
      {/* <Testimonials/> */}
      <Faq/>
     
      <Footer/>
    </main>
  )
}
