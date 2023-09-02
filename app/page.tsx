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


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Story/>
      <Services/>
      <Explore/>
      <Request/>
      <Member/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </main>
  )
}
