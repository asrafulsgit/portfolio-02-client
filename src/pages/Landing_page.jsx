import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Landing_page = () => {
  return (
  <>
    {/* hero */}
    <Hero />

    {/* about */}
    <About />

    {/* Skills */}
    <Skills />

    {/* Projects */}
    <Projects />

 {/* Experience */}
   <Experience />

{/* Testimonials */}
    <Testimonials />

{/* Contact */}
 <Contact />

    </>

  
  )
}

export default Landing_page
