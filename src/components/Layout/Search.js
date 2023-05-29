/* eslint-disable */

import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useParams, } from "react-router";
import mainlogo from './Header/logo.png'
import {useNavigate } from 'react-router-dom';
import './Search.css'
import Mouse from "./mouse";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import List from "./List";
import axios from "axios";
import Card from "./Card";
import Categories from "./Categories";
import { Footer } from "react-fullpage";

function Search() {
    const location = useLocation();
    const { search } = location.state;
    const navigate = useNavigate();
    const params = useParams();
    const category = params.category || 'all';

    return (
        
        <div className="box">
            
            <Mouse/>
            <header className='title'>
                    <img className='logo' src={mainlogo} alt='logo' />
            </header>
            <h2 className="header"> { search } 's EVENT</h2>
            <div className="content">
            
                <main className="list">
                    <div className="ctitle">
                        <h2 className="cn"> </h2>
                        <List category={category}/>
                        
                    </div>
                   
                </main>
             
            </div>

            
        </div>
       
    )

}



export default Search;