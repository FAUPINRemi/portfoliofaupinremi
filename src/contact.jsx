import React, { useState } from 'react';
import Bganimate from './BGanimate.jsx';
import Navbar from './Navbar.jsx';
import './contact.css';
import Footer from './Footer.jsx';



function Contact() {
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
      <h1 className='titreportfolio'data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Me contacter</h1>
      <div className='container'>
        <div className='divcontact'>
           <img className='logoinfo' src='./img/linkedinblanc.png' alt='logo_linkDin'></img>
           <a className='link'><p>Rémi Faupin</p></a>
        </div>
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

export { Contact};
