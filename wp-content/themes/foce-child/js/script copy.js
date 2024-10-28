// BURGER
const menu = document.querySelector('.burger-open');
const burger = document.querySelector('#site-navigation ul button');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('crossBurger')
});

document.querySelectorAll(".link-burger").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  burger.classList.remove('crossBurger')
}));



// ANIMATION TITRES H2
/*Utilise l'API IntersectionObserver pour observer le moment
où des éléments de la page entrent ou sortent de la fenêtre.

Le code observe toutes les spans.
Lorsqu'un de ces éléments entre dans le viewport, la classe CSS animation-titles est ajoutée, pour lancer l'animation.
Lorsque l'élément sort du viewport, cette classe est supprimée, pour arrêter l'animation.
*/


/*Créer un nouvel observateur avec IntersectionObserver,
qui prend une fonction de rappel (callback) comme argument.
Cette fonction de rappel reçoit un tableau d'entrées (entries),
qui contient des objets représentant chaque élément observé (span)
et sa relation avec la fenêtre d'affichage (viewport).*/
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      /* entry.isIntersecting est un booléen qui indique si l'élément est visible dans le viewport.*/
      if (entry.isIntersecting) {
        /*  Si l'élément est visible (true), on applique une classe CSS 'animation-titles' à l'élément. */
        entry.target.classList.add('animation-titles');
        /*  le return stoppe l'exécution de la fonction pour cette itération de la boucle forEach.
        Si entry.isIntersecting est false, le code passe directement à la ligne suivante.  */
        return;
      }
      /*  Si l'élément sort du champ de vision (donc entry.isIntersecting est false), la classe est supprimée  */
      entry.target.classList.remove('animation-titles');
    });
  });
  // Sélectionner les 3 spans
  const titles = document.querySelectorAll('span');
  // Observer toutes les span
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