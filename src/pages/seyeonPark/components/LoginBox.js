import React from 'react';

class LoginBox extends React.Component {
  render() {
    const { handleInput } = this.props;
    return (
      <>
        <input
          id="id"
          className="logininput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInput}
          //   onKeyPress={this.activeButton}
        />
        <input
          id="pw"
          className="logininput"
          type="password"
          placeholder="비밀번호"
          onChange={handleInput}
          //   onKeyPress={this.activeButton}
        />
      </>
    );
  }
}

export default LoginBox;
