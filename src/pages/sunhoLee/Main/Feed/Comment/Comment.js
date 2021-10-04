import React, { Component } from 'react';
import CommentList from './CommentList';
import '../Comment/Comment.scss';

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
    this.setState({
      commentView: this.props.comments,
    });
  }

  getCommentValue = e => {
    this.setState({
      comments: e.target.value,
    });
  };

  uploadComment = e => {
    if (this.state.comments.length > 0) {
      const newComment = this.state.commentView.concat({
        id: Date.now(),
        userId: 'dltjsgho',
        content: this.state.comments,
      });
      id++;
      this.setState({ commentView: newComment, comments: '' });
    }
  };

  removeComment = id => {
    const deletedComment = this.state.commentView.filter(
      item => item.id !== id
    );

    this.setState({
      commentView: deletedComment,
    });
    console.log('>>>>');
  };

  handleEnter = e => {
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
            {this.state.commentView.map(comment => {
              const { id, userId, content } = comment;
              return (
                <CommentList
                  key={id}
                  id={id}
                  userId={userId}
                  content={content}
                  removeComment={this.removeComment}
                />
              );
            })}
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
