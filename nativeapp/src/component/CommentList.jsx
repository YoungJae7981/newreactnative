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
  const [commentList, setCommentList, newCommentText, setNewCommentText] =
    useState(comments);

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

      <button
        onClick={() => {
          setCommentList([
            { name: "김영재", comment: "하기싫다" },
            ...commentList,
          ]);
          setNewCommentText("");
        }}
      >
        글 추가
      </button>
    </div>
  );
}

export default CommentList;
