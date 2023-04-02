/* eslint-disable */

import './Header.css'
import 'animate.css';
import Banner from '../Banner/Banner';
import mainlogo from './logo.png'
import styled from 'styled-components';
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Header = () => {



    const introEx = {
        0: `I FELL IN LOVE YOU`,
        1: `brith day event cafe, exhibition information`,
    }

    return (
        <div className='con'>
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