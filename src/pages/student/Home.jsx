import React from 'react'
import Hero from '../../components/students/hero'
import Companies from '../../components/students/companies'
import CouresSection from '../../components/students/couressection'
import TestimonialSection from '../../components/students/testimonialSection'
import CalltoAction from '../../components/students/calltoAction'
import Footer from '../../components/students/Footer'
function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/ >
      <CouresSection/>
      <TestimonialSection/>
      <CalltoAction/>
      <Footer/>
      </div>

  )
}

export default Home;