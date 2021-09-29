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
        <Comment />
      </div>
    );
  }
}

export default Item;
