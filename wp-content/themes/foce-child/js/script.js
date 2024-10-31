// BURGER

const menu = document.querySelector('.burger-open');
const burger = document.querySelector('#site-navigation ul button');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.classList.toggle('crossBurger')
});

document.querySelectorAll(".link-burger").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("open");
  burger.classList.remove('crossBurger')
}));

// ANIMATION TITRES H2

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation-titles');
        return;
      }
      entry.target.classList.remove('animation-titles');
    });
  });
  const titles = document.querySelectorAll('span');
  titles.forEach((element) => observer.observe(element));

// VIDEO / LOGO

let parallax = document.querySelector("#logo-parallax");

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  if ( offset < parallax.offsetParent.offsetTop + parallax.offsetTop) {
  parallax.style.transform = "translateY(" + offset + "px)";
  }
});

// NUAGES

window.addEventListener('scroll', function () {
  const bigCloud = document.querySelector('.clouds__big');
  const littleCloud = document.querySelector('.clouds__little');
  const placeSection = document.querySelector('#place');

  const sectionOffsetTop = placeSection.offsetTop;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= sectionOffsetTop) {
      const parallaxValue = (scrollPosition - sectionOffsetTop) / 4;
      const translationX = Math.min(parallaxValue, 300);
      bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
      littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
    }
});

// SWIPER

const swiper = new Swiper(".mySwiper", {
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
    slideShadows: false,
  },
});