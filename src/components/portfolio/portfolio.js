import React, { useState, useEffect } from 'react'
import style from './portfolio.module.css'
import Arrow from '../arrow/Arrow'
import image from '../../images/arseny-togulev-kGix6_gPKjI-unsplash.jpg'
import styles from '../hero/hero.module.css'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Portfolio() {

  useEffect(() => {
    const timer = setTimeout(() => {
      toast('Bye, world!', {
        autoClose: 2000,
        closeButton: false
      });
    }, 3000);

    return () => {
      clearTimeout(timer)
      toast.dismiss();
    };
  }, []);

  const [isHovered, setHovered] = useState(Array(6).fill(false));


  const handleMouseEnter = (index) => {
    const updatedStates = [...isHovered];
    updatedStates[index] = true;
    setHovered(updatedStates);

  };

  const handleMouseLeave = (index) => {

    const updatedStates = [...isHovered];
    updatedStates[index] = false;
    setHovered(updatedStates);
  };
  const backgroundImageUrl = image;
  const containerStyles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',


  };
  return (
    <div>
      {<motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}>

        <div className='line-animation'></div>
        <div className={style.parentOfAll}>

          <h1 className={style.work}>Work</h1>
          <p className={`${styles.react}`} style={{ marginLeft: '13%', marginBottom: '0.9rem', marginTop: '0.5rem' }}>return(</p>
          <p className={`${styles.react} ${styles.fragment}`} style={{ marginLeft: '14%', marginBottom: '0 !important' }}>&lt;React.Fragment&gt;</p>


          <div className={style.portfoliocontainer}>
            <div className={style.header}>
              <div>  <p className={`${styles.react} ${style.h1}`} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&lt;h1&gt;</p><span className={style.text}> web developer <div style={{ WebkitTextStroke: '1px  rgb(240, 181, 175) ', color: 'transparent', display: 'inline' }}>portfolio</div></span> <p className={`${styles.react} ${style.h1}`} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&lt;/h1&gt;</p></div>
              <p className={style.para}> <p className={`${styles.react} `} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&lt;p&gt; &nbsp;</p > From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects. <p className={`${styles.react} `} style={{ fontWeight: 'light !important', marginBottom: '0 !important', display: 'inline' }}>&nbsp;&lt;/p&gt; </p>
              </p>
            </div>
            <div className={style.projects}>

              <div className={style.box} onMouseEnter={() => handleMouseEnter('0')} onMouseLeave={() => handleMouseLeave(0)} style={containerStyles}>
                <div className={` animate__delay-2s ${style.ribbonWrap}`}>
                  <div className={style.ribbon}>yumna</div>
                </div>
                <div className={style.headbar}>
                  <div className={style.circle}>
                    <ul >
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={style.title}>Project Title</div>
                </div>

                {isHovered[0] && <div className={`${style.darkwindow} ${isHovered[0] ? style.darkwindowrolldown : style.darkwindowrollup}`}>{
                  <div className={style.tech}>
                    <ul >
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
                    </ul>

                  </div>}
                  <main className={style.content} data-form-type="card">
                  <a href="javascript:;" className={style.btnn}>
                    <p className={style.btnCircle}></p>
                    <p className={style.btnWhiteCircle}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="iconArrowRight" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                      </svg>
                    </p>
                    <p className={style.btnText}>Discover the project</p>
                  </a>
                </main>

                </div>}
              </div>

              <div className={style.box} onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={() => handleMouseLeave(1)} style={containerStyles}>
                <div className={` animate__delay-2s ${style.ribbonWrap}`}>
                  <div className={style.ribbon}>yumna</div>
                </div>
                <div className={style.headbar}>
                  <div className={style.circle}>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={style.title}>Project Title</div>
                </div>

                {isHovered[1] && <div className={`${style.darkwindow} ${isHovered[1] ? style.darkwindowrolldown : style.darkwindowrollup}`}>{
                  <div className={`${style.tech} `}>
                    <ul >
                      <li >HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
                    </ul>

                  </div>}
                  <main className={style.content} data-form-type="card">
                  <a href="javascript:;" className={style.btnn}>
                    <p className={style.btnCircle}></p>
                    <p className={style.btnWhiteCircle}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="iconArrowRight" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                      </svg>
                    </p>
                    <p className={style.btnText}>Discover the project</p>
                  </a>
                </main>
                </div>}
              </div>

              <div className={style.box} onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={() => handleMouseLeave(2)} style={containerStyles}>
                <div className={` animate__delay-2s ${style.ribbonWrap}`}>
                  <div className={style.ribbon}>yumna</div>
                </div>
                <div className={style.headbar}>
                  <div className={style.circle}>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={style.title}>Project Title</div>
                </div>

                {isHovered[2] && <div className={`${style.darkwindow} ${isHovered[2] ? style.darkwindowrolldown : style.darkwindowrollup}`}>{
                  <div className={style.tech}>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
                    </ul>

                  </div>}
                  <main className={style.content} data-form-type="card">
                  <a href="javascript:;" className={style.btnn}>
                    <p className={style.btnCircle}></p>
                    <p className={style.btnWhiteCircle}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="iconArrowRight" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                      </svg>
                    </p>
                    <p className={style.btnText}>Discover the project</p>
                  </a>
                </main>
                </div>}
              </div>

              <div className={style.box} onMouseEnter={() => handleMouseEnter('3')} onMouseLeave={() => handleMouseLeave(3)} style={containerStyles}>
                <div className={` animate__delay-2s ${style.ribbonWrap}`}>
                  <div className={style.ribbon}>yumna</div>
                </div>
                <div className={style.headbar}>
                  <div className={style.circle}>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={style.title}>Project Title</div>
                </div>

                {isHovered[3] && <div className={`${style.darkwindow} ${isHovered[3] ? style.darkwindowrolldown : style.darkwindowrollup}`}>{
                  <div className={style.tech}>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
                    </ul>

                  </div>}
                  <main className={style.content} data-form-type="card">
                  <a href="javascript:;" className={style.btnn}>
                    <p className={style.btnCircle}></p>
                    <p className={style.btnWhiteCircle}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="iconArrowRight" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                      </svg>
                    </p>
                    <p className={style.btnText}>Discover the project</p>
                  </a>
                </main>
                </div>}
              </div>

              <div className={style.box} onMouseEnter={() => handleMouseEnter('4')} onMouseLeave={() => handleMouseLeave(4)} style={containerStyles}>
                <div className={` animate__delay-2s ${style.ribbonWrap}`}>
                  <div className={style.ribbon}>yumna</div>
                </div>
                <div className={style.headbar}>
                  <div className={style.circle}>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={style.title}>Project Title</div>
                </div>

                {isHovered[4] && <div className={`${style.darkwindow} ${isHovered[4] ? style.darkwindowrolldown : style.darkwindowrollup}`}>{
                  <div className={style.tech}>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
                    </ul>

                  </div>}
                  <main className={style.content} data-form-type="card">
                  <a href="javascript:;" className={style.btnn}>
                    <p className={style.btnCircle}></p>
                    <p className={style.btnWhiteCircle}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="iconArrowRight" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                      </svg>
                    </p>
                    <p className={style.btnText}>Discover the project</p>
                  </a>
                </main>
                </div>}
              </div>

              <div className={style.box} onMouseEnter={() => handleMouseEnter('5')} onMouseLeave={() => handleMouseLeave(5)} style={containerStyles}>
                <div className={` animate__delay-2s ${style.ribbonWrap}`}>
                  <div className={style.ribbon}>yumna</div>
                </div>
                <div className={style.headbar}>
                  <div className={style.circle}>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={style.title}>Project Title</div>
                </div>

                {isHovered[5] && <div className={`${style.darkwindow} ${isHovered[5] ? style.darkwindowrolldown : style.darkwindowrollup}`}>{
                  <div className={style.tech}>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
                    </ul>

                  </div>}
                  <main className={style.content} data-form-type="card">
                  <a href="javascript:;" className={style.btnn}>
                    <p className={style.btnCircle}></p>
                    <p className={style.btnWhiteCircle}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="iconArrowRight" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                      </svg>
                    </p>
                    <p className={style.btnText}>Discover the project</p>
                  </a>
                </main>
                </div>}
              </div>



            </div>
            <div className={style.reach}>
              <h1>Let's talk</h1>
              <p>Wanna get in touch or talk about a project?</p>
              <p>Feel free to contact me via email at <p className={style.link}>kyumna14@gmail.com</p>  </p>

            </div>




          </div>
          <p className={`${styles.react} ${styles.fragment}`} style={{ marginLeft: '14%', marginBottom: '0 !important' }}>&lt;/React.Fragment&gt;</p>
          <p className={`${styles.react} ${styles.fragment}`} style={{ marginLeft: '13%', marginBottom: '0 !important', paddingBottom: '2rem' }}>);</p>
          <Arrow nameRight='/skills' nameLeft='/' ></Arrow>

        </div> <ToastContainer position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={1}
          progressStyle={{ backgroundColor: 'rgb(106,106,106)' }}
          toastStyle={{ width: '16rem' }}
        />

      </motion.div>}
    </div>
  )
}

export default Portfolio