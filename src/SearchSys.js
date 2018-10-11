import React, { Component } from 'react';
import {} from '@material-ui/core';
import './SearchSys.css';

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
      for (let i = 0; i<Math.min(data.results.length,5); i++){
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
        <form  
          onSubmit= {this.props.searchMovies}
          autoComplete='off'
        >
          <div className='search'>
            <div className='searchInput'>
              <input 
                type = 'text'
                id = 'searchInput'
                name = 'searchInput'
                placeholder='Search movie...'
                onKeyUp={this.autoCompSearch}
              />
            </div>
            {this.state.titles.length > 0 && 
            <div className='autoCompRes'>
              {this.state.titles.map((tit,i) => 
                  <div
                    className='autoCompLig'
                    key={`autoComp-${i}`}
                    onClick={this.autoCompFill}
                  >{tit}</div>
                ) 
              }
            </div>}
          </div>
          <div className='submit'>
            <button id='submitButton'>Search</button>
          </div>     
        </form>
    );
  }
}

export default SearchSys;