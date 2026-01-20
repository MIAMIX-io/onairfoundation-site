document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Smooth Scroll Enhancement
  ========================= */
  window.scrollToSection = function (id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    closeMobileMenu();
  };

  /* =========================
     Active Nav Highlight
  ========================= */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-btn");

  function setActiveNav() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      const href = link.getAttribute("href");
      if (href && href === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);

  /* =========================
     Mobile Menu
  ========================= */
  window.openMobileMenu = function () {
    const menu = document.getElementById("mobile-menu");
    if (!menu) return;

    menu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  window.closeMobileMenu = function () {
    const menu = document.getElementById("mobile-menu");
    if (!menu) return;

    menu.classList.add("hidden");
    document.body.style.overflow = "";
  };

  /* =========================
     Hero Parallax
  ========================= */
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY * 0.25;
      hero.style.backgroundPosition = `center calc(65% + ${offset}px)`;
    });
  }

});
