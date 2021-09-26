import React from 'react';
import ReactDOM from 'react-router-dom';
import Comments from '../Main/Comments';
import '../Main/Main.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comments: '',
      isSubmitBtn: false,
      inputValue: '',
    };
  }

  getInputValue = e => {
    this.setState({
      comments: e.target.value,
    });
  };

  uploadComments = () => {
    const { commentBox, comments } = this.state;
    commentBox.push({ commentValue: comments });
    this.setState({ comments: '' });
  };

  handleSubmitBtn = () => {
    const { inputValue, isSubmitBtn } = this.state;
    inputValue.length > 0
      ? this.setState({ isSubmitBtn: true })
      : this.setState({ isSubmitBtn: false });
  };

  render() {
    // console.log(this.state.isSubmitBtn);
    return (
      <>
        <div className="Main">
          <nav>
            <div className="wrap">
              <div className="logo">
                <a href="main.html">Westagram</a>
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
          <main>
            <section>
              <div className="contents">
                <div className="feed">
                  <div className="profile">
                    <div className="profileImg img-box">
                      <img src="/images/sunhoLee/img7.jpeg" alt="images" />
                    </div>
                    <div className="name">dltjsgho</div>
                    <div className="more">
                      <i className="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                  <div className="feedImg img-box">
                    <img src="/images/sunhoLee/img1.jpeg" alt="images" />
                  </div>
                  <div className="click-line">
                    <div className="click-inner">
                      <div className="heart img-box">
                        <img src="/images/sunhoLee/heart.png" alt="heart" />
                      </div>
                      <div className="message img-box">
                        <img src="/images/sunhoLee/message.png" alt="message" />
                      </div>
                      <div className="send img-box">
                        <img src="/images/sunhoLee/send.png" alt="send" />
                      </div>
                    </div>
                    <div className="save">
                      <img src="/images/sunhoLee/ribbon.png" alt="ribbon" />
                    </div>
                  </div>

                  <div className="comment-view">
                    <p className="likeText">좋아요 563개</p>

                    <ul className="comments">
                      <li>
                        <b>iiiiiii&nbsp;</b>호주갬성
                        {this.state.commentBox.map(newComment => {
                          return (
                            <Comments addComments={newComment.commentValue} />
                          );
                        })}
                      </li>
                    </ul>
                    <p className="date">1일 전</p>
                  </div>
                  <div className="write">
                    <div className="writeInner">
                      <button className="emoticon">
                        <i className="far fa-smile"></i>
                      </button>
                      <input
                        className="commentInput"
                        placeholder="댓글 달기..."
                        name="inputValue"
                        value={this.state.comments}
                        onChange={this.getInputValue}
                        onKeyDown={this.handleSubmitBtn}
                        onKeyPress={e => {
                          if (
                            e.key === 'Enter' &&
                            this.state.comments.length > 0
                          ) {
                            this.uploadComments();
                          }
                        }}
                      />
                      <button
                        onClick={this.uploadComments}
                        className="submit"
                        // className={
                        //   this.state.isSubmitBtn ? 'submitOn' : 'submitOff'
                        // }
                      >
                        게시
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
