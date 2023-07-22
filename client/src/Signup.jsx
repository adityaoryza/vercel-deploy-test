import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    axios
      .post('https://vercel-api-beta-weld.vercel.app/register', {
        name,
        email,
        password,
      })
      .then((res) => {
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2 className='Stext'>Sign Up</h2>
        {errorMessage && <p className='text-danger'>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong className='text'>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Name'
              autoComplete='off'
              name='name'
              className='form-control rounded'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong className='text'>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong className='text'>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn-regist'>
            Register
          </button>
        </form>
        <p>Already Have an Account?</p>
        <Link to='/login' className='bg-light'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
