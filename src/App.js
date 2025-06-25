import React from 'react';
import logo from './logo.svg';
import Auth from './component/Auth';
import Login from './component/Login';
import Survey from './component/Survey';
import Home from './component/Home';

import './App.css';
import './CSS/Survey.css';
import './CSS/Home.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/survey' element={<Survey></Survey>}></Route>
    </Routes>
  );
}

export default App;
