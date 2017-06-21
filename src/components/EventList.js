import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

class EventList extends Component {
  
  // componentDidMount () {
    // FETCH EVENT Name, Date and Thumbnails here
  // }

  render () {
    return (
      <div>
        <Event />
      </div>
    );
  }
}


EventList.propTypes = {};

export default EventList;
