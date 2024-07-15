import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/aircrafts/Hero'
import Components from '@/components/aircrafts/Components'
import Specifications from '@/components/aircrafts/Specifications'
import Categories from '@/components/aircrafts/Categories'
import Airplanes from '@/components/aircrafts/Airplanes'
import Privatejets from '@/components/aircrafts/Privatejets'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Components/>
        <Specifications/>
        <Categories/>
        <Airplanes/>
        <Privatejets/>
        <Footer/>
    </div>
  )
}

export default page