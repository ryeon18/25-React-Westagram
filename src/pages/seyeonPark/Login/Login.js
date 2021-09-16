import React from 'react';
import '../../../pages/seyeonPark/Login/Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-seyeon');
  };

  activeButton = () => {
    const thisIsButton = document.querySelector('.button');
    const thisIsId = document.querySelector('#id');
    const thisIsPw = document.querySelector('#pw');
    const inputId = thisIsId.value.includes('@') && thisIsId.value.length > 1;
    const inputPw = thisIsPw.value.length >= 5;
    const conditions = inputId && inputPw;

    const activeBtn = () => {
      thisIsButton.disabled = false;
      thisIsButton.style.backgroundColor = '#0000ff';
    };
    const inActiveBtn = () => {
      thisIsButton.disabled = true;
      thisIsButton.style.backgroundColor = '#c4e1fb';
    };

    return conditions ? activeBtn() : inActiveBtn();
  };

  render() {
    return (
      <div className="loginContainer">
        <main className="container">
          <h1>Westagram</h1>
          <input
            id="id"
            className="logininput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={this.activeButton}
          />
          <input
            id="pw"
            className="logininput"
            type="password"
            placeholder="비밀번호"
            onKeyUp={this.activeButton}
          />
          <button class="button" onClick={this.goToMain}>
            로그인
          </button>
          <span>비밀번호를 잊으셨나요?</span>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
