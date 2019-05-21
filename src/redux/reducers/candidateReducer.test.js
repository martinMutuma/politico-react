import candidateReducer from "./candidateReducer";
import { actionTypes } from "../../actionTypes";

describe("Candidates reducer", () => {
  it("should return the initial state", () => {
    expect(candidateReducer(undefined, {})).toEqual({
      candidates: []
    });
  });
  test("Should return the list of candidates when passed ", () => {
    const candidatesList = {
      type: actionTypes.LIST_CANDIDATES,
      payload: [
        { name: "Mock", office: "office", id: 1 },
        { name: "Mock", office: "office2", id: 2 }
      ]
    };
    expect(candidateReducer([], candidatesList)).toEqual(
      candidatesList.payload
    );
  });
});
