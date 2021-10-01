import React, { Component } from 'react';
import './Main.scss';

class Comment extends Component {
  clickLike = () => {
    const { isLiked } = this.props;
    this.setState({
      isLiked: true,
    });
  };

  render() {
    const { info } = this.props;
    return (
      <>
        <li className="chatBox">
          <div className="commendId">
            {info.userName}
            <span className="commend">{info.content}</span>
          </div>
          <div className="binheartBox">
            <i
              className={
                this.props.isLiked
                  ? 'comment_like fas fa-heart'
                  : 'comment_like far fa-heart'
              }
              onClick={this.clickLike}
            />
          </div>
        </li>
      </>
    );
  }
}

export default Comment;
