import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleFormChange from '../actions/formActions';

import './Contact.css';

class Contact extends Component {

  render(){
    const { handleFormChange, lastName, firstName, email, message } = this.props;
    return(
      <div className='Contact'>
        <form action="https://formspree.io/c.ribault.dev@gmail.com" method="POST" >
          <fieldset>
            <label htmlFor='lastName'>Lastname : </label>
            <input type='text' id='lastName' name='lastName' onChange={handleFormChange} value={lastName} />
          </fieldset>
          <fieldset>
            <label htmlFor='firstName'>Firstname : </label>
            <input type='text' id='firstName' name='firstName' onChange={handleFormChange} value={firstName} />
          </fieldset>
          <fieldset>
            <label htmlFor='email'>email : </label>
            <input type='text' id='email' name='email' onChange={handleFormChange} value={email} />            
          </fieldset>
          <fieldset>
            <label htmlFor='message'>Your message : </label>
            <textarea id='message' name='message' onChange={handleFormChange} value={message} ></textarea>            
          </fieldset>
          <input type='submit' value = 'SEND MESSAGE'/>
        </form>
      </div>
        
    );
  }
}

const mapStateToProps = state => ({
  lastName: state.form.lastName,
  firstName: state.form.firstName,
  email: state.form.email,
  message: state.form.message,
});

export default connect(mapStateToProps, { handleFormChange })(Contact);
