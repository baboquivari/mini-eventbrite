import React, { Component } from 'react';
import request from 'superagent';
import PropTypes from 'prop-types';
import Button from './Button';
import Loading from './Loading';
const URL = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=newyork&token=VBUSKKCQ2VTXKPOP34PX';


class EventInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      event : [],
      fetching: true
    };
  }
  
  // FETCH same events you get from EVENTLIST, then map through and ONLY add the article ID that matches the incoming PARAMS to this local state
  componentDidMount () {
    this.setState({event: [], fetching: true});

    request
      .get(URL)
      .end((error, response) => {
        error ? console.log(error) : this.setEvent(response.body.events);
      });
  }

  render () {
    if (this.state.fetching) return (<Loading />);
    
    return (
      <div>
        <p className="htmlStyling">{this.displayInfo()}</p>
        <Button url={this.state.event[0].url}/> 
      </div>
    );
  }

  setEvent (events) {
    const id = this.props.params.id;

    const event = events.filter((event) => {
      return event.id === id;
    });

    this.setState({event: event, fetching: false});
  }

  displayInfo () {
    const html = this.state.event[0].description.html;
    const markup = {__html: html};

    return <div className="html" dangerouslySetInnerHTML={markup} />;
  }
}


EventInfo.propTypes = {};

export default EventInfo;

