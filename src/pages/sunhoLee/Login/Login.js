import { formatWithCursor } from 'prettier';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Login/Login.scss';
// import '../../../styles/common.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isButtonOn: false,
    };
  }

  handleIdInput = e => {
    const { name, value } = e.target;
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePwInput = e => {
    const { name, value } = e.target;
    this.setState({
      pwValue: e.target.value,
    });
  };

  handleButton = () => {
    const { idValue, pwValue } = this.state;
    idValue.indexOf('@') !== -1 && pwValue.length > 5
      ? this.setState({ isButtonOn: true })
      : this.setState({ isButtonOn: false });
  };

  // goToMain = () => {
  //   const { isButtonOn, idValue } = this.state;
  //   if (isButtonOn && idValue.indexOf('@')) {
  //     this.props.history.push('/main-sunho');
  //   } else {
  //     alert('비밀번호를 다시 확인하세요');
  //   }
  // };

  handleClick = () => {
    fetch('http://10.58.3.128:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('success'));
  };

  // handleClick=()=>{
  //   fetch('api:singin',{
  //     mathod:'POST',
  //     body: JSON.stringify({
  //       email: this.state.idValue,
  //       password: this.state.pwValue,
  //     }),
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     if(response.token){
  //         localStorage.setItem('token', respones.token);
  //         this.props.history.push('/main-sunho');
  //     }
  //   })
  // }

  render() {
    // console.log(this.fetch);
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
                  onChange={this.handleIdInput}
                  onKeyUp={this.handleButton}
                  name="idValue"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  onChange={this.handlePwInput}
                  onKeyUp={this.handleButton}
                  name="pwValue"
                />
              </form>
              <div className="loginBtn">
                <button
                  // onClick={this.goToMain}
                  onClick={this.handleClick}
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
