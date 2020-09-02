import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import contactReducer from "./contact/contactReducer.js";

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	contacts: contactReducer,
})

export default createRootReducer;