import React from 'react';
import Comment from './Comment/Comment';
import SearchUser from './SearchUser/SearchUser';
import ProgramInfo from './ProgramInfo/ProgramInfo';
import INFO_LIST from './ProgramInfo/programInfoData';
import './Main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '_minji.jeong',
      commentList: [],
      content: '',
      isVisible: false,
    };
  }

  getComment = e => {
    this.setState({
      content: e.target.value,
    });
  };

  uploadComment = e => {
    this.state.commentList.push({
      text: this.state.content,
    });
    this.setState({ content: '' });
  };

  handleEnter = e => {
    if (e.code === 'Enter') {
      this.uploadComment();
    }
  };

  removeComment = deleteList => {
    const newArr = this.state.commentList.filter(
      (item, index) => index !== deleteList.props.listId
    );

    this.setState({
      commentList: newArr,
    });
  };

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <nav>
          <div className="nav_column">
            <i className="service_logo fab fa-instagram fa-1x"></i>
            <a className="service_name" href="/">
              Westagram
            </a>
          </div>
          <div className="nav_column">
            <SearchUser />
          </div>
          <div className="nav_column">
            <button>
              <img alt="icon_explore" src="images/minjiJeong/explore.png" />
            </button>
            <button>
              <img alt="icon_like" src="images/minjiJeong/heart.png" />
            </button>
            <button
              className="btn_profile"
              href="/"
              alt="icon_profile"
              onClick={() => {
                this.setState({
                  isVisible: !this.state.isVisible,
                });
              }}
              style={{ position: 'relative' }}
            >
              <img src="images/minjiJeong/profile.png" alt="img_profile" />
              <div
                className="menu_box"
                style={{ display: this.state.isVisible ? 'block' : 'none' }}
              >
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
            </button>
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
                {/* 추가된 댓글 위치 */}
                {this.state.commentList.map((el, index) => {
                  return (
                    <Comment
                      key={index}
                      listId={index}
                      userId={this.state.userId}
                      content={el.text}
                      removeComment={this.removeComment}
                    />
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
                {INFO_LIST.map((el, index) => {
                  return <ProgramInfo key={index} content={el.content} />;
                })}
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
