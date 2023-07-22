import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://vercel-api-beta-weld.vercel.app/users')
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete('https://vercel-api-beta-weld.vercel.app/delete/' + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    navigate('/Home');
  };

  return (
    <div className='users-container'>
      <div className='users-table'>
        <h1>Add your notes! ✿❀✿❀</h1>

        <div className='back-container'>
          <button className='back-button' onClick={handleBack}>
            Back
          </button>
        </div>

        <Link to='/create' className='add-button'>
          New Note
        </Link>
        <table className='table'>
          <thead>
            <tr className='table-row'>
              <th>Name</th>
              <th>For Who</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.forWho}</td>
                <td>{user.message}</td>
                <td>
                  <div className='button-container'>
                    <Link to={`/update/${user._id}`} className='btn-success'>
                      edit
                    </Link>
                    <button
                      className='btn-danger'
                      onClick={() => handleDelete(user._id)}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
