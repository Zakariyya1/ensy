import '../styles/ArticlesList.css';
import React, { Component } from 'react';
import * as api from '../api';
import ArticleCard from './ArticleCard';
import ErrorPage from './ErrorPage';
import { SyncLoader } from 'react-spinners';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    errorMessage: ''
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, isLoading, errorMessage } = this.state;

    if (errorMessage) return <ErrorPage msg={errorMessage} />;
    if (isLoading) return <SyncLoader />;
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

  fetchArticles = () => {
    this.setState({ isLoading: true });
    const { topic, username } = this.props;
    api
      .getArticles(topic, username)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(
        ({
          response: {
            data: { msg }
          }
        }) => {
          this.setState({ errorMessage: msg });
        }
      );
  };
}

export default ArticlesList;
