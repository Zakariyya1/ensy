import React, { Component } from 'react';
import * as api from '../api';

class PublishArticle extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    topic: '',
    topics: [],
    submitted: false
  };

  componentDidMount = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    this.setState({ submitted: true });
  };

  render() {
    const { title, body, topic, topics, submitted } = this.state;

    if (submitted) return <p>Article submitted for review</p>;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Title"
          id="title"
          value={title}
          onChange={this.handleChange}
          required
        />
        <select id="topic" onChange={this.handleChange} required>
          <option value={topic} onChange={this.handleChange} required>
            Select Topic
          </option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
        <textarea
          rows="10"
          placeholder="Article Body"
          id="body"
          value={body}
          onChange={this.handleChange}
          required
        />
        <button>Post Article</button>
      </form>
    );
  }
}

export default PublishArticle;
