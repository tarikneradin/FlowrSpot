import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { handleLoginSuccess } from "../core/features/login/actions/login-actions";
import { handleMediaQueryResult } from "../core/features/media-query/actions/media-query-actions";

import SessionHelper from "./helpers/session-helper";
import RouteWithSubRoutes from "./route-with-subroutes";
import Header from "../core/features/header/components/header";
import Flowers from "../core/features/flowers/components/flowers";
import SignupModal from "./features/signup/components/signup-modal";
import InfoModal from "./features/shared-components/fs-info-modal/info-modal";
import ErrorBoundary from "./features/shared-components/error-boundary/error-boundary";
import LoginModal from "./features/login/components/login-modal";
import UserProfileModal from "./features/user-profile/components/user-profile-modal";
import LoginForm from "./features/login/components/login-form";
import SignupForm from "./features/signup/components/signup-form";
import UserProfileInfo from "./features/user-profile/components/user-profile-info";
import MobileNavigation from "./features/mobile-navigation/components/mobile-navigation";
import MediaQueryHelper from "./helpers/media-query-helper";

import "bootstrap/dist/css/bootstrap.min.css";
import "./res/styles/App.scss";

class App extends Component {
  componentDidMount = () => {
    const { handleLoginSuccess } = this.props;
    const session = SessionHelper.getToken("auth_token");

    if (session) {
      handleLoginSuccess(true);
    }

    MediaQueryHelper.addMediaQueryListeners(result => {
      const { handleMediaQueryResult } = this.props;
      handleMediaQueryResult(result);
    });
  };

  renderRoutes = () => {
    const routes = [
      {
        path: "/",
        component: Flowers,
        exact: true
      },
      {
        path: "/flowers",
        component: Flowers
      },
      {
        path: "/login",
        component: LoginForm
      },
      {
        path: "/signup",
        component: SignupForm
      },
      {
        path: "/user-info",
        component: UserProfileInfo
      }
    ];

    return routes.map((route, index) => (
      <RouteWithSubRoutes key={index} {...route} />
    ));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MobileNavigation />
        <div className="content-container">
          <div className="app-content">
            {/* Catch errors in any components below and re-render with error message */}
            <ErrorBoundary>{this.renderRoutes()}</ErrorBoundary>
          </div>
        </div>
        {/* Application Modals */}
        <SignupModal />
        <LoginModal />
        <InfoModal />
        <UserProfileModal />
      </div>
    );
  }
}

App.propTypes = {
  handleLoginSuccess: PropTypes.func,
  handleMediaQueryResult: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  handleLoginSuccess: data => dispatch(handleLoginSuccess(data)),
  handleMediaQueryResult: data => dispatch(handleMediaQueryResult(data))
});

export default connect(null, mapDispatchToProps)(App);
