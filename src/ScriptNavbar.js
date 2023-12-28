import React, { useEffect } from 'react';
import $ from 'jquery';

function ScriptNavbar() {
  useEffect(() => {
    // Déclaration des variables
    var tempsAvantMasquage = 5000; // 5000 millisecondes = 5 secondes
    var tempsDeMasquageProgressif = 3000; // 3000 millisecondes = 3 secondes
    var videoContainer = document.getElementById('video-container');
    var fullscreenVideo = document.getElementById('fullscreen-video');
    var startTime;

    // Fonction pour masquer la vidéo progressivement
    function masquerVideo(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      var progress = timestamp - startTime;
      var opacity = 1 - Math.min(progress / tempsDeMasquageProgressif, 1);

      fullscreenVideo.style.opacity = opacity;

      if (progress < tempsDeMasquageProgressif) {
        requestAnimationFrame(masquerVideo);
      } else {
        videoContainer.style.display = 'none';
      }
    }

    // Afficher la vidéo en plein écran
    videoContainer.style.display = 'block';

    // Démarrer l'animation après le délai spécifié
    setTimeout(function () {
      requestAnimationFrame(masquerVideo);
    }, tempsAvantMasquage);

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
      var element = document.body;
      element.classList.toggle("whitemode");
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

  return null; // Puisque c'est uniquement pour les effets secondaires, le composant ne rend rien
}

export default ScriptNavbar;
