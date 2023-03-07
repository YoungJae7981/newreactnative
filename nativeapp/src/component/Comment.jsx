import React from "react";
import { useState } from "react";
// import './Comment.css'

const style = {
  display: "flex",
  margin: "8px",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "16px",
};

const style1 = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

function Comment(props) {
  return (
    <div className="Wrapper" style={style}>
      <div className="img-box">
        <img
          src="http://img.wemep.co.kr/deal/4/776/3107764/ff06f36ad37199026bf3545cb40ff34348762c0d.jpg"
          alt="user-img"
        />
      </div>

      <div
        className="content-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "8px",
        }}
      >
        <span className="name-text">{props.name}</span>
        <span className="comment-text">{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
