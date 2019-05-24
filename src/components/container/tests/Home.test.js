import React from "react";
import { shallow, mount } from "enzyme";

import Home from "../Home";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import sinon from "sinon";

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Provider store={store}>
            <StaticRouter>
                <Home />
            </StaticRouter>
        </Provider>
    );
});

test("<Home /> Renders without crashing", () => {
    expect(wrapper).toBeTruthy();
    const componetC = wrapper.find('[data-test="c-home"]');
    expect(componetC.length).toBe(1);
});