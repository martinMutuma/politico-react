import React, { Component } from "react";
import axios from "axios";
import { mainUrl, reqConfig } from "../../utils/MakeRequest";

class OfficeSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offices: []
    };
  }
  componentDidMount() {
    let url = mainUrl + "offices";
    axios.get(url, reqConfig()).then(response => {
      this.setState({
        offices: response.data.data
      });
    });
  }
  render() {
    return (
      <div className="card bg-sucess-light" data-test="c-office-sidebar">
        <div className="card-body">
          <div className="sidebar bg-light front-sidebar" id="offices-sidebar">
            <a href="#" id="all-candidates-link">
              All Candidates
            </a>
            {this.state.offices.map(office => (
              <a key={office.id}>{office.name + "(" + office.type + ")"}</a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeSidebar;
