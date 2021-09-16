import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import '../Login/Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleId = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePw = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <p id="logo">Westagram</p>
        <form className="login_form">
          <input
            className="login login_id"
            id="user_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={this.state.idValue}
            onChange={this.handleId}
          />
          <input
            className="login login_pw"
            id="user_pw"
            type="password"
            placeholder="비밀번호"
            value={this.state.pwValue}
            onChange={this.handlePw}
          />
          <button className="btn_login" type="button" onClick={this.goToMain}>
            로그인
          </button>
        </form>
        <a class="find_pw" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}

export default withRouter(Login);
