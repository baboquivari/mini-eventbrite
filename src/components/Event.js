import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Event = (props) => {
  // these EVENT tiles has got to RE-ROUTE to the EVENTINFO page onClick. Gotta wrap em in the Link tag remember.
  return (
    <div className='event'>
      <img src={props.thumb} alt="thumbnail" /> 
      <h3>{props.name}</h3>
      <p>{props.date}</p>
    </div>
  );
};

Event.PropTypes = {};

export default Event;