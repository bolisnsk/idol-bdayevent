/* eslint-disable */

import './Header.css'
import Banner from '../Banner/Banner';
import React from "react";
import Mouse from '../mouse';
import Logo from '../Logo';

const Header = () => {
    const introEx = {
        0: `Near And Dear`,
        1: `'소중한'이라는 뜻으로 당신의 가까이에서 소중한 날을 함께합니다`,
    }

    return (
        <div className='con'>
          <Mouse/>
          <header className='title'>
            <Logo/>
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