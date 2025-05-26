import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/skills/Skills'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Portfolio from '../components/portfolio/Portfolio'
import Services from '../components/Service'

const Landing_page = () => {
  return (
  <>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Skills />
    <Testimonials />
    <Contact />
    </>
  )
}

export default Landing_page
