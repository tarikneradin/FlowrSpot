import React from "react";
import PropTypes from "prop-types";

import close from "../../../res/images/close.svg";

import "./fs-close-button.scss";

const CloseButton = props => {
  const { onClick } = props;

  return (
    <button className="close-button" onClick={onClick}>
      <img src={close} alt="close" />
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CloseButton;
