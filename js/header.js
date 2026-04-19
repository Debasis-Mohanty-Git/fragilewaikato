// Header JS - Sticky Scroll Logic & Mobile Menu Controls
function initHeader() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const siteHeader = document.getElementById('site-header');

  if (!mobileMenuBtn || !mobileMenuPanel) return;

  // ── Resolve data-page links (Crucial for multi-page structure) ──
  resolveNavLinks();

  // ── Mobile Menu Toggle ──────────────────────────────────────────
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenuPanel.classList.contains('hidden');
    if (isHidden) {
      mobileMenuPanel.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      // Force the mobile panel to white bg state
      siteHeader.classList.remove('header-transparent');
      siteHeader.classList.add('header-scrolled');
    } else {
      closeMobileMenu();
    }
  });

  function closeMobileMenu() {
    mobileMenuPanel.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    // Re-evaluate header state after closing menu
    handleScroll();
  }

  // Close mobile menu when clicking any link
  mobileMenuPanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  // ── Sticky Header Scroll Logic ──────────────────────────────────
  // Check if we're on the homepage (has a dark hero background)
  const isHomepage = !window.location.pathname.includes('/pages/');

  function handleScroll() {
    // Don't override if mobile menu is open
    if (!mobileMenuPanel.classList.contains('hidden')) return;

    if (!isHomepage || window.scrollY > 50) {
      // On subpages OR scrolled on homepage → solid white header
      siteHeader.classList.remove('header-transparent');
      siteHeader.classList.add('header-scrolled');
    } else {
      // At top of homepage → transparent header with white text
      siteHeader.classList.remove('header-scrolled');
      siteHeader.classList.add('header-transparent');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial check on load
  handleScroll();

  // ── Close mobile menu on resize to desktop ──────────────────────
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      closeMobileMenu();
    }
  });
}

/**
 * Resolves data-page attributes to correct relative href paths.
 * Ensures "pages/services.html" works from both the root and subdirectories.
 */
function resolveNavLinks() {
  const currentPath = window.location.pathname;
  const isInSubpage = currentPath.includes('/pages/');
  const prefix = isInSubpage ? '../' : '';

  // Resolve Logo link
  const logoLink = document.getElementById('logo-link');
  if (logoLink) logoLink.href = prefix + 'index.html';

  // Extract the filename and remove any extensions for robust matching
  const normalizedPath = currentPath.replace(/\/$/, "");
  const segments = normalizedPath.split('/');
  let currentFile = segments[segments.length - 1] || 'index';
  currentFile = currentFile.replace(/\.html$/, '');
  if (currentFile === '') currentFile = 'index';

  // Resolve all [data-page] links AND set active state
  document.querySelectorAll('[data-page]').forEach(link => {
    const page = link.getAttribute('data-page');
    if (!page) return;
    
    // Assign relative path
    link.href = prefix + page;
    
    // Extract base name of the data-page attribute
    const pageName = page.split('/').pop().replace(/\.html$/, '');
    
    // Check if link matches current page for Active State tracking
    if (pageName === currentFile) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Resolve header images (Megamenu)
  document.querySelectorAll('#site-header img').forEach(img => {
    const src = img.getAttribute('src');
    if (src && (src.startsWith('../images/') || src.startsWith('images/'))) {
      const cleanPath = src.replace('../', '');
      img.src = prefix + cleanPath;
    }
  });
}
