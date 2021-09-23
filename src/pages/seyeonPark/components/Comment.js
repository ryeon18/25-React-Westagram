import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.commentBox.map((comment, indx) => (
          <li key={indx}>{comment.commentValue}</li>
        ))}
      </>
    );
  }
}

export default Comment;
