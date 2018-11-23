import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { showTrailer, closeTrailer } from '../actions/trailerActions';
import Modal from './Modal';
import noImage from './No_image_available.png';

import API_KEY from '../API_KEY';

import './Card.css';

class Card extends Component{

  state = {
    cast: [],
  }

  componentWillMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=${API_KEY}`;
    axios.get(url)
    .then(res => 
      this.setState({
        cast: res.data.cast,
      })
    );
  }

  handleShowTrailer = () => {
    this.props.showTrailer(this.props.id);
  }

  handleClose = () =>{
    this.props.closeTrailer();
  }

  render(){
    return (
      <div className='Card'>
        <div className='poster'>
          <img 
            src=
            {
              this.props.image?
              `https://image.tmdb.org/t/p/w200${this.props.image}`:
              noImage
            } 
            alt={this.props.title}/>
        </div>   
        <div className='content'>
          <h2>{this.props.title}</h2>
          {this.props.title && 
              <span>
              Average:&nbsp;{this.props.vote_average}/10
              &nbsp;from&nbsp;{this.props.vote_count}&nbsp;votes.
              </span>
          }
          <p>{this.props.overview}</p>
          <div className = 'actors'>
            {this.state.cast.slice(0,6).map(actor => 
              <div className= 'actor'>
                <div className='actor_pic'>
                  <img src={actor.profile_path?`https://image.tmdb.org/t/p/w92/${actor.profile_path}`:noImage} alt={actor.name} />
                </div>
                <h6>{actor.name}</h6>
              </div>
            )}
          </div>
          <div className='mod'>
            <Modal
              show={this.props.displayVideo?'modal display-block':'modal display-none'}
              videoId={this.props.videoId}
              handleClose={this.handleClose}
            />
            <button 
              className='trailerLink'
              onClick={this.handleShowTrailer}
            >See movie trailer
            </button>
          </div>
        </div>
			</div>
    );
  }
}

const mapStateToProps = state => ({
  videoId: state.trailer.videoID,
  displayVideo: state.trailer.displayVideo,
  cast: state.trailer.cast
});

export default connect(mapStateToProps, { showTrailer, closeTrailer })(Card);
