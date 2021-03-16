import '../styles/CommentsList.css';
import React from 'react';
import AddComment from './AddComment';
import CommentCard from './CommentCard';

const CommentsList = ({
  comments,
  article_id,
  updateComments,
  removeComment
}) => {
  return (
    <main className="commentslist">
      <AddComment article_id={article_id} updateComments={updateComments} />
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            {...comment}
            removeComment={removeComment}
          />
        );
      })}
    </main>
  );
};

export default CommentsList;
