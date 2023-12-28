$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

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

  document.addEventListener('DOMContentLoaded', function() {
    var tempsAvantMasquage = 5000; // 5000 millisecondes = 5 secondes
    var tempsDeMasquageProgressif = 3000; // 3000 millisecondes = 3 secondes
    var videoContainer = document.getElementById('video-container');
    var fullscreenVideo = document.getElementById('fullscreen-video');
    var startTime;

    // Afficher la vidéo en plein écran
    videoContainer.style.display = 'block';

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

    // Démarrer l'animation après le délai spécifié
    setTimeout(function() {
        requestAnimationFrame(masquerVideo);
    }, tempsAvantMasquage);
});

document.addEventListener("DOMContentLoaded", function() {
    // Récupérer tous les liens ancrés
    var links = document.querySelectorAll('a[href^="#"]');

    // Ajouter un gestionnaire d'événements à chaque lien ancré
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Empêcher le comportement de lien par défaut
        event.preventDefault();

        // Récupérer la cible de l'ancre
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);

        // Faire défiler vers la cible avec une vitesse personnalisée
        if (targetElement) {
          var targetPosition = targetElement.offsetTop;
          var currentPosition = window.scrollY;
          var distance = targetPosition - currentPosition;
          var speed = 15; // Ajustez cette valeur pour contrôler la vitesse

          function animateScroll() {
            currentPosition += distance / speed;
            window.scrollTo(0, currentPosition);

            // Continuer l'animation jusqu'à ce que la cible soit atteinte
            if (currentPosition < targetPosition) {
              requestAnimationFrame(animateScroll);
            }
          }

          // Lancer l'animation
          animateScroll();
        }
      });
    });
  });

  