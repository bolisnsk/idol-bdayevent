/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router";
import mainlogo from './Header/logo.png'
import './Search.css'

function Logo() {
    const navigate = useNavigate();

    return (
        <button className='btnlogo' src={mainlogo} alt='logo'  onClick={() => navigate('/')}/>
    )
}



export default Logo;