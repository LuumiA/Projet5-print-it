const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let currentSlideIndex = 0;
const dotsContainer = document.querySelector(".dots");
const image = document.querySelector(".banner-img");
const title = document.querySelector("#banner > p");

const displayDots = () => {
  if (dotsContainer) dotsContainer.innerHTML = ""; //On s'assure que le dots continer est vide au depart
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer?.appendChild(dot);
    if (currentSlideIndex === i) {
      dot.classList.add("dot_selected");
    }
  }
};

displayDots();

const tabDots = document.querySelectorAll(".dots > .dot");

const clickRight = () => {
  if (tabDots.length > 0) {
    tabDots[currentSlideIndex].classList.remove("dot_selected");
    currentSlideIndex++; //On incremente pour bouger vers la droite
    if (currentSlideIndex > slides.length - 1) {
      currentSlideIndex = 0;
    }
    tabDots[currentSlideIndex].classList.add("dot_selected");
    image &&
      (image.src =
        "./assets/images/slideshow/" + slides[currentSlideIndex].image);
    title && (title.innerHTML = slides[currentSlideIndex].tagLine);
  } else {
    console.error("Pas de slides");
  }
};

const clickLeft = () => {
  if (tabDots.length > 0) {
    tabDots[currentSlideIndex].classList.remove("dot_selected");
    currentSlideIndex--; // On décrémente pour bouger vers la gauche
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    tabDots[currentSlideIndex].classList.add("dot_selected");
    image &&
      (image.src =
        "./assets/images/slideshow/" + slides[currentSlideIndex].image);
    title && (title.innerHTML = slides[currentSlideIndex].tagLine);
  } else {
    console.error("Pas de slides");
  }
};

arrowRight?.addEventListener("click", clickRight);
arrowLeft?.addEventListener("click", clickLeft);
