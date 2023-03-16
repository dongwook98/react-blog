import './App.css';
import { useState } from 'react';


function App() {

  let serverData = ['강남 우동 맛집', '인생이 힘들때', '프론트엔드 개발자가 되려면?'];
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);

  return (
    <div className='App'>
      <div className='black-nav'><h4>블로그</h4></div>
      <div className='list'>
        <h4>{title[0]}</h4>
        <p>3월 16일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>3월 16일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>3월 16일 발행</p>
      </div>
    </div>
  );
}

export default App;

