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

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles();
    }
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;
    return (
      <main className="articleslist">
        {this.props.topic && (
          <h3 className="articleslisth3">Topic: {`${this.props.topic}`}</h3>
        )}
        {articles.map((article) => {
          return <ArticleCard key={`${article.article_id}`} {...article} />;
        })}
      </main>
    );
  }

  getArticles = () => {
    this.setState({ isLoading: true });
    api.fetchArticles(this.props.topic).then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
