import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { userId, image, description, recommend } = this.props;
    return (
      <div className="people">
        <div className="people-img img-box">
          <img src={image} alt="images" />
        </div>
        <div className="people-name">
          <div className="userName">{userId}</div>
          <p>{description}</p>
          <p>{recommend}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
