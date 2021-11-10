import React from 'react';
import CommentList from './CommentList';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
      isLiked: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentDataSeyeon.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ commentBox: data });
      });
  }

  getInputValue = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  uploadComment = () => {
    const { commentBox, comment } = this.state;
    if (comment.length === 0) return;
    const newCommentBox = [
      ...commentBox,
      {
        id: commentBox.length + 1,
        userId: '12시에 만나요 부라보콘 ',
        content: comment,
        isLiked: false,
      },
    ];
    this.setState({ commentBox: newCommentBox, comment: '' });
  };

  enterEvent = e => {
    if (e.key === 'Enter') {
      this.uploadComment();
    }
  };

  handleLiked = id => {
    this.setState({
      commentBox: this.state.commentBox.map(el =>
        el.id === id ? { ...el, isLiked: !el.isLiked } : el
      ),
    });
  };

  deleteComment = id => {
    const { commentBox } = this.state;
    const deletedCommentList = commentBox.filter(item => item.id !== id);
    this.setState({ commentBox: deletedCommentList });
  };

  render() {
    const { commentBox, comment } = this.state;
    return (
      <div className="thirdMessage">
        {commentBox.map(comment => {
          const { id, userId, content, isLiked } = comment;
          return (
            <CommentList
              key={id}
              id={id}
              userId={userId}
              content={content}
              isLiked={isLiked}
              handleLiked={this.handleLiked}
              deleteComment={this.deleteComment}
            />
          );
        })}
        <div className="commentTime">
          <span>42분전</span>
        </div>
        <div className="inputComment">
          <input
            className="input"
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            onChange={this.getInputValue}
            onKeyPress={this.enterEvent}
          />
          <button className="uploadButton" onClick={this.uploadComment}>
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
