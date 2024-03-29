import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import $ from 'jquery';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScriptNavbar from './ScriptNavbar.js';
import Bganimate from './BGanimate.jsx';
gsap.registerPlugin(Draggable);



function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const squareRef = useRef(null);
  const squareRef2= useRef(null);
  const squareRef3= useRef(null);
  const squareRef4= useRef(null);
  const squareRef5= useRef(null);
  const squareRef6= useRef(null);
  const squareRef7= useRef(null);
    const containerRef = useRef(null);


    function darklight() {
      setDarkMode((prevMode) => !prevMode);
      var element = document.body;
      element.classList.toggle("whitemode");
      var logo = document.getElementById('imglogo');

      if (logo.src.match("logoportfolioblancsansfond.png")) {
        logo.src = "./img/logoportfolionoirsansfond.png";
      } else {
        logo.src = "./img/logoportfolioblancsansfond.png";
      }
    }
  useEffect(() => {
    Draggable.create(squareRef.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef2.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef2.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef3.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef3.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef4.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      edgeResistance:0.5,
      dragResistance : 0.2,
      onDragEnd: function() {
        gsap.to(squareRef4.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
   
    Draggable.create(squareRef5.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      onDragEnd: function() {
        gsap.to(squareRef5.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });

    Draggable.create(squareRef6.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      onDragEnd: function() {
        gsap.to(squareRef6.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });

    Draggable.create(squareRef7.current, { 
      type: 'x,y', 
      bounds: containerRef.current,
      onDragEnd: function() {
        gsap.to(squareRef7.current, { 
          x: "+=" + this.xVelocity * 30, 
          y: "+=" + this.yVelocity * 30,
          duration: 6, 
        
        });
      }
    });
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

// Check if the video has been played before
if (!localStorage.getItem('videoPlayed')) {
  // Afficher la vidéo en plein écran
  videoContainer.style.display = 'block';

  // Démarrer l'animation après le délai spécifié
  setTimeout(function () {
    requestAnimationFrame(masquerVideo);
  }, tempsAvantMasquage);

  // Set the flag in localStorage
  localStorage.setItem('videoPlayed', 'true');
}

// Clear the localStorage when the page is closed
window.onunload = function() {
  localStorage.removeItem('videoPlayed');
};

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

 
  }, []);

 
  return (
    <>
  <Bganimate></Bganimate>
 
  

    <div id="video-container">
      <video id="fullscreen-video" autoPlay muted loop>
          <source src="./video/logo_remifaupin_animation.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
      </video>
  </div>
   <Navbar></Navbar>

        
    <div className="titreprincp1" data-aos="fade-up" data-aos-duration="1000">
    <h1 className="titre1">Rémi</h1>
</div>
<div className="titreprincp1" data-aos="fade-up" data-aos-duration="3000">
    <h1 className="titre2">FAUPIN</h1>
</div>
<div className="titreprincp1" data-aos="fade-up" data-aos-duration="1000">
  <h1 className="titre3">Étudiant BUT</h1>
</div>
<div className="titreprincp1" data-aos="fade-up" data-aos-duration="1000">
  <h1 className="titre4">Métiers du Multimédia et de l'Internet</h1>
</div>

<div className="rond" style={{ width: '40.563em', height: '40.563em', flexShrink: 0 }} ></div>
<div className="titreS"><h3 className="titresommaire">Sommaire</h3></div>
<div className="sommaire">
  <div className="cardsommaire" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><div className="contentcardsom" ><h4 className="titrecardsom">A propos</h4><h4 className="lignesom">_______________________</h4><h5 className="soustitrecardsom">Qui suis-je ?</h5><h5 className="soustitrecardsom">Mes compétences</h5></div></div>
  <div className="cardsommaire" data-aos="fade-up" data-aos-duration="1000"><div className="contentcardsom"><h4 className="titrecardsom">Portfolio</h4><h4 className="lignesom">_______________________</h4><h5 className="soustitrecardsom2">Projets Web</h5><h5 className="soustitrecardsom2">Projets 3D</h5><h5 className="soustitrecardsom2">Projets Design</h5></div></div>
  <div className="cardsommaire" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><div className="contentcardsom"><h4 className="titrecardsom">A propos</h4><h4 className="lignesom">_______________________</h4><h5 className="soustitrecardsom2">Telephone</h5><h5 className="soustitrecardsom2">Email</h5><h5 className="soustitrecardsom2">GitHub</h5><h5 className="soustitrecardsom2">Linkedln</h5></div></div>
  
</div>

<div id="sectionapropos"></div>
<div className="blockcontentabout1"></div>
<img className="imgaboutme" src= "./img/IMG_20230501_184608_551.png" alt="photo_faupin_rémi" data-aos="fade-up" data-aos-duration="2000" />
  <h1 className="titre1about" data-aos="fade-up" data-aos-duration="2000">Qui suis-je ?</h1>
  <p className="paragrapheabout" data-aos="fade-up" data-aos-duration="3000">Qui suis-je ? Bonjour je m’appelle Rémi Faupin, j’ai 19 ans. Je suis passionné par l'univers d'internet depuis mes 10 ans. Je suis actuellement dans une formation BUT MMI (Métiers du Multimédia et de l’Internet) dans la branche développement web et application.<br></br><br></br><br></br>Pour plus d’information vous pouvez accéder à mon CV en <a className="clickcv" href="#">cliquant ici</a></p>
 
<div className="petitT"><h3>Mes compétences :</h3></div>
<div className="titreDev"><h3 className="titresommaire">Dev Web</h3></div>
<div id="root" data-aos="fade-up" data-aos-duration="1000"> <div ref={containerRef} className="container" style={{ display: 'flex', justifyContent: 'center', width: '80%', height: '700px', borderRadius:'18px 18px 18px 18px', border: "6px solid #ffffff", }}>
      
      <div ref={squareRef} className='cardcontainer' style={{ width: '200px', height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>html</p>
        </div>
        <div ref={squareRef2} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>javascript</p>
        </div>
        <div ref={squareRef3} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>css</p>
        </div>
        <div ref={squareRef4} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>react</p>
        </div>
        <div ref={squareRef5} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>gsap</p>
        </div>
        <div ref={squareRef6} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>angular</p>
        </div>
        <div ref={squareRef7} className='cardcontainer' style={{ width: '200px',height: '200px',background: 'rgba( 82, 81, 81, 0.5 )',boxShadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter: 'blur( 13.5px )',borderRadius: '10px',border:' 1px solid rgba( 255, 255, 255, 0.18 )', textAlign:'center',justifyContent:'center', display:'flex',alignItems:'center',}}>
        <p className='textcard'>threejs / webGL</p>
        </div>
    </div><div>
</div></div>
<div className="petitT2"><h3>Logiciels maitrisés :</h3></div>
<div className="rond2" style={{ width: '40.563em', height: '40.563em', flexShrink: 0 }} ></div>
<div className="conteneur-logo">
  <img src="./img/iconfigma.png" alt="Logo" className="iconlogi" id="iconlogi"></img>
  <img src="./img/iconphotoshop.png" alt="Logo" className="iconlogi" id="iconlogi"></img>
  <img src="./img/iconindesign.png" alt="Logo" className="iconlogi" id="iconlogi"></img>
  <img src="./img/iconillustrator.png" alt="Logo" className="iconlogi" id="iconlogi"></img>
  <img src="./img/Visual_Studio_Code_1.35_icon.svg.png" alt="Logo" className="iconlogi" id="iconlogi"></img>
</div>








<Footer></Footer>
<script>
  AOS.init();
</script>
    <script type="module" src="./src/main.jsx"></script>
    <script src="./script/scriptnavbar.js"></script>
  <script src='./script/scriptgsap.js'></script>
<script src="https://unpkg.com/gsap@3.9.1/dist/gsap.min.js"></script>
<script src="https://unpkg.com/scrolltrigger-scss@3.7.1/dist/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>
    <script type="module" src="/src/draggeblecontainer.jsx"></script>
 

    </>
  );


}

  



export default App;
