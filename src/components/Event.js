import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Event = (props) => {
  // these EVENT tiles have got to RE-ROUTE to the EVENTINFO page onClick. Gotta wrap em in the Link tag remember.
  let URL = `/event/${props.id}`;

  // TODO: Come back and make these Event Cards PRETTY.
  
  return (
    <Link to={URL}>
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={props.thumb} alt="Image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
       
      </div>
      <div className="media-content">
        <p className="title is-4">{props.name}</p>
      </div>
    </div>

    <div className="content">
      <br />
      <small>{formatDate(props.date)}</small>
    </div>
  </div>
</div>
    </Link>
  );

function formatDate (str) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = str.split('T')[0].split('-');
  const clock = str.split('T')[1].split(':');

  const month = months[Number(date[1])];
  const day = createDay(Number(date[2]));
  const year = date[0].slice(2);
  const time = `${clock[0]}:${clock[1]}`;

  function createDay (day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return `${day}st`;
      case 2:
      case 22:
        return `${day}nd`;
      case 3:
      case 23:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  return `${day} ${month} '${year} @ ${time}`;

}

};


Event.PropTypes = {};
// thumb
// name
// date

export default Event;