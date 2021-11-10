import React from 'react';
import Comment from './Comment';
import '../../Main/Main.scss';

class FeedItem extends React.Component {
  render() {
    const { feedId, feedUserImg, feedUserId, feedImg, likeUserId, likeAmount } =
      this.props;
    return (
      <>
        <header className="feedHeader">
          <div className="feedHeaderIdImg">
            <img alt="feedHeaderIdImg" src={feedUserImg} />
          </div>
          <div className="feedidinfo">
            <span>{feedUserId}</span>
            <button>
              <img alt="moreOption" src="/images/seyeonPark/more.png" />
            </button>
          </div>
        </header>
        <section className="feedMainimg">
          <img alt="feedMainImage" src={feedImg} />
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
                <span>{likeUserId}</span>
              </a>
              님
              <a className="message" href="/">
                외 {likeAmount}명
              </a>
              이 좋아합니다
            </p>
          </div>
          <Comment feedId={feedId} />
        </section>
      </>
    );
  }
}

export default FeedItem;
