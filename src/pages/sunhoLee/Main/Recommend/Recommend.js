import React, { Component } from 'react';

class Recommend extends Component {
  render() {
    return (
      <div className="recommend">
        <div className="recommend-txt">
          <p>회원님을 위한 추천</p>
          <p>모두 보기</p>
        </div>
        <div className="people">
          <div className="people-img img-box">
            <img src="/images/sunhoLee/img7.jpeg" alt="images" />
          </div>
          <div className="people-name">
            <p>dltjsgho</p>
            <p>이선호</p>
          </div>
        </div>
        <div className="people">
          <div className="people-img img-box">
            <img src="/images/sunhoLee/img7.jpeg" alt="images" />
          </div>
          <div className="people-name">
            <p>dltjsgho</p>
            <p>이선호</p>
          </div>
        </div>
        <div className="people">
          <div className="people-img img-box">
            <img src="/images/sunhoLee/img7.jpeg" alt="images" />
          </div>
          <div className="people-name">
            <p>dltjsgho</p>
            <p>이선호</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
