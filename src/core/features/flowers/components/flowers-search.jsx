import React from "react";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { searchFlowers } from "../actions/flowers-actions";

import "../styles/flowers-search.scss";
import search from "../styles/images/search.svg";

class FlowersSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchFlowersWithDebounce = debounce(
      this.handleSearchFlowersWithDebounce,
      500
    );
  }

  handleFlowersSearchInputChange = e => {
    const value = e.target.value;
    this.handleSearchFlowersWithDebounce(value);
  };

  handleSearchFlowersWithDebounce = value => {
    const { searchFlowers } = this.props;

    searchFlowers(value);
  };

  render() {
    return (
      <div className="flowers-search">
        <input
          placeholder="Looking for something specific?"
          type="text"
          onChange={this.handleFlowersSearchInputChange}
        />
        <img src={search} alt="" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchFlowers: query => {
    dispatch(searchFlowers(query));
  }
});

FlowersSearch.propTypes = {
  searchFlowers: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FlowersSearch);
