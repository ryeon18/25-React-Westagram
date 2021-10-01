import React, { Component } from 'react';
import Item from './Item';
import '../Feed/Feed.scss';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="contents">
        {feedList.map(e => {
          return (
            <Item
              key={e.id}
              feedId={e.id}
              userId={e.userId}
              feedImage={e.feedImage}
              likedAccount={e.likedAccount}
              likedAccountImage={e.likedAccountImage}
              like={e.like}
              content={e.content}
              comments={e.comments}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
