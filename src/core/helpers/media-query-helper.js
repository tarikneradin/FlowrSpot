import { MAX_MOBILE_WIDTH } from "../../config/constants";

class MediaQueryHelper {
  constructor() {
    this.mediaQueries = {};
  }

  addMediaQueryListeners = callback => {
    const supportedMediaQueries = this.getSupportedMediaQueries();
    supportedMediaQueries.forEach(mQuery => {
      const mql = window.matchMedia(mQuery.value);
      mql.addListener(this.checkQuery);
      this.mediaQueries[mQuery.value] = { name: mQuery.name, mql, callback };
    });
  };

  removeMediaQueryListeners = () => {
    const supportedMediaQueries = this.getSupportedMediaQueries();
    supportedMediaQueries.forEach(mediaQuery => {
      const cachedMediaQuery = this.mediaQueries[mediaQuery.value];
      if (cachedMediaQuery) {
        cachedMediaQuery.mql.removeListener(this.checkQuery);
      }
    });
  };

  checkQuery = event => {
    const query = this.mediaQueries[event.media];
    if (query && typeof query.callback === "function") {
      const result = {};
      result[query.name] = event.matches;
      query.callback(result);
    }
  };

  getSupportedMediaQueries = () => {
    return [{ name: "mobile", value: `(max-width: ${MAX_MOBILE_WIDTH}px)` }];
  };

  isMobileResolution = () => {
    return window.innerWidth <= MAX_MOBILE_WIDTH;
  };
}

export default new MediaQueryHelper();
