import React, { Component } from 'react';
import CommentList from './CommentList';

let id = 4;

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentView: [],
      comments: '',
    };
  }

  componentDidMount() {
    this.setState({ commentView: this.props.comment });
  }

  getCommentValue = e => {
    this.setState({
      comments: e.target.value,
    });
  };

  uploadComment = e => {
    if (this.state.comments.length > 0) {
      this.state.commentView.push({
        id: id,
        userId: 'dltjsgho',
        content: this.state.comments,
      });

      id++;
    }
    this.setState({ comments: '' });
  };

  handleEnter = e => {
    console.log('>>>>>>');
    e.preventDefault();
    const { comments } = this.state;
    if (comments.length > 0) {
      this.uploadComment();
    }
  };

  render() {
    return (
      <>
        <div className="comment-view">
          <ul className="comments">
            {this.state.commentView.map(el => {
              return (
                <CommentList
                  key={el.id}
                  userId={el.userId}
                  content={el.content}
                />
              );
            })}
            {this.state.CommentList}
          </ul>
          <p className="date">1일 전</p>
        </div>
        <form className="write" onSubmit={this.handleEnter}>
          <div className="writeInner">
            <button className="emoticon">
              <i className="far fa-smile"></i>
            </button>
            <input
              className="commentInput"
              placeholder="댓글 달기..."
              name="inputValue"
              value={this.state.comments}
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
