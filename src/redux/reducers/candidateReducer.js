import { actionTypes } from "../../actionTypes";
const initialState = {
  candidates: []
};
export default function candidateReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LIST_CANDIDATES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
