import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_STORE_REQUEST,
  LOAD_STORE_SUCCESS,
  LOAD_STORE_FAILURE
} from "../reducers/store.js";

function loadStoreAPI(storeName) {
  return axios.get(`store/${storeName}`);
}

function* loadStore(action) {
  try {
    const result = yield call(loadStoreAPI, action.data);
    yield put({
      type: LOAD_STORE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_STORE_FAILURE,
      error: e
    });
  }
}

function* watchLoadStore() {
  yield takeEvery(LOAD_STORE_REQUEST, loadStore);
}

export default function* storeSaga() {
  yield all([fork(watchLoadStore)]);
}
