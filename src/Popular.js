import React, { Component } from 'react';

export default class Popular extends Component{

  state = {
    data:[]
  }
  
  componentWillMount(){
    this.props.findPop()
      .then(data => this.setState({
        data:data
      }))
  }

  render(){
    return(
      <section className='Popular' id='Popular'>
        <h2>TOP 20 popular movies</h2>
        {this.state.data &&
        <div className='list'>
          {this.state.data.map((movie,i)=>
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