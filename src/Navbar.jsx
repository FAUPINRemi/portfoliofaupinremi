import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [logoSrc, setLogoSrc] = useState('./img/logoportfolioblancsansfond.png');

  function darklight() {
    setDarkMode((prevMode) => !prevMode);

    if (logoSrc === './img/logoportfolioblancsansfond.png') {
      setLogoSrc('./img/logoportfolionoirsansfond.png');
    } else {
      setLogoSrc('./img/logoportfolioblancsansfond.png');
    }
  }

  useEffect(() => {
    console.log('Navbar rendu !');

    // Gestion du menu de navigation
    const handleMenuClick = () => {
      const navUl = document.querySelector('nav ul');
      navUl.classList.toggle('showing');
    };

    document.querySelector('.menu-icon').addEventListener('click', handleMenuClick);

    // Changer la couleur de la barre de navigation en fonction du défilement
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Ajouter un gestionnaire d'événements aux liens ancrés pour le défilement
    const handleLinkClick = (event) => {
      event.preventDefault();

      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const currentPosition = window.scrollY;
        const distance = targetPosition - currentPosition;
        const speed = 15;

        function animateScroll() {
          currentPosition += distance / speed;
          window.scrollTo(0, currentPosition);

          if (currentPosition < targetPosition) {
            requestAnimationFrame(animateScroll);
          }
        }

        animateScroll();
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup des écouteurs d'événements lors du démontage du composant
    return () => {
      document.querySelector('.menu-icon').removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []); // Le tableau de dépendances vide assure que l'effet ne s'exécute qu'une fois lors du montage

  return (
    <div className={`wrapper ${isDarkMode ? 'whitemode' : ''}`}>
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
            <li>
              <Link to="/">
                <a href="index.js">
                  <img id="imglogo" src={logoSrc} alt="logo_RémiFaupin" />
                </a>
              </Link>
            </li>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
