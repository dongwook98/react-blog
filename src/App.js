/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  // let serverData = ['강남 우동 맛집', '인생이 힘들때', '프론트엔드 개발자가 되려면?'];
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likeNum, setLikeNum] = useState(0);


  return (
    <div className='App'>
      <div className='black-nav'><h4>동욱의 블로그</h4></div>
      <button onClick={() => {
        let copy = [...title]; // 배열은 참조타입이므로 수정하는게 아니고 복사하고 독립적인 배열을 만든 후 수정해야지 상태변경함수가 잘 작동할 것이다.
        copy[0] = '여자코트 추천'
        setTitle(copy); // 상태변경함수는 기존state와 신규state가 같은지 비교한 후, 같으면 동작x, 즉, 달라야지 재렌더링 해준다.
      }}>첫 글 수정</button>
      <div className='list'>
        <h4>{title[0]} <span onClick={() => {
          setLikeNum(likeNum + 1)
        }}>👍</span> {likeNum} </h4>
        <p>3월 16일 발행</p>

      </div>{ }
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>3월 16일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>3월 16일 발행</p>
        <div></div>
      </div>

    </div>
  );
}

export default App;

