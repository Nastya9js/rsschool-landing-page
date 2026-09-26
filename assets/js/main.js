const burger = document.querySelector(".burger");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

burger.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");

  burger.setAttribute("aria-expanded", isOpen);

  burger.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");

    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open navigation menu");
  });
});

// Favorite coffee slider

const slides = document.querySelectorAll(".slider__slide");
const sliderControls = document.querySelectorAll(".slider__control");

const previousButton = document.querySelector(".slider__arrow--left");
const nextButton = document.querySelector(".slider__arrow--right");

let currentSlide = 0;

function showSlide(index) {
  // Remove active state from current slide
  slides[currentSlide].classList.remove("slider__slide--active");
  sliderControls[currentSlide].classList.remove("slider__control--active");

  // Calculate new slide index
  currentSlide = index;

  // If we go past the last slide → return to first
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // If we go before first slide → go to last
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // Show new slide
  slides[currentSlide].classList.add("slider__slide--active");
  sliderControls[currentSlide].classList.add("slider__control--active");
}

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

previousButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});
