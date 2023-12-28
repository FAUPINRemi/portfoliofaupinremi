import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css'; // Importer votre fichier CSS
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css'; // Assurer l'importation des icônes Font Awesome

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
            <a href="index.html"><img id="imglogo" src="./public/img/logoportfolioblancsansfond.png" alt="logo_RémiFaupin"></img></a>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#sectionapropos" className="nav-link">A propos</a></li>
              <li><a href="#">Portoflio</a></li>
              <li><a href="#">Contact</a></li>
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
