import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectGenre, submitCriterias, selectAverageVote } from '../actions/browseActions';
import genre from '../genre';

import Card from './Card';

class Browse extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitCriterias(this.props);
  }

  render(){
    const { selectGenre, selectAverageVote, averageVote, browseResults } = this.props;
    return(
      <div className='Browse'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='genre'>Genre</label>
          <select id='genre' multiple  onChange={selectGenre} >
            {genre.map(g =>
              <option value={g.id} key={g.id}>{g.name}</option>
            )}
          </select>
          <label htmlFor='avgVote'>Minimum Average Vote : {averageVote}</label>
          <input id='avgVote' type='range' min='0' max='10' value={averageVote} onChange={selectAverageVote} />
          <input type='submit' value='Search' />
        </form>
        <div className='browseResults'>
          {browseResults.map(movie =>
            <Card 
              key = {movie.id}
              title = {movie.title}
              vote_average= {movie.vote_average}
              vote_count= {movie.vote_count}
              overview= {movie.overview}
              image= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              id= {movie.id}
            />
            
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.browse.genre,
  averageVote: state.browse.averageVote,
  browseResults: state.browse.browseResults,
});

export default connect(mapStateToProps,{ selectGenre, selectAverageVote, submitCriterias })(Browse);
