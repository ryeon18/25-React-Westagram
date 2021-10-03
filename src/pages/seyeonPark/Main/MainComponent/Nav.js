import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="mainHearder">
        <div className="mainLogoContainer">
          <div className="logo">
            <a className="logoimg" href="/login-seyeon">
              <img alt="instagramLogo" src="/images/seyeonPark/instagram.png" />
            </a>
          </div>
          <a className="h1" href="/">
            Westagram
          </a>
        </div>
        <div className="search">
          <input type="search" placeholder="검색" />
          <img
            id="searchimg"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
            alt="searchimage"
          />
        </div>
        <div className="manuIcons">
          <img alt="explore" src="/images/seyeonPark/explore.png" />
          <a href="/">
            <img alt="like" src="/images/seyeonPark/heart.png" />
          </a>
          <a href="/">
            <img alt="profile" src="/images/seyeonPark/profile.png" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
