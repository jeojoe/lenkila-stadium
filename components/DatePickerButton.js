import React from 'react';
import PropTypes from 'prop-types';

const DatePickerButton = ({ value, onClick }) => (
  <button
    className="btn btn-light"
    onClick={onClick}
  >
    {value}
  </button>
);

DatePickerButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

DatePickerButton.defaultProps = {
  value: '',
  onClick: () => console.log('DatePickerButton no onClick prop'),
};

export default DatePickerButton;
