import React from 'react'
import Hero from '../../components/students/hero'
import Companies from '../../components/students/companies'
import CouresSection from '../../components/students/couressection'


function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/ >
      <CouresSection/>
      </div>

  )
}

export default Home