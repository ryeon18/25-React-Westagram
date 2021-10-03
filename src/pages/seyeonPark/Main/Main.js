import React from 'react';
import Nav from '../Main/MainComponent/Nav';
import Feed from '../Main/MainComponent/Feed';
import AsideStory from '../Main/MainComponent/AsideStory';
import AsideRecommend from '../Main/MainComponent/AsideRecommend';
import Footer from '../Main/MainComponent/Footer';
import '../../../pages/seyeonPark/Main/Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Nav />
        <main>
          <Feed />
          <section className="main-right">
            <article className="sideUser">
              <img
                className="sideprofileimg"
                alt="sideprofileimage"
                src="/images/seyeonPark/profile1.jpeg"
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
