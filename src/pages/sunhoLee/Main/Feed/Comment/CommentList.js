import React, { Component } from 'react';
import './CommentList.scss';

class CommentList extends Component {
  handleRemoveComment = () => {
    this.props.removeComment(this.props.id);
  };

  render() {
    return (
      <li className="commentLsit">
        <p>
          <b>{this.props.userId}</b>&nbsp; {this.props.content}
        </p>
        <div className="comments_menu">
          {/* <i className="fas fa-heart"></i> */}
          <p className="delete" onClick={this.handleRemoveComment}>
            X
          </p>
        </div>
      </li>
    );
  }
}

export default CommentList;
