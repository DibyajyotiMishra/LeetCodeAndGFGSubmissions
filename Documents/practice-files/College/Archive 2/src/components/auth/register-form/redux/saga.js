import { takeLatest, call, put, all } from "redux-saga/effects";
import ActionTypes from "./action.types";
import {
  fetchEventsListSuccess,
  fetchEventsListFailure,
  registerUserSuccess,
  registerUserFailure,
} from "./actions";
import getEventList from "../../../../services/getEventList";
import registerUser from "../../../../services/registerUser";

function* fetchEventList() {
  try {
    const eventsList = yield call(getEventList);
    yield put(fetchEventsListSuccess(eventsList));
  } catch (error) {
    yield put(fetchEventsListFailure(error));
  }
}

export function* getEventsListSaga() {
  yield takeLatest(ActionTypes.FETCH_EVENTS_START, fetchEventList);
}

function* registerUserForEvents({ payload }) {
  try {
    console.log(payload);
    yield call(registerUser, payload);
    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

export function* registerUserForEventsSaga() {
  yield takeLatest(ActionTypes.REGISTER_USER_START, registerUserForEvents);
}

export function* eventsListSagas() {
  yield all([call(getEventsListSaga), call(registerUserForEventsSaga)]);
}
