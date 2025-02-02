import React from 'react'
import Navbar from '../components/Navbar'
import { ImagesSliderDemo } from '../components/Comps/Imageslider'
import AboutCompany from '../components/AboutCompany'
import CounterSection from '../components/Counter'
import Countries from '../components/Countries'

const About = () => {
  return (
    <div>
      <Navbar/>
      <ImagesSliderDemo/>
      <AboutCompany/>
      <CounterSection/>
      <Countries/>
    </div>
  )
}

export default About