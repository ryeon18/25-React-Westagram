import React from 'react';
import '../Main/Comment.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="comments_row">
        <p>
          <span className="user_id">{this.props.userId}</span>
          {this.props.content}
        </p>
        <div className="comments_menu">
          <i
            className={
              this.state.isLiked
                ? 'comment_like fas fa-heart'
                : 'comment_like far fa-heart'
            }
            onClick={this.toggleLike}
          ></i>
          <i className="comment_delete far fa-trash-alt" onClick={() => {}}></i>
        </div>
      </div>
    );
  }
}

export default Comment;
