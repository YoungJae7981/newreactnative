import { useState } from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김영재1",
    comment: "나는야 김영재.",
  },
  {
    name: "김영재 2",
    comment: "리액트는 재밌어요",
  },
  {
    name: "김영재 3",
    comment: "노잼",
  },
];

function CommentList() {
  const [commentList, setCommentList] = useState(comments);
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentName, setNewCommentName] = useState("");

  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  };
  return (
    <div>
      {commentList.map((comment, i) => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
            key={i}
            onDelete={() => deleteComment(i)}
          />
        );
      })}
      <h1>이름</h1>
      <input
        type="text"
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
      />

      <h1>댓글</h1>
      <input
        type="text"
        value={newCommentName}
        onChange={(e) => setNewCommentName(e.target.value)}
      />
      <button
        onClick={() => {
          setCommentList([
            { name: newCommentText, comment: newCommentName },
            ...commentList,
          ]);
          setNewCommentText(""); //이름
          setNewCommentName(""); //댓글
        }}
      >
        <h3>글 추가</h3>
      </button>
    </div>
  );
}

export default CommentList;
