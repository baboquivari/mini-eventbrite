import React, { Component } from 'react';
import request from 'superagent';
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
        <div className="htmlStyling">{this.displayInfo()}</div>
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

export default EventInfo;

