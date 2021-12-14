import React from 'react';
import RECOMEMED_DATA from './asideRecommendData';

class AsideStory extends React.Component {
  render() {
    return (
      <article className="recommend">
        <section className="sideRecommend">
          <span>회원님을 위한 추천</span>
          <span className="showAll">모두 보기</span>
        </section>
        <section className="sideRecommendList">
          {RECOMEMED_DATA.map(el => (
            <section className="recommendUser" key={el.id}>
              <img
                className="sideprofileimge2"
                alt="sideprofileimg"
                src={el.img}
              />
              <div className="userInfo2">
                <p>
                  <a className="sideId" href="/">
                    {el.userId}
                  </a>
                </p>
                <span>
                  {el.likedUserId}님 외 {el.likeCount}명이 좋아합니다
                </span>
              </div>
              <div className="followButton">
                <a href="/">팔로우</a>
              </div>
            </section>
          ))}
        </section>
      </article>
    );
  }
}

export default AsideStory;
