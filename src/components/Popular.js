import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FETCH_POPULAR } from '../actions/types';
import { findPop } from '../actions/homeActions';

class Popular extends Component{
  
  componentWillMount(){
    this.props.findPop(FETCH_POPULAR)
  }

  render(){
    return(
      <section className='Popular' id='Popular'>
        <h2>TOP 20 popular movies</h2>
        {this.props.popularMovies &&
        <div className='list'>
          {this.props.popularMovies.map((movie,i)=>
            movie.poster_path &&
            <div key={`popular-${i}`} className='item'>             
              <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
              <h3>{i+1}- {movie.title}</h3>
            </div>
            
          )}
        </div>
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  popularMovies: state.home.popularMovies,
});

export default connect(mapStateToProps, { findPop })(Popular);
