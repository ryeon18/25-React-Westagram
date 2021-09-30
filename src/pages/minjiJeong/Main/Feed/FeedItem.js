import React from 'react';
import Comment from './Comment/Comment';
import './FeedItem.scss';

class Feed extends React.Component {
  render() {
    return (
      <div className="article">
        <div className="article_header">
          <div className="header_user">
            <img
              className="profile_s"
              alt="user_profile"
              src={this.props.userImage}
            />
            <span className="user_name">{this.props.userId}</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="article_media">
          <img alt="pasta" src={this.props.feedImage} />
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
            src={this.props.likedAccountImage}
          />
          <h5>
            <span className="user_id">{this.props.likedAccount}</span>님&nbsp;
            <span className="like_count">외 {this.props.like}명</span>이
            좋아합니다
          </h5>
        </div>
        <div className="article_text">
          <span className="user_id">_minji.jeong</span>
          {this.props.content}
          <span className="show_more">더 보기</span>
        </div>
        {/* 피드에 해당하는 댓글 데이터 불러오기 위해 feedId값 전달 */}
        <Comment feedId={this.props.feedId} />
      </div>
    );
  }
}

export default Feed;
