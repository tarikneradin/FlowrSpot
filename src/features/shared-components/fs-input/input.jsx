import React from "react";
import PropTypes from "prop-types";

import "./fs-input.scss";

const Input = props => {
  const {
    onChange,
    className,
    label,
    value,
    placeholder,
    type,
    required
  } = props;

  return (
    <div className={`fs-input ${className}`}>
      <label> {label} </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool
};

export default Input;
