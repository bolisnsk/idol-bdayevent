// eslint-disable-next-line
import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { useInView } from "react-intersection-observer";
import './List.css'

function List() {
  const location = useLocation();
  const { search } = location.state;
  const [searchData, setSearchData] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(
      ` http://127.0.0.1:8000/near_and_dear/post/?search=${search}&offset=${
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
    
  );
}

export default List;