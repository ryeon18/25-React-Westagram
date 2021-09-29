import React from 'react';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      commentList: [],
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

    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
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
              feedId={el.id}
              userId={el.userId}
              userImage={el.userImage}
              feedImage={el.feedImage}
              likedAccount={el.likedAccount}
              likedAccountImage={el.likedAccountImage}
              like={el.like}
              content={el.content}
              commentList={this.state.commentList.filter(c => el.id in c)}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
