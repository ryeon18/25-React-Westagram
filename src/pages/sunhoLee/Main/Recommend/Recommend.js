import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import RECOMMEND_DATA from '../Recommend/Recommend_Data';
import '../Recommend/Recommend.scss';

class Recommend extends Component {
  render() {
    return (
      <div className="recommend">
        <div className="recommend-txt">
          <p>회원님을 위한 추천</p>
          <Link to="/">
            <p>모두 보기</p>
          </Link>
        </div>
        <div className="recommend_inner">
          {RECOMMEND_DATA.map(data => {
            return (
              <Profile
                id={data.id}
                userId={data.userId}
                image={data.image}
                recommend={data.recommend}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recommend;
