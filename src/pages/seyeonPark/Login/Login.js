import React from 'react';
import LoginBox from './LoginComponent/LoginBox';
import '../../../pages/seyeonPark/Login/Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputIdValue: '',
      inputPwValue: '',
      isButtonOn: false,
    };
  }
  // 이벤트 핸들러가 제대로 불리는지 콘솔로 꼭 찍어보기
  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  changeButton = () => {
    this.state.inputIdValue.indexOf('@') !== -1 &&
    this.state.inputPwValue.length >= 5
      ? this.setState({ isButtonOn: true })
      : this.setState({ isButtonOn: false });
  };

  goToMain = () => {
    this.props.history.push('/main-seyeon');
  };

  render() {
    const { isButtonOn } = this.state;
    return (
      <div className="loginContainer">
        <main className="container">
          <h1>Westagram</h1>
          <LoginBox onChange={this.handleInput} changeBtn={this.changeButton} />
          <button
            className={isButtonOn ? 'changeBtnColor' : 'button'}
            onClick={this.goToMain}
            disabled={isButtonOn ? false : true}
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
