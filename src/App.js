import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects';
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage';
import Contact from './pages/Contact/Contact';
import AcProjects from './pages/AcProjects/AcProjects';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ac-projects" element={<AcProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
