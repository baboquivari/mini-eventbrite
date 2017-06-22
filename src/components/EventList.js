import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import Loading from './Loading';
const URL = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=newyork&token=VBUSKKCQ2VTXKPOP34PX';

import Event from './Event';

class EventList extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      fetching: true
    };

    // bind handlers in here
  }
  
  // FETCH EVENT Name, Date and Thumbnails here
  componentDidMount () {
    request
      .get(URL)
      .end((error, response) => {
        error ? console.log(error) : this.setState({events:response.body.events, fetching: false});
      });
  }

  render () {
    if (this.state.fetching) return (<Loading />);

    return (
      <div>
        {this.createEvents()}
      </div>
    );
  }

  createEvents () {
    return this.state.events.map((event, i) => {
      if (i > 10 || !event.logo) return;
      return <Event
        key={i}
        name={event.name.text}
        date={event.start.local}
        thumb={event.logo.url}
        id={event.id}
        />;
    });
  }
}


EventList.propTypes = {};

export default EventList;
