import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <article className="footer">
        <ul className="footerlist">
          <li>
            <a href="/">소개</a>
          </li>
          <li>
            <a href="/">도움말</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">채용정보</a>
          </li>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">약관</a>
          </li>
          <li>
            <a href="/">위치</a>
          </li>
          <li>
            <a href="/">인기계정</a>
          </li>
          <li>
            <a href="/">해쉬태그</a>
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
