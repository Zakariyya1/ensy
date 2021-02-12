import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = (props) => {
  return (
    <section className="articlecard">
      <h3>
        <Link to={`/${props.article_id}`}>{props.title}</Link>{' '}
      </h3>
      <p>by {`${props.author}`}</p>
      <p>topic: {`${props.topic}`}</p>
      <p>comments | {`${props.comment_count}`}</p>
      <p>votes | {`${props.votes}`}</p>
    </section>
  );
};

export default ArticleCard;
