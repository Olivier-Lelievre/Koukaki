// ANIMATION TITRES H2

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Vérifie quel élément est observé et applique une classe différente en fonction
        if (entry.target.classList.contains('title-delay-1')) {
          entry.target.classList.add('animation-titles', 'delay-1');
        } else if (entry.target.classList.contains('title-delay-2')) {
          entry.target.classList.add('animation-titles', 'delay-2');
        } else {
          entry.target.classList.add('animation-titles');
        }
      } else {
        entry.target.classList.remove('animation-titles', 'delay-1', 'delay-2');
      }
    });
  }, {
    rootMargin: '0px 0px 50px 0px' // Modifie la zone du viewport pour déclencher l'animation avant que l'élément ne touche le bord inférieur
  });
  
  // Sélectionner tous les éléments .title (les 3 spans)
  const titles = document.querySelectorAll('.title');
  
  // Observer tous les éléments .title
  titles.forEach((element) => observer.observe(element));
  



  // SWIPER
  

    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
