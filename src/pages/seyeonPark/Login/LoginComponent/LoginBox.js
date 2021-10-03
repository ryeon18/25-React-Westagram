import React from 'react';

class LoginBox extends React.Component {
  render() {
    const { onChange, changeBtn, inputIdValue, inputPwValue } = this.props;
    return (
      <>
        <input
          className="logininput"
          name="inputIdValue"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={onChange}
          onKeyUp={changeBtn}
          value={inputIdValue}
        />
        <input
          className="logininput"
          name="inputPwValue"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
          onKeyUp={changeBtn}
          value={inputPwValue}
        />
      </>
    );
  }
}

export default LoginBox;
