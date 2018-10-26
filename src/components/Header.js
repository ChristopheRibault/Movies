import React, { Component } from "react";
import SearchSys from "./SearchSys";
import logo from "./logo.png";
import "./Header.css";
import {} from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Movies</h1>
        </div>
        <div className="searchBar">
          <SearchSys/>
        </div>
      </header>
    );
  }
}
