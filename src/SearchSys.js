import React, { Component } from 'react';
import './SearchSys.css'

const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class SearchSys extends Component{
  state = {
    titles: [],
  }

  autoCompSearch = async (e) => {
    const input = e.target.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
    const call_api = await fetch(url);
    const data = await call_api.json();

    const titles = [];
    if (data.results){
      for (let i = 0; i<Math.min(5,data.results.length); i++){
        titles.push(data.results[i].title);
      }
    }
    this.setState({
      titles: titles
    })
  }

  autoCompFill = async (e) => {
    const fillWith = e.target.innerHTML;
    const fillIn = document.getElementById('searchInput');
    fillIn.value = fillWith;
  }
  
  render(){
    return (
      <div className='SearchSys'>
        <form  
          onSubmit= {this.props.searchMovies}
          autoComplete='off'
        >
          <div className='search'>
            <input 
              type = 'text'
              id = 'searchInput'
              name = 'searchInput'
              placeholder='Search movie...'
              onKeyUp={this.autoCompSearch}
            />
            {this.state.titles.length > 0 && 
            <select className='autocompRes' multiple>
              {this.state.titles.map(tit => 
                  <option
                    onClick={this.autoCompFill}
                  >{tit}</option>
                ) 
              }
            </select>}
          </div> 
          <input
            type = 'submit'
            id = 'submitButton'
            value = 'Search'
          />       
        </form>
      </div>
    );
  }
}

export default SearchSys;