import React, { Component } from 'react';
import * as api from '../api';
import ArticleCard from './ArticleCard';

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
          return <ArticleCard key={`${article.article_id}`} {...article} />;
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
