import axios from "axios";

class UsersApi {
  static signup(data) {
    return axios({
      method: "POST",
      url: `/users/register`,
      data
    });
  }

  static login(data) {
    return axios({
      method: "POST",
      url: `/users/login`,
      data
    });
  }

  static aboutMe() {
    return axios({
      method: "GET",
      url: `/users/me`
    });
  }

  static getUserSightings(id) {
    return axios({
      method: "GET",
      url: `/users/${id}/sightings`
    });
  }
}

export default UsersApi;
