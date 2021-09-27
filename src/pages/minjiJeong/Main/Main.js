import React from 'react';
import Feed from './Feed/Feed';
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
      isVisible: false,
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

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
            {this.state.feedList.map(el => {
              return (
                <Feed
                  key={el.id}
                  userId={el.userId}
                  userImage={el.userImage}
                  feedImage={el.feedImage}
                  likedAccount={el.likedAccount}
                  like={el.like}
                  content={el.content}
                  comments={el.comments}
                />
              );
            })}
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
                <h5 className="my_id user_id">_minji.jeong</h5>
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
                {INFO_LIST.map(el => (
                  <ProgramInfo key={el.id} content={el.content} />
                ))}
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
