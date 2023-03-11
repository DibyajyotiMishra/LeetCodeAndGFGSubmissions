import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import eventDetailsReducer from "../components/events/eventDetails/reducers";
import eventReducer from "../components/events/index/reducers";
import eventsListReducer from "../components/auth/register-form/redux/reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["eventDetails", "eventSetter", "eventLists"],
};

const rootReducer = combineReducers({
  eventDetails: eventDetailsReducer,
  eventSetter: eventReducer,
  eventLists: eventsListReducer,
});

export default persistReducer(persistConfig, rootReducer);
