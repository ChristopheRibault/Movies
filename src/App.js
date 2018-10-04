import React, { Component } from 'react';
import SearchSys from './SearchSys';
import Results from './Results';
import './App.css';

const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class App extends Component {
  state = {
    results: undefined,
    // title: undefined,
    // vote_average: undefined,
    // vote_count: undefined,
    // overview: undefined,
    // image: undefined,
    // id: undefined,
  }

  

  searchMovies = async (e) => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const call_api = await fetch(url);
    const data = await call_api.json();
    console.log(data);

    this.setState({
      results: data.results,
      // title: data.results[0].title,
      // vote_average: data.results[0].vote_average,
      // vote_count: data.results[0].vote_count,
      // overview: data.results[0].overview,
      // image: `https://image.tmdb.org/t/p/w200${data.results[0].poster_path}`,
      // id: data.results[0].id
    })
  }

  render() {
    console.log(this.state.results)
    return (
      <div className="App">
        <SearchSys
          searchMovies = {this.searchMovies}/>
        <Results
          results = {this.state.results}
          // title= {this.state.title}
          // vote_average= {this.state.vote_average}
          // vote_count= {this.state.vote_count}
          // overview= {this.state.overview}
          // image= {this.state.image}
          // id= {this.state.id}
        />
      </div>
    );
  }
}

export default App;
