import React, { useState, useEffect, } from "react";
import styled from 'styled-components';
import { useLocation, useParams } from "react-router";
import {useNavigate } from 'react-router-dom';
import Card from "./Card";
import './Search.css'
import Mouse from "./mouse"
import mainlogo from './Header/logo.png'

function EventList ( ) {
  const location = useLocation();
  const { title, address, close_time, open_time, start_day, end_day, search, url } = location.state;
  const navigate = useNavigate()
  return (
    <div>
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
                        <Card title={title} address={address} open_time={open_time}
                                close_time={close_time} start_day={start_day} end_day={end_day} >

                                </Card>
                                <iframe src="https://pbs.twimg.com/media/Frki-ePagAU75aR?format=jpg&name=large" height="500" width="100%"></iframe>
                    </div>
                   
                </main>
               
            </div>
            
        </div>
   
  </div>
  );
}

const Col = styled.td`

font-size : 22px;
padding-left: 20px;

`;

export default EventList;