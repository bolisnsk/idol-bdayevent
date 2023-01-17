/* eslint-disable */

import './Header.css'
import companyLogo from './main.png';

const Header = () => {
    const introEx = {
        0: `I FELL IN \nLOVE YOU`,
        1: `내 가수의 이벤트를 빠르게 찾아보세요 \n카페와 전시회 정보를 만나볼 수 있습니다`,
    }

    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
    //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
    function cursor(e) {
      mouseCursor.style.left = e.pageX + "px";
      mouseCursor.style.top = e.pageY  + "px";
  }

    return (
        <header className='header'>
              <div className='cursor'></div>
            <div>  
                <div className='logo'>
                    SITE TITLE
                </div>
                
                <div className='icon'>
                    <a href="https://www.flaticon.com/kr/free-icons/" title="검색 아이콘" />
                </div> 
                
                <div className='introEx v-line2'>
                    {introEx[0]}
                </div>
                <div className='introEx v-line3'>
                    {introEx[1]}
                </div>
            </div>
            
        </header>
    )
    
}

export default Header