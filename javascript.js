let currentSlide = 0;
let slidesToShow = window.matchMedia("(min-width: 768px)").matches ? 2 : 1;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  // Fjern 'active' fra alle slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Vis de aktuelle slides baseret på 'slidesToShow'
  for (let i = 0; i < slidesToShow; i++) {
    const slideIndex = (index + i) % slides.length; // Loop rundt om slides
    slides[slideIndex].classList.add("active");
  }
}

function changeSlide(direction) {
  // Skift 'currentSlide' og loop ved behov
  currentSlide += direction * slidesToShow;

  // Hvis vi går før første slide
  if (currentSlide < 0) {
    currentSlide = slides.length - slidesToShow;
  }

  // Hvis vi går forbi sidste slide
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// Initial visning af slides
showSlide(currentSlide);

// Lyt til ændringer i skærmbredde for dynamisk opdatering
window.addEventListener("resize", () => {
  slidesToShow = window.matchMedia("(min-width: 768px)").matches ? 2 : 1;
  showSlide(currentSlide);
});
