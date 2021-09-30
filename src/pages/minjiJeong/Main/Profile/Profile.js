import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    return (
      <div className="show_account">
        <img
          className={`profile_image ${this.props.imageSize}`}
          alt="user_profile"
          src={this.props.image}
        />
        <div>
          <h5 className="my_id user_id">{this.props.userId}</h5>
          <h5 className="profile_description">{this.props.description}</h5>
        </div>
      </div>
    );
  }
}

export default Profile;
