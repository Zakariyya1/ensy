import React from 'react';
import AddComment from './AddComment';
import CommentCard from './CommentCard';

const CommentsList = ({ comments }) => {
  return (
    <>
      <AddComment />
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </>
  );
};

export default CommentsList;
