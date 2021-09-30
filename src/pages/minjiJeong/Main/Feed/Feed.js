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
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
