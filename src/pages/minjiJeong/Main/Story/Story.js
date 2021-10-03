import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import STORY_DATA from './storyData';
import './Story.scss';

class Story extends React.Component {
  render() {
    return (
      <div className="new_stories">
        <div className="stories_header">
          <h5>스토리</h5>
          <Link className="show_all" to="/">
            모두 보기
          </Link>
        </div>
        <div className="stories_row">
          {STORY_DATA.map(story => {
            const { id, imageSize, image, userId, description } = story;
            return (
              <Profile
                key={id}
                imageSize={imageSize}
                image={image}
                userId={userId}
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
