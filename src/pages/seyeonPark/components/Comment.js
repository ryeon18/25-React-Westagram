import React from 'react';

class Comment extends React.Component {
  render() {
    const { commentBox } = this.props;
    return (
      <>
        <ul>
          {commentBox.map((comment, indx) => (
            <li key={indx}>{comment.commentValue}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Comment;
