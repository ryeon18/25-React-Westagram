import React from 'react';
import '../../../pages/seyeonPark/Main/Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
// import { Link } from 'react-router-dom';

class Main extends React.Component {
  addElement = e => {
    const input = document.getElementsByClassName('input')[0];
    const box = document.createElement('div');

    box.className = 'addedMessage';
    const p = document.createElement('p');
    const space = document.getElementsByClassName('feedMessage')[0];

    if (e.key === 'Enter') {
      p.innerHTML = input.value;

      box.appendChild(p);
      space.appendChild(box);
      input.value = '';
    }
  };

  clickEvent() {
    const input = document.getElementsByClassName('input')[0];
    const box = document.createElement('div');

    box.className = 'addedMessage';
    const p = document.createElement('p');
    const space = document.getElementsByClassName('feedMessage')[0];
    p.innerHTML = input.value;
    box.appendChild(p);
    space.appendChild(box);
    input.value = '';
  }

  render() {
    return (
      <div className="mainContainer">
        <nav className="mainHearder">
          <div className="mainLogoContainer">
            <div className="logo">
              <a className="logoimg" href="/login-seyeon">
                <img
                  alt="instagramLogo"
                  src="../../images/seyeonPark/instagram.png"
                />
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
            <img alt="explore" src="../../images/seyeonPark/explore.png" />
            <a href="/">
              <img alt="like" src="../../images/seyeonPark/heart.png" />
            </a>
            <a href="/">
              <img alt="profile" src="../../images/seyeonPark/profile.png" />
            </a>
          </div>
        </nav>
        <main>
          <section className="feed">
            <header className="feedHeader">
              <div className="feedHeaderIdImg">
                <img
                  alt="feedHeaderIdImg"
                  src="../../images/seyeonPark/feedidimg.jpeg"
                />
              </div>
              <div className="feedidinfo">
                <span>Emily_sy</span>
                <button>
                  <img
                    alt="moreOption"
                    src="../../images/seyeonPark/more.png"
                  />
                </button>
              </div>
            </header>
            <section className="feedMainimg">
              <img
                alt="feedMainImage"
                src="../../images/seyeonPark/main.jpeg"
              />
            </section>
            <section className="feedIcons">
              <div>
                <button>
                  <img
                    alt="likeCheck"
                    src="../../images/seyeonPark/heart.png"
                    width="23px"
                  />
                </button>
                <button>
                  <img
                    alt="comment"
                    src="../../images/seyeonPark/comment.png"
                    width="20px"
                  />
                </button>
                <button>
                  <img
                    alt="upload"
                    src="../../images/seyeonPark/upload.png"
                    width="17px"
                  />
                </button>
              </div>
              <div>
                <button>
                  <img
                    alt="save"
                    src="../../images/seyeonPark/save.png"
                    width="20px"
                  />
                </button>
              </div>
            </section>
            <section className="feedComment">
              <div className="likeCheck">
                <p>
                  <a className="message" href="/">
                    nature
                  </a>
                  님
                  <a class="message" href="/">
                    외 900명
                  </a>
                  이 좋아합니다
                </p>
              </div>
              <div className="feedMessage">
                <div className="firstMessage">
                  <span>
                    <a className="message" href="/">
                      myroom
                    </a>
                    진정한 힐링은 집에서..
                  </span>
                  <span>
                    <a className="moreComment" href="/">
                      더보기
                    </a>
                  </span>
                </div>
                <div className="secondMessage">
                  <span>
                    <a className="message" href="/">
                      hahaha
                    </a>
                    #자연인
                  </span>
                  <img
                    alt="checkingHeart"
                    src="../../images/seyeonPark/heart.png"
                    width="12px"
                  />
                </div>
              </div>
              <div className="commentTime">
                <span>42분전</span>
              </div>
            </section>
            <section className="inputComment">
              <input
                className="input"
                type="text"
                placeholder="댓글 달기..."
                onKeyPress={this.addElement}
              />
              <input
                className="uploadButton"
                type="button"
                value="게시"
                onClick={this.clickEvent}
              />
            </section>
          </section>
          <section className="main-right">
            <article className="sideUser">
              <img
                className="sideprofileimg"
                alt="sideprofileimage"
                src="../../images/seyeonPark/profile1.jpeg"
              />
              <div className="userInfo">
                <a className="sideId" href="/">
                  wecode_bootcamp
                </a>
                <span className="userInfo">WeCode | 위코드</span>
              </div>
            </article>
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
                        NotGood
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
                        hothothot
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
                        같은이미지다
                      </a>
                    </p>
                    <span>1분 전</span>
                  </div>
                </section>
              </section>
            </article>
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
                    src="../../images/seyeonPark/profile2.jpeg"
                  />
                  <div className="userInfo2">
                    <p>
                      <a className="sideId" href="/">
                        sleepy
                      </a>
                    </p>
                    <span>언제자니님 외 3명이 좋아합니다</span>
                  </div>
                  <div className="followButton">
                    <a href="/">팔로우</a>
                  </div>
                </section>
                <section className="recommendUser">
                  <img
                    className="sideprofileimge2"
                    alt="sideprofileimg"
                    src="../../images/seyeonPark/profile3.jpeg"
                  />
                  <div className="userInfo2">
                    <p>
                      <a className="sideId" href="/">
                        hothothot
                      </a>
                    </p>
                    <span>여름은더워님 외 2명이 좋아합니다</span>
                  </div>
                  <div className="followButton">
                    <a href="/">팔로우</a>
                  </div>
                </section>
                <section className="recommendUser">
                  <img
                    className="sideprofileimge2"
                    alt="sideprofileimg"
                    src="../../images/seyeonPark/profile4.jpeg"
                  />
                  <div className="userInfo2">
                    <p>
                      <a className="sideId" href="/">
                        개그맨신동엽
                      </a>
                    </p>
                    <span>개그동아리회장님 외 22명이 좋아합니다</span>
                  </div>
                  <div className="followButton">
                    <a href="/">팔로우</a>
                  </div>
                </section>
              </section>
            </article>
            <article className="footer">
              <ul className="footerlist">
                <li>
                  <a href="/">Instaram 정보</a>
                </li>
                <li>
                  <a href="/">지원</a>
                </li>
                <li>
                  <a href="/">홍보 센터</a>
                </li>
                <li>
                  <a href="/">API</a>
                </li>
                <li>
                  <a href="/">채용 정보</a>
                </li>
                <li>
                  <a href="/">개인정보처리방침</a>
                </li>
                <li>
                  <a href="/">약관</a>
                </li>
                <li>
                  <a href="/">디렉터리</a>
                </li>
                <li>
                  <a href="/">프로필</a>
                </li>
                <li>
                  <a href="/">해시태그</a>
                </li>
                <li>
                  <a href="/">언어</a>
                </li>
              </ul>
              <p>© 2019 INSTAGRAM</p>
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
