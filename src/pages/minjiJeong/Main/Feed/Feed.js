import React from 'react';
import FeedItem from './FeedItem';
import './Feed.scss';

class Feed extends React.Component {
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
    return (
      <div className="articles_area">
        {this.state.feedList.map(el => {
          return (
            <FeedItem
              key={el.id}
              userId={el.userId}
              userImage={el.userImage}
              feedImage={el.feedImage}
              likedAccount={el.likedAccount}
              like={el.like}
              content={el.content}
              comments={el.comments}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
