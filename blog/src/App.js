/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'
  let [글제목, 글제목변경] = useState(['남자 코트 추천', post, '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


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

        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i}>
                <h4 onClick={()=>{setModal(true); setTitle(i)}}>{ 글제목[i] } <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍🏻</span> { 따봉[i] } </h4>
                <p>6월 2일 발행</p>
              </div>)
          })
        }
        <input onChange={(e)=>{ 입력값변경(e.target.value); console.log(입력값)}}/>
        <button onClick={(e) => 글제목변경(글제목.push(e.target.value))}>글발행</button>
        { modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} setModal={setModal} title={title} setTitle={setTitle}/> : null }
    </div>
  );
}


function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천'
        props.글제목변경(copy);
      }}>수정버튼</button>
    </div>
  )}
    
    

export default App;
