import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <article className="footer">
        <ul className="footerlist">
          <li>
            <a href="/">Instaram 정보</a>
          </li>
          <li>
            <a href="/">지원</a>
          </li>
          <li>
            <a href="/">홍보 센터</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">채용 정보</a>
          </li>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">약관</a>
          </li>
          <li>
            <a href="/">디렉터리</a>
          </li>
          <li>
            <a href="/">프로필</a>
          </li>
          <li>
            <a href="/">해시태그</a>
          </li>
          <li>
            <a href="/">언어</a>
          </li>
        </ul>
        <p>© 2019 INSTAGRAM</p>
      </article>
    );
  }
}

export default Footer;
