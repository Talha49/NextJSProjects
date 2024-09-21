import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import About from './About/About'
import QNA from './QNA/QNA'
import Technologies from './Technologies/Technologies'
import Skills from './Skills/Skills'
import Social from './Social/Social'
import Experience from './Experience/Experience'

const MainWrap = () => {
  return (
    <div>

       
        <Hero />
        <About />
        
        <Skills />
     <QNA/>
     <Social/>
     <Experience />
    </div>
  )
}

export default MainWrap