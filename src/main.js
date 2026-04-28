import './style.css'
import es from './locales/es.json'
import en from './locales/en.json'

const translations = { es, en };
let currentLang = localStorage.getItem('lang') || 'es';

// --- Element References ---
const mainHeader = document.getElementById('main-header');
const mobileMenu = document.getElementById('mobile-menu');
const infoBox = document.getElementById('info-box');

// --- Navigation & UI ---
window.updateHeaderState = function() {
  const isScrolled = window.scrollY > 50;
  const isMobileMenuActive = mobileMenu?.classList.contains('active');
  const headerLogo = document.getElementById('header-logo');
  const navLinks = document.getElementById('nav-links');
  const menuBtn = document.getElementById('menu-btn');

  if (isMobileMenuActive) {
    mainHeader.classList.add('bg-zafiro-navy', 'h-[80px]');
    mainHeader.classList.remove('bg-transparent', 'bg-white/95', 'backdrop-blur-md', 'border-gray-200', 'h-[60px]');

    if (headerLogo) {
      headerLogo.src = '/img/zafiro_logo_blanco.svg';
      headerLogo.classList.add('h-16');
      headerLogo.classList.remove('h-12');
    }
    const logoText = document.getElementById('header-logo-text');
    if (logoText) {
      logoText.classList.add('text-white');
      logoText.classList.remove('text-zafiro-navy', 'text-xl');
    }
    navLinks.classList.add('text-white');
    navLinks.classList.remove('text-zafiro-navy');
    menuBtn.classList.add('text-white');
    menuBtn.classList.remove('text-zafiro-navy');
  } else if (isScrolled) {
    mainHeader.classList.add('bg-white/95', 'backdrop-blur-md', 'border-gray-200', 'h-[60px]');
    mainHeader.classList.remove('bg-transparent', 'bg-zafiro-navy', 'border-white/20', 'h-[80px]');

    if (headerLogo) {
      headerLogo.src = '/img/zafiro_logo_negro.svg';
      headerLogo.classList.add('h-12');
      headerLogo.classList.remove('h-16');
    }
    const logoText = document.getElementById('header-logo-text');
    if (logoText) {
      logoText.classList.remove('text-white');
      logoText.classList.add('text-zafiro-navy', 'text-xl');
    }
    navLinks.classList.remove('text-white');
    navLinks.classList.add('text-zafiro-navy');
    menuBtn.classList.remove('text-white');
    menuBtn.classList.add('text-zafiro-navy');
  } else {
    mainHeader.classList.add('bg-transparent', 'border-white/20', 'h-[80px]');
    mainHeader.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-gray-200', 'bg-zafiro-navy', 'h-[60px]');

    if (headerLogo) {
      headerLogo.src = '/img/zafiro_logo_blanco.svg';
      headerLogo.classList.add('h-16');
      headerLogo.classList.remove('h-12');
    }
    const logoText = document.getElementById('header-logo-text');
    if (logoText) {
      logoText.classList.add('text-white');
      logoText.classList.remove('text-zafiro-navy', 'text-xl');
    }
    navLinks.classList.add('text-white');
    navLinks.classList.remove('text-zafiro-navy');
    menuBtn.classList.add('text-white');
    menuBtn.classList.remove('text-zafiro-navy');
  }
}

window.toggleMenu = function() {
  const isActive = mobileMenu.classList.contains('active');
  if (isActive) {
    mobileMenu.classList.remove('active', 'opacity-100', 'pointer-events-auto');
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
  } else {
    mobileMenu.classList.add('active', 'opacity-100', 'pointer-events-auto');
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
  }
  window.updateHeaderState();
}

// --- Hotspots ---
window.mostrarInfo = function(event, titleKey, textKey) {
  event.stopPropagation();
  const titleEl = document.getElementById('info-title');
  const textEl = document.getElementById('info-text');
  
  titleEl.dataset.key = titleKey;
  textEl.dataset.key = textKey;
  
  titleEl.innerText = translations[currentLang][titleKey];
  textEl.innerText = translations[currentLang][textKey];
  
  infoBox.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  infoBox.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
}

window.cerrarInfo = function() {
  infoBox.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
  infoBox.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
}

// --- Language System ---
window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active state of buttons
  ['es', 'en'].forEach(l => {
    const btnDesktop = document.getElementById('btn-' + l);
    const btnMobile = document.getElementById('mobile-btn-' + l);
    
    if (btnDesktop) {
      if(l === lang) {
        btnDesktop.classList.remove('opacity-60');
        btnDesktop.classList.add('text-zafiro-gold');
        btnDesktop.style.fontWeight = 'bold';
      } else {
        btnDesktop.classList.add('opacity-60');
        btnDesktop.classList.remove('text-zafiro-gold');
        btnDesktop.style.fontWeight = 'normal';
      }
    }
    if (btnMobile) {
      if(l === lang) {
        btnMobile.classList.remove('opacity-60');
        btnMobile.classList.add('text-zafiro-gold');
      } else {
        btnMobile.classList.add('opacity-60');
        btnMobile.classList.remove('text-zafiro-gold');
      }
    }
  });
  
  // Update info box if open
  const infoTitleEl = document.getElementById('info-title');
  const infoTextEl = document.getElementById('info-text');
  if (infoTitleEl?.dataset.key && infoTextEl?.dataset.key) {
    infoTitleEl.innerText = translations[lang][infoTitleEl.dataset.key];
    infoTextEl.innerText = translations[lang][infoTextEl.dataset.key];
  }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  window.setLanguage(currentLang);
  
  // Scroll reveal (Intersection Observer)
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => scrollObserver.observe(el));
});

document.addEventListener('click', () => window.cerrarInfo());
window.addEventListener('scroll', window.updateHeaderState);
