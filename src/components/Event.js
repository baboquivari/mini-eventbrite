import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Event = (props) => {
  // these EVENT tiles have got to RE-ROUTE to the EVENTINFO page onClick. Gotta wrap em in the Link tag remember.
  let URL = `/event/${props.id}`;

  // TODO: Come back and make these Event Cards PRETTY.
  // TODO: Format the props.date, either by finding a method or creating a helper function to do it.
  
  return (
    <Link to={URL}>
      <article className='media'>

        <figure className="media-left">
          <p className="image is-64x64">
            <img src={props.thumb} alt="thumbnail" /> 
          </p>
        </figure>

        <div className="media-content">
          <div className="content">
              <h3>{props.name}</h3>
          </div>
        </div>
        
        



        <p>{props.date}</p>
      </article>
    </Link>
  );
};

Event.PropTypes = {};

export default Event;