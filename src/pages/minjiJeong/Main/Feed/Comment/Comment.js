import React from 'react';
import CommentList from './CommentList';
import './Comment.scss';
import COMMENT_LIST from './commentData';

// 댓글 추가시 배열에 key값 추가해주기 위한 변수
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

  // 상수데이터 COMMENT_LIST에서 key값으로 해당 feedId를 가지고 있는 댓글 배열 state에 저장
  componentDidMount = () => {
    this.setState({
      commentList: COMMENT_LIST[this.props.feedId],
    });
  };

  getComment = e => {
    this.setState({
      content: e.target.value,
    });
  };

  uploadComment = e => {
    const newCommentList = this.state.commentList.concat({
      id: id,
      userId: '_minji.Jeong',
      content: this.state.content,
      isLiked: false,
    });
    this.setState({ commentList: newCommentList, content: '' });
    id++;
  };

  handleEnter = e => {
    if (e.code === 'Enter') {
      // textarea 초기화 된 뒤에 enter 입력되는거 방지
      e.preventDefault();
      this.uploadComment();
    }
  };

  removeComment = id => {
    const deletedCommentList = this.state.commentList.filter(
      item => item.id !== id
    );

    this.setState({
      commentList: deletedCommentList,
    });
  };

  // like toggle되어 값이 변경되었을 때, 그 값을 commentList 배열에 다시 넣어줌
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
          {this.state.commentList.map(comment => {
            const { id, userId, content, isLiked } = comment;
            return (
              <CommentList
                key={id}
                id={id}
                userId={userId}
                content={content}
                isLiked={isLiked}
                toggleLike={this.toggleLike}
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
