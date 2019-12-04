import axios from "axios";
import { API_URL, TOKEN_STRATEGY } from "./constants";
import SessionHelper from "../core/helpers/session-helper";

const initilizeHttpClient = () => {
  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    config => {
      const token = SessionHelper.getToken("auth_token");
      if (token) {
        config.headers.authorization = `${TOKEN_STRATEGY} ${token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
};

export default initilizeHttpClient;
