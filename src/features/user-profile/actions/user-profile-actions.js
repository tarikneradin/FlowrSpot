import { USER_PROFILE_ACTIONS } from "../constants/user-profile-constants";
import { handleLogout } from "../../login/actions/login-actions";
import SessionHelper from "../../../core/helpers/session-helper";
import UsersApi from "../../../api/users-api";

export const getUserProfileInfo = () => {
  return dispatch => {
    dispatch(handleGetUserInfoInProgress(true));
    return UsersApi.aboutMe()
      .then(res => {
        dispatch(handleGetUserInfoInProgress(false));
        dispatch(handleGetUserInfoSuccess(res.data.user));
        dispatch(getUserSightings(res.data.user.id));
      })
      .catch(error => {
        dispatch(handleGetUserInfoInProgress(false));
      });
  };
};

export const getUserSightings = userId => {
  return dispatch => {
    dispatch(handleGetUserInfoInProgress(true));
    return UsersApi.getUserSightings(userId)
      .then(res => {
        dispatch(handleGetUserInfoInProgress(false));
      })
      .catch(error => {
        dispatch(handleGetUserInfoInProgress(false));
      });
  };
};

export const handleUserLogout = () => {
  return dispatch => {
    SessionHelper.removeToken("auth_token");
    dispatch(handleLogout());
  };
};

export const handleShowUserProfileModal = data => ({
  type: USER_PROFILE_ACTIONS.HANDLE_SHOW_USER_PROFILE_MODAL,
  data
});

export const handleGetUserInfoInProgress = data => ({
  type: USER_PROFILE_ACTIONS.HANDLE_GET_USER_INFO_IN_PROGRESS,
  data
});

export const handleGetUserInfoSuccess = data => ({
  type: USER_PROFILE_ACTIONS.HANDLE_GET_USER_INFO_SUCCESS,
  data
});
