import React from "react";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios"
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { useInView } from "react-intersection-observer";
import './List.css'
import Mouse from "./mouse"
import mainlogo from './Header/logo.png'

// 카테고리를 props로 받아옴
function Exh() {
  const location = useLocation();
  const { search } = location.state;
  const [searchData, setSearchData] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  // 로딩 상태를 담아놓는 곳
  const [ loading , setLoading ] = useState(null);
    // api 주소에 카테고리 값으로 끼워넣을 상수 생성

  /*const handlePageChange = (page) => {
    setPage(page);
  };*/

  const fetchData = () => {
    axios.get(
      ` http://127.0.0.1:8000/near_and_dear/post/?search=${search}&category=1&offset=${
        (page *4)}`
    )
    .then((res) => {
      console.log(res.data.results);
      setSearchData([...searchData, ...(res.data.results)]);
      setPage((page) => page + 1);
     
    })
  } 

    useEffect(() => {
    if (inView){
      console.log(inView, '무한 스크롤 요청')
      fetchData();
    }
  }, [inView]);


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
                        <button className="cbutton" onClick={() => navigate(`/Search/${search}`, {state:{search : search, }}
                                ) }>전체보기</button>
                            <button className="cbutton" onClick={() => navigate(`/Search/${search}/cafe`, {state:{search : search, }}
                                 ) }>카페</button>
                            <button className="cbutton" onClick={() => navigate(`/Search/${search}/exhibition`, {state:{search : search, }}
                                ) }>전시회</button>
                            <button className="cbutton" onClick={() => navigate(`/Search/${search}/event`, {state:{search : search, }}
                                ) }>이벤트</button>
       {searchData && searchData.map((post) => (
        <Card key={post.pk} {...post} />  // 잔여연산자 사용
      ))}
     <div className = "load" ref={ref}>안녕</div>
     </div>
     </main>
    
    </div>
        </div>            
             </div>
  );
}

export default Exh;