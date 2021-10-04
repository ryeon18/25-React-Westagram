import React from 'react';

class Comment extends React.Component {
  render() {
    const { commentBox, isHeartChange, changeHeartColor } = this.props;
    return (
      <ul>
        {commentBox.map(comment => (
          <li key={comment.id}>
            <div>
              <span>{comment.userId}</span>
              {comment.content}
            </div>
            <button onClick={changeHeartColor}>
              <img
                alt="checkingHeart"
                src="/images/seyeonPark/heart-regular.svg"
                width="12px"
                className={isHeartChange ? 'likeHeart' : 'isHeartChange'}
              />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Comment;
