// Carousel JS - Background Slideshow & Services Slider
function initCarousel() {
  // Hero Background Carousel
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

  // Services Slider Logic
  const track = document.getElementById('services-carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dots = document.querySelectorAll('#carousel-dots button');

  if (track && prevBtn && nextBtn) {
    const scrollAmount = () => {
      // Get the width of ONE card plus the gap between cards so it slides 1 at a time
      const card = track.firstElementChild;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      return card ? card.offsetWidth + gap : track.clientWidth;
    };
    
    // Calculate total pages (approximated for dots)
    const updateDots = () => {
      if(!dots.length) return;
      const scrollRatio = track.scrollLeft / (track.scrollWidth - track.clientWidth);
      const activeIndex = Math.min(
        Math.max(Math.round(scrollRatio * (dots.length - 1)), 0), 
        dots.length - 1
      );
      
      dots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('bg-primary');
          dot.classList.remove('bg-gray-200');
        } else {
          dot.classList.remove('bg-primary');
          dot.classList.add('bg-gray-200');
        }
      });
    };

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });

    track.addEventListener('scroll', () => {
      // Debounce slightly for performance
      requestAnimationFrame(updateDots);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const targetScroll = (track.scrollWidth - track.clientWidth) * (index / (dots.length - 1));
        track.scrollTo({ left: targetScroll, behavior: 'smooth' });
      });
    });

    // Initialize dots state
    updateDots();

    // Auto-walk logic
    let autoWalkInterval;
    const startAutoWalk = () => {
      autoWalkInterval = setInterval(() => {
        let maxScroll = track.scrollWidth - track.clientWidth;
        // If we've reached the very end of the scroll width, loop back to start
        if (track.scrollLeft >= maxScroll - 10) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise keep pushing right
          track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        }
      }, 3500); // 3.5 seconds slide delay
    };

    const stopAutoWalk = () => {
      clearInterval(autoWalkInterval);
    };

    // Begin auto-walking on load
    startAutoWalk();

    // Pause the auto-walk whenever the user interacts with or hovers over the cards
    track.addEventListener('mouseenter', stopAutoWalk);
    track.addEventListener('mouseleave', startAutoWalk);
    track.addEventListener('touchstart', stopAutoWalk);
    track.addEventListener('touchend', startAutoWalk);
  }
}
