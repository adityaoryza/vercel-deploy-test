import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateUser.css';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [forWho, setForWho] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://vercel-api-beta-weld.vercel.app/getUser/' + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setForWho(result.data.forWho);
        setMessage(result.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put('https://vercel-api-beta-weld.vercel.app/update/' + id, {
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
    <div className='update-container'>
      <div className='update-form'>
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              placeholder='Enter name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>For Who</label>
            <input
              type='text'
              placeholder='Enter for who'
              className='form-control'
              value={forWho}
              onChange={(e) => setForWho(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Note</label>
            <input
              type='text'
              placeholder='Enter message'
              className='form-control'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className='btn-update'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
