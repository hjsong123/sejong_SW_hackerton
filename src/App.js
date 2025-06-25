import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './component/Auth';
import Login from './component/Login';
import MajorInfo from './component/Student/MajorInfo';
import Survey from './component/Student/Survey';
import Home from './component/Student/Home';

import './App.css';
import './CSS/Survey.css';
import './CSS/Home.css';

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/main" element={<Home/>} />
      <Route path="/student/survey" element={<Survey />} />
      <Route path='/student/major-info' element={<MajorInfo />} />
    </Routes>
  );
}

export default App;
