const header = document.getElementById('site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a[href^="#"]');

function setHeaderState() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}

function closeMenu() {
  header?.classList.remove('menu-open');
  mobileNav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = !mobileNav?.classList.contains('open');
  header?.classList.toggle('menu-open', isOpen);
  mobileNav?.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

const observedSections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      document.querySelectorAll('.desktop-nav a').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  observedSections.forEach((section) => sectionObserver.observe(section));
}

document.getElementById('year').textContent = new Date().getFullYear();
