import React, { useEffect } from 'react'

import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Portfolio from '../components/portfolio/Portfolio'

import Hero from '../components/hero/Hero'
import { Element} from 'react-scroll'
import About from '../components/about/About'
import Services from '../components/services/Service'

const Landing_page = () => {
 
  return (
  <>
  <Element name="home">
    <Hero />
  </Element>
  <Element name="about">
    <About />
  </Element>
  <Element name="services">
    <Services />
  </Element>
  <Element name="portfolio">
    <Portfolio />
  </Element>
  <Element name="skills">
    <Skills />
  </Element>
  <Element name="contact">
    <Contact />
  </Element>
    </>
  )
}

export default Landing_page
