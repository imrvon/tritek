import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import HomeAbout from './components/HomeAbout/HomeAbout'
import Testimonials from './components/Testimonials/Testimonials'
import HomeCourses from './components/HomeCourses/HomeCourses'
import HomeEvents from './components/HomeEvents/HomeEvents'
import Careers from './components/Careers/Careers'

export default function page() {
  return (
    <div>
        <Header />
        <Hero />
        <Marquee />
        <HomeAbout />
        <HomeCourses />
        <HomeEvents />
        <Testimonials />
        <Careers />
    </div>
  )
}
