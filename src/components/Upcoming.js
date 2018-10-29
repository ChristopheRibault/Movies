import React, { Component } from "react";
import { connect } from "react-redux";

import { FETCH_UPCOMING } from "../actions/types";
import findPop from "../actions/homeActions";

class Upcoming extends Component {
  componentWillMount() {
    this.props.findPop(FETCH_UPCOMING, 1, 8);
  }

  render() {
    return (
      <section className="Upcoming" id="Upcoming">
        <h2>Upcoming</h2>
        {this.props.upcomingMovies && (
          <div className="list">
            {this.props.upcomingMovies.map(
              (movie, i) =>
                movie.poster_path && (
                  <div key={`upcoming-${i}`} className="item">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                    />
                    <h3>
                      {i + 1}- {movie.title}
                    </h3>
                    <small>Realeased on {movie.release_date}</small>
                  </div>
                )
            )}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  upcomingMovies: state.home.upcomingMovies
});

export default connect(
  mapStateToProps,
  { findPop }
)(Upcoming);
