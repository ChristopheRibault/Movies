import React, { Component } from "react";
import { connect } from "react-redux";

import {
  selectGenre,
  submitCriterias,
  selectAverageVote,
  selectReleaseDate
} from "../actions/browseActions";
import genre from "../genre";

import Card from "./Card";

import "./Browse.css";

class Browse extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.submitCriterias(this.props);
  };

  render() {
    const {
      selectGenre,
      selectAverageVote,
      selectReleaseDate,
      releaseDateFrom,
      releaseDateTo,
      averageVote,
      browseResults
    } = this.props;
    return (
      <div className="Browse">
        <form onSubmit={this.handleSubmit}>
          <div className="inputs">
            <fieldset>
              <label htmlFor="genre">Genre</label>
              <select id="genre" multiple onChange={selectGenre}>
                {genre.map(g => (
                  <option value={g.id} key={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="avgVote">
                Minimum Average Vote : {averageVote}
              </label>
              <input
                id="avgVote"
                type="range"
                min="0"
                max="10"
                step="1"
                value={averageVote}
                onChange={selectAverageVote}
              />
            </fieldset>
            <fieldset>
              <h3>Release Date</h3>
              <div  className="releaseDateInputs">
                <label htmlFor="releaseDateFrom">From</label>
                <input
                  type="date"
                  id="releaseDateFrom"
                  value={releaseDateFrom}
                  onChange={selectReleaseDate}
                />
                <label htmlFor="releaseDateTo">To</label>
                <input
                  type="date"
                  id="releaseDateTo"
                  value={releaseDateTo}
                  onChange={selectReleaseDate}
                />
              </div>
            </fieldset>
          </div>
          <input type="submit" value="Search" />
        </form>
        <div className="browseResults">
          {browseResults.map(movie => (
            <Card
              key={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              overview={movie.overview}
              image={movie.poster_path}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.browse.genre,
  averageVote: state.browse.averageVote,
  releaseDateFrom: state.browse.releaseDateFrom,
  releaseDateTo: state.browse.releaseDateTo,
  browseResults: state.browse.browseResults
});

export default connect(
  mapStateToProps,
  { selectGenre, selectAverageVote, selectReleaseDate, submitCriterias }
)(Browse);
