// Carousel JS - Hero Background Image Slideshow
function initCarousel() {
  const heroImages = document.querySelectorAll('.hero-carousel-img');
  let currentImageIndex = 0;

  if (heroImages.length > 0) {
    setInterval(() => {
      heroImages[currentImageIndex].classList.remove('opacity-100');
      heroImages[currentImageIndex].classList.add('opacity-0');
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroImages[currentImageIndex].classList.remove('opacity-0');
      heroImages[currentImageIndex].classList.add('opacity-100');
    }, 3000);
  }
}
