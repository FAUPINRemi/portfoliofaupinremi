import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
function Portfolio() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Accueil</h1>
      {/* Contenu de la page d'accueil */}
    </div>
  );
}

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  function darklight() {
    setDarkMode((prevMode) => !prevMode);
    const element = document.body;
    element.classList.toggle("whitemode");
    const logo = document.getElementById('imglogo');

    if (logo.src.match("logoportfolioblancsansfond.png")) {
      logo.src = "./img/logoportfolionoirsansfond.png";
    } else {
      logo.src = "./img/logoportfolioblancsansfond.png";
    }
  }

}

export default Portfolio;
