import ActionTypes from "./action.types";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { getEventDetailsSuccess, getEventDetailsFailure } from "./actions";
import getEventDetails from "../../../services/getEventDetails";

function* fetchEventDetails({ payload: eventId }) {
  try {
    const eventDetails = yield getEventDetails(eventId);
    yield put(getEventDetailsSuccess(eventDetails));
  } catch (error) {
    yield put(getEventDetailsFailure(error));
  }
}

export function* getEventDetailsSaga() {
  yield takeLatest(ActionTypes.GET_EVENT_DETAILS_START, fetchEventDetails);
}

export function* eventDetailsSagas() {
  yield all([call(getEventDetailsSaga)]);
}
