/* eslint-disable */

import React from "react";
import { useLocation } from "react-router";
import mainlogo from './Header/logo.png'
import {useNavigate } from 'react-router-dom';
import './Search.css'
import Mouse from "./mouse";
import List from "./List";
import Logo from "./Logo";


function Search() {
    const location = useLocation();
    const { search } = location.state;
    const navigate = useNavigate();
    
    return (
        <div className="box">
            <Mouse/>
            <header className='title'>
              <Logo/>
            </header>
            <h2 className="header"> { search } 's EVENT</h2>
            <div className="content">
                <main className="list">
                    <div className="ctitle">
                        <List/>
                    </div>
                </main>
            </div>  
        </div>
    )
}



export default Search;