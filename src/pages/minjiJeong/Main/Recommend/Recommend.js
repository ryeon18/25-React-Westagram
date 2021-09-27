import React from 'react';
import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    return (
      <div className="recommend_friends">
        <div className="recommend_header">
          <h5>회원님을 위한 추천</h5>
          <a className="show_all" href="/">
            모두 보기
          </a>
        </div>
        <div className="recommend_contents">
          <div className="recommend_row">
            <img
              className="profile_s"
              alt="conference"
              src="images/minjiJeong/mount.jpg"
            />
            <div>
              <h5 className="user_id">haedal</h5>
              <h5 className="friends_info">jimmie님 외 2명이 친구입니다.</h5>
            </div>
            <a className="btn_follow" href="/">
              팔로우
            </a>
          </div>
          <div className="recommend_row">
            <img
              className="profile_s"
              alt="ocean"
              src="images/minjiJeong/juice.jpg"
            />
            <div>
              <h5 className="user_id">sooooya</h5>
              <h5 className="friends_info">chris_yang님과 친구입니다.</h5>
            </div>
            <a className="btn_follow" href="/">
              팔로우
            </a>
          </div>
          <div className="recommend_row">
            <img
              className="profile_s"
              alt="white_puppy"
              src="images/minjiJeong/puppy.png"
            />
            <div>
              <h5 className="user_id">star_coffee</h5>
              <h5 className="friends_info">
                before_sunrise님 외 1명이 친구입니다.
              </h5>
            </div>
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
