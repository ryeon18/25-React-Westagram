import React, { Component } from 'react';
import Comment from '../Fedd/Comment/Comment';

class Item extends Component {
  render() {
    return (
      <div className="feed">
        <div className="profile">
          <div className="profileImg img-box">
            <img src="/images/sunhoLee/img7.jpeg" alt="images" />
          </div>
          <div className="name">{this.props.userId}</div>
          <div className="more">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="feedImg img-box">
          <img alt="images" src={this.props.feedImage} />
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
          <img
            className="profile_sm"
            alt="mountain"
            src={this.props.likedAccountImage}
          />
          <h5>
            <span className="user_id">{this.props.likedAccount}</span>님&nbsp;
            <span className="like_count">{this.props.like}</span>이 좋아합니다
          </h5>
        </div>
        <div className="myComment">
          <b className="user_id">{this.props.userId}</b>&nbsp;
          {this.props.content}
          <span className="show_more">더 보기</span>
        </div>
        <Comment comment={this.props.comment} />
      </div>
    );
  }
}

export default Item;
