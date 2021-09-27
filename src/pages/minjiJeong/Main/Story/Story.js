import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    return (
      <div className="new_stories">
        <div className="stories_header">
          <h5>스토리</h5>
          <a className="show_all" href="/">
            모두 보기
          </a>
        </div>
        <div className="stories_row">
          <div className="show_account">
            <img
              className="profile_s"
              alt="cat"
              src="images/minjiJeong/chris.jpg"
            />
            <div>
              <h5 className="user_id">yang_chris</h5>
              <h5 className="time_ago">10분 전</h5>
            </div>
          </div>
          <div className="show_account">
            <img
              className="profile_s"
              alt="dog"
              src="images/minjiJeong/acid.png"
            />
            <div>
              <h5 className="user_id">acid_rain</h5>
              <h5 className="time_ago">16분 전</h5>
            </div>
          </div>
          <div className="show_account">
            <img
              className="profile_s"
              alt="sunrise"
              src="images/minjiJeong/sun.jpg"
            />
            <div>
              <h5 className="user_id">before_sunrise</h5>
              <h5 className="time_ago">33분 전</h5>
            </div>
          </div>
          <div className="show_account">
            <img
              className="profile_s"
              alt="blue_lazer"
              src="images/minjiJeong/lazer.png"
            />
            <div>
              <h5 className="user_id">kyeong_hoooonie</h5>
              <h5 className="time_ago">1시간 전</h5>
            </div>
          </div>
          <div className="show_account">
            <img
              className="profile_s"
              alt="fairy"
              src="images/minjiJeong/fairy.jpg"
            />
            <div>
              <h5 className="user_id">fairy_yooon</h5>
              <h5 className="time_ago">5시간 전</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
