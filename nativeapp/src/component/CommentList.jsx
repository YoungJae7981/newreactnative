import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김영재1",
    comment: "안녕하세요. 김영재 입니다.",
  },
  {
    name: "김영재2",
    comment: "리액트 재밌다~!",
  },
  {
    name: "김영재3",
    comment: "리액트 재미없어!!",
  },
];

function App() {
  const [comments, setComments] = useState([]);

  const handleRemoveComment = (idToRemove) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== idToRemove
    );
    setComments(updatedComments);
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          comment={comment.comment}
          onRemove={handleRemoveComment}
        />
      ))}
    </div>
  );
}

export default App;
