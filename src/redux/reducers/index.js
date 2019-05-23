import React from "react";
import { combineReducers } from "redux";
import candidates from "./candidateReducer";

export default combineReducers({
  candidates: candidates
});
