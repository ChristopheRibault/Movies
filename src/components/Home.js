import React, { Component } from 'react';

import Popular from './Popular';
import LastReleased from './LastReleased';
import Upcoming from './Upcoming';

import './Home.css';

class Home extends Component {
  
  render(){
    return(
      <div className='Home'>
        <Popular />
        <LastReleased />
        <Upcoming />
      </div>
    );
  }
}

export default Home;