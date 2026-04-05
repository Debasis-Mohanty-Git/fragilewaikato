// Header JS - Mobile Menu Toggle, Accordion & Dynamic Link Resolution
function initHeader() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!mobileMenuBtn || !mobileMenuPanel) return;

  // ── Resolve data-page links ────────────────────────────────
  resolveNavLinks();

  // ── Mobile Menu Toggle ──────────────────────────────────
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenuPanel.classList.contains('hidden');
    if (isHidden) {
      mobileMenuPanel.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      closeMobileMenu();
    }
  });

  function closeMobileMenu() {
    mobileMenuPanel.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    // Close all accordions when menu closes
    document.querySelectorAll('.mobile-accordion.is-open').forEach(acc => {
      acc.classList.remove('is-open');
    });
  }

  // Close mobile menu when clicking a non-accordion link
  mobileMenuPanel.querySelectorAll('.mobile-nav-link:not(.mobile-accordion-trigger), .mobile-sub-link').forEach(link => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  // ── Mobile Accordion Toggle ─────────────────────────────
  document.querySelectorAll('.mobile-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const accordion = trigger.closest('.mobile-accordion');
      const isOpen = accordion.classList.contains('is-open');

      // Close all other accordions first
      document.querySelectorAll('.mobile-accordion.is-open').forEach(other => {
        if (other !== accordion) other.classList.remove('is-open');
      });

      // Toggle current
      accordion.classList.toggle('is-open', !isOpen);
    });
  });

  // ── Close mobile menu on resize to desktop ──────────────
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      closeMobileMenu();
    }
  });
}

// Resolves data-page attributes to correct relative href paths
// Works from both root (index.html) and subpages (/pages/*.html)
function resolveNavLinks() {
  const isInSubpage = window.location.pathname.includes('/pages/');
  const prefix = isInSubpage ? '../' : '';

  // Resolve Logo link
  const logoLink = document.getElementById('logo-link');
  if (logoLink) logoLink.href = prefix + 'index.html';

  // Resolve all [data-page] links
  document.querySelectorAll('[data-page]').forEach(link => {
    const page = link.getAttribute('data-page');
    if (!page) return;
    link.href = prefix + page;
  });
}
