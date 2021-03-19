import '../styles/ArticleCard.css';
import React from 'react';
import { Link } from '@reach/router';
import Card from 'react-bootstrap/Card';

const ArticleCard = (props) => {
  return (
    <Card
      style={{
        width: '18rem',
        borderRadius: '0.5em'
      }}
      className="articlecard"
    >
      <Card.Body>
        <h2 className="title">
          <Link to={`/articles/${props.article_id}`}>{props.title}</Link>{' '}
        </h2>
        <Card.Text className="by">
          by <Link to={`/users/${props.author}/articles`}>{props.author}</Link>{' '}
        </Card.Text>
        <Card.Text className="topic">topic: {`${props.topic}`}</Card.Text>
        <Card.Text className="commentnumber">
          {`${props.comment_count}`} 💬 {`${props.votes}`} 👍{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
