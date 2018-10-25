import React, { Component } from 'react';

export default class Upcoming extends Component{

  state = {
    data:[]
  }
  
  componentWillMount(){
    this.props.findPop(1,8)
      .then(data => this.setState({
        data:data
      }))
  }

  render(){
    return(
      <section className='Upcoming' id='Upcoming'>
        <h2>Upcoming</h2>
        <div className='list'>
          {this.state.data.map((movie,i)=>
            movie.poster_path &&
            <div key={`upcoming-${i}`} className='item'>
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