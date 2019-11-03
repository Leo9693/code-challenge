import { combineReducers } from "redux";
import airportsReducer from "./airportsReducer";
import alertReducer from "./alertReducer";

export default combineReducers({ airportsReducer, alertReducer });
