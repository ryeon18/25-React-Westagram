import React from 'react';
import INFO from './footerData';

class Footer extends React.Component {
  render() {
    return (
      <article className="footer">
        <ul className="footerlist">
          {INFO.map(el => (
            <li key={el.id}>
              <a href="/">{el.content}</a>
            </li>
          ))}
        </ul>
        <p>© 2019 INSTAGRAM</p>
      </article>
    );
  }
}

export default Footer;
