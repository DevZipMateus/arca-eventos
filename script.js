// ===== NAV: sombra ao rolar =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ===== MENU MOBILE =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

function closeMobileNav() {
  mobileNav.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.querySelector('i').className = 'fas fa-bars';
}

hamburger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  hamburger.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) closeMobileNav();
});

// ===== CARROSSEL DA GALERIA =====
(function () {
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const total = slides.length;
  let current = 0;
  let autoplayTimer;

  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function update() {
    const visible = getVisible();
    const maxIndex = total - visible;
    if (current > maxIndex) current = 0;
    const pct = 100 / visible;
    track.style.transform = `translateX(-${current * pct}%)`;
  }

  function next() {
    const visible = getVisible();
    const maxIndex = total - visible;
    current = current >= maxIndex ? 0 : current + 1;
    update();
  }

  function prev() {
    const visible = getVisible();
    const maxIndex = total - visible;
    current = current <= 0 ? maxIndex : current - 1;
    update();
  }

  function resizeSlides() {
    const visible = getVisible();
    slides.forEach((slide) => {
      slide.style.flex = `0 0 ${100 / visible}%`;
    });
    update();
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(next, 3000);
  }

  document.getElementById('carouselNext').addEventListener('click', () => { next(); resetAutoplay(); });
  document.getElementById('carouselPrev').addEventListener('click', () => { prev(); resetAutoplay(); });
  window.addEventListener('resize', resizeSlides);

  resizeSlides();
  resetAutoplay();
})();

// ===== WHATSAPP PICKER (escolher número SP ou RJ) =====
function closeAllWaPickers(except) {
  document.querySelectorAll('.wa-picker.open').forEach((picker) => {
    if (picker !== except) picker.classList.remove('open');
  });
}

document.querySelectorAll('.wa-picker-trigger').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const picker = trigger.closest('.wa-picker');
    const isOpen = picker.classList.contains('open');
    closeAllWaPickers();
    picker.classList.toggle('open', !isOpen);
  });
});

document.addEventListener('click', () => closeAllWaPickers());

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllWaPickers();
});

// ===== ANIMAÇÃO FADE-IN AO SCROLL =====
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach((el) => observer.observe(el));
