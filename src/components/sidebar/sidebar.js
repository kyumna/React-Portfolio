import React from 'react'
import './sidebar.css'
import { Icon } from '@iconify/react';

function sidebar() {
    return (
        <div className='parent'>
       
        <div className='main1'>

            <div className='logo'>
                <p id='text3d'>Y</p>


            </div>
            <div className='links'>
                <ul>
                  
                  <a href='https://github.com/kyumna' target='_blank'>  <li className='light-blue-block first'><Icon icon="ph:github-logo-thin" /> </li></a>
                  <a href='https://www.linkedin.com/in/yumna-khan-587887230/' target='_blank'> <li className='light-blue-block'> <Icon icon="ph:linkedin-logo-thin" /></li></a>
                  <a href='https://www.instagram.com/yumna_khan.yk/' target='_blank'><li className='light-blue-block'> <Icon icon="ph:instagram-logo-thin" /> </li></a>  
                    
                    
                </ul>
            </div>
        
        </div></div>
        
    )
}

export default sidebar