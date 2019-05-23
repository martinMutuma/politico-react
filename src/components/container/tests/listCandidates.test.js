import React from "react";
import { shallow, mount } from "enzyme";
import ListCandidates, { getAllCandidates } from "../ListCandidates";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Test < ListCandidates />", () => {
  test("renders without crashing", () => {
    const componet = mount(
      <Provider store={store}>
        <ListCandidates />
      </Provider>
    );

    expect(componet).toBeTruthy();
    const componetC = componet.find('[data-test="c-list-candidates"]');
    expect(componetC.length).toBe(1);
  });
  test("get all candidates ", async () => {
    const store2 = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <ListCandidates />
      </Provider>
    );
    await wrapper.instance().componentDidMount();
    wrapper.update();
  });
});
