import React, { Component } from 'react';
import Comment from './Comment/Comment';
import '../Feed/Item.scss';

class Item extends Component {
  render() {
    const {
      userId,
      feedImage,
      likedAccountImage,
      likedAccount,
      like,
      content,
      comments,
    } = this.props;
    return (
      <div className="feed">
        <div className="profile">
          <div className="profileImg img-box">
            <img src="/images/sunhoLee/img7.jpeg" alt="images" />
          </div>
          <div className="name">{userId}</div>
          <div className="more">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="feedImg img-box">
          <img alt="images" src={feedImage} />
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
        <div className="subscript">
          <img className="profile_sm" alt="mountain" src={likedAccountImage} />
          <h5>
            <span className="user_id">{likedAccount}</span>님&nbsp;
            <span className="like_count">{like}</span>이 좋아합니다
          </h5>
        </div>
        <div className="myComment">
          <b className="user_id">{userId}</b>&nbsp;
          {content}
          <span className="show_more">더 보기</span>
        </div>
        <Comment comments={comments} />
      </div>
    );
  }
}

export default Item;
