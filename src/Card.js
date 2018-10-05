import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Card.css';

const API_KEY = '17e0f34221767f1716a0e3a321214fb3';

class Card extends Component{

  showTrailer = async (e) =>{
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=${API_KEY}`
    const api_call = await fetch(url);
    const data = await api_call.json();
    const videoId = data.results[0].id;
    console.log(videoId);
  }

  render(){
    return (
      <div className='Card'>
        <div><img src={this.props.image} alt={this.props.title}/></div>   
        <div className='content'>
          <h2>{this.props.title}</h2>
          {this.props.title && 
              <span>
              Average:&nbsp;{this.props.vote_average}/10
              &nbsp;from&nbsp;{this.props.vote_count}&nbsp;votes.
              </span>
          }
          <p>{this.props.overview}</p>
          <button 
            className='trailerLink'
            onClick={this.showTrailer}
          >See movie trailer
          </button>
        </div>
			</div>
    );
  }
}

export default Card;