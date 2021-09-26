import React from 'react';

class Comment extends React.Component {
  render() {
    const { commentBox } = this.props;
    return (
      <>
        <ul>
          {commentBox.map(comment => (
            <li key={comment.id}>
              <span>{comment.userId}</span>
              {comment.content}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Comment;
