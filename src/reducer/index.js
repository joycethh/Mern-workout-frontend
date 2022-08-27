import { combineReducer } from "redux";
import { workoutReducer } from "./workout";
export const reducers = combineReducer({ workoutReducer });
