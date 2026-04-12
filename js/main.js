// Main JS - Component Loader & Initializer
// Loads all HTML partials from /html/ folder and injects them into the page

async function loadComponent(url, containerId) {
  try {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Container #${containerId} not found, skipping ${url}`);
      return;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();

    // Use a temporary div and move child nodes — this triggers MutationObserver
    // more reliably than innerHTML for Tailwind CDN processing
    const temp = document.createElement('div');
    temp.innerHTML = html;
    container.innerHTML = '';
    while (temp.firstChild) {
      container.appendChild(temp.firstChild);
    }
  } catch (err) {
    console.error(`Failed to load component: ${url}`, err);
  }
}

// FAQ Accordion for services.html (loaded into #services-container)
function initFaqAccordionHome() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });
}

async function initApp() {
  // Step 1: Load top-level components first
  await loadComponent('html/header.html', 'header-container');
  await loadComponent('html/hero.html', 'hero-container');

  // Step 2: Load nested components (inside hero.html)
  await loadComponent('html/quote-form.html', 'quote-form-container');
  await loadComponent('html/feature-bar.html', 'feature-bar-container');

  // Step 3: Load remaining sections
  await loadComponent('html/about.html', 'about-container');
  await loadComponent('html/services.html', 'services-container');
  await loadComponent('html/footer.html', 'footer-container');

  // Step 4: Initialize all JS modules after HTML is loaded
  initHeader();
  initCarousel();
  initQuoteForm();
  initFeatureBar();

  // Step 4b: Initialize FAQ accordion (from services.html)
  initFaqAccordionHome();

  // Step 5: Force Tailwind to re-scan all new DOM elements
  // Small delay ensures all DOM mutations are processed
  setTimeout(() => {
    if (window.tailwind && window.tailwind.refresh) {
      window.tailwind.refresh();
    }
    // Fallback: trigger a resize to force layout recalculation
    window.dispatchEvent(new Event('resize'));
  }, 100);
}

document.addEventListener('DOMContentLoaded', initApp);
