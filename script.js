const carousel = document.querySelector('.carousel');
const icons = document.querySelectorAll('.carousel-icon');
let currentIndex = 0;
const iconCount = icons.length;

function updateIcons() {
  icons.forEach(icon => icon.classList.remove('active'));

  icons[currentIndex].classList.add('active');

  const offset = -currentIndex * 80;
  carousel.style.transform = `translateX(${offset}px)`;
}

function moveCarousel() {
  updateIcons();
  
  currentIndex++;

  if (currentIndex >= iconCount) {
    currentIndex = 0;
  }
}

setInterval(moveCarousel, 1000);

updateIcons();
