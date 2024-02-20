import React, { useState } from 'react';
import Bganimate from './BGanimate.jsx';
import Navbar from './Navbar.jsx';
import './portfolio.css';
import Footer from './Footer.jsx';



function WebdocBH() {
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
      <h1 className='titreportfolio2'>Webdocumentaire sur l'événement Brie Happy</h1>
      
      <div className='iframeweb'>
      <iframe src="https://briehappy.000webhostapp.com/" width="80%" height="700"></iframe>
    </div>
    <p className='desciptioniframe'>Webdocumentaire réalisé et développé en groupe en 2023 dans le cardre d'un projet de fin de semestre (Premier semestre).<br />Techno utilisé : HTML5 / CSS3 / JavaScript / PHP</p>
    </div>

   <div className='buttondiv'> <a href="https://briehappy.000webhostapp.com/" target="_blank"><button className='buttoniframe'>Voir le site</button></a></div>
    <Footer></Footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
  AOS.init();
</script>
    </>
  );
}

export {WebdocBH };
