import { all, fork, takeLatest, put, throttle, call } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST
} from "../reducers/post";
import Router from "next/router";

function addPostAPI(postData) {
  return axios.post("/post", postData, {
    withCredentials: true
  });
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    console.log("post saga result", result);
    yield put({
      // post reducer의 데이터를 수정
      type: ADD_POST_SUCCESS,
      data: result.data
    });
    Router.push("/");
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e
    });
  }
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function uploadImagesAPI(formData) {
  return axios.post("/post/images", formData, {
    withCredentials: true
  });
}
function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: e
    });
  }
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function loadPostAPI(postId) {
  return axios.get(`/post/${postId}`);
}
function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    console.log("result.data", result.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data
    });
    Router.push("/");
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_POST_FAILURE,
      error: e
    });
    //fail되면 postform에 그대로 있을텐데 로그인이 튕기는지아닌지 확인해볼것
  }
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchUploadImages), fork(watchLoadPost)]);
}
