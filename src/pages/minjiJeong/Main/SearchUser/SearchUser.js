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

    // 필터링 된 값 없을 때, 전체 데이터 띄우는거 막기 위해 길이가 같은 경우 빈배열로 초기화
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
          className={`search_result_box ${
            this.state.filteredList.length === 0
              ? 'hideSearchBox'
              : 'showSearchBox'
          }`}
        >
          <div className="search_result_arrow"></div>
          <ul>
            {this.state.filteredList.map(el => {
              return (
                <FilteredUser
                  key={el.id}
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
