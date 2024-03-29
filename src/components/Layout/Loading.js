import React from "react";
import {Background, LoadingText} from './Styles';
import Spinner from './Spinner.gif';

function Loading() {
    return(
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Spinner} alt="로딩중" />
        </Background>
    )
}

export default Loading;