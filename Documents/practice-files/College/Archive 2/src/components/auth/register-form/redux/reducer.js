import ActionTypes from "./action.types";

const INITIAL_STATE = {
  eventsList: [],
  isFetching: false,
  error: undefined,
  personalInfo: null,
  individualEvents: null,
  teamEvents: null,
  authData: null,
  paymentData: null,
  registrationStart: false,
  registrationSuccess: false,
  registrationFailure: false,
};

const eventsListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eventsList: action.payload,
      };
    case ActionTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ActionTypes.ADD_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: action.payload,
      };
    case ActionTypes.ADD_INDIVIDUAL_EVENTS:
      return {
        ...state,
        individualEvents: action.payload,
      };
    case ActionTypes.ADD_TEAM_EVENTS:
      return {
        ...state,
        teamEvents: action.payload,
      };
    case ActionTypes.ADD_AUTH_DATA:
      return {
        ...state,
        authData: action.payload,
      };
    case ActionTypes.ADD_PAYMENT_DATA:
      return {
        ...state,
        paymentData: action.payload,
      };
    case ActionTypes.REGISTER_USER_START:
      return {
        ...state,
        registrationStart: true,
      };
    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registrationStart: false,
        registrationSuccess: true,
      };
    case ActionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        registrationStart: false,
        registrationFailure: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default eventsListReducer;
