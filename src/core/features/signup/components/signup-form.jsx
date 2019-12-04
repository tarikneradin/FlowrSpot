import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signup, handleSignupError } from "../actions/signup-actions";
import Input from "../../shared-components/fs-input/input";
import Button from "../../shared-components/fs-button/button";

import "../styles/signup-form.scss";

const SignupForm = props => {
  const { signup, signupInProgress, error } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => {
      setFirstName("");
      setLastName("");
      setBirthday("");
      setEmail("");
      setPassword("");
      handleSignupError("");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createAccount = e => {
    e.preventDefault();

    const signupPayload = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: birthday
    };

    signup(signupPayload, redirectToLoginCbc);
  };

  const redirectToLoginCbc = () => {
    const { history } = props;
    history.push("/login");
  };

  return (
    <div className="signup-form">
      <div className="form-title">Create an Account</div>
      <form onSubmit={createAccount}>
        <div className="field-row multi-col">
          <Input
            label="First Name"
            type="text"
            value={firstName}
            placeholder=""
            onChange={e => setFirstName(e.target.value)}
            className="fullWidth"
            required={true}
          />
          <Input
            label="Last Name"
            type="text"
            value={lastName}
            placeholder=""
            onChange={e => setLastName(e.target.value)}
            className="fullWidth"
            required={true}
          />
        </div>
        <div className="field-row">
          <Input
            label="Date of Birth"
            type="date"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            placeholder=""
            className="fullWidth"
            required={true}
          />
        </div>
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
          className="create-account-button"
          text="Create Account"
          loading={signupInProgress}
          disabled={signupInProgress}
        />
      </form>
      <p className="signup-modal__error"> {error} </p>
    </div>
  );
};

const mapStateToProps = state => ({
  signupInProgress: state.signup.signupInProgress,
  error: state.signup.error
});

const mapDispatchToProps = dispatch => ({
  signup: (data, redirectToLoginCbc) => {
    dispatch(signup(data, redirectToLoginCbc));
  },
  handleSignupError: data => {
    dispatch(handleSignupError(data));
  }
});

SignupForm.propTypes = {
  signupInProgress: PropTypes.bool,
  error: PropTypes.string,
  handleSignupError: PropTypes.func,
  signup: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
