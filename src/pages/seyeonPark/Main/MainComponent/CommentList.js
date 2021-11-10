import React from 'react';

class CommentList extends React.Component {
  changeHeartColor = () => {
    this.props.handleLiked(this.props.id);
  };

  handleRemoveComment = () => {
    this.props.deleteComment(this.props.id);
  };
  render() {
    const { userId, content, isLiked } = this.props;
    return (
      <ul>
        <li className="commentList">
          <div className="commentContent">
            <span>{userId}</span>
            {content}
          </div>
          <div className="commentIcon">
            <i
              className={isLiked ? 'fas fa-heart changedColor' : 'far fa-heart'}
              onClick={this.changeHeartColor}
            />
            <i className="fas fa-times" onClick={this.handleRemoveComment} />
          </div>
        </li>
      </ul>
    );
  }
}

export default CommentList;
