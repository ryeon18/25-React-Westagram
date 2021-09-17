import React from 'react';
import '../Main/Comment.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="comments_row">
        <p>
          <span className="user_id">{this.props.userId}</span>
          {this.props.content}
        </p>
        <div className="comments_menu">
          <i
            className="comment_like far fa-heart"
            onclick="toggleLike(this)"
          ></i>
          <i
            className="comment_delete far fa-trash-alt"
            onclick="deleteComment(this)"
          ></i>
        </div>
      </div>
    );
  }
}

export default Comment;
