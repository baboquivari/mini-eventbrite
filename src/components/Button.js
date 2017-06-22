import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  //  this button has gotta re-route to the BOOKING PAGE
  return (
    <div>
      <a id="button" className="button is-success is-pulled-left is-fullwidth" href={props.url}>
          "Take me there, Jon!"
      </a>
    </div>
  );
};

Button.PropTypes = {};

export default Button;