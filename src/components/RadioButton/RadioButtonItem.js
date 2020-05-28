import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonItem = ({ text, code, isActive, handleChange }) => {
  const handleClick = e => {
    handleChange(e.target.value);
  };
  return (
    <label className={isActive ? 'active' : ''}>
      <input type="button" value={code} onClick={handleClick} />
      {text}
    </label>
  );
};

RadioButtonItem.propTypes = {
  text: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
};
export default RadioButtonItem;
