import produce from "immer";

export const initialState = { storePosts: [] };

export const LOAD_STORE_REQUEST = "LOAD_STORE_REQUEST";
export const LOAD_STORE_SUCCESS = "LOAD_STORE_SUCCESS";
export const LOAD_STORE_FAILURE = "LOAD_STORE_FAILURE";

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_STORE_REQUEST: {
        break;
      }
      case LOAD_STORE_SUCCESS: {
        action.data.forEach(d => {
          draft.storePosts.push(d);
        });
        break;
      }
      case LOAD_STORE_FAILURE: {
        break;
      }
    }
  });
};
