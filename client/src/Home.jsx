import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Hello you! (◕ᴗ◕✿)</h1>
      <div className='btn-container'>
        <Link to='/profile' className='btn-logout'>
          Profile
        </Link>
        <Link to='/users' className='btn-primary'>
          View Messages
        </Link>
        <Link to='/login' className='btn-logout'>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Home;
