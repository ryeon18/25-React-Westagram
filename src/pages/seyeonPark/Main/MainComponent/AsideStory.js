import React from 'react';

class AsideStory extends React.Component {
  render() {
    return (
      <article className="otherStory">
        <section className="otherStoryHead">
          <span>스토리</span>
          <span id="storyAll">모두 보기</span>
        </section>
        <section className="otherStoryList">
          <section className="storyuser">
            <img
              className="sideprofileimge2"
              alt="otherUserImg"
              src="../../images/seyeonPark/profile2.jpeg"
            />
            <div className="userInfo">
              <p>
                <a className="sideId" href="/">
                  못마땅
                </a>
              </p>
              <span>26분 전</span>
            </div>
          </section>
          <section className="storyuser">
            <img
              className="sideprofileimge2"
              alt="otherUserImg"
              src="../../images/seyeonPark/profile3.jpeg"
            />
            <div className="userInfo">
              <p>
                <a className="sideId" href="/">
                  넌노래를못부르지
                </a>
              </p>
              <span>15초 전</span>
            </div>
          </section>
          <section className="storyuser">
            <img
              className="sideprofileimge2"
              alt="otherUserImg"
              src="../../images/seyeonPark/profile4.jpeg"
            />
            <div className="userInfo">
              <p>
                <a className="sideId" href="/">
                  개그맨신동엽
                </a>
              </p>
              <span>2시간 전</span>
            </div>
          </section>
          <section className="storyuser">
            <img
              className="sideprofileimge2"
              alt="otherUserImg"
              src="../../images/seyeonPark/profile4.jpeg"
            />
            <div className="userInfo">
              <p>
                <a className="sideId" href="/">
                  같은이미지
                </a>
              </p>
              <span>1분 전</span>
            </div>
          </section>
        </section>
      </article>
    );
  }
}

export default AsideStory;
