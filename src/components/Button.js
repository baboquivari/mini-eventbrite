import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Button = (props) => {
  //  this button has gotta re-route to the BOOKING PAGE
  return (
    <div>
      <button>
        GET ME THERE, JON!
      </button>
    </div>
  );
};

Button.PropTypes = {};

export default Button;