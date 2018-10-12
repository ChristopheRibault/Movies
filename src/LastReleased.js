import React, { Component } from 'react';
import './Home.css';

export default class Popular extends Component{

  state = {
    data:[]
  }
  
  componentWillMount(){
    const ends = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
    const begins = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()-7}`
    this.props.findPop(begins,ends)
      .then(data => this.setState({
        data:data
      }))
  }

  render(){
    return(
      <section className='LastReleased' id='LastReleased'>
        <h2>Released this week</h2>
        <div className='list'>
          {this.state.data.map((movie,i)=>
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