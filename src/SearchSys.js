import React, { Component } from 'react';

class SearchSys extends Component{
  autoComp = async (e) => {
    console.log('ok')
  }
  
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
          onKeyUp={this.autoComp}
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