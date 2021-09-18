import React from 'react';
import Comment from '../Main/Comment';
import '../Main/Main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { content: '', commentList: [], userId: '_minji.jeong' };
  }

  getComment = e => {
    this.setState({
      content: e.target.value,
    });
  };

  uploadComment = e => {
    this.state.commentList.push({ text: this.state.content });
    this.setState({ content: '' });
  };

  handleEnter = e => {
    if (e.code === 'Enter') {
      this.uploadComment();
    }
  };

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        />
        <nav>
          <div className="nav_column">
            <i className="service_logo fab fa-instagram fa-1x"></i>
            <a className="service_name" href="/">
              Westagram
            </a>
          </div>
          <div className="nav_column">
            <input className="search" type="text" placeholder="검색" />
            <i className="btn_init fas fa-times-circle"></i>
            <div className="search_result_box">
              <div className="search_result_arrow"></div>
              <ul></ul>
            </div>
          </div>
          <div className="nav_column">
            <a href="/">
              <img alt="icon_explore" src="images/minjiJeong/explore.png" />
            </a>
            <a href="/">
              <img alt="icon_like" src="images/minjiJeong/heart.png" />
            </a>
            <a
              className="btn_profile"
              href="/"
              alt="icon_profile"
              style={{ position: 'relative' }}
            >
              <img src="images/minjiJeong/profile.png" alt="img_profile" />
              <div className="menu_box">
                <div className="menu_box_arrow"></div>
                <div className="menu_box_column">
                  <i className="far fa-user-circle"></i>
                  프로필
                </div>
                <div className="menu_box_column">
                  <i className="far fa-bookmark"></i>
                  저장됨
                </div>
                <div className="menu_box_column">
                  <i className="fas fa-cog"></i>
                  설정
                </div>
                <div className="menu_box_column">로그아웃</div>
              </div>
            </a>
          </div>
        </nav>
        <div className="main_container">
          <div className="articles_area">
            {/* 피드 */}
            <div className="article">
              <div className="article_header">
                <div className="header_user">
                  <img
                    className="profile_s"
                    alt="user_profile"
                    src="images/minjiJeong/me.jpg"
                  />
                  <span className="user_name">_minji.jeong</span>
                </div>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="article_media">
                <img alt="pasta" src="images/minjiJeong/pasta.jpg" />
              </div>
              <div className="article_menu">
                <div className="menu_column">
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-share-square"></i>
                </div>
                <i className="far fa-bookmark"></i>
              </div>
              <div className="article_subscript">
                <img
                  className="profile_sm"
                  alt="mountain"
                  src="images/minjiJeong/mount.jpg"
                />
                <h5>
                  <span className="user_id">kyeong_hoooonie</span>님&nbsp;
                  <span className="like_count">외 10명</span>이 좋아합니다
                </h5>
              </div>
              <div className="article_text">
                <span className="user_id">_minji.jeong</span>내돈내산 파스타
                JMT~
                <span className="show_more">더 보기</span>
              </div>
              <div className="article_comments">
                <div className="comments_row">
                  <p>
                    <span className="user_id">acid_rain</span>가게 어딘지
                    알려주세요! 🙏
                  </p>
                  <div className="comments_menu">
                    <i
                      className="comment_like far fa-heart"
                      onclick="toggleLike(this)"
                    ></i>
                    <i
                      className="comment_delete far fa-trash-alt"
                      onclick="deleteComment(this)"
                    ></i>
                  </div>
                </div>
                <div className="comments_row">
                  <p>
                    <span className="user_id">fairy_yoon</span>다음엔 나도
                    데리고가요~
                  </p>
                  <div className="comments_menu">
                    <i
                      className="comment_like far fa-heart"
                      onclick="toggleLike(this)"
                    ></i>
                    <i
                      className="comment_delete far fa-trash-alt"
                      onclick="deleteComment(this)"
                    ></i>
                  </div>
                </div>
                {/* 새 댓글 위치 */}
                {this.state.commentList.map(el => {
                  return (
                    <Comment userId={this.state.userId} content={el.text} />
                  );
                })}
              </div>
              <div className="time_ago">
                <span className="pass_time">42</span>분 전
              </div>
              <div className="add_comment">
                <textarea
                  cols="30"
                  rows="1"
                  placeholder="댓글 달기..."
                  onChange={this.getComment}
                  onKeyPress={this.handleEnter}
                  value={this.state.content}
                ></textarea>
                <button
                  className="btn_upload"
                  type="button"
                  onClick={this.uploadComment}
                >
                  게시
                </button>
              </div>
            </div>
          </div>
          <div className="side_area">
            {/* 스토리 */}
            <div className="show_account">
              <img
                className="profile_m"
                alt="user_profile"
                src="images/minjiJeong/me.jpg"
              />
              <div>
                <h5 className="my_id user_id">{this.state.userId}</h5>
                <h5 className="user_description">정민지</h5>
              </div>
            </div>
            <div className="new_stories">
              <div className="stories_header">
                <h5>스토리</h5>
                <a className="show_all" href="/">
                  모두 보기
                </a>
              </div>
              <div className="stories_row">
                <div className="show_account">
                  <img
                    className="profile_s"
                    alt="cat"
                    src="images/minjiJeong/chris.jpg"
                  />
                  <div>
                    <h5 className="user_id">yang_chris</h5>
                    <h5 className="time_ago">10분 전</h5>
                  </div>
                </div>
                <div className="show_account">
                  <img
                    className="profile_s"
                    alt="dog"
                    src="images/minjiJeong/acid.png"
                  />
                  <div>
                    <h5 className="user_id">acid_rain</h5>
                    <h5 className="time_ago">16분 전</h5>
                  </div>
                </div>
                <div className="show_account">
                  <img
                    className="profile_s"
                    alt="sunrise"
                    src="images/minjiJeong/sun.jpg"
                  />
                  <div>
                    <h5 className="user_id">before_sunrise</h5>
                    <h5 className="time_ago">33분 전</h5>
                  </div>
                </div>
                <div className="show_account">
                  <img
                    className="profile_s"
                    alt="blue_lazer"
                    src="images/minjiJeong/lazer.png"
                  />
                  <div>
                    <h5 className="user_id">kyeong_hoooonie</h5>
                    <h5 className="time_ago">1시간 전</h5>
                  </div>
                </div>
                <div className="show_account">
                  <img
                    className="profile_s"
                    alt="fairy"
                    src="images/minjiJeong/fairy.jpg"
                  />
                  <div>
                    <h5 className="user_id">fairy_yooon</h5>
                    <h5 className="time_ago">5시간 전</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* 친구 추천 */}
            <div className="recommend_friends">
              <div className="recommend_header">
                <h5>회원님을 위한 추천</h5>
                <a className="show_all" href="/">
                  모두 보기
                </a>
              </div>
              <div className="recommend_contents">
                <div className="recommend_row">
                  <img
                    className="profile_s"
                    alt="conference"
                    src="images/minjiJeong/blue.jpg"
                  />
                  <div>
                    <h5 className="user_id">haedal</h5>
                    <h5 className="friends_info">
                      jimmie님 외 2명이 친구입니다.
                    </h5>
                  </div>
                  <a className="btn_follow" href="/">
                    팔로우
                  </a>
                </div>
                <div className="recommend_row">
                  <img
                    className="profile_s"
                    alt="ocean"
                    src="images/minjiJeong/ocean.jpg"
                  />
                  <div>
                    <h5 className="user_id">sooooya</h5>
                    <h5 className="friends_info">chris_yang님과 친구입니다.</h5>
                  </div>
                  <a className="btn_follow" href="/">
                    팔로우
                  </a>
                </div>
                <div className="recommend_row">
                  <img
                    className="profile_s"
                    alt="white_puppy"
                    src="images/minjiJeong/puppy.png"
                  />
                  <div>
                    <h5 className="user_id">star_coffee</h5>
                    <h5 className="friends_info">
                      before_sunrise님 외 1명이 친구입니다.
                    </h5>
                  </div>
                  <a className="btn_follow" href="/">
                    팔로우
                  </a>
                </div>
              </div>
            </div>
            {/* 프로그램 정보 */}
            <div className="program_info">
              <ul>
                <li className="program_info_list">
                  <a href="/">Instagram 정보</a>
                </li>
                <li className="program_info_list">
                  <a href="/">지원</a>
                </li>
                <li className="program_info_list">
                  <a href="/">홍보 센터</a>
                </li>
                <li className="program_info_list">
                  <a href="/">API</a>
                </li>
                <li className="program_info_list">
                  <a href="/">채용 정보</a>
                </li>
                <li className="program_info_list">
                  <a href="/">개인정보처리방침</a>
                </li>
                <li className="program_info_list">
                  <a href="/">약관</a>
                </li>
                <li className="program_info_list">
                  <a href="/">디렉터리</a>
                </li>
                <li className="program_info_list">
                  <a href="/">프로필</a>
                </li>
                <li className="program_info_list">
                  <a href="/">해시태그</a>
                </li>
                <li className="program_info_list">
                  <a href="/">언어</a>
                </li>
              </ul>
              <span>&#169; 2019 INSTAGRAM</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
