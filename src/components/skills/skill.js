import React from 'react'
import style from './skill.module.css'
import Arrow from '../arrow/Arrow'

import styles from '../hero/hero.module.css'
import Bar from '../barGraph/barGraph'
import { motion } from 'framer-motion'

const Skill = () => {
  
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}>
      <div className='line-animation'></div>
      <div className={style.parent}>
        <h1 className={style.skill}>Skills</h1>
        <p className={`${styles.react}`} style={{ marginBottom: '2%' }}>return(</p>
        <p className={`${styles.react} ${styles.fragment}`} style={{ marginLeft: '1%', marginBottom: '1% ' }}>&lt;React.Fragment&gt;</p>
        <div className={style.top}>
          <div className={style.text}>

            <div style={{ marginBottom: '1rem' }}><p className={`${styles.react} `} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&lt;h1&gt;</p><h1 className={style.skills}>my skills</h1><p className={`${styles.react} `} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&lt;/h1&gt;</p></div>

            <div><p className={`${styles.react} `} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&lt;p&gt; &nbsp;</p> <p className={style.para}>As a front-end developer, I sculpt captivating user interfaces with a touch of elegance, bringing life to designs and crafting immersive digital journeys that seamlessly blend aesthetics with functionality.</p><p className={`${styles.react} `} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&nbsp;&lt;/p&gt; </p></div>

          </div>
          <div className={style.graph}><Bar />
           

          </div>
          <p className={`${styles.react} ${styles.fragment}`} style={{ marginTop: '0.5rem', marginLeft: '1%', marginBottom: '0 !important' }}>&lt;/React.Fragment&gt;</p>
          <p className={`${styles.react} ${styles.fragment}`} style={{ marginLeft: '0%', marginBottom: '0 !important', paddingBottom: '2rem' }}>);</p>

          
          </div>
      </div>
      <Arrow nameRight='/about' nameLeft='/portfolio' />
    </motion.div>
  )
}

export default Skill