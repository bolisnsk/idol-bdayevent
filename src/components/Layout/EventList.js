import React from "react";
import { useLocation, useNavigate } from "react-router";
import Card from "./Card";
import './Search.css'
import Mouse from "./mouse"
import Logo from "./Logo";

function EventList ( ) {
  const location = useLocation();
  const { title, address, close_time, open_time, start_day, end_day, search, image, url } = location.state;
  const navigate = useNavigate(); 

  return (
    <div>
       <div className="box">
            <Mouse/>
            <header className='title'>
              <Logo/>
            </header>
            <h2 className="header"> { search } 's EVENT</h2>
            <div className="content">
                <main className="list">
                <img className="infoImg" src={image}/>
                    <div className="econtents">
                        <h2 className="cn"> </h2>
                        <Card title={title} address={address} open_time={open_time}
                                close_time={close_time} start_day={start_day} end_day={end_day} >
                         </Card>
                         <div className="btn">
                          <button className="btnO"  onClick={() => window.open(url, '_blank')}>원본 트윗 가기</button>
                          <button className="btnO"  onClick={() => navigate(-1)}>뒤로 가기</button>
                         </div>
                    </div>
                  </main>
              
            </div>
        </div>
  </div>
  );
}

export default EventList;