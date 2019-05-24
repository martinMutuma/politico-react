import React, { Component } from "react";
import { mainUrl } from "../../utils/MakeRequest";
import axios from "axios";
import { withAlert } from "react-alert";

import getFormDataById from "../../utils/Helpers";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mail23@mail.com",
      password: "password"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let data = getFormDataById("signup");
    let url = mainUrl + "auth/signup";
    this.props.alert.info("Wait a second as we create your account");

    axios
      .post(url, data)
      .then(response => {
        if (response.data != null) {
          data = response.data.data;
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("user", JSON.stringify(data.user));
          sessionStorage.setItem("userob", data.user);
          localStorage.setItem("message", "Login Successfull");
          this.props.alert.success("success! Welcome to Political");
          this.props.history.push("/");
        }
      })
      .catch(error => {
        if (error.response) {
          this.props.alert.error(error.response.data.error);
        }
      });
  }
  handleChange(event) {}
  render() {
    return (
      <div>
        <div className="container" data-test="c-signup">
          <div className="container signup">
            <div className="flex-row">
              <div className="card signup-side">
                <div className="card-header"> signup </div>
                <div className="card-body">
                  <form
                    className="form-v1"
                    id="signup"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="flex-row flex-row-wrap">
                      <div className="flex-col-6">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder="First Name"
                          id="firstname"
                          name="firstname"
                          required
                        />
                      </div>
                      <div className="flex-col-6">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          id="lastname"
                          name="lastname"
                          required
                        />
                      </div>
                      <div className="flex-col-6">
                        <label>Other Name</label>
                        <input
                          type="text"
                          placeholder="Other Name"
                          id="othername"
                          name="othername"
                          required
                        />
                      </div>
                      <div className="flex-col-6">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="email"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="flex-col-6">
                        <label>Passport Url</label>
                        <input
                          type="text"
                          placeholder="Passport Url"
                          id="passporturl"
                          name="passporturlstring"
                          required
                        />
                      </div>
                      <div className="flex-col-6">
                        <label>Phone number</label>
                        <input
                          type="tel"
                          placeholder="phonenumber"
                          name="phonenumber"
                          id="phonenumber"
                          required
                        />
                      </div>
                      <div className="flex-col-6">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          id="password"
                          required
                        />
                      </div>
                    </div>
                    <div className="pull-right">
                      <input
                        type="submit"
                        className="button bg-teal hover-outline-blue"
                        value="Sign up"
                      />
                    </div>
                    <div className="clear-both" />
                  </form>
                </div>
                <div className="card-footer">
                  <a href="/login">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(Signup);
