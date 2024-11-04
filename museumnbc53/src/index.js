import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeachersPage from './components/Pages/TeachersPage';
import HomePage from './components/Pages/HomePage';
import MobileHeader from './components/MobileHeader/MobileHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prepods" element={<TeachersPage />} />
      <Route path="/3D" element={<MobileHeader/>} />
    </Routes>
  </Router>
  </React.StrictMode>
);
