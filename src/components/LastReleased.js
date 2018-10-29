import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FETCH_LASTRELEASED } from '../actions/types';
import findPop from '../actions/homeActions';

import './Home.css';

class LastReleased extends Component {
  componentWillMount() {
    this.props.findPop(FETCH_LASTRELEASED, -7, 0);
  }

  render() {
    const { lastReleasedMovies } = this.props;
    return (
      <section className="LastReleased" id="LastReleased">
        <h2>Released this week</h2>
        {lastReleasedMovies && (
          <div className="list">
            {lastReleasedMovies.map(
              (movie, i) => movie.poster_path && (
              <div key={`latest-${movie.id}`} className="item">
                <img
                  src={`https://image.tmdb.org/t/p/w200${
                    movie.poster_path
                  }`}
                  alt={movie.title}
                />
                <h3>
                  {`${i + 1}- ${movie.title}`}
                </h3>
                <small>
                  {`Realeased on ${movie.release_date}`}
                </small>
              </div>
              ),
            )}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  lastReleasedMovies: state.home.lastReleasedMovies
});

export default connect(
  mapStateToProps,
  { findPop }
)(LastReleased);
