import '../styles/NavBar.css';
import { Link } from '@reach/router';
import React, { Component } from 'react';
import * as api from '../api';
import { SyncLoader } from 'react-spinners';

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <SyncLoader />;
    return (
      <nav className="navbar">
        <button className="publish">
          <Link to={`/publish`}>publish</Link>
        </button>
        {topics.map((topic) => {
          return (
            <button className={topic.slug} key={`${topic.slug}`}>
              <Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link>
            </button>
          );
        })}{' '}
      </nav>
    );
  }

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics: topics, isLoading: false });
    });
  };
}

export default NavBar;
