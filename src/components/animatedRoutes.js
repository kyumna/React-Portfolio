import React from 'react'
import Hero from './hero/hero'
import Portfolio from './portfolio/portfolio'
import About from './about/about'
import Skill from './skills/skill'




import { useLocation,
    Routes,
    Route     } from 'react-router-dom'

function AnimatedRoutes() {
 
    const location=useLocation();
  return (
    
  
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Hero />} />
    
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skill  />} />
      </Routes>
  )
}

export default AnimatedRoutes