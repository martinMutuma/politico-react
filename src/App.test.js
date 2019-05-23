import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import Navbar from "./components/container/Nav";

test("renders without crashing", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toBeTruthy();
  const appC = wrapper.find('[data-test="c-app"]');
  expect(appC.length).toBe(1);
});

it("Navbar renders", () => {
  const AppComponet = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const nav = AppComponet.find(Navbar);
  expect(nav.length).toBe(1);
});
