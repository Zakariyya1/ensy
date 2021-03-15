import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = (props) => {
  return (
    <section className="articlecard">
      <h3>
        <Link to={`/articles/${props.article_id}`}>{props.title}</Link>{' '}
      </h3>
      <p>
        by <Link to={`/users/${props.author}/articles`}>{props.author}</Link>{' '}
      </p>
      <p>topic: {`${props.topic}`}</p>
      <p>comments | {`${props.comment_count}`}</p>
      <p>votes | {`${props.votes}`}</p>
    </section>
  );
};

export default ArticleCard;
