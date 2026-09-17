// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.classList.toggle('active');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

// Header shadow on scroll
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
  backToTop.classList.toggle('show', window.scrollY > 400);
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (front-end only — no backend)
const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.value;
  if (!name || !phone || !service) {
    note.textContent = 'Please fill in your name, phone, and service.';
    note.className = 'form__note error';
    return;
  }
  note.textContent = 'Thank you! Your request has been received. We will contact you shortly.';
  note.className = 'form__note success';
  form.reset();
});
