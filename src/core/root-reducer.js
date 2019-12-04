import { combineReducers } from "redux";

import { flowers } from "../features/flowers/reducers/flowers-reducers";
import { signup } from "../features/signup/reducers/signup-reducers";
import { infoModal } from "../features/shared-components/fs-info-modal/info-modal-reducers";
import { login } from "../features/login/reducers/login-reducers";
import { userProfile } from "../features/user-profile/reducers/user-profile-reducers";
import { mobileNavigation } from "../features/mobile-navigation/reducers/mobile-navigation-reducers";
import { mediaQuery } from "../features/media-query/reducers/media-query-reducer";

const appReducer = combineReducers({
  flowers,
  signup,
  infoModal,
  login,
  userProfile,
  mobileNavigation,
  mediaQuery
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
