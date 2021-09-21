import React from 'react';
import './ProgramInfo.scss';

class ProgramInfo extends React.Component {
  render() {
    return (
      <li className="program_info_list">
        <a href="/">{this.props.content}</a>
      </li>
    );
  }
}

export default ProgramInfo;
