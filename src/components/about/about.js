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

            <p className='light-blue-block' >I specialize in <Icon style={{ fontSize: '18.5px' }} icon="mdi:graph-multiline" /> Ray Tracing Denoising,  Cross-Platform Rendering, and  Tools/Plugin Architecture. I have a deep passion for computer graphics, be it research in ray tracing and real time rendering, designing libraries and tools to help solve problems for engineers and technical artists, or teaching with highly visual video lectures on YouTube and notes on my blog. Let's talk!

            </p>


          </div>
          <div className={aboutStyles.right}>

            <div className={aboutStyles.hexParent}>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:lightbulb-thin" /></span></div>
                <h2>Fast</h2>
                <div className={aboutStyles.explain}>Fast load times and lag free interaction, my highest priority.</div>
              </div>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:devices-thin" /></span></div>
                <h2>Fast</h2>
                <div className={aboutStyles.explain}>Fast load times and lag free interaction, my highest priority.</div>
              </div>

              <div className={aboutStyles.parentt}>
                <div className={aboutStyles.hexagon}><span><Icon icon="ph:airplane-takeoff-thin" /></span></div>
                <h2>Fast</h2>
                <div className={aboutStyles.explain}>Fast load times and lag free interaction, my highest priority.</div>
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