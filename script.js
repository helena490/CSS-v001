const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

document.querySelector('.prev-button-libros').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlidePosition();
});

document.querySelector('.next-button-libros').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
