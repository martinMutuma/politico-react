import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content" data-test="c-home">
        <div className="bg-image">
          <span>
            We count every vote <br />
            Because Every vote counts{" "}
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
