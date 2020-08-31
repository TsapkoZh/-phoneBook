import { combineReducers } from "redux";

import contactReducer from "./contact/contactReducer.js";
import filterReducer from "./filter/filterReducer.js";
// import { routerReducer } from "react-router-redux";

export default combineReducers({
	// routing: routerReducer,
	contacts: contactReducer,
	filter: filterReducer,
})