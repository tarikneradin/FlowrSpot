import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleMobileNavigation } from "../actions/mobile-navigation-actions";
import { handleUserLogout } from "../../user-profile/actions/user-profile-actions";

import "../styles/mobile-navigation.scss";

const MobileNavigation = props => {
  const { loggedIn, handleUserLogout } = props;

  const navigateToRoute = nav => {
    const { history, toggleMobileNavigation } = props;

    toggleMobileNavigation();
    history.push(nav.path);
  };

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
        path: "/login",
        className: "login",
        hidden: loggedIn
      },
      {
        name: "New Account",
        path: "/signup",
        className: "signup",
        hidden: loggedIn
      },
      {
        name: "Logout",
        path: "/flowers",
        className: "signup",
        hidden: !loggedIn,
        onClickCbc: () => {
          handleUserLogout();
        }
      }
    ];

    return routes.map((item, index) => {
      if (item.hidden) {
        return null;
      }

      return (
        <div
          onClick={() => {
            if (item.onClickCbc) {
              item.onClickCbc();
            }
            navigateToRoute(item);
          }}
          key={index}
          className={`mobile-navigation__item ${item.className}`}
        >
          <span>{item.name}</span>
        </div>
      );
    });
  };

  return (
    <div className="mobile-navigation">
      <div id="mobileNavigation" className="sidenav">
        {renderRoutes()}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleMobileNavigation: () => dispatch(toggleMobileNavigation()),
  handleUserLogout: () => dispatch(handleUserLogout())
});

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  getUserInfoInProgress: state.userProfile.getUserInfoInProgress
});

MobileNavigation.propTypes = {
  getUserInfoInProgress: PropTypes.bool,
  loggedIn: PropTypes.bool,
  logghandleUserLogoutedIn: PropTypes.func,
  toggleMobileNavigation: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MobileNavigation)
);
