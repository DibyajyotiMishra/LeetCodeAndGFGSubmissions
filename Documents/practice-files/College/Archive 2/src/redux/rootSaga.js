import { all, call } from "redux-saga/effects";
import { eventDetailsSagas } from "../components/events/eventDetails/saga";
import { eventsListSagas } from "../components/auth/register-form/redux/saga";

export default function* rootSaga() {
  yield all([call(eventDetailsSagas), call(eventsListSagas)]);
}
