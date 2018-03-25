import React from 'react';
import PropTypes from 'prop-types';
import './spinner.scss';
let spinnerTransparentBG = require ("./../../../resources/images/spinnerTransparentBG.gif");

const Spinner = ({ isActive }) => (
  <div className={isActive ? 'overlay active' : 'overlay'}>
    <img src={spinnerTransparentBG} alt="" />
  </div>
);

Spinner.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Spinner;
