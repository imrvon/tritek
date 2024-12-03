import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import HomeAbout from './components/HomeAbout/HomeAbout'
import Testimonials from './components/Testimonials/Testimonials'

export default function page() {
  return (
    <div>
        <Header />
        <Hero />
        <Marquee />
        <HomeAbout />
        <Testimonials />
    </div>
  )
}
