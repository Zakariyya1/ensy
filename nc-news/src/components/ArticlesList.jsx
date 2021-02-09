import React, { Component } from 'react';
import * as api from '../api';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;
    return (
      <main>
        {articles.map((article) => {
          return <p key={`${article.article_id}`}>{`${article.title}`}</p>;
        })}
      </main>
    );
  }

  getArticles = () => {
    api.fetchArticles().then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
