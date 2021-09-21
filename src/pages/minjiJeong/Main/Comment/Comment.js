import React from 'react';
import CommentList from './CommentList';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '_minji.jeong',
      commentList: [],
      content: '',
    };
  }

  getComment = e => {
    this.setState({
      content: e.target.value,
    });
  };

  uploadComment = e => {
    this.state.commentList.push({
      text: this.state.content,
    });
    this.setState({ content: '' });
  };

  handleEnter = e => {
    if (e.code === 'Enter') {
      this.uploadComment();
    }
  };

  removeComment = deleteList => {
    const newArr = this.state.commentList.filter(
      (item, index) => index !== deleteList.props.listId
    );

    this.setState({
      commentList: newArr,
    });
  };

  render() {
    return (
      <>
        <div className="article_comments">
          {/* 추가된 댓글 위치 */}
          {this.state.commentList.map((el, index) => {
            return (
              <CommentList
                key={index}
                listId={index}
                userId={this.state.userId}
                content={el.text}
                removeComment={this.removeComment}
              />
            );
          })}
        </div>
        <div className="time_ago">
          <span className="pass_time">42</span>분 전
        </div>
        <div className="add_comment">
          <textarea
            cols="30"
            rows="1"
            placeholder="댓글 달기..."
            onChange={this.getComment}
            onKeyPress={this.handleEnter}
            value={this.state.content}
          ></textarea>
          <button
            className="btn_upload"
            type="button"
            onClick={this.uploadComment}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
