import {
  call,
  takeLatest,
  put
} from 'redux-saga/effects';

import {
  SAVE_CURRENT_WEATHER,
  SAVE_WEATHER,
  GET_CURRENT_WEATHER,
  GET_WEATHER
} from '../actions/Weather';

import { getWeather, getCurrentWeather } from '../querys';

function* fetchWeather(action) {
  const response = yield call(getWeather, action.lat, action.long);
  console.log(response);
  yield put({ type: SAVE_WEATHER, response });
}

function* fetchCurrentWeather(action) {
  const response = yield call(getCurrentWeather, action.lat, action.long);
  console.log(response);
  yield put({ type: SAVE_CURRENT_WEATHER, response });
}

export default function* rootSaga() {
  yield takeLatest(GET_WEATHER, fetchWeather);
  yield takeLatest(GET_CURRENT_WEATHER, fetchCurrentWeather);
}
