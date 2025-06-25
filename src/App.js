import React from 'react';
import logo from './logo.svg';
import Auth from './component/Auth';
import Login from './component/Login';
import Survey from './component/Survey';
import Splash from './component/Splash';

import './App.css';
import './CSS/Main.css';
import './CSS/Survey.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash></Splash>}></Route>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/survey' element={<Survey></Survey>}></Route>
    </Routes>
  );
}

export default App;
