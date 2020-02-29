import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_STORES_REQUEST,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_FAILURE
} from "../reducers/store.js";

function loadStoreAPI(storeName) {
  return axios.get(`stores/${storeName}`);
}

function* loadStore(action) {
  try {
    const result = yield call(loadStoreAPI, action.data);
    yield put({
      type: LOAD_STORES_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_STORES_FAILURE,
      error: e
    });
  }
}

function* watchLoadStore() {
  yield takeEvery(LOAD_STORES_REQUEST, loadStore);
}

export default function* storeSaga() {
  yield all([fork(watchLoadStore)]);
}
