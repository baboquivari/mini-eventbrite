import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Event = (props) => {
  // these EVENT tiles has got to RE-ROUTE to the EVENTINFO page onClick. Gotta wrap em in the Link tag remember.
  return (
    <div className='event'>
      <img alt="thumbnail" /> 
      <h3>Event Title</h3>
      <p>Date</p>
    </div>
  );
};

Event.PropTypes = {};

export default Event;