import React, { useState } from 'react';
import Bganimate from './BGanimate.jsx';
import Navbar from './Navbar.jsx';
import './portfolio.css';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';


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
   
    <div>
      <h1 className='titreportfolio'data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Portfolio</h1>
      <h1 className='titreportfolio'>Projets Web</h1>
      <div className='divcontainerportfolio'>
      <div><Link to="/orelsan"> <figure>
    <img className='imgorelsite' src="./img/siteorelsan.png" alt="Siteweborelsan"></img>
  <figcaption>Site web Orelsan</figcaption>
    </figure></Link></div> 
    <div><Link to="/webdocBrieHappy"><figure>
    <img className='imgorelsite' src="./img/briehappy.png" alt="SiteBrieHappy"></img>
    <figcaption>Webdoc BrieHappy</figcaption>
    </figure></Link></div>
   <div><Link to="/aviationtp"><figure>
    <img className='imgorelsite' src="./img/aviation.png" alt="Aviation API"></img>
    <figcaption>Aviation</figcaption>
    </figure></Link></div>
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

export {Portfolio };
