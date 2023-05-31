import React from 'react';
import styles from './hero.module.css';
import Bar from '../sidebar/sidebar';
import Typewriter from "typewriter-effect";
import '../sidebar/sidebar.css';
import Arrow from '../arrow/Arrow';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';



const Hero=()=> {

  return (
    <motion.div  className={styles.main2} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}>
      <div className='line-animation'></div>

      <Bar></Bar>
      <div className={styles.logo}>Y</div>

      <div className={styles.hero}>
        <p className={`${styles.react} ${styles.return}`} style={{ marginTop: '1rem', marginBottom: '1rem' }}>return(</p>
        <p className={`${styles.react} ${styles.fragment}`} style={{ marginBottom: '4rem' }}>&lt;React.Fragment&gt;</p>
        <p className={`${styles.react} ${styles.div}`}>&lt;div&gt;</p>

        <div className={styles.hey}>
          <Typewriter

            onInit={(typewriter) => {


              typewriter



                .typeString('Hi, <br/> I\'m <span className={style.yumna} id="text3d">Yumna<span/>. <br/>A web engineer...')


                .start();
            }}
          />
        </div>
        <p className={`${styles.react} ${styles.sdiv} ${styles.end}`} >&lt;div/&gt;</p>
        <div className={styles.buttonBlock}>
          <div className={styles.social}><a href='https://github.com/kyumna' target='_blank'>  <li className='light-blue-block first'><Icon icon="ph:github-logo-thin" /> </li></a></div>
          <div className={styles.social}>  <a href='https://www.linkedin.com/in/yumna-khan-587887230/' target='_blank'> <li className='light-blue-block'> <Icon icon="ph:linkedin-logo-thin" /></li></a></div>
          <div className={styles.social}> <a href='https://www.instagram.com/yumna_khan.yk/' target='_blank'><li className='light-blue-block'> <Icon icon="ph:instagram-logo-thin" /> </li></a>  </div>
        </div>
        <p className={`${styles.react} ${styles.fragment}`}>&lt;React.Fragment/&gt;</p>
        <p className={styles.react} >);</p>
        <p className={`${styles.react} ${styles.export}`} >export default Hero</p>
        <Arrow nameRight='/portfolio' nameLeft='false' />
      </div >

    </motion.div>

  )
}

export default Hero