const banner = document.querySelector('.banner');
const bannerImages = Array.from(document.querySelectorAll('.banner-img'));

let currentIndex = 0;

// Función para mostrar la siguiente imagen del banner
function showNextImage() {
  bannerImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % bannerImages.length;
  bannerImages[currentIndex].classList.add('active');
}

// Cambiar automáticamente las imágenes cada 3 segundos
setInterval(showNextImage, 5000);