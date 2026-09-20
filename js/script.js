// =========================================================
// 1. Dark / Light mode toggle (persisted in localStorage)
// =========================================================
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const THEME_KEY = 'portfolio-theme';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

// Respect saved preference, otherwise fall back to OS preference
const savedTheme = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// =========================================================
// 2. Mobile menu toggle
// =========================================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// 3. Scroll-reveal animations
// =========================================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// =========================================================
// 4. Contact form validation (front-end only)
// =========================================================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Merci de remplir tous les champs.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formStatus.textContent = 'Merci d\'entrer une adresse email valide.';
    return;
  }

  // No backend connected yet: replace this with a call to your
  // service of choice (Formspree, EmailJS, your own API, etc.)
  formStatus.textContent = `Merci ${name}, votre message a bien été préparé !`;
  contactForm.reset();
});

// =========================================================
// 5. Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();
