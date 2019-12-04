import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  login,
  handleShowLoginModal,
  handleLoginError
} from "../actions/login-actions";

import Input from "../../shared-components/fs-input/input";
import Button from "../../shared-components/fs-button/button";

import "../styles/login-form.scss";

export const LoginForm = props => {
  const {
    handleShowLoginModal,
    loginInProgress,
    login,
    error,
    handleLoginError
  } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
      handleLoginError("");
      handleShowLoginModal(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = e => {
    e.preventDefault();

    const loginPayload = {
      email: email,
      password: password
    };

    login(loginPayload, redirectToFlawersCbc, redirectToProfileCbc);
  };

  const redirectToFlawersCbc = () => {
    const { history } = props;
    history.push("/flowers");
  };

  const redirectToProfileCbc = () => {
    const { history } = props;
    history.push("/user-info");
  };

  return (
    <div className="login-form">
      <div className="form-title">Welcome Back</div>
      <form onSubmit={handleLogin}>
        <div className="field-row">
          <Input
            label="Email Adress"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder=""
            className="fullWidth"
            required={true}
          />
        </div>
        <div className="field-row">
          <Input
            label="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder=""
            className="fullWidth"
            required={true}
          />
        </div>
        <Button
          type="submit"
          className="login-button"
          text="Login to your account"
          loading={loginInProgress}
          disabled={loginInProgress}
        />
      </form>
      <p className="signup-modal__error"> {error} </p>
    </div>
  );
};

const mapStateToProps = state => ({
  showLoginModal: state.login.showLoginModal,
  handleShowLoginModal: state.login.handleShowLoginModal,
  signupInProgress: state.login.handleShowLoginModal,
  loginInProgress: state.login.loginInProgress,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  handleShowLoginModal: data => {
    dispatch(handleShowLoginModal(data));
  },
  login: (data, redirectToFlawersCbc, redirectToProfileCbc) => {
    dispatch(login(data, redirectToFlawersCbc, redirectToProfileCbc));
  },
  handleLoginError: data => {
    dispatch(handleLoginError(data));
  }
});

LoginForm.propTypes = {
  showLoginModal: PropTypes.bool,
  handleShowLoginModal: PropTypes.func,
  signupInProgress: PropTypes.bool,
  loginInProgress: PropTypes.bool,
  error: PropTypes.string,
  handleLoginError: PropTypes.func,
  getUseloginrProfileInfo: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
