// eslint-disable-next-line
import React from "react";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Pagination from "react-js-pagination";
import { useLocation, useParams } from "react-router";
import Card from './Card';
import './List.css'

// 카테고리를 props로 받아옴
function List({category}) {
    const location = useLocation();
    
    const { search } = location.state;
    const params = useParams(search);
  // 뉴스들 데이터를 담아놓는 곳
  const [searchData, setSearchData] = useState([]);
  // 로딩 상태를 담아놓는 곳

    // api 주소에 카테고리 값으로 끼워넣을 상수 생성
  // category가 'all'이면 카테고리 설정x, 아니면 &category=${category}
  const query = category === 'all' ? '' : `&category=${category}`;
  
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        ` http://127.0.0.1:8000/near_and_dear/post/?search=${search}&offset=${
          (page - 1) * 4
        }`
      );
       console.log(result.data.results);
       setSearchData(result.data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div>
       {searchData && searchData.map((posts) => (
        <Card key={posts.title} {...posts} />  // 잔여연산자 사용
      ))}
     <Pagination className="page"
      activePage={page} // 현재 페이지
      itemsCountPerPage={4} // 한 페이지랑 보여줄 아이템 갯수
      totalItemsCount={50} // 총 아이템 갯수
      pageRangeDisplayed={5} // paginator의 페이지 범위
      prevPageText={"‹"} // "이전"을 나타낼 텍스트
      nextPageText={"›"} // "다음"을 나타낼 텍스트
      onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
    />
     
    </div>
  );
}

export default List;