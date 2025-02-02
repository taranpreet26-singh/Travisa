import React from 'react'
import { ImagesSliderDemo } from '../components/Comps/Imageslider'
import AboutCompany from '../components/AboutCompany'
import CounterSection from '../components/Counter'
import VisaCategories from '../components/Services'
import Features from '../components/Feature'
import Countries from '../components/Countries'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
        <ImagesSliderDemo/>
        <AboutCompany/>
        <CounterSection/>
        <VisaCategories/>
        <Features/>
        <Countries/>
        <Testimonial/>
    </div>
  )
}

export default Home