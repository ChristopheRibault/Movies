import React, { Component } from "react";
import YouTube from 'react-youtube';
import './Modal.css'

class Modal extends Component{
 
  render(){
    console.log(this.props.show)
    return (
      <div className={this.props.show}>
        <section className="modal-main">
          <button onClick={this.props.handleClose}>X</button>
          <div className='video' id='video'>
            <YouTube
              videoId={this.props.videoId}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;