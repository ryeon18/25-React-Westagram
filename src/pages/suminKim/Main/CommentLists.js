import React, { Component } from 'react';
import Comment from './Comment';

let id = 3;

class CommentLists extends Component {
  render() {
    console.log(this.props.commentList);
    const { commentList } = this.props;
    const list = commentList.map(info => <Comment info={info} />);

    return <>{list}</>;
  }
}

export default CommentLists;
