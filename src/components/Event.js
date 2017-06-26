import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { formatDate } from './lib/helpers';

const Event = (props) => {
  let URL = `/event/${props.id}`;

  return (

      <Link to={URL}>
        <div className="card">

          <div className="card-header">
          <p>{props.name}</p>
          </div> 

          <div>
            <img id="thumb" src={props.thumb} alt="image" height="300" width="300" />
          </div>

          <div className="date">
            <p>{formatDate(props.date)}</p>
          </div>


        </div>
      </Link>
  );

};


Event.PropTypes = {};
// thumb
// name
// date

export default Event;
     