import React, { Component } from "react";
import axios from "axios";
import { mainUrl, reqConfig } from "../../utils/MakeRequest";
import { storeListCandidates } from "../../redux/actions/candidates";
import { connect } from "react-redux";

class ListCandidates extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let url = mainUrl + "candidates";
    return axios.get(url, reqConfig()).then(response => {
      this.props.dispatch(storeListCandidates(response.data.data));
    });
  }
  render() {
    return (
      <div className="card" data-test="c-list-candidates">
        <div className="card-header bg-success" id="office-header">
          &#x265B; Candidates for The group reader Seat
        </div>
        <div className="card-body bg-sucess-light">
          <div className="flex-colum  bg-sucess-light">
            <div id="all-candidates">
              <div className="card" id="candidate-profile">
                <div className="card-body bg-light">
                  {this.props.candidates.map(candidate => (
                    <div key={candidate.candidatev_id}>
                      <div className="flex-row-no-wrap ">
                        <div className="flex-col-3 party-logo" />
                        <div className="flex-col-9">
                          <div className="party-detail" />
                          <h3> {candidate.candidate_name}</h3>
                          <hr />
                          <p>
                            <b>Office:</b>
                            {candidate.office_name +
                              "(" +
                              candidate.office_type +
                              ")"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candidates: state.candidates
});
const mapDispatchToProps = (state, ownProps) => {
  return {
    storeListCandidates
  };
};

export default connect(
  mapStateToProps,
  null
)(ListCandidates);
