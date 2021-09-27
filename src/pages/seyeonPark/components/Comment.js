import React from 'react';

class Comment extends React.Component {
  render() {
    const { commentBox, isHeartChange, changeHearColor } = this.props;
    return (
      <>
        <ul>
          {commentBox.map(comment => (
            <li key={comment.id}>
              <div>
                <span>{comment.userId}</span>
                {comment.content}
              </div>
              <button onClick={changeHearColor}>
                <img
                  alt="checkingHeart"
                  src="../../images/seyeonPark/heart.png"
                  width="12px"
                  style={{
                    color: isHeartChange ? 'red' : 'black',
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Comment;
