import React from 'react';
import Comment from '../MainComponent/Comment';

class Feed extends React.Component {
  render() {
    const {
      commentBox,
      comment,
      getInputValue,
      enterEvent,
      uploadComment,
      isHeartChange,
      changeHeartColor,
    } = this.props;
    return (
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
              <img alt="moreOption" src="../../images/seyeonPark/more.png" />
            </button>
          </div>
        </header>
        <section className="feedMainimg">
          <img alt="feedMainImage" src="../../images/seyeonPark/main.jpeg" />
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
              <button onClick={changeHeartColor}>
                <img
                  alt="checkingHeart"
                  src="../../images/seyeonPark/heart.png"
                  width="12px"
                  className={isHeartChange ? 'likeHeart' : 'unlikeHeart'}
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
              <button onClick={changeHeartColor}>
                <img
                  alt="checkingHeart"
                  src="../../images/seyeonPark/heart.png"
                  width="12px"
                  className={isHeartChange ? 'likeHeart' : 'unlikeHeart'}
                />
              </button>
            </div>
          </div>
          <div className="thirdMessage">
            <Comment
              commentBox={commentBox}
              changeHeartColor={changeHeartColor}
              isHeartChange={isHeartChange}
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
            onChange={getInputValue}
            onKeyPress={enterEvent}
          />
          <button className="uploadButton" onClick={uploadComment}>
            게시
          </button>
        </section>
      </section>
    );
  }
}

export default Feed;
