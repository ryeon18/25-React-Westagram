import React from 'react';
import FeedList from './FeedList';
import { Link } from 'react-router-dom';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

class Main extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div className="mainBody">
        <header>
          <nav>
            <div className="logoBox">
              <span className="logo_title">Instagram</span>
            </div>
            <div className="search">
              <input className="searchInput" type="text" placeholder="검색" />
              <i className="fas fa-search searchxx" />
            </div>
            <div className="topIcon">
              <Link to="/">
                <i className="far fa-compass icon" />
              </Link>
              <Link to="/">
                <i className="far fa-heart icon" />
              </Link>
              <Link to="/">
                <i className="far fa-user icon" />
              </Link>
              <Link to="/">
                <img
                  className="myPage"
                  alt="myPage"
                  src="/images/suminKim/오구.png"
                />
              </Link>
            </div>
          </nav>
        </header>
        <section>
          <div className="feeds">
            <FeedList />
          </div>
          {/* {<!-- ----- -->} */}
          <div className="mainRight">
            <div className="rightTopId">
              <img
                className="idImg2"
                src="/images/suminKim/오구.png"
                alt="asd"
              />
              <div className="spanBox">
                <span className="rigntSpan1">
                  <b>aaa__aaa</b>
                </span>
                <br />
                <span className="rigntSpan2">su_min</span>
              </div>
            </div>
            <div className="storyBoxFirst">
              <div className="storyText">
                <div className="story">스토리</div>
                <div className="modubogy">모두 보기</div>
              </div>
              <div className="storyIdBox">
                <img
                  className="storyImg"
                  alt="storyImgFirst"
                  src="/images/suminKim/용현.png"
                />
                <div className="storyIdClass">
                  <div className="storyId">
                    <b>hy_un</b>
                  </div>
                  <div className="storyTime">방금</div>
                </div>
              </div>
              <div className="storyIdBox">
                <img
                  className="storyImg"
                  alt="storyImgFirst"
                  src="/images/suminKim/다빈.png"
                />
                <div className="storyIdClass">
                  <div className="storyId">
                    <b>bbb_in</b>
                  </div>
                  <div className="storyTime">15분전</div>
                </div>
              </div>
              <div className="storyIdBox">
                <img
                  className="storyImg"
                  alt="storyImgFirst"
                  src="/images/suminKim/정아.png"
                />
                <div className="storyIdClass">
                  <div className="storyId">
                    <b>jjj_aaaa</b>
                  </div>
                  <div className="storyTime">26분전</div>
                </div>
              </div>
              <div className="storyIdBox">
                <img
                  className="storyImg"
                  alt="storyImgFirst"
                  src="/images/suminKim/본욱.png"
                />
                <div className="storyIdClass">
                  <div className="storyId">
                    <b>u_kkkkkk</b>
                  </div>
                  <div className="storyTime">30분전</div>
                </div>
              </div>
            </div>
            <div className="storyBoxSecond">
              <div className="chuchunBox">
                <div className="chuchun">회원님을 위한 추천</div>
                <div className="modubogySecond">모두 보기</div>
              </div>
              <div className="chuchunIdBox">
                <img
                  className="chuchunImgWheee"
                  alt="storyImgFirst"
                  src="/images/suminKim/동휘.png"
                />
                <div className="chuchunIdClass">
                  <div className="chuchunId">
                    <b>wh_eee</b>
                  </div>
                  <div className="chuchunTime">Instagram 신규 가입</div>
                </div>
                <button className="fallow">팔로우</button>
              </div>
              <div className="chuchunIdBox">
                <img
                  className="chuchunImgRrrro_k"
                  alt="storyImgFirst"
                  src="/images/suminKim/영록.png"
                />
                <div className="chuchunIdClass">
                  <div className="chuchunId">
                    <b>rrrro_k</b>
                  </div>
                  <div className="chuchunTime">Instagram 신규 가입</div>
                </div>
                <button className="fallow">팔로우</button>
              </div>
              <div className="chuchunIdBox">
                <img
                  className="chuchunImg"
                  alt="storyImgFirst"
                  src="/images/suminKim/수민.png"
                />
                <div className="chuchunIdClass">
                  <div className="chuchunId">
                    <b>mi_nnnnn</b>
                  </div>
                  <div className="chuchunTime">회원님을 팔로우합니다</div>
                </div>
                <button className="fallow">팔로우</button>
              </div>
            </div>
            <footer>
              <p className="bottomText">
                소개·도움말·홍보 센터·API·채용 정보·개인정보처리방침·
                <br />
                약관·위치·인기 계정·해시태그·언어
                <br />
                <br />© 2021 INSTAGRAM FROM FACEBOOK
              </p>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}
export default Main;
