import React from 'react';
import FilteredUser from './FilteredUser';
import './SearchUser.scss';

class SearchUser extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      filteredList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/userData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ userList: data });
      });
  }

  filterUser = e => {
    const filtered = this.state.userList.filter(user =>
      user.userId.includes(e.target.value)
    );

    this.setState({
      filteredList:
        filtered.length === this.state.userList.length ? [] : filtered,
    });
  };

  render() {
    return (
      <>
        <input
          className="search"
          type="text"
          placeholder="검색"
          onChange={this.filterUser}
        />
        <div
          className="search_result_box"
          style={{
            display: this.state.filteredList.length === 0 ? 'none' : 'block',
          }}
        >
          <div className="search_result_arrow"></div>
          <ul>
            {this.state.filteredList.map((el, index) => {
              return (
                <FilteredUser
                  key={index}
                  image={el.image}
                  userId={el.userId}
                  description={el.description}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default SearchUser;
