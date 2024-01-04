import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css'; // Assurer l'importation des icônes Font Awesome
import './App.css'; // Importer votre fichier CSS
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  // Fonction pour basculer entre les modes sombre et clair
  function darklight() {
    setDarkMode((prevMode) => !prevMode);
    var logo = document.getElementById('imglogo');

    if (logo.src.match("logoportfolioblancsansfond.png")) {
      logo.src = "./public/img/logoportfolionoirsansfond.png";
    } else {
      logo.src = "./public/img/logoportfolioblancsansfond.png";
    }
  }

  useEffect(() => {
    console.log("Navbar rendu !");
    // Gestion du menu de navigation
    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
      });
    });

    // Changer la couleur de la barre de navigation en fonction du défilement
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    });

    // Ajouter un gestionnaire d'événements aux liens ancrés pour le défilement
    document.addEventListener("DOMContentLoaded", function () {
      var links = document.querySelectorAll('a[href^="#"]');

      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();

          var targetId = this.getAttribute("href").substring(1);
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
            var targetPosition = targetElement.offsetTop;
            var currentPosition = window.scrollY;
            var distance = targetPosition - currentPosition;
            var speed = 15;

            function animateScroll() {
              currentPosition += distance / speed;
              window.scrollTo(0, currentPosition);

              if (currentPosition < targetPosition) {
                requestAnimationFrame(animateScroll);
              }
            }

            animateScroll();
          }
        });
      });
    });

  }, []); // Le tableau de dépendances vide assure que l'effet ne s'exécute qu'une fois lors du montage

  return (
    <div className={`wrapper ${isDarkMode ? 'whitemode' : ''}`}>
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
            <a href="index.js"><img id="imglogo" src="./img/logoportfolioblancsansfond.png" alt="logo_RémiFaupin"></img></a>
          </div>
          <div className="menu">
            <ul>
            <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
            <div className="toggleswitch">
              <label className="switch">
                <input type="checkbox" onClick={darklight}></input>
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
