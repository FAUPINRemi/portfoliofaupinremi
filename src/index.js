// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Navbar from './Navbar.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio} from './portfolio.jsx'; // Importez Portfolio et PortfolioAccueil depuis le fichier port'folio.jsx
import { Contact } from './contact.jsx'; 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Assurez-vous d'ajouter la Navbar ici */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
