import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import './Story.scss';

class Story extends React.Component {
  render() {
    return (
      <div className="new_stories">
        <div className="stories_header">
          <h5>스토리</h5>
          <Link className="show_all" to="/">
            모두 보기
          </Link>
        </div>
        <div className="stories_row">
          <Profile
            imageSize="profile_s"
            image="images/minjiJeong/chris.jpg"
            userId="yang_chris"
            description="10분 전"
          />
          <Profile
            imageSize="profile_s"
            image="images/minjiJeong/acid.png"
            userId="acid_rain"
            description="5분 전"
          />
          <Profile
            imageSize="profile_s"
            image="images/minjiJeong/sun.jpg"
            userId="before_sunrise"
            description="33분 전"
          />
          <Profile
            imageSize="profile_s"
            image="images/minjiJeong/lazer.png"
            userId="kyeong_hoooonie"
            description="1시간 전"
          />
          <Profile
            imageSize="profile_s"
            image="images/minjiJeong/fairy.jpg"
            userId="fairy_yoon"
            description="3시간 전"
          />
        </div>
      </div>
    );
  }
}

export default Story;
