import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showTrailer, closeTrailer } from '../actions/trailerActions';
import Modal from './Modal';
import noImage from './No_image_available.png';

import './Card.css';

class Card extends Component{

  handleShowTrailer = () => {
    this.props.showTrailer(this.props.id);
  }

  handleClose = () =>{
    this.props.closeTrailer();
  }

  render(){
    console.log(`image de ${this.props.title} :`, this.props.image)
    return (
      <div className='Card'>
        <div><img src={this.props.image?`https://image.tmdb.org/t/p/w200${this.props.image}`:noImage} alt={this.props.title}/></div>   
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
  displayVideo: state.trailer.displayVideo
});

export default connect(mapStateToProps, { showTrailer, closeTrailer })(Card);
