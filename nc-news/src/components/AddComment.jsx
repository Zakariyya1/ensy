import React, { Component } from 'react';
import * as api from '../api';

export default class AddComment extends Component {
  state = {
    body: '',
    username: 'weegembump'
  };

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          rows="5"
          value={body}
          placeholder="Add your comment here"
          onChange={this.handleChange}
          id="body"
        />
        <button>Add Comment</button>
      </form>
    );
  }
}
