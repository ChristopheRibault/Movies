import React, { Component } from 'react';
import Card from './Card'

class Results extends Component{
  render(){
    return (
      <div className='Results'>
        <Card
          title= {this.props.title}
          vote_average= {this.props.vote_average}
          vote_count= {this.props.vote_count}
          overview= {this.props.overview}
          image= {this.props.image}
          id= {this.props.id}
        />
      </div>
    );
  }
}

export default Results;