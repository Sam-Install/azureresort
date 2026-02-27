"use client"
import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Aboutx from '../components/Aboutx'
import Footer from '../components/Footer'
import Amenities from '../components/Amenities'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Aboutx/>
        <Amenities/>
        <Footer/>
    </div>
  )
}

export default page