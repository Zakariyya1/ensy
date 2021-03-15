import React, { Component } from 'react';
import * as api from '../api';

export default class AddComment extends Component {
  state = {
    comment: {
      body: '',
      username: 'weegembump'
    }
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ comment: { body: value, username: 'weegembump' } });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api
      .addComment(this.props.article_id, this.state.comment)
      .then(({ comment }) => this.props.updateComments(comment));

    this.setState({ comment: { body: '', username: 'weegembump' } });
  };

  render() {
    const {
      comment: { body }
    } = this.state;
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
