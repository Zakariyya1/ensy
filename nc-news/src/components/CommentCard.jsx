import React from 'react';
import * as api from '../api';

const CommentCard = (props) => {
  const deleteComment = () => {
    api.deleteComment(props.comment_id).then(({ status }) => {
      if (status === 204) {
        props.removeComment(props.comment_id);
      }
    });
  };

  const isAuthor = props.author === 'weegembump';
  return (
    <>
      <p>{props.body}</p>
      {isAuthor ? (
        <button onClick={deleteComment}>Delete Comment</button>
      ) : (
        false
      )}
    </>
  );
};

export default CommentCard;
