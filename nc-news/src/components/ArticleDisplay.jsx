import React, { Component } from 'react';
import * as api from '../api';
import { formatDate } from '../utils/utils';

class ArticleDisplay extends Component {
  state = {
    isLoading: true,
    article: {}
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    const { isLoading, article } = this.state;
    console.log(article);
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
          </article>
        )}
      </main>
    );
  }
}

export default ArticleDisplay;
