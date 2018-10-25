import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { searchMovies, autoCompSearch } from "../actions/searchActions";
import "./SearchSys.css";

class SearchSys extends Component {
  handleChange = e => {
    this.props.autoCompSearch(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchMovies(e);
  };

  render() {
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
        <Link to="/Results">
          <button id="submitButton">Search</button>
        </Link>
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
