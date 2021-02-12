import React, { Component } from 'react';
import * as api from '../api';

class PublishArticle extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    topic: '',
    topics: []
  };

  componentDidMount = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };

  render() {
    const { title, body, topics } = this.state;
    console.log(this.state);
    return (
      <form>
        <input placeholder="Article Name" id="title" />
        <select id="topic">
          <option>Select Topic</option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
        <textarea rows="10" placeholder="Article Body" id="body" />
        <button>Post Article</button>
      </form>
    );
  }
}

export default PublishArticle;
