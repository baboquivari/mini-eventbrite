import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class EventInfo extends Component {
  
  // componentDidMount () {
    // FETCH EVENTS html detail here
  // }

  render () {
    return (
      <div>
        I AM THE EVENT INFORMATION PAGE
        <Button /> 
      </div>
    );
  }
}

// render a nice button using Bulma. This has gotta reroute to BOOKING PAGE/


EventInfo.propTypes = {};

export default EventInfo;
