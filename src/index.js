import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/App.css';

import App from './components/App';
import EventList from './components/EventList';
import EventInfo from './components/EventInfo';

// TODO: DON'T FORGET YOUR PROPTYPE VALIDATIONS

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={EventList} />
        <Route path="/event/:id" component={EventInfo} />
      </Route>
    </Router>,
document.getElementById('root'));
