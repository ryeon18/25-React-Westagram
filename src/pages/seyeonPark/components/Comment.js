import React from 'react';

class Comment extends React.Component {
  render() {
    const { commentBox } = this.props;
    return (
      <>
        <ul>
          {commentBox.map((comment, indx) => (
            <li key={indx}>
              <span>남이 해준 맛있는 라면 </span>
              {comment.commentValue}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Comment;
