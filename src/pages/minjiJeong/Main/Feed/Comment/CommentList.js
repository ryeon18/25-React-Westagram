import React from 'react';
import './CommentList.scss';

class Comment extends React.Component {
  // Comment 컴포넌트에서 받아온 함수 받기
  handleToggleLike = () => {
    this.props.toggleLike(this.props.id);
  };

  handleRemoveComment = () => {
    this.props.removeComment(this.props.id);
  };

  render() {
    const { id, userId, content, isLiked } = this.props;

    return (
      <div className="comments_row">
        <p>
          <span className="user_id">{userId}</span>
          {content}
        </p>
        <div className="comments_menu">
          <i
            className={
              isLiked
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
}

export default Comment;
