import React from 'react';
import '../../../pages/seyeonPark/Login/Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
// import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputIdValue: '',
      inputPwValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      inputIdValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      inputPwValue: event.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-seyeon');
  };

  render() {
    const { inputIdValue, inputPwValue } = this.state;
    return (
      <div className="loginContainer">
        <main className="container">
          <h1>Westagram</h1>
          <input
            id="id"
            className="logininput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
            value={this.inputIdValue}
          />
          <input
            id="pw"
            className="logininput"
            type="password"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
            value={this.inputPwValue}
          />
          <button
            className={
              inputIdValue.indexOf('@') !== -1 && inputPwValue.length >= 5
                ? 'changeBtnColor'
                : 'button'
            }
            onClick={this.goToMain}
          >
            로그인
          </button>
          <span>비밀번호를 잊으셨나요?</span>
        </main>
      </div>
    );
  }
}

export default Login;
