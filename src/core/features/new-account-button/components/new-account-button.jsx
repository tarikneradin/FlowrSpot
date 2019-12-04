import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { handleShowSignupModal } from "../../signup/actions/signup-actions";

import "../styles/new-account-button.scss";

const NewAccountButton = props => {
  const { className } = props;

  const handleNewAccountButtonClick = () => {
    const { handleShowSignupModal } = props;

    handleShowSignupModal(true);
  };

  return (
    <button
      className={`new-account-button ${className}`}
      onClick={handleNewAccountButtonClick}
    >
      <span> New Account </span>
    </button>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleShowSignupModal: data => {
    dispatch(handleShowSignupModal(data));
  }
});

NewAccountButton.propTypes = {
  handleShowSignupModal: PropTypes.func,
  className: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountButton);
