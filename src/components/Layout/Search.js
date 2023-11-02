/* eslint-disable */

import React from "react";
import { useLocation } from "react-router";
import './Search.css'
import Mouse from "./mouse";
import List from "./List";
import Navbar from "./navBar";


function Search() {
    const location = useLocation();
    const { search } = location.state;

    return (
        <div className="box">
            <Mouse/>
            <Navbar/>
            <header>
                <span className="header"> ❤ { search } 's EVENT ❤</span>
            </header>
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