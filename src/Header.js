import React, { Component } from 'react';
import SearchSys from './SearchSys';
import logo from './logo.png'
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <header>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                    <h1>Movies</h1>
                </div>
                <div className='searchBar'>
                    <SearchSys
                        searchMovies = {this.props.searchMovies}
                    />
                </div>
            </header>
        );
    }
}