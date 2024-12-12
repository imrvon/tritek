import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import HomeAbout from './components/HomeAbout/HomeAbout'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'

export default function page() {
  return (
    <div>
        <Hero />
        <Marquee />
        <HomeAbout />
        <Testimonials />
        <About />
    </div>
  )
}
