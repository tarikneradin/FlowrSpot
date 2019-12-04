import { USER_PROFILE_ACTIONS } from "../constants/user-profile-constants";

const userProfileInitialState = {
  showUserProfileModal: false,
  info: null,
  getUserInfoInProgress: false
};

export const userProfile = (state = userProfileInitialState, payload) => {
  switch (payload.type) {
    case USER_PROFILE_ACTIONS.HANDLE_SHOW_USER_PROFILE_MODAL:
      return {
        ...state,
        showUserProfileModal: payload.data
      };
    case USER_PROFILE_ACTIONS.HANDLE_GET_USER_INFO_IN_PROGRESS:
      return {
        ...state,
        getUserInfoInProgress: payload.data
      };
    case USER_PROFILE_ACTIONS.HANDLE_GET_USER_INFO_SUCCESS:
      return {
        ...state,
        info: payload.data
      };
    default:
      return state;
  }
};
