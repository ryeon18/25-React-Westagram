import React from 'react';

class LoginBox extends React.Component {
  render() {
    const { getIdValue, getPwValue, changeBtn, inputIdValue, inputPwValue } =
      this.props;
    return (
      <>
        <input
          id="id"
          className="logininput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={getIdValue}
          onKeyUp={changeBtn}
          value={inputIdValue}
        />
        <input
          id="pw"
          className="logininput"
          type="password"
          placeholder="비밀번호"
          onChange={getPwValue}
          onKeyUp={changeBtn}
          value={inputPwValue}
        />
      </>
    );
  }
}

export default LoginBox;
