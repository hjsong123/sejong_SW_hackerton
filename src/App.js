import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './component/Auth';
import Login from './component/Login';
import Survey from './component/Student/Survey';
import MajorInfo from './component/Student/MajorInfo';
import MainStd from './component/Student/MainStd';

import './App.css';
import './CSS/Main.css';
import './CSS/Survey.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/main" element={<MainStd />} />
      <Route path="/student/survey" element={<Survey />} />
      <Route path='/student/main' element={<MainStd />} /> */}
      <Route path='/student/major-info' element={<MajorInfo />} /> */}
    </Routes>
  );
}

export default App;
