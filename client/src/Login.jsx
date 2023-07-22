import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    axios
      .post('https://vercel-api-beta-weld.vercel.app/login', {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/Home');
        } else {
          setErrorMessage('Invalid email or password');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h2 className='logintext'>Login</h2>
        {errorMessage && <p className='text-danger'>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong className='emailtext'>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong className='passtext'>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control rounded'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn-success'>
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link to='/register' className='btn-default'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
