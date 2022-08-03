import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //let post = '우동 맛집 가고 싶어여';
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','리액트 독학']);
  let [따봉, 따봉변경] = useState([0,1,2]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [date, setDate] = useState(['2022-07-10','2022-07-09','2022-07-08']);

  return (
    <div className="App">
      <div className="blog-nav">
        <h3>React Blog</h3>
      </div>

      {
        글제목.map(function(a, i){
          return ( 

          <div className="list" key={i}>
            <h4 onClick={() => {
              setModal(!modal)
              setTitle(i)
            }}>{a}<span onClick={(e) => {
              e.stopPropagation();
              let likeCopy = [...따봉]
              likeCopy[i]++
              따봉변경(likeCopy)
            }}>💖</span>{따봉[i]}</h4>
            <p>{date[i]}</p>
            <button onClick={(e)=>{
              let delCopy = [...글제목]
              delCopy.splice(i,1)
              글제목변경(delCopy)
            }}>삭제</button>
          </div>

          )
        })
      }

      <div className="box">
        <input type="text" onChange={(e)=>{
          입력값변경(e.target.value)
        }} />
        <button onClick={(e)=>{
          let newCopy = [...글제목]
          newCopy.unshift(입력값)
          입력값 !== '' ? 글제목변경(newCopy) : alert('내용을 입력해 주세요!')

          let likeCopy = [...따봉]
          likeCopy.unshift(0)
          따봉변경(likeCopy)

          let today = new Date()
          let year = today.getFullYear()
          let month = ('0' + (today.getMonth() + 1)).slice(-2)
          let day = ('0' + today.getDate()).slice(-2)
          let dateString = year + '-' + month  + '-' + day

          let dateCopy = [...date]
          dateCopy.unshift(dateString)
          setDate(dateCopy)
        }}>글발행</button>        
      </div>

      {
        //조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
        (modal == true) ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} setModal={setModal} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" onClick={(e) => {
      e.target == e.currentTarget ? props.setModal(false) : props.setModal(true)
    }}>
      <div className="modal-inner">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
