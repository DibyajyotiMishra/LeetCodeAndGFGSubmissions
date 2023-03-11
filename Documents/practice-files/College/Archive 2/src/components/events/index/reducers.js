import ActionTypes from "./action.types";

const INITIAL_STATE = {
  eventId: null,
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_EVENTID:
      return {
        ...state,
        eventId: action.payload,
      };
    case ActionTypes.REMOVE_EVENTID:
      return {
        ...state,
        eventId: null,
      };
    default:
      return state;
  }
};

export default eventReducer;
