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

  // activeButton = () => {
  //   const thisIsButton = document.querySelector('.button');
  //   const thisIsId = document.querySelector('#id');
  //   const thisIsPw = document.querySelector('#pw');
  //   const inputId = thisIsId.value.includes('@') && thisIsId.value.length > 1;
  //   const inputPw = thisIsPw.value.length >= 5;
  //   const conditions = inputId && inputPw;

  //   const activeBtn = () => {
  //     thisIsButton.disabled = false;
  //     thisIsButton.style.backgroundColor = '#0000ff';
  //   };
  //   const inActiveBtn = () => {
  //     thisIsButton.disabled = true;
  //     thisIsButton.style.backgroundColor = '#c4e1fb';
  //   };

  //   return conditions ? activeBtn() : inActiveBtn();
  // };

  goToMain = () => {
    this.props.history.push('/main-seyeon');
  };

  render() {
    console.log('this state', this.state);
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
            onClick={this.goToMain}
            className={
              this.state.inputIdValue.indexOf('@') !== -1 &&
              this.state.inputPwValue.length >= 5
                ? 'changeBtnColor'
                : 'button'
            }
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
