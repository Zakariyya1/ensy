import React, { Component } from 'react';
import * as api from '../api';
import { formatDate } from '../utils/utils';
import CommentsList from './CommentsList';

class ArticleDisplay extends Component {
  state = {
    isLoading: true,
    article: {},
    comments: []
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    const { isLoading, article, comments } = this.state;

    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <article>
            <h2>{article.title}</h2>
            <p>
              by {`${article.author}`} on {`${formatDate(article.created_at)}`}
            </p>
            <p>{article.body}</p>
            <button onClick={this.fetchComments}>
              {article.comment_count} Comments
            </button>
            <CommentsList comments={comments} />
          </article>
        )}
      </main>
    );
  }

  fetchComments = () => {
    const { article_id } = this.props;

    api.getCommentsByArticleId(article_id).then((comments) => {
      this.setState({ comments });
    });
  };
}

export default ArticleDisplay;
