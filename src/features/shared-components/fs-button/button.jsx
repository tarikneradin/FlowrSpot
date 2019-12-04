import React from "react";
import PropTypes from "prop-types";

import "./fs-button.scss";

const Button = props => {
  const { text, onClick, className, type, disabled, loading } = props;

  return (
    <button
      className={`fs-button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <span> {text} </span>
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default Button;
