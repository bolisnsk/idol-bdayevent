/* eslint-disable */

import './Header.css'
import Banner from '../Banner/Banner';
import mainlogo from './logo.png'
import React from "react";
import Mouse from '../mouse';

const Header = () => {
    const introEx = {
        0: `NEER AND DEAR`,
        1: `'당신의 가까이에서 소중한 날 기념을 위해'`,
    }

    return (
        <div className='con'>
          <Mouse/>
          <header className='title'>
            <img className='logo' src={mainlogo} alt='logo' />
          </header>
            <div className='introEx line'>
              {introEx[0]}  
            </div>
            <div className='introEx info'>
                {introEx[1]}
            </div>
            <Banner/>
         </div>
    )
}



export default Header