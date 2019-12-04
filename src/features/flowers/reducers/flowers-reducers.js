import { FLOWERS_ACTIONS } from "../constants/flowers-constants";

const flowersInitialState = {
  list: [],
  meta: null,
  getFlowersInProgress: false
};

export const flowers = (state = flowersInitialState, payload) => {
  switch (payload.type) {
    case FLOWERS_ACTIONS.HANDLE_GET_FLOWERS_SUCCESS:
      return {
        ...state,
        list: state.list.concat(payload.data.flowers),
        meta: payload.data.meta
      };
    case FLOWERS_ACTIONS.HANDLE_GET_FLOWERS_IN_PROGRESS:
      return { ...state, getFlowersInProgress: payload.data };
    case FLOWERS_ACTIONS.HANDLE_CLEAR_FLOWERS_DATA:
      return { ...state, meta: null, list: [] };
    case FLOWERS_ACTIONS.HANDLE_MARK_FLOWER_AS_FAVORITE:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === payload.data) {
            return {
              ...item,
              favorite: true
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
