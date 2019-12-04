import Cookies from "universal-cookie";

class SessionHelper {
  constructor() {
    this.cookies = new Cookies();
  }

  setToken = (key, value) => {
    this.cookies.set(key, value, { path: "/" });
  };

  getToken = key => {
    return this.cookies.get(key, { path: "/" });
  };

  removeToken = key => {
    this.cookies.remove(key, { path: "/" });
  };
}

export default new SessionHelper();
