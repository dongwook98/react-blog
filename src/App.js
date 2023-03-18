/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';


function App() {

  // let serverData = ['강남 우동 맛집', '인생이 힘들때', '프론트엔드 개발자가 되려면?'];
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likeNum, setLikeNum] = useState([0, 0, 0]); // 각각의 좋아요 수를 배열로 한번에 저장!
  let [modal, setModal] = useState(false); // 동적 UI 현재 상태를 저장
  let [viewTitle, setviewTitle] = useState(1);
  let [input, setInput] = useState('');
  let [date, setDate] = useState(Date());

  return (
    <div className='App'>
      <div className='black-nav'><h4>동욱의 블로그</h4></div>

      {/* <button onClick={() => {
        let copy = [...title]; // 배열은 참조타입이므로 수정하는게 아니고 복사하고 독립적인 배열을 만든 후 수정해야지 상태변경함수가 잘 작동할 것이다.
        copy[0] = '여자코트 추천'
        setTitle(copy); // 상태변경함수는 기존state와 신규state가 같은지 비교한 후, 같으면 동작x, 즉, 달라야지 재렌더링 해준다.
      }}>첫 글 수정</button>

      <button onClick={() => {
        let sortedArr = [...title].sort();
        setTitle(sortedArr);

      }}>가나다순 정렬</button>
      <div className='list'>
        <h4>{title[0]}
          <span onClick={() => {
            setLikeNum(likeNum + 1)
          }}>👍</span> {likeNum}
        </h4>
        <p>3월 16일 발행</p>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p>3월 16일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal) // if else 로 짜는방법 있다.
        }}>{title[2]}</h4>
        <p>3월 16일 발행</p>
      </div>
      {modal ? <Modal></Modal> : null} // 모달창의 상태를 state로 저장했으니 true일때는 모달창이 뜨게 false일때는 아무것도 안뜨게 null을 사용했다.
      ▲ JSX에서는 if문 못쓰므로 삼항연산자 사용 */}


      {
        title.map((el, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(!modal); setviewTitle(i); }}>{el}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likeNum];
                  copy[i] = copy[i] + 1;
                  setLikeNum(copy);
                }}>👍
                </span>
                {likeNum[i]}
              </h4>
              <p>3월 16일 발행</p>
              <button onClick={() => {
                // 클릭한 곳만 삭제해야한다.
                // 0번째 삭제버튼 누르면 0번째 title state 삭제
                // 1번째 삭제버튼 누르면 1번째 title state 삭제
                // 2번째 삭제버튼 누르면 2번째 title state 삭제
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      {/* map함수로 html생성 */}

      <input onInput={(e) => {
        setInput(e.target.value); // state변경함수는 늦게처리됨 (비동기 처리) 
        console.log('input', input)
      }} type="text" />
      <button onClick={() => {
        // title에 인풋값추가
        if (!input) {
          return;
        }
        setTitle([input, ...title]);
        setLikeNum([0, ...likeNum]);
      }}>글 발행</button>

      {modal ? <Modal viewTitle={viewTitle} title={title} setTitle={setTitle} /> : null}
      {/* 부모(App 컴포넌트) -> 자식(Modal 컴포넌트) state 전송하는 법 
        1. <자식컴포넌트 작명={state이름}> 
        2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용
      */}

      <Modal2></Modal2>
    </div>
  );
}

// 모달창 컴포넌트
function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title[props.viewTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[0] = '여자코트 추천';
        props.setTitle(copy);
      }}>글수정</button>
    </div >
  )
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20,
    }
  }
  render() {
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({ age: 21 })
        }}>버튼</button>
      </div>
    )
  }
}



export default App;

