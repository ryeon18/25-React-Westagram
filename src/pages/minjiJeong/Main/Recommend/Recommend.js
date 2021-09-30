import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    return (
      <div className="recommend_friends">
        <div className="recommend_header">
          <h5>회원님을 위한 추천</h5>
          <Link className="show_all" to="/">
            모두 보기
          </Link>
        </div>
        <div className="recommend_contents">
          <div className="recommend_row">
            <Profile
              imageSize="profile_s"
              image="images/minjiJeong/mount.jpg"
              userId="haedal"
              description="timmie님 외 2명이 친구입니다."
            />
            <a className="btn_follow" href="/">
              팔로우
            </a>
          </div>
          <div className="recommend_row">
            <Profile
              imageSize="profile_s"
              image="images/minjiJeong/puppy.png"
              userId="star_coffee"
              description="before_sunrise님 외 1명이 친구입니다."
            />
            <a className="btn_follow" href="/">
              팔로우
            </a>
          </div>
          <div className="recommend_row">
            <Profile
              imageSize="profile_s"
              image="images/minjiJeong/bingsu.jpg"
              userId="sooooya"
              description="fairy_yoon님 외 3명이 친구입니다."
            />
            <a className="btn_follow" href="/">
              팔로우
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
