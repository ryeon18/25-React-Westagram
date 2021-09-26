import React from 'react';
import './CommentList.scss';

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
            className={
              this.props.isLiked
                ? 'comment_like fas fa-heart'
                : 'comment_like far fa-heart'
            }
            onClick={() => this.props.toggleLike(this.props.id)}
          ></i>
          <i
            className="comment_delete far fa-trash-alt"
            onClick={() => {
              this.props.removeComment(this.props.id);
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default Comment;
