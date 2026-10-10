"use strict";

const SITE_CONFIG = {
  clinicName: "Face Corpus Clínica Integrada",
  whatsapp: "5561991927747",
  whatsappMessage: "Olá! Conheci a Face Corpus pelo site e gostaria de agendar uma avaliação. Poderia me passar mais informações?",
  instagram: "https://www.instagram.com/facecorpus.clinicaintegrada/",
  bookingUrl: "",
  technicalResponsible: {
    name: "Dominique Alana Saraiva",
    profession: "Biomédica",
    crbm: ""
  }
};

// TODO: inserir número oficial do CRBM antes da publicação, após confirmação da clínica.
const RESPONSAVEL_TECNICA_REGISTRO = SITE_CONFIG.technicalResponsible.crbm;

function getBookingUrl() {
  if (SITE_CONFIG.bookingUrl.trim()) return SITE_CONFIG.bookingUrl.trim();
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
}

document.querySelectorAll(".booking-link").forEach((link) => {
  link.href = getBookingUrl();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();

if (RESPONSAVEL_TECNICA_REGISTRO) {
  const registration = document.getElementById("technical-registration");
  registration.textContent = `CRBM ${RESPONSAVEL_TECNICA_REGISTRO}`;
  registration.hidden = false;
}

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
  if (!open) menuButton.focus({ preventScroll: true });
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") setMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900 && menuButton.getAttribute("aria-expanded") === "true") setMenuOpen(false);
});

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const moreButton = document.querySelector(".show-more");
const moreProcedures = document.getElementById("more-procedures");
moreButton.addEventListener("click", () => {
  const expanded = moreButton.getAttribute("aria-expanded") === "true";
  moreButton.setAttribute("aria-expanded", String(!expanded));
  moreProcedures.hidden = expanded;
  moreButton.innerHTML = expanded
    ? 'Ver outros procedimentos <span aria-hidden="true">+</span>'
    : 'Mostrar menos <span aria-hidden="true">−</span>';
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const willOpen = button.getAttribute("aria-expanded") !== "true";
    document.querySelectorAll(".faq-item button").forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      document.getElementById(otherButton.getAttribute("aria-controls")).hidden = true;
    });
    button.setAttribute("aria-expanded", String(willOpen));
    panel.hidden = !willOpen;
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reducedMotion) {
  document.documentElement.classList.add("js-motion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -30px 0px", threshold: 0.05 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}
