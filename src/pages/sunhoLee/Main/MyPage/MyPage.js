import React, { Component } from 'react';
import '../MyPage/MyPage.scss';

class MyPage extends Component {
  render() {
    return (
      <div className="myHome">
        <div className="myHomeImg img-box">
          <img src="/images/sunhoLee/img7.jpeg" alt="images" />
        </div>
        <div className="myName">
          <p>dltjsgho</p>
          <p>이선호</p>
        </div>
        <a href="#">전환</a>
      </div>
    );
  }
}

export default MyPage;
