import '../styles/ArticleCard.css';
import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = (props) => {
  return (
    <section className="articlecard">
      <h3 className="title  ">
        <Link to={`/articles/${props.article_id}`}>{props.title}</Link>{' '}
      </h3>
      <p className="by">
        by <Link to={`/users/${props.author}/articles`}>{props.author}</Link>{' '}
      </p>
      <p className="topic">topic: {`${props.topic}`}</p>
      <p className="commentnumber">
        {`${props.comment_count}`} 💬 {`${props.votes}`} 👍{' '}
      </p>
    </section>
  );
};

export default ArticleCard;
