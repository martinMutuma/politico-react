import React from "react";
import { shallow, mount } from "enzyme";

import OfficeSidebar from "../OfficeSidebar";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import sinon from "sinon";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <StaticRouter>
        <OfficeSidebar />
      </StaticRouter>
    </Provider>
  );
});
test("Renders without crashing", () => {
  expect(wrapper).toBeTruthy();
  const componetC = wrapper.find('[data-test="c-office-sidebar"]');
  expect(componetC.length).toBe(1);
});
