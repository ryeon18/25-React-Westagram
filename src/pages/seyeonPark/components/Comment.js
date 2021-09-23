import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
    };
  }
  getInputValue = e => {
    this.setState({
      comment: e.target.value,
    });
  };
  render() {
    return (
      <>
        <input
          className="input"
          type="text"
          placeholder="댓글 달기..."
          value={this.Comment}
          onChange={this.getInputValue}
          onKeyPress={this.addElement}
        />
      </>
    );
  }
}

export default Comment;
