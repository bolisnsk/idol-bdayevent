import React from "react";
import { useLocation} from "react-router";
import { useNavigate } from 'react-router-dom';
import "./Card.css"


function Card ({ title, address, open_time, close_time, start_day, end_day, url, image } ) {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location.state;

  return (
    <div onClick={() =>
      navigate(`/Search/${search}/detail/${title}`,
        {state: { title : title, address : address, open_time : open_time,
           search : search, close_time : close_time, start_day : start_day, end_day : end_day, url : url, image : image }}
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