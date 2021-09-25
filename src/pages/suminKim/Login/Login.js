import React from 'react';
import './Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import { withRouter } from 'react-router-dom';

//     // <!-- 글꼴 -->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// @import<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main');
  };
  constructor() {
    super();
    this.state = {
      inputValue: { idValue: '', pwValue: '' },
    };
  }
  handleIdInput = e => {
    this.setState({
      inputValue: { ...this.state.inputValue, idValu: e.target.value },
    });
  };
  handlePwInput = e => {
    this.setState({
      inputValue: { ...this.state.inputValue, pwValu: e.target.value },
    });
  };

  render() {
    return (
      <div className="bigBox">
        <div className="logo">westagram</div>
        <div className="inputId">
          <input
            onChange={this.handleIdInput}
            className="input_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="inputPw">
          <input
            className="input_pw"
            type="password"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
          />
        </div>
        <div className="loginButton">
          <button onClick={this.goToMain} className="login_Button">
            로그인
          </button>
        </div>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}
export default withRouter(Login);
