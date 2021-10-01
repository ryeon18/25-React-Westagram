import React, { Component } from 'react';
// import CommentLists from './CommentLists';
import Feed from './Feed';

class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      FeedData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ FeedData: data });
      });
  }

  render() {
    console.log(this.state);
    const { FeedData } = this.state;
    const list = FeedData.map(info => <Feed info={info} />);

    return <>{list}</>;
  }
}

export default FeedList;
