import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/container/Home";
import Login from "./components/container/Login";
import Signup from "./components/container/Signup";
import Candidates from "./components/container/Candidates";
import PrivateRoute from "./components/hoc/PrivateRoute";
import Navbar from "./components/container/Nav";
import { withAlert } from "react-alert";

class Routing extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/candidates" component={Candidates} />
        </Switch>
      </Router>
    );
  }
}

export default withAlert()(Routing);
