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

  findPop = async (begins,ends) =>{
    const beginsURL = begins?`&primary_release_date.gte=${begins}`:'';
    const endsURL = ends?`&primary_release_date.lte=${ends}`:'';
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1${beginsURL}${endsURL}`;
    const call_api = await fetch(url);
    const data = await call_api.json();
    const res = data.results.filter((_,i)=>i<20)
    return res;
  }

  render(){
    return(
      <div className='Home'>
        <Popular
          findPop={this.findPop}
        />
        <LastReleased 
          findPop={this.findPop}
        />
        <Upcoming
          findPop={this.findPop} 
        />
      </div>
    );
  }
}

export default Home;