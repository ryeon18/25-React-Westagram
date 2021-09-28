import React from 'react';
import Nav from '../components/Nav';
import Feed from '../components/Feed';
import AsideStory from '../components/AsideStory';
import AsideRecommend from '../components/AsideRecommend';
import Footer from '../components/Footer';
import '../../../pages/seyeonPark/Main/Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
      isHaertChange: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentDataSeyeon.json', {
      method: 'GET',
    })
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
    // const { comment } = this.state;
    if (e.key === 'Enter') {
      this.uploadComment();
    }
  };

  render() {
    const { commentBox, comment, isHeartChange } = this.state;
    return (
      <div className="mainContainer">
        <Nav />
        <main>
          <Feed
            commentBox={commentBox}
            comment={comment}
            isHeartChange={isHeartChange}
            uploadComment={this.uploadComment}
            getInputValue={this.getInputValue}
            enterEvent={this.enterEvent}
            changeHeartColor={this.changeHeartColor}
          />
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
