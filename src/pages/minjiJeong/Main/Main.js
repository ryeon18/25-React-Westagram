import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import ProgramInfo from './ProgramInfo/ProgramInfo';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <Nav />
        <div className="main_container">
          <Feed />
          <div className="side_container">
            <Profile
              imageSize="profile_m"
              image="images/minjiJeong/ocean.jpg"
              userId="_minji.jeong"
              description="정민지"
            />
            <Story />
            <Recommend />
            <ProgramInfo />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
