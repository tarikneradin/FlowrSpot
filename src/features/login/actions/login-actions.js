import UsersApi from "../../../api/users-api";

import { LOGIN_ACTIONS } from "../constants/login-constants";
import { toggleInfoModal } from "../../shared-components/fs-info-modal/info-modal-actions";
import {
  handleShowUserProfileModal,
  getUserProfileInfo
} from "../../user-profile/actions/user-profile-actions";
import SessionHelper from "../../../core/helpers/session-helper";

export const login = (data, redirectToFavoritesCbc, redirectToProfileCbc) => {
  return (dispatch, getState) => {
    dispatch(handleLoginInProgress(true));
    UsersApi.login(data)
      .then(res => {
        dispatch(handleLoginSuccess());
        dispatch(handleShowLoginModal(false));
        dispatch(handleLoginInProgress(false));
        dispatch(getUserProfileInfo());
        const isMobile = getState().mediaQuery.isMobile;

        SessionHelper.setToken("auth_token", res.data.auth_token);
        dispatch(
          toggleInfoModal(
            "Congratulations! You have successfully logged into FlowrSpot!",
            {
              ctaText: "OK",
              ctaCallback: () => {
                if (isMobile) {
                  redirectToFavoritesCbc();
                } else {
                  return null;
                }
              },
              additionalCtaText: "PROFILE",
              additionalCtaCallback: () => {
                if (isMobile) {
                  redirectToProfileCbc();
                } else {
                  dispatch(handleShowUserProfileModal(true));
                }
              }
            }
          )
        );
      })
      .catch(error => {
        const err = error.response.data.error;
        dispatch(handleLoginError(err));
        dispatch(handleLoginInProgress(false));
      });
  };
};

export const handleShowLoginModal = data => ({
  type: LOGIN_ACTIONS.HANDLE_SHOW_LOGIN_MODAL,
  data
});

export const handleLoginInProgress = data => ({
  type: LOGIN_ACTIONS.HANDLE_LOGIN_IN_PROGRESS,
  data
});

export const handleLoginSuccess = () => ({
  type: LOGIN_ACTIONS.HANDLE_LOGIN_SUCCESS
});

export const handleLogout = () => ({
  type: LOGIN_ACTIONS.HANDLE_LOGOUT
});

export const handleLoginError = data => ({
  type: LOGIN_ACTIONS.HANDLE_LOGIN_ERROR,
  data
});
