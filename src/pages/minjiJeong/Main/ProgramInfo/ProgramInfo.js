import React from 'react';
import './ProgramInfo.scss';
import INFO_LIST from './programInfoData';

class ProgramInfo extends React.Component {
  render() {
    return (
      <div className="program_info">
        <ul>
          {INFO_LIST.map(el => (
            <li className="program_info_list" key={el.id}>
              <a href="/">{el.content}</a>
            </li>
          ))}
        </ul>
        <span>&#169; 2019 INSTAGRAM</span>
      </div>
    );
  }
}

export default ProgramInfo;
