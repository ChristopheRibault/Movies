import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';

import store from './store'

import Header from './components/Header';
import Home from "./components/Home";
import Results from "./components/Results";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Results />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Results' component={Results} />
          </Switch>
          {/* {!this.props.showSearch && <Home />} */}
          {/* {this.props.showSearch && <Results results={this.state.results} />} */}
        </div>
      </Provider>
    );
  }
}

export default App;
