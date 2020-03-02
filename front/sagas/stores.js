import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_STORES_REQUEST,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_FAILURE
} from "../reducers/stores.js";

function loadStoresAPI(kindName) {
  console.log("@@kindName", kindName);
  return axios.get(`stores/${kindName}`);
}

function* loadStores(action) {
  try {
    const result = yield call(loadStoresAPI, action.data);
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

function* watchLoadStores() {
  yield takeEvery(LOAD_STORES_REQUEST, loadStores);
}

export default function* storesSaga() {
  yield all([fork(watchLoadStores)]);
}
