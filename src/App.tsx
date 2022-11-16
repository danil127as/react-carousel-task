import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Footer />
    </Router>
  );
}

export default App