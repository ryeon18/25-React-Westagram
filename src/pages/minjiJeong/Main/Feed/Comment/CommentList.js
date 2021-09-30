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
            onClick={this.handleToggleLike}
          ></i>
          <i
            className="comment_delete far fa-trash-alt"
            onClick={this.handleRemoveComment}
          ></i>
        </div>
      </div>
    );
  }

  // Comment 컴포넌트에서 받아온 함수 받기
  handleToggleLike = () => {
    this.props.toggleLike(this.props.id);
  };

  handleRemoveComment = () => {
    this.props.removeComment(this.props.id);
  };
}

export default Comment;
