import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { toggleInfoModal } from "./info-modal-actions";
import Button from "../fs-button/button";
import CloseButton from "../fs-close-button/close-button";

import "./fs-info-modal.scss";

const InfoModal = props => {
  const {
    showInfoModal,
    message,
    ctaText,
    ctaCallback,
    toggleInfoModal,
    additionalCtaCallback,
    additionalCtaText
  } = props;

  const handleClose = () => {
    toggleInfoModal();
  };

  const handleBtnClick = () => {
    if (ctaCallback) {
      ctaCallback();
      toggleInfoModal();
    } else {
      toggleInfoModal();
    }
  };

  const handleAdditionalBtnClick = () => {
    if (additionalCtaCallback) {
      additionalCtaCallback();
      toggleInfoModal();
    } else {
      toggleInfoModal();
    }
  };

  return (
    <Modal
      className="info-modal"
      show={showInfoModal}
      onHide={handleClose}
      animation={false}
    >
      <CloseButton onClick={handleClose} />
      <Modal.Body>
        <p className="info-modal__message"> {message} </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          className="info-modal__cta"
          onClick={handleBtnClick}
          text={ctaText}
        />
        {additionalCtaCallback && additionalCtaText && (
          <Button
            className="info-modal__cta"
            onClick={handleAdditionalBtnClick}
            text={additionalCtaText}
          />
        )}
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => ({
  showInfoModal: state.infoModal.showInfoModal,
  message: state.infoModal.message,
  ctaText: state.infoModal.ctaText,
  ctaCallback: state.infoModal.ctaCallback,
  additionalCtaCallback: state.infoModal.additionalCtaCallback,
  additionalCtaText: state.infoModal.additionalCtaText
});

const mapDispatchToProps = dispatch => ({
  toggleInfoModal: () => dispatch(toggleInfoModal())
});

InfoModal.propTypes = {
  toggleInfoModal: PropTypes.func,
  showInfoModal: PropTypes.bool,
  message: PropTypes.string,
  ctaText: PropTypes.string,
  ctaCallback: PropTypes.func,
  additionalCtaCallback: PropTypes.func,
  additionalCtaText: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);
