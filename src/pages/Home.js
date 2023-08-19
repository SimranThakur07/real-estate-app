import React from 'react'
import Navbar from '../componenets/Navbar'
import Slider from '../componenets/Slider'
import Residential from '../componenets/Residential'
import Commercial from '../componenets/Commercial'
import Image from '../componenets/Image'
import Blog from '../componenets/Blog'
import Footer from '../componenets/Footer'
import Testimonial from '../componenets/Testimonial'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Residential/>
    <Commercial/>
    <Image/>
    <Blog/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home