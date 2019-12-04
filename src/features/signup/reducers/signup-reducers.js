import { SIGNUP_ACTIONS } from "../constants/signup-constants";

const signupInitialState = {
  showSignupModal: false,
  signupInProgress: false,
  error: "" //for handling server errors
};

export const signup = (state = signupInitialState, payload) => {
  switch (payload.type) {
    case SIGNUP_ACTIONS.HANDLE_SHOW_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: payload.data
      };
    case SIGNUP_ACTIONS.HANDLE_SIGNUP_ERROR:
      return { ...state, error: payload.data };
    case SIGNUP_ACTIONS.HANDLE_SIGNUP_IN_PROGRESS:
      return { ...state, signupInProgress: payload.data };
    default:
      return state;
  }
};
