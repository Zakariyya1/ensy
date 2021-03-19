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
      <ul className="navbar">
        <li className="publish">
          <Link to={`/publish`}>publish</Link>
        </li>
        {topics.map((topic) => {
          return (
            <li className={topic.slug} key={`${topic.slug}`}>
              <Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}{' '}
      </ul>
    );
  }

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics: topics, isLoading: false });
    });
  };
}

export default NavBar;
