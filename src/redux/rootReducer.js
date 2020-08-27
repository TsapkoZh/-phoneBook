import { combineReducers } from "redux";

import contactReducer from "./contact/contactReducer.js";
import filterReducer from "./filter/filterReducer.js";

export default combineReducers({
	contacts: contactReducer,
	filter: filterReducer,
})