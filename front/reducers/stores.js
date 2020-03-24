import produce from "immer";

export const initialState = { stores: [], store: {}, Posts: {} };

export const LOAD_STORES_REQUEST = "LOAD_STORES_REQUEST";
export const LOAD_STORES_SUCCESS = "LOAD_STORES_SUCCESS";
export const LOAD_STORES_FAILURE = "LOAD_STORES_FAILURE";
export const LOAD_STORE_REQUEST = "LOAD_STORE_REQUEST";
export const LOAD_STORE_SUCCESS = "LOAD_STORE_SUCCESS";
export const LOAD_STORE_FAILURE = "LOAD_STORE_FAILURE";

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_STORES_REQUEST: {
        break;
      }
      case LOAD_STORES_SUCCESS: {
        action.data.forEach(d => {
          draft.stores.push(d);
        });
        break;
      }
      case LOAD_STORES_FAILURE: {
        break;
      }
      //
      case LOAD_STORE_REQUEST: {
        break;
      }
      case LOAD_STORE_SUCCESS: {
        draft.store = action.data;
        break;
      }
      case LOAD_STORE_FAILURE: {
        break;
      }
    }
  });
};
