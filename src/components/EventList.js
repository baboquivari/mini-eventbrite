import React, { Component } from 'react';
import request from 'superagent';
import Loading from './Loading';
import Footer from './Footer';

const URL = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=newyork&token=VBUSKKCQ2VTXKPOP34PX';

import Event from './Event';

class EventList extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      fetching: true
    };

  }
  
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
        <div className="columns is-multiline">
          {this.createEventsA()}
        </div>
        <div className="columns is-multiline">
          {this.createEventsB()}
        </div>
        <div className="columns is-multiline">
          {this.createEventsC()}
        </div>
        <Footer />
      </div>
    );
  }
  
  createEventsA () {
    let count = 0;
    return this.state.events.map((event, i) => {
      count++;
      if (count > 3) return;
      if (event.name.text.length > 47) {
        count--;
        return;
      }
      if (!event.logo) {
        count--;
        return;
      }
      return (
        <div className="column" key={i}>
          <Event
            name={event.name.text}
            date={event.start.local}
            thumb={event.logo.url}
            id={event.id}
            />
        </div>
      );
    });
  }
  createEventsB () {
    let count = 0;
    return this.state.events.map((event, i) => {
      if (i < 20) return;
      count++;
      if (count > 3) return;
      if (event.name.text.length > 47) {
        count--;
        return;
      }
      if (!event.logo) {
        count--;
        return;
      }
      return (
        <div className="column" key={i}>
          <Event
            name={event.name.text}
            date={event.start.local}
            thumb={event.logo.url}
            id={event.id}
            />
        </div>
      );
    });
  }
  createEventsC () {
    let count = 0;
    return this.state.events.map((event, i) => {
      if (i < 40) return;
      count++;
      if (count > 3) return;
      if (event.name.text.length > 47) {
        count--;
        return;
      }
      if (!event.logo) {
        count--;
        return;
      }
      return (
        <div className="column" key={i}>
          <Event
            name={event.name.text}
            date={event.start.local}
            thumb={event.logo.url}
            id={event.id}
            />
        </div>
      );
    });
  }
}

export default EventList;
