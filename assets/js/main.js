const burger = document.querySelector('.burger');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

burger.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');

  burger.setAttribute('aria-expanded', isOpen);

  burger.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu'
  );
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');

    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open navigation menu');
  });
});