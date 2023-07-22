import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

function CreateUser() {
  const [name, setName] = useState('');
  const [forWho, setForWho] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [forWhoError, setForWhoError] = useState('');
  const [messageError, setMessageError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setNameError('');
    setForWhoError('');
    setMessageError('');

    // Validate input fields
    if (!name) {
      setNameError('Please enter a name');
      return;
    }

    if (!forWho) {
      setForWhoError('Please enter a recipient');
      return;
    }

    if (!message) {
      setMessageError('Please enter a message');
      return;
    }

    // Submit form if all fields are filled
    axios
      .post('https://vercel-api-beta-weld.vercel.app/create', {
        name,
        forWho,
        message,
      })
      .then((result) => {
        console.log(result);
        navigate('/users');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='create-container'>
      <div className='create-user-form'>
        <form onSubmit={handleSubmit}>
          <h2>Add Note</h2>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className='error-message'>{nameError}</p>}
          </div>
          <div>
            <label htmlFor='forWho'>For Who</label>
            <input
              type='text'
              placeholder='Enter for who'
              className='form-control'
              onChange={(e) => setForWho(e.target.value)}
            />
            {forWhoError && <p className='error-message'>{forWhoError}</p>}
          </div>
          <div>
            <label htmlFor='message'>Note</label>
            <input
              type='text'
              placeholder='Enter message'
              className='form-control'
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageError && <p className='error-message'>{messageError}</p>}
          </div>
          <button className='btn-add'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
