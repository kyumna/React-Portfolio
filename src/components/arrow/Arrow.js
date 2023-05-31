import React, { useState} from 'react'
import './arrow.css'
import { Link } from 'react-router-dom'


const RightArrow = ({ nameRight, nameLeft }) => {




  const [ishover, setHover] = useState(false)

  const hover = () => {
    setHover(true)

  }

  const nohover = () => {
    setHover(false)
  }

  return (
    <div >
      <Link to={nameRight}>
        <div className={`arrow Rightarrow  ${nameRight === 'false' ? 'hide' : ''}`} onMouseOver={hover} onMouseLeave={nohover} >

          <div className='arrow-top right' > </div>
          <div className='arrow-bottom right1' ></div>
          <div className='hovered-text'>
            {ishover && <div >{nameRight.slice(1,)}</div>}
          </div>
        </div></Link>
      <Link to={nameLeft}>
        <div className={`arrow Leftarrow  ${nameLeft === 'false' ? 'hide' : ''}`} onMouseOver={hover} onMouseLeave={nohover} >

          <div className='arrow-top left' > </div>
          <div className='arrow-bottom left1' ></div>
          <div className='hovered-text leftText'>

            {

              ishover && <div className=''>{nameLeft === '/' ? 'home' : nameLeft.slice(1,)}</div>}
          </div>

        </div></Link>
    </div>
  )
}

export default RightArrow