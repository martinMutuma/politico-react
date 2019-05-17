import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <header className="top-navbar bg-dark">
        <div className="container">
          <div className="bland">
            <a href="/">
              <span className="bland-logo"> Political </span>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/candidates">Candidates</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
              <li>
                <a
                  onClick={() => {
                    localStorage.clear();
                    sessionStorage.clear();
                    props.history.push("/login");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
