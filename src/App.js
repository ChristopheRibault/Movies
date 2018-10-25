import React, { Component } from "react";
import { Provider } from "react-redux";
import axios from "axios";
import store from './store'
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";
import "./App.css";

const API_KEY = "17e0f34221767f1716a0e3a321214fb3";

class App extends Component {
  state = {
    results: undefined,
    showSearch: false
  };

  searchMovies = e => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    axios
      .get(url)
      .then(res => {
        if (query) {
          this.setState({
            results: res.data.results,
            showSearch: true
          });
        } else {
          this.setState({
            results: undefined,
            showSearch: false
          });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header searchMovies={this.searchMovies} />
          {!this.state.showSearch && <Home />}
          {this.state.showSearch && <Results results={this.state.results} />}
        </div>
      </Provider>
    );
  }
}

export default App;
