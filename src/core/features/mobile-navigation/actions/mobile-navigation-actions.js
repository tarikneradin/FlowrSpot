import { MOBILE_NAVIGATION_ACTIONS } from "../constants/mobile-navigation-constants";

export const toggleMobileNavigation = () => {
  return dispatch => {
    const element = document.getElementById("mobileNavigation");
    if (element && element.style.width === "100%") {
      element.style.width = "0%";
      document.body.style.overflow = "auto";
    } else {
      element.style.width = "100%";
      document.body.style.overflow = "hidden";
    }

    dispatch(handleToggleMobileNavigation());
  };
};

const handleToggleMobileNavigation = () => ({
  type: MOBILE_NAVIGATION_ACTIONS.TOGGLE_MOBILE_NAVIGATION
});
