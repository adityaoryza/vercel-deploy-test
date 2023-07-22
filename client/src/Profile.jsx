import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import imageUrl from './images/img 4.jpg';

const Profile = () => {
  return (
    <div className='container'>
      <h1 className='header'>⸙ About me ⸙</h1>
      <img src={imageUrl} alt='Profile' className='picture' />
      <h2 className='h2'>Nadia Aulia Haq / 2100016061</h2>
      <p className='description'>
        Hi! I am Nadia and i'm an information systems student.
        <br />
        This site is my final project assignment for a Web Technology course.
      </p>
      <Link to='/Home' className='back-button'>
        Back
      </Link>
    </div>
  );
};

export default Profile;
