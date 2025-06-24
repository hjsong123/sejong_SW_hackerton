import React from 'react';
import logo from './logo.svg';
import Auth from './component/Auth';
import Main from './component/Main';
import Login from './component/Login';
import './App.css';
import './CSS/Main.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/main' element={<Main></Main>}></Route>
    </Routes>
  );
}

export default App;
