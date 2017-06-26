import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div className="container is-fluid">
      <div>
        <Link to="/">
          <h1 id="header">
            what's-on-Jon?
            <br />
            <p id="sub-header">NEW YORK</p>
            </h1>
        </Link>  
      </div>
    </div>
  );
};

export default Header;