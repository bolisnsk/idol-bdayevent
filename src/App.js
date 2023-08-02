/* eslint-disable */

import React from 'react';
import './App.css';
import 'animate.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Layout/Search';
import Header from './components/Layout/Header/Header';
import EventList from './components/Layout/EventList';
import Ctest from './components/Layout/ctest';
import Exh from './components/Layout/Exh';
import Cevent from './components/Layout/Cevent';

function App() {
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
