import React, { Component } from 'react';
import Item from '../Fedd/Item';
import FEED_DATA from '../FeedData';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      feedList: FEED_DATA,
    };
  }

  render() {
    return (
      <div className="contents">
        {this.state.feedList.map(e => {
          return (
            <Item
              key={e.id}
              userId={e.userId}
              feedImage={e.feedImage}
              likedAccount={e.likedAccount}
              likedAccountImage={e.likedAccountImage}
              like={e.like}
              content={e.content}
              comment={e.comments}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
