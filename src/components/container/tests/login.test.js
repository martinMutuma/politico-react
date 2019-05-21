import React from "react";
import { shallow, mount } from "enzyme";

import Login from "../Login";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import sinon from "sinon";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <StaticRouter>
        <Login />
      </StaticRouter>
    </Provider>
  );
});
test("Renders without crashing", () => {
  expect(wrapper).toBeTruthy();
  const componetC = wrapper.find('[data-test="c-login"]');
  expect(componetC.length).toBe(1);
});
test("login form data fill ", () => {
  const inputEmail = wrapper.find("#email");
  const inputPass = wrapper.find("#password");
  const loginForm = wrapper.find("form").first();
  wrapper.find("#email").simulate("change", {
    target: {
      value: "mail23@mail.com",
      name: "email"
    }
  });
  inputPass.simulate("change", {
    target: {
      value: "password",
      name: "password"
    }
  });

  loginForm.simulate("submit", {
    preventDefault: jest.fn()
  });
  console.log();
});
