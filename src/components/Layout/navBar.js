/* eslint-disable */

import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import './navBar.css'

function Navbar() {
    const location = useLocation();
    const { search } = location.state;
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () =>{
        setIsToggled(isToggled => !isToggled); //on,off 개념
    }

    return (
        <div>
            <Logo/>
            <div className="nav">
                <ul className="nav_menus">
                    <li className="cbutton" onClick={() => navigate(`/Search/${search}`, {state:{search : search, }}
                        ) }>전체보기</li>
                    <li className="cbutton" onClick={() => navigate(`/Search/${search}/cafe`, {state:{search : search, }}
                        ) }>카페</li>
                    <li className="cbutton" onClick={() => navigate(`/Search/${search}/exhibition`, {state:{search : search, }}
                        ) }>전시회</li>
                    <li className="cbutton" onClick={() => navigate(`/Search/${search}/event`, {state:{search : search, }}
                        ) }>이벤트</li>
                </ul>
                <div className="nav_toggle" onClick={()=>toggle()}>
                    <GiHamburgerMenu size="28"/>
                </div> 
                <ul className={isToggled ? "show-menu" : "hide-menu"}> 
                    <div className="nav_toggle2" onClick={()=>toggle()}>
                        <AiOutlineClose size="28"/>
                    </div> 
                    <li className="tbutton" onClick={() => navigate(`/Search/${search}`, {state:{search : search, }}
                        ) }>전체보기</li>
                    <li className="tbutton" onClick={() => navigate(`/Search/${search}/cafe`, {state:{search : search, }}
                        ) }>카페</li>
                    <li className="tbutton" onClick={() => navigate(`/Search/${search}/exhibition`, {state:{search : search, }}
                        ) }>전시회</li>
                    <li className="tbutton" onClick={() => navigate(`/Search/${search}/event`, {state:{search : search, }}
                        ) }>이벤트</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;