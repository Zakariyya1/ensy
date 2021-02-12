import React from 'react';
import CommentCard from './CommentCard';

const CommentsList = ({ comments }) => {
  console.log(comments);
  return (
    <>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </>
  );
};

export default CommentsList;
