import React from 'react';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  // feedData.json에서 피드 데이터 가져오기
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
        {/* FeedItem 엘리먼트 생성 */}
        {this.state.feedList.map(feed => {
          const {
            id,
            userId,
            userImage,
            feedImage,
            likedAccount,
            likedAccountImage,
            like,
            content,
          } = feed;

          return (
            <FeedItem
              key={id}
              feedId={id}
              userId={userId}
              userImage={userImage}
              feedImage={feedImage}
              likedAccount={likedAccount}
              likedAccountImage={likedAccountImage}
              like={like}
              content={content}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
