import React, { Component } from 'react';
import CommentLists from './CommentLists';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      comment: '',
      commentList: [],
      isLiked: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  commentInput = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  commentPush = e => {
    if (e.key === 'Enter' && this.state.comment) {
      //   this.setState({
      //     commentList: this.state.commentList.concat({
      //       ...e,
      //       id: this.state.id++
      //     })
      //   })
      this.setState({
        commentList: [
          ...this.state.commentList,
          { userName: 'ddd', content: this.state.comment },
        ],
      });
      e.target.value = '';
    }
  };

  commentSubmit = e => {
    // const { commentList, comment } = this.state;
    if (this.state.comment) {
      this.setState({
        commentList: [
          ...this.state.commentList,
          { userName: 'fivb', content: this.state.comment },
        ],
        // comment:''
      });
    }
  };

  render() {
    const { info } = this.props;
    return (
      <>
        <div className="article">
          <div className="feeds_top">
            <div className="feedtopIdBox">
              <img className="id_img1" src={info.idImg} alt="id_img1" />
              <span className="leftId">{info.feedId}</span>
            </div>
            <i className="fas fa-ellipsis-h threeDot" />
          </div>
          <img alt="feedImg" className="feedImg" src={info.feedImg} />
          <div className="bottomIconBox">
            <div className="bottmLeftBox">
              <i className="fas fa-heart redHeart" />
              <img alt="chat" className="chat" src="/images/chat.png" />
              <img alt="sendDm" className="sendDm" src="/images/sendDm.png" />
            </div>
            <div className="bottomRightBox">
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="likeBox">
            <img className="likeImg" alt="liskeImg" src="/images/likeBox.png" />
            <span className="likeId">
              <b>bhanss</b>님 <b>외 {info.likeNumber}명</b>이 좋아합니다
            </span>
          </div>
        </div>
        <div className="contentClass">
          <div className="contentBox">
            <span className="content">
              <b>{info.feedId}</b> {info.feedMent}
            </span>
            <span className="thebogy"> 더 보기</span>
          </div>
          <div className="commentMore">
            댓글 <span className="commentCount">{info.commenCount}</span>개 모두
            보기
          </div>
          {/* {<!-- 댓글 달리는곳 -->} */}
          <div className="chatBox">
            <div className="commendId">
              i_ddgg
              <span className="commend">헐 예뻐!</span>
            </div>
            <div className="binheartBox">
              {/* <img alt="binheart" class="binheart" src="/images/heart.png" onClick="binheart()"/> */}
              <i
                alt="binheart"
                class="binheart far fa-heart"
                onClick="binheart()"
              />
            </div>
          </div>
          <ul className="test">
            {/* {<!-- 댓글 -->} */}
            {/* <Comment commentList={ this.state.commentList } /> */}
            <CommentLists commentList={this.state.commentList} />
          </ul>
          <div className="contentTime">{info.timeStamp}</div>
        </div>
        {/* {<!-- 댓글달기 input -->} */}
        <div className="chatClass">
          <input
            className="chat chat2"
            type="text"
            placeholder="댓글달기..."
            onChange={this.commentInput}
            onKeyPress={this.commentPush}
          />
          <button
            className="pushBotton"
            type="submit"
            onClick={this.commentSubmit}
          >
            <b>게시</b>
          </button>
        </div>
      </>
    );
  }
}

export default Feed;
