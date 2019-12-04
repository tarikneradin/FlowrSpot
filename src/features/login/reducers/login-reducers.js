import { LOGIN_ACTIONS } from "../constants/login-constants";

const loginInitialState = {
  showLoginModal: false,
  loginInProgress: false,
  error: "", //for handling server errors
  loggedIn: false
};

export const login = (state = loginInitialState, payload) => {
  switch (payload.type) {
    case LOGIN_ACTIONS.HANDLE_SHOW_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: payload.data
      };
    case LOGIN_ACTIONS.HANDLE_LOGIN_ERROR:
      return { ...state, error: payload.data };
    case LOGIN_ACTIONS.HANDLE_LOGIN_IN_PROGRESS:
      return { ...state, loginInProgress: payload.data };
    case LOGIN_ACTIONS.HANDLE_LOGIN_SUCCESS:
      return { ...state, loggedIn: true };
    case LOGIN_ACTIONS.HANDLE_LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};
