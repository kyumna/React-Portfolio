import React from 'react'
import aboutStyles from './about.module.css'
import Arrow from '../arrow/Arrow'
import style from '../portfolio/portfolio.module.css'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'

const About = () => {


  return (
    <motion.div className={aboutStyles.parent1} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}>
    <div className='line-animation'></div>
      <div className={aboutStyles.main}>
        <h1 className={style.work} style={{ marginTop: '-1.4%' }}>About</h1>
        <div className={aboutStyles.parent}>
          <div className={aboutStyles.left}>

            <h1 className={`light-blue-block ${aboutStyles.hey}`}><Icon icon="simple-icons:hey" /> Hi There!</h1>
            <p className={aboutStyles.name}> I'm <p className={aboutStyles.yumnaa}>Yumna Khan</p></p>

            <p className='light-blue-block' >Passionate about crafting captivating user experiences, I am a front-end developer dedicated to bringing ideas to life through elegant and intuitive designs. With a keen eye for detail and a deep understanding of modern web technologies, I strive to create visually stunning and seamlessly functional websites that leave a lasting impression. Join me on this journey as we explore the art of web development and shape the digital world together. <Icon style={{ fontSize: '18.5px' }} icon="mdi:graph-multiline" /> 

            </p>


          </div>
          <div className={aboutStyles.right}>

            <div className={aboutStyles.hexParent}>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:lightbulb-thin" /></span></div>
                <h2>Intuitive</h2>
                <div className={aboutStyles.explain}>Prioritizing intuitive and user-friendly UX/UI.</div>
              </div>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:devices-thin" /></span></div>
                <h2>Responsive</h2>
                <div className={aboutStyles.explain}>My layouts will work on any device, big or small.</div>
              </div>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:airplane-takeoff-thin" /></span></div>
                <h2>Dynamic</h2>
                <div className={aboutStyles.explain}>Transforming static websites into dynamic experiences is my passion.</div>
              </div>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:gauge-thin" /></span></div>
                <h2>Fast</h2>
                <div className={aboutStyles.explain}>Fast load times and lag free interaction, my highest priority.</div>
              </div>

            </div>



          </div>


        </div>


        <Arrow nameRight='false' nameLeft='/skills'></Arrow>
      </div>
    </motion.div>
  )
}

export default About