gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger);



Draggable.create(".flair--2", {
  bounds: ".container",
  inertia: true
});

gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((section, index) => {
      gsap.to(section, {
        y: (index % 2 === 0) ? "100%" : "-100%", // Déplacement de 100% vers le bas ou le haut
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Permet d'ajuster l'intensité du défilement
        },
      });
    });


   

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".cardsommaire", {
      scrollTrigger: {
        trigger: ".cardsommaire", // L'élément déclencheur
        start: "top top", // Point de départ de l'animation
        end: "bottom 200px", // Point de fin de l'animation
        pin: true, // Fixe l'élément lorsqu'il atteint le point de fin
        pinSpacing: false // Ne pas ajouter d'espace supplémentaire lorsque l'élément est fixé
      }
    });