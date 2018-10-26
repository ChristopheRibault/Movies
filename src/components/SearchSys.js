import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { searchMovies, autoCompSearch } from "../actions/searchActions";
import "./SearchSys.css";

class SearchSys extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  redirectToTarget = () => {
    this.context.router.history.push(`/Results`);
  };

  handleChange = e => {
    this.props.autoCompSearch(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchMovies(e);
    this.redirectToTarget();
  };

  render() {
    console.log(this);
    return (
      <form
        className="SearchSys"
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <input
          className="searchInput"
          type="text"
          id="searchInput"
          list="datas"
          name="searchInput"
          placeholder="Search movie..."
          onChange={this.handleChange}
        />
        {this.props.titles && (
          <datalist id="datas" className="autoCompRes">
            {this.props.titles.map((tit, i) => (
              <option
                className="autoCompLig"
                key={`autoComp-${i}`}
                onClick={this.autoCompFill}
              >
                {tit}
              </option>
            ))}
          </datalist>
        )}
          <button id="submitButton">Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  titles: state.search.titles,
  search: state.search.results,
  showSearch: state.search.showSearch
});

export default connect(
  mapStateToProps,
  { searchMovies, autoCompSearch }
)(SearchSys);
