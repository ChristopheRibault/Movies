import React, { Component } from 'react';
import './Home.css';

export default class Popular extends Component{
  render(){
    return(
      <section className='Popular'>
        <h2>TOP 10 popular movies</h2>
        <div className='list'>
          {this.props.data.map((movie,i)=>
            <div key={`popular-${i}`} className='item'>
              <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
              <h3>{i+1}- {movie.title}</h3>
            </div>
          )}
        </div>
      </section>
    );
  }
}