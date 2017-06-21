import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderSummary from './OrderSummary';
import WhenAndWhere from './WhenAndWhere';
import RegistrationForm from './RegistrationForm';
import OrganiserDetails from './OrganiserDetails';


class BookingPage extends Component {
  
  // componentDidMount () {
    // FETCH EVENT Booking Details, and maybe re-fetch all event info
  // }

  render () {
    return (
      <div>
        Book your event here.
        <OrderSummary />
        <WhenAndWhere />
        <RegistrationForm />
        <OrganiserDetails />
      </div>
    );
  }
}


BookingPage.propTypes = {};

export default BookingPage;
