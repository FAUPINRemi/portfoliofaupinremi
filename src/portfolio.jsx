import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './portfolio.css';

function PortfolioAccueil() {
  return (
    <div>
    
     
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
   <Navbar></Navbar>
   <br></br>
    <div>
      <h1 className='titreportfolio'>Portfolio</h1>
      <div className='divcontainerportfolio'>
      <figure>
    <img className='imgorelsite' src="./img/siteorelsan.png" alt="Siteweborelsan"></img>
    <figcaption>Site web Orelsan</figcaption>
    </figure>
    <figure>
    <img className='imgorelsite' src="./img/acf2lsite.png" alt="Sitewebacf2l"></img>
    <figcaption>Site web ACF2L</figcaption>
    </figure>
    <figure>
    <img className='imgorelsite' src="./img/siteorelsan.png" alt="Mountains"></img>
    <figcaption>Site web Orelsan</figcaption>
    </figure>
    </div>
    </div>
    </>
  );
}

export { PortfolioAccueil, Portfolio };
