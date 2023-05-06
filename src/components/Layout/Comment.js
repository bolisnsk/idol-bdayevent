import { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation, useParams } from "react-router";
import styled, {css} from "styled-components";
import axios from 'axios';

function Comment() {
    const [posts, setPost] = useState([]);
    const [repls, setRepls] = useState([]);
    const [postLoading, setPostLoading] = useState(true);
    const [replLoading, setReplLoading] = useState(true);
    const replInput = useRef();
    const Params = useParams();


    useEffect(()=> {
        axios.get(`http://127.0.0.1:8000/near_and_dear/review/`)
        .then(res => {
          setPost(res.data)
          setPostLoading(false);
          //setRepls(response.data.repls);
          setReplLoading(false);
        })
      }, []);

      /*const onSubmit = () => {
        axios.post(`http://127.0.0.1:8000/near_and_dear/review/create`, {
             title : inputs.title,
             contents : inputs.content,
             image : inputs.image,
             repls : [],}).then(response => {
               console.log(response);
         })
     }*/

      const onChange = (e) => {
        setRepls(e.target.value);
      }

    return (
      <div>
        <br />
        <p>Review</p>
        <hr />

        <div style={{ marginLeft: '30px'}}>{posts.map((reviews) => (
            <div key={reviews.pk}>{reviews.title}</div>
        )) }</div>
  
        <div style={{display : 'flex', marginLeft: '30px', paddingBottom: '30px', marginTop : '20px'}}>
            <input
                >
            </input>
      
          <br />
          <button style={{ width: '20%', height: '52px', marginLeft: '30PX' }} >
            입력
          </button>
          </div>
      </div>
    );
  }
  
  export default Comment;