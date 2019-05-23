import { actionTypes } from "../../actionTypes";
import Candidates from "../../components/container/Candidates";

export const storeListCandidates = candidates => {
  return {
    type: actionTypes.LIST_CANDIDATES,
    payload: [...candidates]
  };
};
