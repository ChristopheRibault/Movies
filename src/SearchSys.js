import React, { Component } from 'react';

class SearchSys extends Component{
  render(){
    return (
      <form 
        className='SearchSys' 
        onSubmit= {this.props.searchMovies}
      >
        <input 
          type = 'text'
          id = 'searchInput'
          name = 'searchInput'
          placeholder='Search movie...'
        />
        <input
          type = 'submit'
          id = 'submitButton'
          value = 'Search'
        />
      </form>
    );
  }
}

export default SearchSys;