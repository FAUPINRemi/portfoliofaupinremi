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
import { Orelsan } from './orelsan.jsx';
import { WebdocBH } from './Webdoc.jsx';
import { Aviationapi } from './aviation.jsx';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orelsan" element={<Orelsan />} />
        <Route path="/webdocBrieHappy" element={<WebdocBH />} />
        <Route path="/aviationtp" element={<Aviationapi />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
