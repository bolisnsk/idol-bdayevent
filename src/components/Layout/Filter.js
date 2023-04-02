
import React from "react";
import styled, {css} from "styled-components";

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'cafe',
        text: '카페'
    },
    {
        name: 'ex',
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
    font-size: 2.5rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    z-index : 100;
    padding-bottom: 0.25rem;

    &:hover {
        color: #F48EE5;
    }

    ${props => 
        props.active && css`
            font-weight: 600;
            border-bottom: 2px solid #CA64F4;
            color; #CA64F4;
            &:hover {
                color: #CA64F4;
            }
        `}

    & + & {
        margin-left: 1rem;
    }
`;


const Filter = ({ onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(user => (

                <Category 
                    key={user.title}
                    active={category === user.title}
                    onClick={() => onSelect(user.title)}
                >
                    {v.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Filter;