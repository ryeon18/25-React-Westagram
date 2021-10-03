import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { imageSize, image, userId, description } = this.props;

    return (
      <div className="show_account">
        <img
          className={`profile_image ${imageSize}`}
          alt="user_profile"
          src={image}
        />
        <div>
          <h5 className="my_id user_id">{userId}</h5>
          <h5 className="profile_description">{description}</h5>
        </div>
      </div>
    );
  }
}

export default Profile;
