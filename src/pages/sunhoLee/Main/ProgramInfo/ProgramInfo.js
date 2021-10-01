import React, { Component } from 'react';
import INFO_LIST from './ProgramInfoData';
import '../ProgramInfo/ProgramInfo.scss';

class ProgramInfo extends Component {
  render() {
    return (
      <div className="program_info">
        <ul>
          {INFO_LIST.map(INFO_LIST => (
            <li key={INFO_LIST.id}>
              <a href="/">{INFO_LIST.content}</a>
            </li>
          ))}
        </ul>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
      </div>
    );
  }
}

export default ProgramInfo;
