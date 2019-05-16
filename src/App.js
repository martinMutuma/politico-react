import React, { Component } from "react";
import Routing from "./routes";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./css/bootstra.css";
import "./css/app.css";

const options = {
  timeout: 5000,
  position: positions.MIDDLE_RIGHT
};

class App extends Component {
  render() {
    return (
      <Provider template={AlertTemplate} {...options}>
        <div className="">
          <Routing />
        </div>
      </Provider>
    );
  }
}

export default App;
