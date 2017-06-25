import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class App extends Component {
  
  render () {
    return (
      <div>
        <Header />
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}


App.propTypes = {};

export default App;
