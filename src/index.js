// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Navbar from './Navbar.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio, PortfolioAccueil } from './portfolio.jsx'; // Importez Portfolio et PortfolioAccueil depuis le fichier portfolio.jsx

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Assurez-vous d'ajouter la Navbar ici */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
