import React from 'react';
import STORY_DATA from './asideStoryData';

class AsideStory extends React.Component {
  render() {
    return (
      <article className="otherStory">
        <section className="otherStoryHead">
          <span>스토리</span>
          <span id="storyAll">모두 보기</span>
        </section>
        <section className="otherStoryList">
          {STORY_DATA.map(el => (
            <section className="storyuser" key={el.id}>
              <img
                className="sideprofileimge2"
                alt="otherUserImg"
                src={el.img}
              />
              <div className="userInfo">
                <p>
                  <a className="sideId" href="/">
                    {el.userId}
                  </a>
                </p>
                <span>{el.updateTime} 전</span>
              </div>
            </section>
          ))}
        </section>
      </article>
    );
  }
}

export default AsideStory;
