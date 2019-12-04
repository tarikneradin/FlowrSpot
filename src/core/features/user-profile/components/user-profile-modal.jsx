import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import {
  handleShowUserProfileModal,
  getUserProfileInfo
} from "../actions/user-profile-actions";
import UserProfileInfo from "./user-profile-info";
import Loader from "../../loader/components/loader";
import CloseButton from "../../shared-components/fs-close-button/close-button";

import "../styles/user-profile-modal.scss";

const UserProfileModal = props => {
  const {
    handleShowUserProfileModal,
    showUserProfileModal,
    getUserProfileInfo,
    userInfo,
    getUserInfoInProgress
  } = props;

  const handleClose = () => {
    handleShowUserProfileModal(false);
  };

  useEffect(() => {
    if (showUserProfileModal) {
      getUserProfileInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUserProfileModal]);

  return (
    <Modal
      className="user-profile-modal"
      show={showUserProfileModal}
      onHide={handleClose}
      animation={false}
    >
      <CloseButton onClick={handleClose} />
      {getUserInfoInProgress && <Loader />}
      <UserProfileInfo userInfo={userInfo} />
    </Modal>
  );
};

const mapStateToProps = state => ({
  showUserProfileModal: state.userProfile.showUserProfileModal,
  getUserInfoInProgress: state.userProfile.getUserInfoInProgress,
  userInfo: state.userProfile.info
});

const mapDispatchToProps = dispatch => ({
  handleShowUserProfileModal: data => {
    dispatch(handleShowUserProfileModal(data));
  },
  getUserProfileInfo: () => {
    dispatch(getUserProfileInfo());
  }
});

UserProfileModal.propTypes = {
  getUserInfoInProgress: PropTypes.bool,
  userInfo: PropTypes.object,
  showUserProfileModal: PropTypes.bool,
  handleShowUserProfileModal: PropTypes.func,
  getUserProfileInfo: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileModal);
