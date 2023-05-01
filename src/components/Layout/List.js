// eslint-disable-next-line
import React from "react";
import { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Pagination from "react-js-pagination";
import { useLocation, useParams } from "react-router";
import Card from './Card';
import { useInView } from "react-intersection-observer";
import './List.css'
import Loading from "./Loading";

// 카테고리를 props로 받아옴
function List({category}) {
  const location = useLocation();
  const { search } = location.state;
  const params = useParams(search);
  const [searchData, setSearchData] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  // 로딩 상태를 담아놓는 곳

    // api 주소에 카테고리 값으로 끼워넣을 상수 생성
  // category가 'all'이면 카테고리 설정x, 아니면 &category=${category}
  const query = category === 'all' ? '' : `&category=${category}`;
  
  /*const handlePageChange = (page) => {
    setPage(page);
  };*/

  const fetchData = () => {
    axios.get(
      ` http://127.0.0.1:8000/near_and_dear/post/?search=${search}&offset=${
        (page *4)}${query}`
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
       {searchData && searchData.map((posts) => (
        <Card key={posts.pk} {...posts} />  // 잔여연산자 사용
      ))}
     <div className = "load" ref={ref}>안녕</div>
     
    </div>
  );
}

export default List;