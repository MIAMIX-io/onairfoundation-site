document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Active Nav Highlight
  ========================= */
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function setActiveNav() {
    let currentSection = "";

    sections.forEach(section => {
      // Adjust offset to account for sticky header height (approx 140px)
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

      // Robust check to ensure we are comparing against the actual href ID
      const href = link.getAttribute("href");
      if (href && href.includes(currentSection) && currentSection !== "") {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);

  /* =========================
     Mobile Menu (Placeholder)
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

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        window.closeMobileMenu();
      }
    });
  });

});
