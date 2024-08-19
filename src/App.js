import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects';
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:id" component={ProjectDetailsPage} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
