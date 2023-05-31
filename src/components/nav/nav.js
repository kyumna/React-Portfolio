import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Nav({showmenu , menu}) {

  


  const anim = () => {
    const secondLi = document.querySelector(".burger > ul > li:nth-child(2)");
    console.log(secondLi)
    secondLi.classList.toggle('hide')

    const firstLi = document.querySelector(".burger > ul > li");
    firstLi.classList.toggle('rotation1')
    const thirdLi = document.querySelector(".burger > ul > li:nth-child(3)");
    thirdLi.classList.toggle('rotation2')
    const Lis = document.querySelectorAll('.bar');
    Lis.forEach(li => {
      li.classList.toggle('h')

    });



  }


  return (
    <div className='main' >
      <div className='burger' id='lines' onClick={() => { showmenu(); anim(); }}>

        <ul>
          <li className='bar'></li>
          <li className='bar'></li>
          <li className='bar'></li>
        </ul>

      </div>

      <motion.div id='nav' className={`container ${menu ? 'show' : ' '}`} initial={{ height: 0 }} animate={{ height: "100%" }} exit={{ height: '100%', transition: { duration: 2 } }}>

        <div className='logo logo-change'>
          <p id='text3d' className='text3d'>Y</p>
          <p className='name'>Web Developer</p>


        </div>
        <ul>


          <Link className='link' to='/'>  <li onClick={() => { showmenu(); anim(); }} className='link' >Home</li></Link>
          <Link className='link' to='/portfolio'>  <li onClick={() => { showmenu(); anim(); }} className='link' >Portfolio</li></Link>
          <Link className='link' to='/skills'>  <li onClick={() => { showmenu(); anim(); }} className='link' >Skills</li></Link>
          <Link className='link' to='/about'>  <li onClick={() => { showmenu(); anim(); }} className='link' >About</li></Link>

        </ul>

      </motion.div>
    </div>
  )
}

export default Nav