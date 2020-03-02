import produce from "immer";

export const initialState = { storePosts: [] };

export const LOAD_STORES_REQUEST = "LOAD_STORES_REQUEST";
export const LOAD_STORES_SUCCESS = "LOAD_STORES_SUCCESS";
export const LOAD_STORES_FAILURE = "LOAD_STORES_FAILURE";

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_STORES_REQUEST: {
        break;
      }
      case LOAD_STORES_SUCCESS: {
        action.data.forEach(d => {
          console.log("dddddd", d);
          draft.storePosts.push(d);
        });
        break;
      }
      case LOAD_STORES_FAILURE: {
        break;
      }
    }
  });
};
