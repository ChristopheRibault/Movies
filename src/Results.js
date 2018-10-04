import React, { Component } from 'react';
import Card from './Card'

class Results extends Component{
  
  render(){
    const results = this.props.results;
    console.log (results);
    return (
      <div className='Results'>
        { this.props.results && results.map(movie =>
          <Card
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

export default Results;