import React, { Component } from 'react';
import INFO_LIST from './ProgramInfoData';

class ProgramInfo extends Component {
  render() {
    return (
      <div className="program_info">
        <ul>
          {INFO_LIST.map(el => (
            <li key={el.id}>
              <a href="/">{el.content}</a>
            </li>
          ))}
        </ul>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
      </div>
    );
  }
}

export default ProgramInfo;
