import React from 'react';

class AsideStory extends React.Component {
  render() {
    return (
      <article className="recommend">
        <section className="sideRecommend">
          <span>회원님을 위한 추천</span>
          <span className="showAll">모두 보기</span>
        </section>
        <section className="sideRecommendList">
          <section className="recommendUser">
            <img
              className="sideprofileimge2"
              alt="sideprofileimg"
              src="/images/seyeonPark/profile2.jpeg"
            />
            <div className="userInfo2">
              <p>
                <a className="sideId" href="/">
                  sleepy
                </a>
              </p>
              <span>언제나졸려님 외 3명이 좋아합니다</span>
            </div>
            <div className="followButton">
              <a href="/">팔로우</a>
            </div>
          </section>
          <section className="recommendUser">
            <img
              className="sideprofileimge2"
              alt="sideprofileimg"
              src="/images/seyeonPark/profile3.jpeg"
            />
            <div className="userInfo2">
              <p>
                <a className="sideId" href="/">
                  오혁-소녀
                </a>
              </p>
              <span>노래는좋아님 외 2명이 좋아합니다</span>
            </div>
            <div className="followButton">
              <a href="/">팔로우</a>
            </div>
          </section>
          <section className="recommendUser">
            <img
              className="sideprofileimge2"
              alt="sideprofileimg"
              src="/images/seyeonPark/profile4.jpeg"
            />
            <div className="userInfo2">
              <p>
                <a className="sideId" href="/">
                  이구이-아마도
                </a>
              </p>
              <span>뚜루뚜룹빠빠노래님 외 22명이 좋아합니다</span>
            </div>
            <div className="followButton">
              <a href="/">팔로우</a>
            </div>
          </section>
        </section>
      </article>
    );
  }
}

export default AsideStory;
