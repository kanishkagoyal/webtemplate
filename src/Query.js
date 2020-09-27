import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import question from './image/question.jpg';
import './Query.css';
const Query = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleQuery = e => {
    e.preventDefault();
    if (name.length < 3) {
      window.alert('Enter a Valid name');
      return;
    }
    if (email === '') {
      window.alert('enter your email');
      return;
    }
    if (message === '') {
      window.alert('Please enter the message in the message box below');
      return;
    }
    emailjs
      .sendForm(
        'service name', // To be filled according to user
        'template name', // To be filled according to user
        e.target,
        'ID ' // To be filled according to user
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div class='row' id='form-box'>
      <div class='col-sm-1'></div>
      <div class='col-sm-4' id='sub-form-box'>
        <h2>ONLINE ENQUIRY</h2>
        <form onSubmit={handleQuery} className='contact-form' id='actual-form'>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              onChange={event => setName(event.target.value)}
              placeholder='Name*'
              name='name'
            />
          </div>
          <div class='form-group'>
            <input
              type='email'
              class='form-control'
              onChange={event => setEmail(event.target.value)}
              placeholder='Email ID*'
              name='email'
            />
          </div>
          <div class='form-group'>
            <input
              type='tel'
              class='form-control'
              onChange={event => setNumber(event.target.value)}
              placeholder='Contact Number'
              name='phone'
            />
          </div>
          <div class='form-group'>
            <textarea
              rows='5'
              cols='5'
              class='form-control'
              placeholder='Write your Message*'
              onChange={event => setMessage(event.target.value)}
              name='message'
            />
          </div>
          <div id='button-box'>
            <button type='submit' class='btn btn-default' id='button-submit'>
              Submit Now
            </button>
          </div>
        </form>
      </div>
      <div class='col-sm-1'></div>
      <div class='col-sm-5' id='question-photo'>
        <img src={question} alt='whatever' class='responsive' width='80%' />
      </div>
      <div class='col-sm-1'></div>
    </div>
  );
};

export default Query;
