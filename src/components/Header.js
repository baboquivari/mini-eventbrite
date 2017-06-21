import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">wot-zon-jon?</Link>  
    </div>
  );
};

Header.PropTypes = {};

export default Header;