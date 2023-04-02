// eslint-disable-next-line
import React from "react";
import styled, {css} from "styled-components";
import {NavLink} from 'react-router-dom';
import { useLocation, useParams } from "react-router";

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: '2',
        text: '카페'
    },
    {
        name: '1',
        text: '전시회'
    },
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
font-size: 2rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;

${(props) =>
  props.active &&
  css`
    font-weight: 600;
    border-bottom: 2px solid #f75690;
    color: #f75690;
    &:hover {
      color: #5690f7;
    }
  `}
& + & {
  margin-left: 1rem;
}
`;


const Categories = ({ onSelect, category }) => {
    return (
      <CategoriesBlock>
        {categories.map((c) => (
          <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}</Category>
        ))}
      </CategoriesBlock>
    );
};


export default Categories;