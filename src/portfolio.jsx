import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './portfolio.css';

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
    <>
 
    <div>
      <h1>Portfolio</h1>
      <figure>
    <img className='imgorelsite' src="./img/siteorelsan.png" alt="Mountains"></img>
    <figcaption>Site web Orelsan</figcaption>
    </figure>
    </div>
    </>
  );
}

export { PortfolioAccueil, Portfolio };
