import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

import './Results.css';

class Results extends Component{
  render(){
    const results = this.props.results;
    return (
      <div className='Results'>
        { this.props.results && results.map((movie,i) =>
          movie.poster_path && 
          <Card
            key = {`Card-${i}`}
            title = {movie.title}
            vote_average= {movie.vote_average}
            vote_count= {movie.vote_count}
            overview= {movie.overview}
            image= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            id= {movie.id}
          />
        )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
});

export default connect(mapStateToProps)(Results);
