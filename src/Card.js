import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
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
        </div>
			</div>
    );
  }
}

export default Card;