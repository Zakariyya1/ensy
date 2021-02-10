import { Link } from '@reach/router';
import React, { Component } from 'react';
import * as api from '../api';

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
    if (isLoading) return <p>Loading...</p>;
    return (
      <nav className="navbar">
        <button>
          <Link to={`/`}>home</Link>
        </button>
        <button>
          <Link to={`/`}>publish article</Link>
        </button>
        {topics.map((topic) => {
          return (
            <button key={`${topic.slug}`}>
              <Link to={`/${topic.slug}/articles`}>{topic.slug}</Link>
            </button>
          );
        })}{' '}
      </nav>
    );
  }

  fetchTopics = () => {
    api.getTopics().then(({ data: { topics } }) => {
      this.setState({ topics: topics, isLoading: false });
    });
  };
}

export default NavBar;
