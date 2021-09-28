import React from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  commentInput = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  commentPush = e => {
    if (e.key === 'Enter' && this.state.comment) {
      this.setState({
        commentList: [
          ...this.state.commentList,
          { comment: this.state.comment },
        ],
      });
      e.target.value = '';
    }
  };

  commentSubmit = () => {
    if (this.state.comment) {
      this.setState({
        commentList: [
          ...this.state.commentList,
          { comment: this.state.comment },
        ],
      });
      //초기화 안됨
      this.comment = '';
    }
  };

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
              <link to="/">
                <i className="far fa-compass icon" />
              </link>
              <link to="/">
                <i className="far fa-heart icon" />
              </link>
              <link to="/">
                <i className="far fa-user icon" />
              </link>
              <link to="/">
                <img
                  className="myPage"
                  alt="myPage"
                  src="/images/suminKim/오구.png"
                />
              </link>
            </div>
          </nav>
        </header>
        <section>
          <div className="feeds">
            <div className="article">
              <div className="feeds_top">
                <div className="feedtopIdBox">
                  <img
                    className="id_img1"
                    src="/images/suminKim/오구.png"
                    alt="id_img1"
                  />
                  <span className="leftId">aaa__aaa</span>
                </div>
                <i className="fas fa-ellipsis-h threeDot" />
              </div>
              <img
                alt="feedImg"
                className="feedImg"
                src="/images/suminKim/feedImg.png"
              />
              <div className="bottomIconBox">
                <div className="bottmLeftBox">
                  <i className="fas fa-heart redHeart" />
                  <img
                    alt="chat"
                    className="chat"
                    src="/images/suminKim/chat.png"
                  />
                  <img
                    alt="sendDm"
                    className="sendDm"
                    src="/images/sendDm.png"
                  />
                </div>
                <div className="bottomRightBox">
                  <i className="far fa-bookmark" />
                </div>
              </div>
              <div className="likeBox">
                <img
                  className="likeImg"
                  alt="liskeImg"
                  src="/images/suminKim/likeBox.png"
                />
                <span className="likeId">
                  <b>bhanss</b>님 <b>외 534명</b>이 좋아합니다
                </span>
              </div>
            </div>
            <div className="contentClass">
              <div className="contentBox">
                <span className="content">
                  <b>aaa__aaa</b> 오늘도 여전히 노을은 예쁘네:) 모두들...
                </span>
                <span className="thebogy"> 더 보기</span>
              </div>
              <div className="commentMore">
                댓글 <span className="commentCount">130</span>개 모두 보기
              </div>
              {/* {<!-- 댓글 달리는곳 -->} */}
              <div className="chatBox">
                <div className="commendId">
                  i_ddgg
                  <span className="commend">헐 예뻐!</span>
                </div>
                <div className="binheartBox">
                  <img
                    alt="binheart"
                    class="binheart"
                    src="/images/suminKim/heart.png"
                    onclick="binheart()"
                  />
                </div>
              </div>
              <ul className="test">
                {/* {<!-- 댓글 -->} */}
                {this.state.commentList.map((commentArray, index) => {
                  return (
                    <div key={index}>
                      <div className="commendId">
                        i_ddgg
                        <span className="commend">{commentArray.comment}</span>
                      </div>
                      <div className="binheartBox">
                        <img
                          alt="binheart"
                          class="binheart"
                          src="/images/suminKim/heart.png"
                          onclick="binheart()"
                        />
                      </div>
                    </div>
                  );
                })}
              </ul>

              <div className="contentTime">방금</div>
            </div>
            {/* {<!-- 댓글달기 input -->} */}
            <div className="chatClass">
              <input
                className="chat chat2"
                type="text"
                placeholder="댓글달기..."
                onChange={this.commentInput}
                onKeyPress={this.commentPush}
              ></input>
              <button
                className="pushBotton"
                type="submit"
                onClick={this.commentSubmit}
              >
                <b>게시</b>
              </button>
            </div>
            {/* {<!-- ----- -->} */}
          </div>
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
