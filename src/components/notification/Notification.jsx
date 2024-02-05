// Notification.js
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Notification = ({ message }) => {
  return (
    <>
      {['danger'].map(variant => (
        <Alert key={variant} variant={variant}>
          {message}
        </Alert>
      ))}
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
