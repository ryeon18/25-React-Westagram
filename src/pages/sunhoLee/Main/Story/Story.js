import React, { Component } from 'react';
import '../Story/Story.scss';

class Story extends Component {
  render() {
    return (
      <div className="story">
        <div className="story-txt">
          <p>스토리</p>
          <p>모두 보기</p>
        </div>
        <div className="people">
          <div className="people-img img-box">
            <img src="/images/sunhoLee/img6.jpeg" alt="images" />
          </div>
          <div className="people-name">
            <p>dltjsgho</p>
            <p>이선호</p>
          </div>
        </div>
        <div className="people">
          <div className="people-img img-box">
            <img src="/images/sunhoLee/img4.jpeg" alt="images" />
          </div>
          <div className="people-name">
            <p>dltjsgho</p>
            <p>이선호</p>
          </div>
        </div>
        <div className="people">
          <div className="people-img img-box">
            <img src="/images/sunhoLee/img.jpeg" alt="images" />
          </div>
          <div className="people-name">
            <p>wecode</p>
            <p>위코드</p>
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

export default Story;
