import UsersApi from "../../../api/users-api";

import { SIGNUP_ACTIONS } from "../constants/signup-constants";
import { toggleInfoModal } from "../../shared-components/fs-info-modal/info-modal-actions";
import { handleShowLoginModal } from "../../login/actions/login-actions";

export const signup = (data, redirectToLoginCbc) => {
  return (dispatch, getState) => {
    dispatch(handleSignupInProgress(true));
    UsersApi.signup(data)
      .then(res => {
        dispatch(handleSignupSuccess(res.data));
        dispatch(handleShowSignupModal(false));
        dispatch(handleSignupInProgress(false));

        const isMobile = getState().mediaQuery.isMobile;
        dispatch(
          toggleInfoModal(
            "Congratulations! You have successfully signed up for FlowrSpot!",
            {
              ctaText: "OK",
              ctaCallback: () => {
                if (isMobile) {
                  redirectToLoginCbc();
                } else {
                  dispatch(handleShowLoginModal(true));
                }
              }
            }
          )
        );
      })
      .catch(error => {
        const err = error.response.data.error;
        dispatch(handleSignupError(err));
        dispatch(handleSignupInProgress(false));
      });
  };
};

export const handleShowSignupModal = data => ({
  type: SIGNUP_ACTIONS.HANDLE_SHOW_SIGNUP_MODAL,
  data
});

export const handleSignupInProgress = data => ({
  type: SIGNUP_ACTIONS.HANDLE_SIGNUP_IN_PROGRESS,
  data
});

export const handleSignupSuccess = data => ({
  type: SIGNUP_ACTIONS.HANDLE_SIGNUP_SUCCESS,
  data
});

export const handleSignupError = data => ({
  type: SIGNUP_ACTIONS.HANDLE_SIGNUP_ERROR,
  data
});
