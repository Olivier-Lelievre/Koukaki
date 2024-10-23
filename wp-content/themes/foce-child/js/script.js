// BURGER
const burger = document.querySelector('#site-navigation ul button');
const menu = document.querySelector('.burger-open');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll(".link-burger").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
}));



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
  

// NUAGES

// Ajout d'un écouteur d'événement qui détecte le scroll de la fenêtre.
window.addEventListener('scroll', function () {

  // Selection des éléments HTML avec les classes
  const bigCloud = document.querySelector('.clouds-big');
  const littleCloud = document.querySelector('.clouds-little');
  const placeSection = document.querySelector('#place');

  // Récupère la position verticale de l'élément avec l'id 'place' par rapport au haut de la page.
  const sectionOffsetTop = placeSection.offsetTop;
  // Obtenez la position actuelle de défilement de la fenêtre.
  const scrollPosition = window.scrollY;

  // Vérifie si la position verticale de défilement a atteint ou est supérieur à la position de l'élément avec l'id 'place'
  if (scrollPosition >= sectionOffsetTop) {

  // Calculez la valeur de parallaxe, qui est la différence entre la position de défilement et le haut relatif, divisée par 4.
      
      //Cette différence représente la distance parcourue dans le défilement par rapport à l'élément #place.
      //La valeur résultante est ensuite divisée par 4 pour ralentir l'effet de défilement des nuages.
      //Si cette division n'était pas présente, les nuages se déplaceraient trop rapidement.
      const parallaxValue = (scrollPosition - sectionOffsetTop) / 4;

      //Cette fonction renvoie la plus petite valeur entre parallaxValue (calculé précédemment) et 300.
      //Le déplacement des nuages sera limité à 300 pixels.
      const translationX = Math.min(parallaxValue, 300);

      //Cette ligne de code déplace horizontalement l'élément bigCloud vers la gauche de "translationX" pixels.
      bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
      littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
      //littleCloud.style.left = (scrollPosition - sectionOffsetTop) * 1 + 'px';
      //littleCloud.classList.add("animCloud");
      //littleCloud.style.transform = `translateX(-${(scrollPosition - sectionOffsetTop) * 0.5}px)`;
    }
});



    
   /* const movingImage = document.querySelector(".clouds .clouds-little");
        
    // Valeurs limites pour le défilement
    const scrollMin = 900;  // Position min de défilement pour commencer à bouger l'image
    const scrollMax = 2300;  // Position max de défilement pour arrêter de bouger l'image

    // Fonction de gestion du défilement
    function handleScroll() {
        const scrollPosition = window.scrollY;

        // Vérifier si la position de défilement est entre scrollMin et scrollMax
        if (scrollPosition >= scrollMin && scrollPosition <= scrollMax) {
            // Déplacer l'image en fonction du défilement
            movingImage.style.left = (scrollPosition - scrollMin) * 1 + 'px';
        }
    }

    // Écoute l'événement de défilement
    window.addEventListener('scroll', handleScroll); */

