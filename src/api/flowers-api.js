import axios from "axios";

class Flowers {
  static getFlowers(page) {
    return axios({
      method: "GET",
      url: `/flowers`,
      params: {
        page
      }
    });
  }

  static markFlowerAsFavorite(flowerId) {
    return axios({
      method: "POST",
      url: `/flowers/${flowerId}/favorites`
    });
  }

  static deleteFlowerFromFavorites(flowerId, id) {
    return axios({
      method: "DELETE",
      url: `/flowers/${flowerId}/favorites/${id}`
    });
  }

  static searchFlowers(query) {
    return axios({
      method: "GET",
      url: `/flowers/search`,
      params: {
        query: query
      }
    });
  }
}

export default Flowers;
