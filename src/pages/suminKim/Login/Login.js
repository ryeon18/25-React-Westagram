import React from 'react';
import './Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import { Link } from 'react-router-dom';

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
      idValue: '',
      pwValue: '',
      buttonOn: false,
    };
  }
  handleIdInput = e => {
    this.setState({
      idValue: e.target.value,
    });
  };
  handlePwInput = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };
  buttonChange = () => {
    const { idValue, pwValue } = this.state;

    this.setState({
      buttonOn:
        idValue.indexOf('@') !== -1 &&
        idValue.length >= 5 &&
        pwValue.length >= 5,
    });
  };

  render() {
    const { buttonOn } = this.state;
    console.log(this.state);
    return (
      <div className="bigBox">
        <div className="logo">westagram</div>
        <div className="inputId">
          <input
            onChange={this.handleIdInput}
            onKeyUp={this.buttonChange}
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
            onKeyUp={this.buttonChange}
          />
        </div>
        <div className="loginButton">
          <button
            onClick={this.goToMain}
            className={buttonOn ? 'buttonOn' : 'buttonOff'}
          >
            로그인
          </button>
        </div>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    );
  }
}
export default Login;
