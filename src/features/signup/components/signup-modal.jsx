import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import {
  handleShowSignupModal,
  signup,
  handleSignupError
} from "../actions/signup-actions";
import SignupForm from "./signup-form";
import CloseButton from "../../shared-components/fs-close-button/close-button";

import "../styles/signup-modal.scss";

const SignupModal = props => {
  const { showSignupModal, handleShowSignupModal } = props;

  const handleClose = () => {
    handleShowSignupModal(false);
  };

  return (
    <Modal
      className="signup-modal"
      show={showSignupModal}
      onHide={handleClose}
      animation={false}
    >
      <CloseButton onClick={handleClose} />
      <SignupForm />
    </Modal>
  );
};

const mapStateToProps = state => ({
  showSignupModal: state.signup.showSignupModal,
  signupInProgress: state.signup.signupInProgress,
  error: state.signup.error
});

const mapDispatchToProps = dispatch => ({
  handleShowSignupModal: data => {
    dispatch(handleShowSignupModal(data));
  },
  signup: data => {
    dispatch(signup(data));
  },
  handleSignupError: data => {
    dispatch(handleSignupError(data));
  }
});

SignupModal.propTypes = {
  showSignupModal: PropTypes.bool,
  signupInProgress: PropTypes.bool,
  error: PropTypes.string,
  handleSignupError: PropTypes.func,
  signup: PropTypes.func,
  handleShowSignupModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
