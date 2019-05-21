import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { createStore } from "redux";
import myReducers from "./redux/reducers";

configure({ adapter: new Adapter() });

const initialState = {
  candidates: []
};
const store = createStore(myReducers, initialState);

global.store = store;
