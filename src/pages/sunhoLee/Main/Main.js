import React from 'react';
import ReactDOM from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Feed from './Fedd/Feed';
import '../Main/Main.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <div className="Main">
          <Nav />
          <main>
            <section className="container">
              <Feed />
            </section>
            <aside>
              <div className="toMyPage">
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
              </div>
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
              <blockquote>
                <ul>
                  <li>소개</li>
                  <li>도움말</li>
                  <li>도움말</li>
                  <li>홍보 센터</li>
                  <li>API</li>
                  <li>채용 정보</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>위치</li>
                  <li>인기 계정</li>
                  <li>해시태그</li>
                  <li>언어</li>
                </ul>
                <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
              </blockquote>
            </aside>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
