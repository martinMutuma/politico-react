import React, { Component } from "react";
import { mainUrl } from "../../utils/MakeRequest";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { withAlert } from "react-alert";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mail23@mail.com",
      password: "password"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let url = mainUrl + "auth/login";

    this.props.alert.info("Logging in..........");
    axios
      .post(url, this.state)
      .then(response => {
        if (response.data != null) {
          let data = response.data.data;
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("user", JSON.stringify(data.user));
          sessionStorage.setItem("userob", data.user);
          localStorage.setItem("message", "Login Successfull");
          this.props.alert.success("Logged in");
          this.props.alert.success("Welcom to Politico " + data.user.firstname);
          this.props.history.push("/");
        }
      })
      .catch(error => {
        if (error.response) {
          this.props.alert.error(error.response.data.error);

          console.log(error.response.data);
        }
      });
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log("Typing.........");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="card login-card">
            <div className="card-header">
              <p data_temp_dwid="1"> Login </p>
            </div>
            <div className="card-body">
              <form className="form-v1" onSubmit={this.handleSubmit}>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="pull-left">
                  <a href="resetpassword.html">Forgot password?</a>
                </div>
                <div className="pull-right">
                  <input
                    type="submit"
                    value="login"
                    className="button bg-teal hover-outline-blue"
                    placeholder="login"
                  />
                </div>
                <div className="clear-both" />
              </form>
            </div>
            <div className="card-footer">
              <a href="/signup">Not signed up yet?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(withRouter(Login));
