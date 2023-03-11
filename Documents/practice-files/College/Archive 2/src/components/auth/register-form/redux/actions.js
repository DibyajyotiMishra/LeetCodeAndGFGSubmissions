import ActionTypes from "./action.types";

export const fetchEventsListStart = () => ({
  type: ActionTypes.FETCH_EVENTS_START,
});

export const fetchEventsListSuccess = eventsList => ({
  type: ActionTypes.FETCH_EVENTS_SUCCESS,
  payload: eventsList,
});

export const fetchEventsListFailure = error => ({
  type: ActionTypes.FETCH_EVENTS_FAILURE,
  payload: error,
});

export const addPersonalInfo = personalInfo => ({
  type: ActionTypes.ADD_PERSONAL_INFO,
  payload: personalInfo,
});

export const addIndividualEvents = individualEvents => ({
  type: ActionTypes.ADD_INDIVIDUAL_EVENTS,
  payload: individualEvents,
});

export const addTeamEvents = teamEvents => ({
  type: ActionTypes.ADD_TEAM_EVENTS,
  payload: teamEvents,
});

export const addAuthData = authData => ({
  type: ActionTypes.ADD_AUTH_DATA,
  payload: authData,
});

export const addPaymentData = paymentData => ({
  type: ActionTypes.ADD_PAYMENT_DATA,
});

export const registerUserStart = registrationDetails => ({
  type: ActionTypes.REGISTER_USER_START,
  payload: registrationDetails,
});

export const registerUserSuccess = () => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
});

export const registerUserFailure = error => ({
  type: ActionTypes.REGISTER_USER_FAILURE,
  payload: error,
});
