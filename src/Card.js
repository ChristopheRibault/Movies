import React, { Component } from 'react';
import Modal from './Modal';
import './Card.css';

const API_KEY = '17e0f34221767f1716a0e3a321214fb3';

class Card extends Component{
  state = {
    videoId: undefined,
    show: false
  }

  showTrailer = async (e) =>{
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=${API_KEY}`
    const api_call = await fetch(url);
    const data = await api_call.json();
    let videoId = data.results[0]?data.results[0].key:undefined;
    for (let i = data.results.length-1; i>=0; i--){
      if (data.results[i].name.toLowerCase().includes('trailer')){
        videoId = data.results[i].key;
      }
    }
    this.setState({
      videoId: videoId,
      show: true
    })
  }

  handleClose = () =>{
    this.setState({
      videoId: undefined,
      show: false
    })
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
          <div className='mod'>
            <Modal
              show={this.state.show?'modal display-block':'modal display-none'}
              videoId={this.state.videoId}
              handleClose={this.handleClose}
            />
            <button 
              className='trailerLink'
              onClick={this.showTrailer}
            >See movie trailer
            </button>
          </div>
        </div>

			</div>
    );
  }
}

export default Card;