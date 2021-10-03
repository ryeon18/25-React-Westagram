import React from 'react';
import Comment from './Comment';
import '../../Main/Main.scss';

class FeedItem extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentDataSeyeon.json')
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
    if (e.key === 'Enter') {
      this.uploadComment();
    }
  };

  render() {
    const { commentBox, comment, isHeartChange } = this.state;
    return (
      <>
        <header className="feedHeader">
          <div className="feedHeaderIdImg">
            <img alt="feedHeaderIdImg" src={this.props.feedUserImg} />
          </div>
          <div className="feedidinfo">
            <span>{this.props.feedUserId}</span>
            <button>
              <img alt="moreOption" src="/images/seyeonPark/more.png" />
            </button>
          </div>
        </header>
        <section className="feedMainimg">
          <img alt="feedMainImage" src={this.props.feedImg} />
        </section>
        <section className="feedIcons">
          <div>
            <button>
              <img
                alt="likeCheck"
                src="/images/seyeonPark/heart.png"
                width="23px"
              />
            </button>
            <button>
              <img
                alt="comment"
                src="/images/seyeonPark/comment.png"
                width="20px"
              />
            </button>
            <button>
              <img
                alt="upload"
                src="/images/seyeonPark/upload.png"
                width="17px"
              />
            </button>
          </div>
          <div>
            <button>
              <img alt="save" src="/images/seyeonPark/save.png" width="20px" />
            </button>
          </div>
        </section>
        <section className="feedComment">
          <div className="likeCheck">
            <p>
              <a className="message" href="/">
                <span>{this.props.likeUserId}</span>
              </a>
              님
              <a className="message" href="/">
                외 {this.props.likeAmount}명
              </a>
              이 좋아합니다
            </p>
          </div>
          <div className="thirdMessage">
            <Comment
              commentBox={commentBox}
              changeHeartColor={this.changeHeartColor}
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
            onChange={this.getInputValue}
            onKeyPress={this.enterEvent}
          />
          <button className="uploadButton" onClick={this.uploadComment}>
            게시
          </button>
        </section>
      </>
    );
  }
}

export default FeedItem;
