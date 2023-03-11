import ActionTypes from "./action.types";

const INITIAL_STATE = {
  eventDetails: {},
  isFetching: false,
  errorMessage: undefined,
};

const eventDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_EVENT_DETAILS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.GET_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eventDetails: action.payload,
      };
    case ActionTypes.GET_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ActionTypes.CLEAR_EVENT_DETAILS:
      return {
        ...state,
        eventDetails: {},
      };
    default:
      return state;
  }
};

export default eventDetailsReducer;
