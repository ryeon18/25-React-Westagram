import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="wrap">
          <div className="logo">
            <a href="http://localhost:3001/main.html">Westagram</a>
          </div>
          <div className="search">
            <input type="text" id="searchTxt" placeholder="검색" />
          </div>
          <div className="user">
            <a href="#" className="around">
              <img src="/images/sunhoLee/explore.png" alt="explore" />
            </a>
            <a href="#" className="like">
              <img src="/images/sunhoLee/heart.png" alt="heart" />
            </a>
            <a href="#" className="myPage">
              <img src="/images/sunhoLee/profile.png" alt="profile" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
