import { noteReducer } from "./noteReducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  notes: noteReducer,
});
