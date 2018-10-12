import React, { Component } from 'react';
import Popular from './Popular';
import LastReleased from './LastReleased';
import Upcoming from './Upcoming';
import './Home.css';


const API_KEY='17e0f34221767f1716a0e3a321214fb3';

class Home extends Component {
  state = {
    popular: [],
    latest:[],
    upcoming:[]
  }

  findPop = async () =>{
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;
    const call_api = await fetch(url);
    const data = await call_api.json()
    this.setState({
      popular: data.results.filter((_,i)=>i<20)
    })
  }

  findLatest = async () =>{
    const ends = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
    const begins = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()-7}`
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_date.gte=${begins}&primary_release_date.lte=${ends}`;
    const call_api = await fetch(url);
    const data = await call_api.json()
    this.setState({
      latest: data.results.filter((_,i)=>i<20)
    })
  }

  findUpcoming = async () =>{
    const ends = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()+8}`;
    const begins = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()+1}`
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_date.gte=${begins}&primary_release_date.lte=${ends}`;
    const call_api = await fetch(url);
    const data = await call_api.json()
    this.setState({
      upcoming: data.results.filter((_,i)=>i<20)
    })
  }

  componentDidMount(){
    this.findPop();
    this.findLatest();
    this.findUpcoming();
  }

  render(){
    return(
      <div className='Home'>
        <Popular
          data={this.state.popular}
        />
        <LastReleased 
          data={this.state.latest}
        />
        <Upcoming 
          data={this.state.upcoming}
        />
      </div>
    );
  }
}

export default Home;