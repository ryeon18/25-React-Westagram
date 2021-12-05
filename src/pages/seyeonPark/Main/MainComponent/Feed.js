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
    fetch('/data/feedDataSeyeon.json')
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
          const {
            id,
            feedUserImg,
            feedUserId,
            feedImg,
            likeUserId,
            likeAmount,
            commentBox,
          } = el;
          return (
            <div key={id} className="feedBox">
              <div className="feed">
                <FeedItem
                  feedId={id}
                  feedUserId={feedUserId}
                  feedUserImg={feedUserImg}
                  feedImg={feedImg}
                  likeUserId={likeUserId}
                  likeAmount={likeAmount}
                  commentBox={commentBox}
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
