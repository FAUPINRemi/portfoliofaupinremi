import React, { useState } from 'react';
import Bganimate from './BGanimate.jsx';
import Navbar from './Navbar.jsx';
import './portfolio.css';
import Footer from './Footer.jsx';

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
    <Bganimate></Bganimate>
   <Navbar></Navbar>
   <br></br>
    <div>
      <h1 className='titreportfolio'data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Portfolio</h1>
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

    <Footer></Footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
  AOS.init();
</script>
    </>
  );
}

export { PortfolioAccueil, Portfolio };
