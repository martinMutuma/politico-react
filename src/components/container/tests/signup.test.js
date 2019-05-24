import React from "react";
import { shallow, mount } from "enzyme";

import Signup from "../Signup";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import sinon from "sinon";

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Provider store={store}>
            <StaticRouter>
                <Signup />
            </StaticRouter>
        </Provider>
    );
});

test("<Home /> Renders without crashing", () => {
    expect(wrapper).toBeTruthy();
    const componetC = wrapper.find('[data-test="c-signup"]');
    expect(componetC.length).toBe(1);
});