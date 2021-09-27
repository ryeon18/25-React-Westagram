import React from 'react';
import '../../../pages/seyeonPark/Main/Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
import Comment from '../components/Comment';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AsideStory from '../components/AsideStory';
import AsideRecommend from '../components/AsideRecommend';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
      isHeartChange: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({ commentBox: data });
      });
  }

  changeHeartColor = () => {
    const { isHeartChange } = this.state;
    this.setState({
      isHeartChange: !isHeartChange,
    });
  };

  getInputValue = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  uploadComment = () => {
    const { commentBox, comment } = this.state;
    if (comment.length === 0) return;
    const newCommentBox = [
      ...commentBox,
      {
        id: commentBox.length + 1,
        userId: '12시에 만나요 부라보콘 ',
        content: comment,
      },
    ];
    this.setState({ commentBox: newCommentBox, comment: '' });
  };

  enterEvent = e => {
    const { comment } = this.state;
    if (e.key === 'Enter' && comment) {
      this.uploadComment();
    }
  };

  render() {
    const { commentBox, comment, isHeartChange } = this.state;
    return (
      <div className="mainContainer">
        <Nav />
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
                    <span>nature </span>
                  </a>
                  님
                  <a className="message" href="/">
                    외 900명
                  </a>
                  이 좋아합니다
                </p>
              </div>
              <div className="feedMessage">
                <div className="firstMessage">
                  <span>
                    <a className="message" href="/">
                      <span>myroom </span>
                    </a>
                    진정한 힐링은 집에서..
                    <a className="moreComment" href="/">
                      더보기
                    </a>
                  </span>
                  <button onClick={this.changeHeartColor}>
                    <img
                      alt="checkingHeart"
                      src="../../images/seyeonPark/heart.png"
                      width="12px"
                      style={{
                        color: isHeartChange ? 'red' : 'black',
                      }}
                    />
                  </button>
                </div>
                <div className="secondMessage">
                  <span>
                    <a className="message" href="/">
                      <span>노래좋아 </span>
                    </a>
                    #자연인
                  </span>
                  <button onClick={this.changeHeartColor}>
                    <img
                      alt="checkingHeart"
                      src="../../images/seyeonPark/heart.png"
                      width="12px"
                      style={{
                        color: isHeartChange ? 'red' : 'black',
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="thirdMessage">
                <Comment
                  commentBox={commentBox}
                  onClick={this.changeHeartColor}
                  style={{ color: isHeartChange }}
                />
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
                value={comment}
                onChange={this.getInputValue}
                onKeyPress={this.enterEvent}
              />
              <button className="uploadButton" onClick={this.uploadComment}>
                게시
              </button>
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
            <AsideStory />
            <AsideRecommend />
            <Footer />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
