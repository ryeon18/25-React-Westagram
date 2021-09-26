import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <div className="newComment">
        <b>dltjsgho&nbsp;</b>
        <span>{this.props.addComments}</span>
        {/* <span classNanme="deleted">x</span> */}
      </div>
    );
  }
}

export default Comments;
