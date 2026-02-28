import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import All from '../components/All'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <All/>
        <Footer/>
    </div>
  )
}

export default page