import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Login/Login.scss';
import '../../../styles/common.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-sunho');
  };

  checkPassword() {
    const id = document.getElementById('userId');
    const pw = document.getElementById('password');
    const button = document.getElementsByTagName('button')[0];
    const inputTag = document.getElementsByTagName('input')[0];
    id.value.indexOf('@') >= 0 && pw.value.length >= 5
      ? (button.disabled = false)
      : (button.disabled = true);
  }
  render() {
    return (
      <>
        <main className="Login">
          <div className="wrap">
            <h1 className="logo">Westagram</h1>
            <div className="loginInner">
              <form className="loginForm">
                <input
                  type="text"
                  id="userId"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onKeyUp={this.checkPassword}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  onKeyUp={this.checkPassword}
                />
              </form>
              <div className="loginBtn">
                <Link to="/main-sunho">
                  <button onClick={this.goToMain} disabled>
                    로그인
                  </button>
                </Link>
              </div>
            </div>
            <a href="#" className="pwFind" onClick={this.goToMain}>
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </main>
      </>
    );
  }
}
export default withRouter(Login);
