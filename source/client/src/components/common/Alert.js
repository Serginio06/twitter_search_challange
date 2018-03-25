import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const Alert = ({ bootstrapClass, msg }) => (
  <div className={`col-xs-12 alert ${bootstrapClass}`} style={{ margin: 10 }}>
    {msg}
  </div>
);

Alert.propTypes = {
  bootstrapClass: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Alert;
