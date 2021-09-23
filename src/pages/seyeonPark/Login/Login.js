import React from 'react';
import '../../../pages/seyeonPark/Login/Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
import LoginBox from '../components/LoginBox';
// import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputIdValue: '',
      inputPwValue: '',
      isButtonOn: false,
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

  changeButton = () => {
    const { inputIdValue, inputPwValue } = this.state;
    inputIdValue.indexOf('@') !== -1 && inputPwValue.length >= 5
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
          <LoginBox
            getIdValue={this.handleIdInput}
            getPwValue={this.handlePwInput}
            changeBtn={this.changeButton}
          />
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
