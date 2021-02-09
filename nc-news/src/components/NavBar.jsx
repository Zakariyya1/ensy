import React, { Component } from 'react';
import * as api from '../api';

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchTopics().then(({ topics }) => {
      this.setState({ topics: topics, isLoading: false });
    });
  }
  render() {
    return <p>NavBar</p>;
  }
}

export default NavBar;
