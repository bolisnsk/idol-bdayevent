/* eslint-disable */

import React,{useState,useEffect,useCallback,useMemo} from "react";
import axios from 'axios';
import App2 from "./App2";

//최종조립용
function App3() {
//값 불러오고 변수에 담아서 뮤직테이블로 넘ㄴ겨줌
const [music,setMusic]= useState([]);
const [ss,setSs] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:3000/music.json').then((res)=>{
            setMusic(res.data)
        })
    },[])

    const handleUserInput = (ss) => {
        setSs(ss);
    }

    return(
        <div className={"row"}>
            <H/>
            <SearchBar ss={ss} onUserInput={handleUserInput}/>
            <div style={{"height":"30px"}}></div>
            <MusicTable music={music} ss={ss}/>
        </div>
    )
}
//음악리스트 큰 틀 뮤직테이블에서 넘긴 값 받음
function MusicTable(props) {
    let row=[];
    props.music.forEach((m)=>{
        if(m.title.indexOf(props.ss) == -1){
            return;
        }
        //배열에 추가
      row.push(<MusicRow music={m}/>)
    })
    return(
        <table className={"table"}>
            <thead>
                <tr className={"danger"}>
                    <th>순위</th>
                    <th></th>
                    <th>노래명</th>
                    <th>가수명</th>
                </tr>
            </thead>
        </table>
    )
 }
//음악 한곡씩 뮤직테이블이 넘겨준 값을 받아줌
function MusicRow(props) {
    return(
        <table>
            <thead>
            <tr>
                <td>{props.music.rank}</td>
                <td><img src={props.music.poster} width={"30"} height={"30"}/></td>
                <td>{props.music.title}</td>
                <td>{props.music.singer}</td>
            </tr>
            </thead>
         </table>
    )
}
//검색바
function SearchBar(props) {
    const  onChange =(e)=>{
        props.onUserInput(e.target.value);
    }
    return(
        <table className={"table"}>
            <tbody>
            <tr>
                <td>
                    <input type={"text"} size={"25"} className={"input-sm"} placeholder={"Search"} onChange={onChange}
                           value={props.ss}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
//Memo 기능 사용
const  H = () =>{
    return(
        <h1 className={"text-center"}>Music Top50</h1>
    )
}

export default App3;