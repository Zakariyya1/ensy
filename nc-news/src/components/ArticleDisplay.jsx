import React, { Component } from 'react';
import * as api from '../api';

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
        <article>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </article>
      </main>
    );
  }
}

export default ArticleDisplay;
