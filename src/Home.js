import React, { Component } from 'react';
import Popular from './Popular';
import './Home.css';


const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class Home extends Component {
  state = {
    popular: []
  }

  findPop = async () =>{
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;
    const call_api = await fetch(url);
    const data = await call_api.json()
    this.setState({
      popular: data.results.filter((_,i)=>i<10)
    })
    console.log(this.state.data)
  }

  componentDidMount(){
    this.findPop();
  }

  render(){
    return(
      <div className='Home'>
        <Popular
          data={this.state.popular}
        />
      </div>
    );
  }
}

export default Home;