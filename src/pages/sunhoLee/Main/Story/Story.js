import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import STORY_DATA from '../Story/Story_Data';
import '../Story/Story.scss';

class Story extends Component {
  render() {
    return (
      <div className="story">
        <div className="story-txt">
          <p>스토리</p>
          <Link to="/">
            <p>모두 보기</p>
          </Link>
        </div>
        <div className="story-inner">
          {STORY_DATA.map(data => {
            const { id, userId, image, description } = data;
            return (
              <Profile
                key={id}
                id={id}
                userId={userId}
                image={image}
                description={description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Story;
