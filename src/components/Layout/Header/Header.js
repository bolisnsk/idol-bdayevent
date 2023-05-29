/* eslint-disable */

import './Header.css'
import 'animate.css';
import Banner from '../Banner/Banner';
import mainlogo from './logo.png'
import styled from 'styled-components';
import React, { useState, useEffect, useCallback, useRef } from "react";
import Mouse from '../mouse';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Scroll from '../Scroll';

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
             <Scroll/>
             <br/>
 <ScrollContainer snap="mandatory" className='submain'>
  <ScrollPage page={0} >
    <Animator animation={batch(Fade(), Sticky() ,MoveOut(0, -200))}>
      <div></div>
    </Animator>
  
  </ScrollPage>
  <ScrollPage page={1}>
    
  <div className="submain">
    <Animator animation={batch(Fade() ,MoveIn(0, -200))}>
                            당신의 최애의 생일 이벤트를 모아서 제공합니다
                            <br/>일일이 찾아보기 불편하지 않으셨나요 <br/>
                            검색 한 번으로 모든 이벤트를!
         </Animator>                    
    </div>
  </ScrollPage>
</ScrollContainer>
<div className='alist'>
    <h1>Artist</h1>
</div>
            
         </div>
    )
    
}



export default Header