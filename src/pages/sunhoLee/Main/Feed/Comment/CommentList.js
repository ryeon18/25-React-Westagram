import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <li>
        <b>{this.props.userId}</b>&nbsp; {this.props.content}
      </li>
    );
  }
}

export default CommentList;
