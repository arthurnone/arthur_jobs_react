import React from 'react';
import './footer.sass';

class Footer extends React.Component {

  render() {
    return (
      <footer className='text'>
        <a className="link" href="https://arthurnone.com/">
          © arthurnone.com
        </a>
        <div>
          root@arthurnone.com
        </div>
        <a className="link" href="https://stackoverflow.com/jobs">
          data source stackoverflow
        </a>
      </footer>
    );
  }
}


export default Footer;
