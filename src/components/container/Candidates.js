import React, { Component } from "react";

import OfficeSidebar from "./OfficeSidebar";
import ListCandidates from "./ListCandidates";

class Candidates extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="flex-row">
            <div className="flex-col-3">
              <OfficeSidebar />
            </div>
            <div className="flex-col-9">
              <ListCandidates />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Candidates;
