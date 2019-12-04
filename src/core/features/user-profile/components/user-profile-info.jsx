import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  handleShowUserProfileModal,
  handleUserLogout,
  getUserProfileInfo
} from "../actions/user-profile-actions";
import Button from "../../shared-components/fs-button/button";
import ProfilePhoto from "./profile-photo";

import "../styles/user-profile-info.scss";

const UserProfileInfo = props => {
  const {
    handleUserLogout,
    handleShowUserProfileModal,
    getUserInfoInProgress,
    userInfo
  } = props;

  const handleLogout = () => {
    handleUserLogout();
    handleShowUserProfileModal(false);
    redirectToFlowers();
  };

  const redirectToFlowers = () => {
    const { history } = props;
    history.push("/flowers");
  };

  return (
    <div className="user-info">
      {!getUserInfoInProgress && userInfo && (
        <>
          <div className="user-info__avatar-container">
            <ProfilePhoto className="large" />
            <div className="user-info__avatar-container__info">
              <p>
                {userInfo.first_name} {userInfo.last_name}
              </p>
              <label> 47 sightings </label>
            </div>
          </div>
          <div className="user-info__user-info">
            <div className="user-info__user-info__item">
              <label> First Name </label>
              <p> {userInfo.first_name} </p>
            </div>
            <div className="user-info__user-info__item">
              <label> Last Name </label>
              <p> {userInfo.last_name} </p>
            </div>
            {/* API does not return date of birth and email in response */}
            <div className="user-info__user-info__item">
              <label> Date of Birth </label>
              <p> {userInfo.date_of_birth || "-"} </p>
            </div>
            <div className="user-info__user-info__item">
              <label> Email </label>
              <p> {userInfo.email || "-"} </p>
            </div>
          </div>
        </>
      )}
      <Button
        onClick={() => {
          handleLogout();
        }}
        className="logout-button"
        text="Logout"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  getUserInfoInProgress: state.userProfile.getUserInfoInProgress,
  userInfo: state.userProfile.info,
  showUserProfileModal: state.userProfile.showUserProfileModal
});

const mapDispatchToProps = dispatch => ({
  handleShowUserProfileModal: data => {
    dispatch(handleShowUserProfileModal(data));
  },
  getUserProfileInfo: () => {
    dispatch(getUserProfileInfo());
  },
  handleUserLogout: () => {
    dispatch(handleUserLogout());
  }
});

ProfilePhoto.propTypes = {
  getUserInfoInProgress: PropTypes.bool,
  userInfo: PropTypes.object,
  showUserProfileModal: PropTypes.bool,
  handleShowUserProfileModal: PropTypes.func,
  getUserProfileInfo: PropTypes.func,
  handleUserLogout: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserProfileInfo)
);
