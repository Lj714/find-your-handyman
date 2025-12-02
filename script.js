// Mobile navigation toggle
const navToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('main-nav--open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
