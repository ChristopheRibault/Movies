import React, { Component } from 'react';
import './Home.css';

export default class Popular extends Component{

  render(){
    return(
      <section className='LastReleased'>
        <h2>Released this week</h2>
        <div className='list'>
          {this.props.data.map((movie,i)=>
            <div key={`latest-${i}`} className='item'>
              <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
              <h3>{i+1}- {movie.title}</h3>
              <small>Realeased on {movie.release_date}</small>
            </div>
          )}
        </div>
      </section>
    );
  }
}