import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { handleShowLoginModal } from "../actions/login-actions";
import LoginForm from "./login-form";
import CloseButton from "../../shared-components/fs-close-button/close-button";

import "../styles/login-modal.scss";

export const LoginModal = props => {
  const { showLoginModal, handleShowLoginModal } = props;

  const handleClose = () => {
    handleShowLoginModal(false);
  };

  if (!showLoginModal) {
    return null;
  }

  return (
    <Modal
      className="login-modal"
      show={showLoginModal}
      onHide={handleClose}
      animation={false}
    >
      <CloseButton onClick={handleClose} />
      <LoginForm />
    </Modal>
  );
};

const mapStateToProps = state => ({
  showLoginModal: state.login.showLoginModal
});

const mapDispatchToProps = dispatch => ({
  handleShowLoginModal: data => {
    dispatch(handleShowLoginModal(data));
  }
});

LoginModal.propTypes = {
  showLoginModal: PropTypes.bool,
  handleShowLoginModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
