import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_STORES_REQUEST,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_FAILURE,
  LOAD_STORE_REQUEST,
  LOAD_STORE_SUCCESS,
  LOAD_STORE_FAILURE
} from "../reducers/stores.js";

function loadStoresAPI(kindName) {
  return axios.get(`/stores/${encodeURIComponent(kindName)}`);
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

///

function loadStoreAPI(id) {
  return axios.get(`/store/${id}`);
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

export default function* storesSaga() {
  yield all([fork(watchLoadStores), fork(watchLoadStore)]);
}
