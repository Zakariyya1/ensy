import React from 'react';
import * as api from '../api';
import { formatDate } from '../utils/utils';
import { Link } from '@reach/router';

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
      <p>
        by{' '}
        <Link to={`/users/${props.author}/articles`}>{`${props.author}`}</Link>{' '}
        on {formatDate(props.created_at)}
      </p>
      {isAuthor ? (
        <button onClick={deleteComment}>Delete Comment</button>
      ) : (
        false
      )}
    </>
  );
};

export default CommentCard;
