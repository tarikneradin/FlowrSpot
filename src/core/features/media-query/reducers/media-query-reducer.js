import { MEDIA_QUERY_ACTIONS } from "../constants/media-query-constants";
import { MAX_MOBILE_WIDTH } from "../../../../config/constants";

const mediaQueryInitialState = {
  isMobile: window.innerWidth <= MAX_MOBILE_WIDTH
};

export const mediaQuery = (state = mediaQueryInitialState, payload) => {
  switch (payload.type) {
    case MEDIA_QUERY_ACTIONS.HANDLE_MEDIA_QUERY_RESULT:
      if (payload.data.mobile === true && !state.isMobile) {
        return { ...state, isMobile: true };
      } else if (payload.data.mobile === false && state.isMobile) {
        return { ...state, isMobile: false };
      }
      return state;
    default:
      return state;
  }
};
