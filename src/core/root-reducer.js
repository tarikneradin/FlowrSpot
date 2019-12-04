import { combineReducers } from "redux";

import { flowers } from "../core/features/flowers/reducers/flowers-reducers";
import { signup } from "../core/features/signup/reducers/signup-reducers";
import { infoModal } from "../core/features/shared-components/fs-info-modal/info-modal-reducers";
import { login } from "../core/features/login/reducers/login-reducers";
import { userProfile } from "../core/features/user-profile/reducers/user-profile-reducers";
import { mobileNavigation } from "../core/features/mobile-navigation/reducers/mobile-navigation-reducers";
import { mediaQuery } from "../core/features/media-query/reducers/media-query-reducer";

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
