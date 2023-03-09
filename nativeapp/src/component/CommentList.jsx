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
          // iife ()
          newCommentText === "" || newCommentName === ""
            ? // 버튼을 클릭했을떄 이름과 댓글중에 어느하나가 true인경우 실행함
              alert("이름과 댓글을 입력하세요")
            : setCommentList([
                { name: newCommentText, comment: newCommentName },
                ...commentList,
              ]);
          // State변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
          // // onChange 이벤트는 input요소에서 값이 변경될때변경
          // 그떄 발생한 이벤트를 매개변수 e
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
