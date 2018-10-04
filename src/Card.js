import React, { Component } from 'react';

class Card extends Component{
  render(){
    return (
      <div className='Card'>
        <h2>{this.props.title}</h2>
        {this.props.title && 
            <span>
            Average: {this.props.vote_average}
            &nbsp;over {this.props.vote_count} votes.
            </span>
        }
        <p>{this.props.overview}</p>
        <img src={this.props.image} alt={this.props.title}/>
				<hr/>
			</div>
    );
  }
}

export default Card;