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
      for (let i = 0; i<data.results.length; i++){
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
          className='SearchSys'
          onSubmit= {this.props.searchMovies}
          autoComplete='off'
        >
          <input 
            className='searchInput'
            type = 'text'
            id = 'searchInput'
            list = 'datas'
            name = 'searchInput'
            placeholder='Search movie...'
            onKeyUp={this.autoCompSearch}
          />
          {this.state.titles.length > 0 && 
          <datalist id= 'datas' className='autoCompRes'>
            {this.state.titles.map((tit,i) => 
                <option
                  className='autoCompLig'
                  key={`autoComp-${i}`}
                  onClick={this.autoCompFill}
                >{tit}</option>
              ) 
            }
          </datalist>}
          <button id='submitButton'>Search</button>
        </form>
    );
  }
}

export default SearchSys;