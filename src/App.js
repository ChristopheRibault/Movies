import React, { Component } from 'react';
import SearchSys from './SearchSys';
import Results from './Results';
import './App.css';

const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class App extends Component {
  state = {
    results: undefined,
  }

  searchMovies = async (e) => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const call_api = await fetch(url);
    const data = await call_api.json();

    this.setState({
      results: data.results,
    })
  }

  render() {
    return (
      <div className="App">
        <SearchSys
          searchMovies = {this.searchMovies}/>
        <Results
          results = {this.state.results}
        />
      </div>
    );
  }
}

export default App;
