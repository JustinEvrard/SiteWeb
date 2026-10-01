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
// 1b. Language switch (FR / EN), auto-detected then persisted
// =========================================================
const LANG_KEY = 'portfolio-lang';
const langButtons = document.querySelectorAll('.lang-btn');
const metaDescription = document.getElementById('meta-description');

function applyLanguage(lang) {
  root.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getTranslation(lang, el.getAttribute('data-i18n'));
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = getTranslation(lang, el.getAttribute('data-i18n-html'));
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr').split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      const value = getTranslation(lang, key);
      if (value !== undefined) el.setAttribute(attr, value);
    });
  });

  langButtons.forEach((btn) => {
    const isActive = btn.dataset.langBtn === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  const description = getTranslation(lang, 'meta.description');
  if (description) metaDescription.setAttribute('content', description);

  localStorage.setItem(LANG_KEY, lang);
}

const savedLang = localStorage.getItem(LANG_KEY);
const browserLang = (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
applyLanguage(savedLang || browserLang);

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn));
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
// 2b. Hero floating cards — mouse parallax
// =========================================================
const heroVisual = document.querySelector('.hero-visual');
const parallaxCards = [
  { el: document.querySelector('.hero-badge'), depth: 8 },
  { el: document.querySelector('.code-card'), depth: 14 },
  { el: document.querySelector('.stack-card'), depth: 20 },
  { el: document.querySelector('.terminal-card'), depth: 26 },
  { el: document.querySelector('.quote-card'), depth: 18 },
].filter((card) => card.el);

if (heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVisual.addEventListener('mousemove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    parallaxCards.forEach(({ el, depth }) => {
      el.style.transform = `translate(${(x * depth).toFixed(1)}px, ${(y * depth).toFixed(1)}px)`;
    });
  });

  heroVisual.addEventListener('mouseleave', () => {
    parallaxCards.forEach(({ el }) => {
      el.style.transform = '';
    });
  });
}

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

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const lang = root.getAttribute('lang');
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = getTranslation(lang, 'form.fillAll');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formStatus.textContent = getTranslation(lang, 'form.invalidEmail');
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  formStatus.textContent = getTranslation(lang, 'form.sending');

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      formStatus.textContent = getTranslation(lang, 'form.success').replace('{name}', name);
      contactForm.reset();
    } else {
      formStatus.textContent = getTranslation(lang, 'form.error');
    }
  } catch {
    formStatus.textContent = getTranslation(lang, 'form.error');
  } finally {
    submitButton.disabled = false;
  }
});

// =========================================================
// 5. Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();
