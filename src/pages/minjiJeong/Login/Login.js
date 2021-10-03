import React from 'react';
import '../Login/Login.scss';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
    this.props.history.push('/main-minji');

    // Backend 통신 시 사용
    // fetch('http://10.58.1.9:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.idValue,
    //     password: this.state.pwValue,
    //     phone: '010-5454-4897',
    //     name: 'minjiJeong',
    //   })
    //     .then(response => response.json())
    //     .then(response => {
    //       if (response.token) {
    //         localStorage.setItem('token', response.token);
    //         this.props.history.push('/main-minji');
    //       } else {
    //         alert('Error');
    //       }
    //     }),
    // });
  };

  render() {
    // 로그인 유효성 검사
    const isBtnEnabled =
      this.state.idValue.includes('@') && this.state.pwValue.length >= 5;

    return (
      <div className="login_container">
        <p id="logo">Westagram</p>
        <form className="login_form">
          <input
            className="login login_id"
            name="idValue"
            type="text"
            autoComplete="off"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={this.state.idValue}
            onChange={this.handleInput}
          />
          <input
            className="login login_pw"
            name="pwValue"
            type="password"
            autoComplete="off"
            placeholder="비밀번호"
            value={this.state.pwValue}
            onChange={this.handleInput}
          />
          <button
            className={`loginBtn ${isBtnEnabled ? 'activeBtn' : 'disableBtn'}`}
            type="button"
            disabled={!isBtnEnabled}
            onClick={this.handleLogin}
          >
            로그인
          </button>
        </form>
        <Link className="find_pw" to="/find_account">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    );
  }
}

export default withRouter(Login);
