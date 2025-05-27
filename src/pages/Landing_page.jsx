import React, { useEffect } from 'react'

import About from '../components/About'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Portfolio from '../components/portfolio/Portfolio'
import Services from '../components/Service'
import Hero from '../components/hero/Hero'
import { Element, scroller } from 'react-scroll'

const Landing_page = () => {
  useEffect(() => {
    scroller.scrollTo("hero", {
      smooth: true,
      duration: 0,
      offset: -150, 
    });
  }, []);
  return (
  <>
  <Element name="hero">
    <Hero />
  </Element>
  <Element name="about">
    <About />
  </Element>
  <Element name="service">
    <Services />
  </Element>
  <Element name="projects">
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
