import React from 'react';

const ArticleCard = (props) => {
  return (
    <section className="articlecard">
      <h3>{`${props.title}`}</h3>
      <p>by {`${props.author}`}</p>
      <p>topic: {`${props.topic}`}</p>
      <p>comments | {`${props.comment_count}`}</p>
      <p>votes | {`${props.votes}`}</p>
    </section>
  );
};

export default ArticleCard;
