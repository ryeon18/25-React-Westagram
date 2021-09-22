import React from 'react';

class LoginBtn extends React.Component {
  render() {
    console.log('thisprops', this.props);
    return (
      <>
        <button
          onClick={this.props.goToMain}
          className={
            this.props.inputIdValue.indexOf('@') !== -1 &&
            this.props.inputPwValue.length >= 5
              ? 'changeBtnColor'
              : 'loginBtn'
          }
        >
          로그인
        </button>
      </>
    );
  }
}

export default LoginBtn;
