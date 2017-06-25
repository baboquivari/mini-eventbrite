import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div className="container is-fluid">
      <div>
        <Link to="/">
          <h1 id="header">what's-on-Jon?</h1>
        </Link>  
      </div>
    </div>
  );
};

Header.PropTypes = {};

export default Header;