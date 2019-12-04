import { MOBILE_NAVIGATION_ACTIONS } from "../constants/mobile-navigation-constants";

const mobileNavigationInitialState = {
  show: false
};

export const mobileNavigation = (
  state = mobileNavigationInitialState,
  payload
) => {
  switch (payload.type) {
    case MOBILE_NAVIGATION_ACTIONS.TOGGLE_MOBILE_NAVIGATION:
      return {
        ...state,
        show: !state.show
      };

    default:
      return state;
  }
};
