import React from 'react';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedDataSeyeon.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ feedList: data });
      });
  }
  render() {
    const { feedList } = this.state;
    return (
      <div className="feedContainer">
        {feedList.map(el => {
          return (
            <div key={el.id} className="feedBox">
              <div className="feed">
                <FeedItem
                  feedUserId={el.feedUserId}
                  feedUserImg={el.feedUserImg}
                  feedImg={el.feedImg}
                  likeUserId={el.likeUserId}
                  likeAmount={el.likeAmount}
                  commentBox={el.commentBox}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Feed;
