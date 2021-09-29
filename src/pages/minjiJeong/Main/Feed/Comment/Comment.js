import React from 'react';
import CommentList from './CommentList';
import './Comment.scss';

let id = 4;

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      content: '',
      isLiked: false,
    };
  }

  getComment = e => {
    this.setState({
      content: e.target.value,
    });
  };

  uploadComment = e => {
    this.state.commentList.push({
      id: id,
      userId: '_minji.jeong',
      content: this.state.content,
      isLiked: false,
    });

    this.setState({ content: '' });
    id++;
  };

  handleEnter = e => {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.uploadComment();
    }
  };

  removeComment = id => {
    const newArr = this.state.commentList.filter(item => item.id !== id);

    this.setState({
      commentList: newArr,
    });
  };

  toggleLike = id => {
    this.setState({
      commentList: this.state.commentList.map(el =>
        el.id === id ? { ...el, isLiked: !el.isLiked } : el
      ),
    });
  };

  render() {
    return (
      <>
        <div className="article_comments">
          {/* 추가될 댓글 위치 */}
          {this.props.commentList[0] &&
            this.props.commentList[0][this.props.feedId].map(comment => {
              return (
                <CommentList
                  key={comment.id}
                  id={comment.id}
                  userId={comment.userId}
                  content={comment.content}
                  isLiked={comment.isLiked}
                  toggleLike={this.handleToggleLike}
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
            className={`uploadBtn ${
              this.state.content ? 'activeBtn' : 'disableBtn'
            }`}
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
