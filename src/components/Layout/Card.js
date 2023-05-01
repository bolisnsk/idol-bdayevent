import React from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router";
import { Link, Router, useNavigate } from 'react-router-dom';
import Search from "./Search";
import "./Card.css"

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 180px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

function Card ({ title, address, open_time, close_time, start_day, end_day, url } ) {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location.state;

  return (
    <div onClick={() =>
      navigate(`/Search/${search}/detail/${title}`,
        {state: { title : title, address : address, open_time : open_time,
           search : search, close_time : close_time, start_day : start_day, end_day : end_day, url : url }}
      ) }>
        <h3>{title}</h3>
      <table >
                <thead>
                    <tr>
                        <td >이벤트 기간</td>
                        <td >{start_day} ~ {end_day} </td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{address} </td>
                    </tr>
                    <tr>
                        <td>영업 시간 </td>
                        <td>{open_time} ~ {close_time}</td>
                    </tr>
                    <tr className="t"></tr>
                </thead>
                 
        </table>
        <div className="border"></div>
  </div>
  );
}


export default Card;