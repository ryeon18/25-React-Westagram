import React, { Component } from 'react';
import CommentList from './CommentList';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentView: [],
      comments: '',
    };
  }

  getCommentValue = e => {
    this.setState({
      comments: e.target.value,
    });
  };

  uploadComment = e => {
    this.state.commentView.push({
      userId: 'dltjsgho',
      content: this.state.comments,
    });

    this.setState({ comments: '' });
  };

  handleEnter = e => {
    const { comments } = this.state;
    if (e.code === 'Enter' && comments.length > 0) {
      e.preventDefault();
      this.uploadComment();
    }
  };

  render() {
    return (
      <>
        <div className="comment-view">
          <p className="likeText">좋아요 563개</p>
          <ul className="comments">
            <li>
              <b>여니여니</b>&nbsp; 호주갬성
            </li>
            {this.state.commentView.map((el, idx) => {
              return (
                <CommentList
                  key={idx}
                  content={el.content}
                  userId={el.userId}
                />
              );
            })}
          </ul>
          <p className="date">1일 전</p>
        </div>
        <form className="write">
          <div className="writeInner">
            <button className="emoticon">
              <i className="far fa-smile"></i>
            </button>
            <input
              className="commentInput"
              placeholder="댓글 달기..."
              name="inputValue"
              value={this.state.comments}
              onKeyPress={this.handleEnter}
              onChange={this.getCommentValue}
            />
            <button
              onClick={this.uploadComment}
              className="submit"
              type="button"
            >
              게시
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Comment;
