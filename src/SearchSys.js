import React, { Component } from 'react';

const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class SearchSys extends Component{
  state = {
    titles: [],
  }

  autoComp = async (e) => {
    const input = e.target.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
    const call_api = await fetch(url);
    const data = await call_api.json();

    const titles = [];
    if (data.results){
      for (let i = 0; i<5; i++){
        titles.push(data.results[i].title);
      }
    }
    this.setState({
      titles: titles
    })

    console.log(this.state.titles)
  }
  
  render(){
    return (
      <div className='SearchSys'>
        <form  
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
        <div className='autocompRes'>
          {this.state.titles.map(tit => 
              <p>{tit}</p>
            ) 
          }
        </div>
      </div>
    );
  }
}

export default SearchSys;