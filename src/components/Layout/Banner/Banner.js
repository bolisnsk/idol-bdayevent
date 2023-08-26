/* eslint-disable */

import './banner.css'
import {GoSearch} from 'react-icons/go';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Banner(){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const onKeyPress = (e) => {
      if(e.key == 'Enter'){
        goOutput();
      }
    }

    const goOutput = () => {
      navigate(`/Search/${search}`, {state: { search : search}, });
    }

    return (
        <div className='obj'>
          <div className='search'>
            <input
              type="text"
              value={search}
              placeholder="GroupName + member, GroupName, member"
              className='input_box'
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          <button type='button' className='sbutton' 
            onClick={goOutput}  >
              <GoSearch size={20}/>
              </button>
          </div>
        </div>
      )
    
}

export default Banner;