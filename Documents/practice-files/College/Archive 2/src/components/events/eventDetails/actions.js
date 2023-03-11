import ActionTypes from "./action.types";

export const getEventDetailsStart = eventId => ({
  type: ActionTypes.GET_EVENT_DETAILS_START,
  payload: eventId,
});

export const getEventDetailsSuccess = eventDetails => ({
  type: ActionTypes.GET_EVENT_DETAILS_SUCCESS,
  payload: eventDetails,
});

export const getEventDetailsFailure = error => ({
  type: ActionTypes.GET_EVENT_DETAILS_FAILURE,
  payload: error,
});

export const clearEventDetails = () => ({
  type: ActionTypes.CLEAR_EVENT_DETAILS,
});
