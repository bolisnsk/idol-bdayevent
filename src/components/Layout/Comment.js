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
        <p style={{marginLeft:'20px'}}>Review</p>
        <hr />

          {posts && posts.map((reviews) => (
             <div style={{ marginLeft: '30px', marginRight: '30px', fontSize: '18px' }} key={reviews.pk}>
                
             <li style={{fontSize: '20px'}}>{reviews.title}</li>
      
                {reviews.content}</div>
         
        )) }
  
        <div style={{display : 'flex', marginLeft: '30px', paddingBottom: '30px', marginTop : '20px'}}>
            <input  style={{ width: '750px' }}
                >
            </input>
      
          <br />
          <button style={{ width: '20%', height: '52px', marginRight: '30PX', fontSize: '16px' }} >
            입력
          </button>
          </div>
      </div>
    );
  }
  
  export default Comment;