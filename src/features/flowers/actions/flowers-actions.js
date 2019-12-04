import { FLOWERS_ACTIONS } from "../constants/flowers-constants";
import FlowersApi from "../../../api/flowers-api";

export const getFlowers = page => {
  return dispatch => {
    dispatch(handleGetFlowersInProgress(true));
    FlowersApi.getFlowers(page)
      .then(res => {
        dispatch(handleGetFlowersSuccess(res.data.flowers, res.data.meta));
        dispatch(handleGetFlowersInProgress(false));
      })
      .catch(() => {
        dispatch(handleGetFlowersInProgress(false));
      });
  };
};

export const searchFlowers = page => {
  return dispatch => {
    dispatch(handleGetFlowersInProgress(true));
    dispatch(handleClearFlowersData());
    FlowersApi.searchFlowers(page)
      .then(res => {
        dispatch(handleGetFlowersSuccess(res.data.flowers, res.data.meta));
        dispatch(handleGetFlowersInProgress(false));
      })
      .catch(() => {
        dispatch(handleGetFlowersInProgress(false));
      });
  };
};

export const markFlowerAsFavorite = flowerId => {
  return dispatch => {
    FlowersApi.markFlowerAsFavorite(flowerId)
      .then(res => {
        const flowerId =
          res.data.fav_flower &&
          res.data.fav_flower.flower &&
          res.data.fav_flower.flower.id;

        dispatch(handleMarkFlowerAsFavorite(flowerId));
      })
      .catch(error => {
        //TODO: handle error
      });
  };
};

export const deleteFlowerFromFavorites = flowerId => {
  return dispatch => {
    FlowersApi.deleteFlowerFromFavorites(flowerId)
      .then(res => {
        //seems like API does not delete flower from favorites as expected
      })
      .catch(error => {
        //TODO: handle error
      });
  };
};

export const handleGetFlowersSuccess = (flowers, meta) => ({
  type: FLOWERS_ACTIONS.HANDLE_GET_FLOWERS_SUCCESS,
  data: {
    flowers: flowers,
    meta: meta
  }
});

export const handleClearFlowersData = () => ({
  type: FLOWERS_ACTIONS.HANDLE_CLEAR_FLOWERS_DATA
});

export const handleGetFlowersInProgress = data => ({
  type: FLOWERS_ACTIONS.HANDLE_GET_FLOWERS_IN_PROGRESS,
  data
});

export const handleMarkFlowerAsFavorite = data => ({
  type: FLOWERS_ACTIONS.HANDLE_MARK_FLOWER_AS_FAVORITE,
  data
});
