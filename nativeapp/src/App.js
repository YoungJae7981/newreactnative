/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import State from "./component/State";
import { useState } from "react";
import Box from "./component/Box";
import Comment from "./component/Comment";
import CommentList from "./component/CommentList";

// let name = ['라라라', '래래래', '로로로']
// let ment = ['안녕하세요, 집에 가고싶다', '리액트 재밌다!', '리액트 리액트 리액트']

function App() {
  return (
    <div className="App">
      <CommentList />
      {/* {
      lalelo.map(function(a, i){
        return (
          <div className='box' key={i}>
            <img src="./image/0.gif" alt="moku" />
            <h1></h1>
            <h2></h2>
          </div>
        )
      })
      } */}
    </div>
  );
}

export default App;
