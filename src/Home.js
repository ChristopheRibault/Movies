import React, { Component } from 'react';
import './Home.css';

const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class Home extends Component {
  state = {
    data: []
  }

  findPop = async () =>{
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;
    const call_api = await fetch(url);
    const data = await call_api.json()
    this.setState({
      data: data.results.filter((_,i)=>i<10)
    })
    console.log(this.state.data)
  }

  componentDidMount(){
    this.findPop();
  }

  render(){
    return(
      <div className='Home'>
        <section className='popular'>
          <h2>TOP 10 popular movies</h2>
          <div className='popular-list'>
            {this.state.data.map((movie,i)=>
              <div key={i} className='popular-item'>
                <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                <h3>{i+1}- {movie.title}</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;