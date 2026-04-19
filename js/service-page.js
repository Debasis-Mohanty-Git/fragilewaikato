// Service Page JS - Component Loader & FAQ Accordion
async function loadComponent(url, containerId) {
  try {
    const container = document.getElementById(containerId);
    if (!container) return;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
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

async function initServicePage() {
  // Load header and footer
  await loadComponent('../html/header.html', 'header-container');
  await loadComponent('../html/footer.html', 'footer-container');

  // Initialize header JS
  if (typeof initHeader === 'function') initHeader();

  // Fix header nav links (add ../ prefix for subpage context)
  // Not needed since links are relative to root

  // Tailwind refresh
  setTimeout(() => {
    if (window.tailwind && window.tailwind.refresh) {
      window.tailwind.refresh();
    }
    window.dispatchEvent(new Event('resize'));
  }, 100);

  // Initialize FAQ accordion
  initFaqAccordion();
}

function initFaqAccordion() {
  // Legacy pattern: .service-faq-item / .service-faq-trigger / .is-open
  document.querySelectorAll('.service-faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.service-faq-item');
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.service-faq-item.is-open').forEach(other => {
        if (other !== item) other.classList.remove('is-open');
      });

      item.classList.toggle('is-open', !isOpen);
    });
  });

  // New pattern: .faq-item / .open
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // If clicking a link inside the answer, don't toggle
      if (e.target.closest('a')) return;

      const parent = item.closest('.faq-accordion') || item.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all other open FAQ items within the same parent
      parent.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      // Toggle clicked item
      item.classList.toggle('open', !isOpen);
    });
  });
}

document.addEventListener('DOMContentLoaded', initServicePage);
