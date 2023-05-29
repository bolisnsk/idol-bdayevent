/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import Loading from './components/Layout/Loading';
import { useMediaQuery } from 'react-responsive';
import Mouse from './components/Layout/mouse';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Layout/Search';
import Header from './components/Layout/Header/Header';
import axios from 'axios';
import EventList from './components/Layout/EventList';
import { positions } from '@mui/system';
import Categories from './components/Layout/Categories';
import Ctest from './components/Layout/ctest';
import Banner from './components/Layout/Banner/Banner';
import Exh from './components/Layout/Exh';
import Cevent from './components/Layout/Cevent';

function App() {
  const [xy,setXY]=useState({x:0,y:0})
const handleMouseMove=(e)=>{
        setXY({x:e.clientX,y:e.clientY});
    }
  const isDesktopOrMobile = useMediaQuery({query: '(max-width: 768px'});
 
  return (
    <div>
        <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="Search/:search" element={<Search />} />
        <Route path="Search/:category" element={<Search />} />
        <Route path="Search/:search/cafe" element={<Ctest />} />
        <Route path="Search/:search/exhibition" element={<Exh />} />
        <Route path="Search/:search/event" element={<Cevent />} />
        <Route path="Search/:search/detail/:title" element={<EventList />} />
     
      </Routes>
      
      </div>
      


    
  );

}

export default App;
