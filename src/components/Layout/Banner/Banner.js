/* eslint-disable */

import './banner.css'
import {GoSearch} from 'react-icons/go';
import React, { useState, useEffect, } from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';
import EventList from '../EventList';
import Search from '../Search';
import axios from 'axios';
import Card from '../Card';

function Banner(){
 
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

 
    const onKeyPress = (e) => {
      if(e.key == 'Enter'){
        gohome();
      }
    }

 


    const gohome = () => {
      navigate(`/Search/${search}`, {state: { search : search}, });
    }

    return (
        <div className='obj'>
            <div className='search'>
                <input
                    type="text"
                    value={search}
                    placeholder="GroupName + member"
                    className='input_box'
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    />
                    

                  <button type='button' className='sbutton' 
                    onClick={gohome}  >
                            <GoSearch size={20}/>
                        </button>
              </div>
              </div>
        )
    
}

export default Banner;