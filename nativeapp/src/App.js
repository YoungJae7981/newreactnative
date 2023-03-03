import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let user = "youngjae";
  let [count, setCount] = useState(0);
  let [counter, setCount1] = useState(0);
  let [title, setTitle] = useState([
    "DW아카데미501호",
    "DW아카데미502호",
    "DW아카데미503호",
  ]);

  let [bgColor, setBgColor] = useState("white");

  let changeBg = () => {
    let newBg = bgColor == "" ? "red" : "#87CEFA";
    setBgColor(newBg);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>안녕 {user}!</h1>
      <p>이건 리액트 앱이야</p>
      <div>
        <p>On click+{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          눌러
        </button>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <span
          onClick={() => {
            setCount1(counter + 1);
          }}
        >
          💥+{counter}
        </span>
        <p>안녕. 나는 김영재야</p>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <span
          onClick={() => {
            setCount1(counter + 1);
          }}
        >
          💥+{counter}
        </span>
        <p>안녕. 나는 김영재야</p>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <span
          onClick={() => {
            setCount1(counter + 1);
          }}
        >
          💥+{counter}
        </span>
        <p>안녕. 나는 김영재야</p>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "리액트 너무 어려워요";
          setTitle(copy);
        }}
      >
        글변경
      </button>
      <button
        onClick={() => {
          let copy1 = [...title];
          copy1 = copy1.sort();
          setTitle(copy1);
        }}
      >
        글정렬
      </button>
      <button onClick={changeBg}>배경색변경</button>
    </div>
  );
}

export default App;
