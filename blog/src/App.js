/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'
  let [글제목, 글제목변경] = useState(['남자 코트 추천', post, '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    return '123123123'
  })

  return (  
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      <button onClick={()=>{
        let arr = [...글제목];
        글제목변경(arr.sort())
      }}>가나다순 정렬</button>

      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
        }}>수정버튼</button>
      {/* <div className='list'>
        <h4>{ 글제목[0] }<span onClick={() => { 따봉변경(따봉 + 1) }}>👍🏻</span> {따봉} </h4>
        <p>6월 2일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>6월 2일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>6월 2일 발행</p>
      </div> */}

        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i}>
                <h4 >{ a } <span onClick={()=>{
                }}>👍🏻</span> { 따봉[i] } </h4>
                <p>6월 2일 발행</p>
              </div>)
          })
        }





        { modal == true ? <Modal /> : null }
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}



export default App;
