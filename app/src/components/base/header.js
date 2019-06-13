import React from 'react';
import {Link} from "react-router-dom";

import './header.sass';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "header"
    };
  }

  render() {
    return (
      <header>
        <div className="main">
          <div className="content header">
            <Link className="link title" to="/">Home</Link>
            <Link className="link title" to="/graph">Graph</Link>
            <Link className="link title" to="/about">About</Link>
            {/*<a href="https://github.com/arthurnone?tab=repositories" className="link title">Code</a>*/}
            {/*<a href="https://arthurnone.com/me" className="link title">Me</a>*/}
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
