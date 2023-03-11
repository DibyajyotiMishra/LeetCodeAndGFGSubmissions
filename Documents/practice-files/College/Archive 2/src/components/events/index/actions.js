import ActionTypes from "./action.types";

export const setEventId = eventId => ({
  type: ActionTypes.SET_EVENTID,
  payload: eventId,
});

export const removeEventId = () => ({
  type: ActionTypes.REMOVE_EVENTID,
});
