import React, { useState } from 'react';
import Bganimate from './BGanimate.jsx';
import Navbar from './Navbar.jsx';
import './portfolio.css';
import Footer from './Footer.jsx';



function Aviationapi() {
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

    <div>
      <h1 className='titreportfolio2'>TP gestion d'API</h1>
      
      <div className='iframeweb'>
      <iframe src="https://aviationapi.000webhostapp.com/" width="80%" height="700"></iframe>
    </div>
    <p className='desciptioniframe'>Site réalisé en 2024 dans le cardre d'un TP avec de la récupération d'API avec PHP.<br />Techno utilisé : PHP / Bootstrap / Json <br />Pour accéder au liste des pilotes et vols il vous faut des identifiants. <br />Identifiant : admin <br />Mot de passe : iutMeaux</p>
    </div>

   <div className='buttondiv'> <a href="https://aviationapi.000webhostapp.com/" target="_blank"><button className='buttoniframe'>Voir le site</button></a></div>
    <Footer></Footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
  AOS.init();
</script>
    </>
  );
}

export {Aviationapi };
