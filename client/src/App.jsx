import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Users from './crud/components/Users';
import CreateUser from './crud/components/CreateUser';
import UpdateUser from './crud/components/UpdateUser';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
