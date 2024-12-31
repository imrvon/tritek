import React from 'react'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import HomeAbout from './components/HomeAbout/HomeAbout'
import Testimonials from './components/Testimonials/Testimonials'
import HomeCourses from './components/HomeCourses/HomeCourses'
// import HomeEvents from './components/HomeEvents/HomeEvents'
import FAQ from './components/FAQ/FAQ'

export default function page() {
  return (
    <div>
        <Hero />
        <Marquee />
        <HomeAbout />
        <HomeCourses />
        {/* <HomeEvents /> */}
        <Testimonials />
        <FAQ />
    </div>
  )
}
