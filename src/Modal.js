import React, { Component } from "react";
import YouTube from 'react-youtube';
import './Modal.css' 

class Modal extends Component{
 
  render(){
    return (
      <div className={this.props.show}>
        <section className="modal-main">
          <div className='video' id='video'>
            <YouTube
              videoId={this.props.videoId}
            /> 
          </div>
          <button onClick={this.props.handleClose}>Close</button>
        </section>
      </div>
    );
  }
}

export default Modal;