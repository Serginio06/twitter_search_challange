import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const Alert = ({bootstrapClass, msg}) => (
    <div className={`${bootstrapClass}`} id="alertDialog" role="alert">
        {msg}
    </div>
);

Alert.propTypes = {
    bootstrapClass: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
};

export default Alert;
