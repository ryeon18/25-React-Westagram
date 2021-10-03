import React from 'react';

class FilteredUser extends React.Component {
  render() {
    return (
      <li>
        <img className="profile_s" alt="user_profile" src={this.props.image} />
        <div>
          <h5 className="user_id">{this.props.userId}</h5>
          <h5 className="profile_description">{this.props.description}</h5>
        </div>
      </li>
    );
  }
}

export default FilteredUser;
