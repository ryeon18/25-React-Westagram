import { formatWithCursor } from 'prettier';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Login/Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleButton = () => {
    const { idValue, pwValue } = this.state;
    idValue.indexOf('@') !== -1 && pwValue.length > 5
      ? this.setState({ isButtonOn: true })
      : this.setState({ isButtonOn: false });
  };

  goToMain = () => {
    const { isButtonOn, idValue } = this.state;
    if (isButtonOn && idValue.indexOf('@')) {
      this.props.history.push('/main-sunho');
    } else {
      alert('비밀번호를 다시 확인하세요');
    }
  };

  render() {
    const { isButtonOn } = this.state;
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
                  onChange={this.handleInput}
                  onKeyUp={this.handleButton}
                  name="idValue"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  onChange={this.handleInput}
                  onKeyUp={this.handleButton}
                  name="pwValue"
                />
              </form>
              <div className="loginBtn">
                <button
                  onClick={this.goToMain}
                  className={isButtonOn ? 'buttonOn' : 'buttonOff'}
                >
                  로그인
                </button>
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
