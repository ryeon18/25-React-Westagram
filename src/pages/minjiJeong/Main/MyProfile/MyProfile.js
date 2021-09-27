import React from 'react';
import './MyProfile.scss';

class MyProfile extends React.Component {
  render() {
    return (
      <div className="show_account">
        <img
          className="profile_m"
          alt="user_profile"
          src="images/minjiJeong/me.jpg"
        />
        <div>
          <h5 className="my_id user_id">_minji.jeong</h5>
          <h5 className="user_description">정민지</h5>
        </div>
      </div>
    );
  }
}

export default MyProfile;
