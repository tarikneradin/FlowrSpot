import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { DEFAULT_ROUTE } from "../../../config/constants";

import { handleShowLoginModal } from "../../login/actions/login-actions";
import {
  handleShowUserProfileModal,
  getUserProfileInfo
} from "../../user-profile/actions/user-profile-actions";
import { toggleMobileNavigation } from "../../mobile-navigation/actions/mobile-navigation-actions";
import NewAccountButton from "../../new-account-button/components/new-account-button";
import SessionHelper from "../../../core/helpers/session-helper";
import ProfilePhoto from "../../user-profile/components/profile-photo";

import close from "../../../core/res/images/close.svg";
import hamburgerMenu from "./../styles/hamburger-menu.svg";
import logo from "./../styles/logo.svg";
import "../styles/header.scss";

const Header = props => {
  const {
    handleShowLoginModal,
    loggedIn,
    handleShowUserProfileModal,
    userInfo,
    getUserProfileInfo,
    getUserInfoInProgress,
    mobileNavigationDisplayed,
    toggleMobileNavigation,
    isMobile
  } = props;

  useEffect(() => {
    const token = SessionHelper.getToken("auth_token");
    if (token) {
      getUserProfileInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderRoutes = () => {
    const routes = [
      {
        name: "Flowers",
        path: "/flowers"
      },
      {
        name: "Latest Sightings",
        path: "/latest-sightings"
      },
      {
        name: "Favorites",
        path: "/favorites"
      },
      {
        name: "Login",
        onClick: () => {
          handleShowLoginModal(true);
        },
        className: "login",
        hidden: loggedIn
      }
    ];

    return routes.map((item, index) => {
      if (item.hidden) {
        return null;
      }

      if (item.onClick) {
        return (
          <div
            key={index}
            className={`header__nav-items__item ${item.className}`}
            onClick={item.onClick}
          >
            {item.name}
          </div>
        );
      }

      return (
        <NavLink
          key={index}
          id={item.name}
          to={item.path}
          className={`header__nav-items__item ${item.className}`}
        >
          {item.name}
        </NavLink>
      );
    });
  };

  const navigateToDefaultRoute = () => {
    const { history } = props;

    history.push(DEFAULT_ROUTE);
  };

  return (
    <div className="header-container">
      {!isMobile ? (
        <div className="header">
          <div className="header__title" onClick={navigateToDefaultRoute}>
            <img src={logo} alt="" />
            <p> FlowrSpot </p>
          </div>

          <div className="header__nav-items">
            {renderRoutes()}
            {loggedIn && userInfo && (
              <div
                className="user-profile-info"
                onClick={handleShowUserProfileModal}
              >
                <p className="user-profile-info__username">
                  {userInfo.first_name} {userInfo.last_name}
                </p>
                <ProfilePhoto />
              </div>
            )}
            {!loggedIn && !getUserInfoInProgress && <NewAccountButton />}
          </div>
        </div>
      ) : (
        <div className="mobile-header">
          <div className="header__title" onClick={navigateToDefaultRoute}>
            <img src={logo} alt="" />
            <p> FlowrSpot </p>
          </div>
          <button
            type="button"
            className="btn btn-link btn-sm"
            data-toggle="toggle"
            data-target="#mobile-navigation"
            onClick={toggleMobileNavigation}
          >
            <img
              src={mobileNavigationDisplayed ? close : hamburgerMenu}
              alt=""
            />
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  userInfo: state.userProfile.info,
  getUserInfoInProgress: state.userProfile.getUserInfoInProgress,
  mobileNavigationDisplayed: state.mobileNavigation.show,
  isMobile: state.mediaQuery.isMobile
});

const mapDispatchToProps = dispatch => ({
  handleShowLoginModal: data => dispatch(handleShowLoginModal(data)),
  handleShowUserProfileModal: data =>
    dispatch(handleShowUserProfileModal(data)),
  getUserProfileInfo: () => dispatch(getUserProfileInfo()),
  toggleMobileNavigation: () => dispatch(toggleMobileNavigation())
});

Header.propTypes = {
  loggedIn: PropTypes.bool,
  userInfo: PropTypes.object,
  getUserInfoInProgress: PropTypes.bool,
  mobileNavigationDisplayed: PropTypes.bool,
  getFisMobilelowers: PropTypes.bool,
  handleShowLoginModal: PropTypes.func,
  handleShowUserProfileModal: PropTypes.func,
  getUserProfileInfo: PropTypes.func,
  toggleMobileNavigation: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
