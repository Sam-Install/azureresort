import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Rooms from '../components/Rooms'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Rooms/>
        <Footer/>
    </div>
  )
}

export default page