import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './component/Auth';
import Login from './component/Login';
import MajorInfo from './component/Student/MajorInfo';
import Survey from './component/Student/Survey';
import Home from './component/Student/Home';
import Choice from './component/Student/Choice';

import './App.css';
import './CSS/Survey.css';
import './CSS/Home.css';
import './CSS/Choice.css';

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/Home" element={<Home/>} />
      <Route path="/student/choice" element={<Choice/>} />
      <Route path="/student/survey:id" element={<Survey />} />
      <Route path='/student/major-info' element={<MajorInfo />} />
    </Routes>
  );
}

export default App;
