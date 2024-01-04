import React, { useState } from 'react';
import Navbar from './Navbar.jsx';


function PortfolioAccueil() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Accueil</h1>
      {/* Contenu de la page d'accueil */}
    </div>
  );
}

function Portfolio() {
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

  return (
    <div>
      <h1>Portfolio</h1>
      {/* Contenu de la page du portfolio */}
    </div>
  );
}

export { PortfolioAccueil, Portfolio };
