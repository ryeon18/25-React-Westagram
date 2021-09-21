import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Login/Login.scss';
import '../../../styles/common.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-sunho');
  };

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
                  onChange={this.handleIdInput}
                  name="idValue"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  onChange={this.handleIdInput}
                  name="pwValue"
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
