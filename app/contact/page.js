import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Conta from '../components/Conta'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Conta/>
        <Footer/>
    </div>
  )
}

export default page