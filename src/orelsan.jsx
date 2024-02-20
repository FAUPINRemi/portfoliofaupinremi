import React, { useState } from 'react';
import Bganimate from './BGanimate.jsx';
import Navbar from './Navbar.jsx';
import './portfolio.css';
import Footer from './Footer.jsx';



function Orelsan() {
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
      <h1 className='titreportfolio2'>Site web sur l'artiste Orelsan</h1>
      
      <div className='iframeweb'>
      <iframe src="https://remiforelsanwebsite.000webhostapp.com" width="80%" height="700"></iframe>
    </div>
    <p className='desciptioniframe'>Site web développpé en 2022 dans le cardre d'un projet de fin de semestre (Premier semestre). <br />Techno utilisé : HTML5 / CSS3 / Python</p>
    </div>

   <div className='buttondiv'> <a href="https://remiforelsanwebsite.000webhostapp.com" target="_blank"><button className='buttoniframe'>Voir le site</button></a></div>
    <Footer></Footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
  AOS.init();
</script>
    </>
  );
}

export {Orelsan };
