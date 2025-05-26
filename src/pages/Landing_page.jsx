import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Portfolio from '../components/portfolio/Portfolio'
import Services from '../components/Service'

const Landing_page = () => {
  return (
  <>
    {/* hero */}
    <Hero />

    {/* about */}
    <About />

    {/* Skills */}
    <Skills />
    {/* services */}
    <Services />

    {/* Projects */}
    <Portfolio />

    {/* Testimonials */}
    <Testimonials />

    {/* Contact */}
    <Contact />

    </>

  
  )
}

export default Landing_page
