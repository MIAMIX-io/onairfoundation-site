document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Active Nav Highlight
  ========================= */
  const sections = document.querySelectorAll("section[id]");
  
  // FIX: Changed selector from ".nav-btn" to ".nav-links a" to match your HTML
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
     Hero Parallax
  ========================= */
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY * 0.25;
      hero.style.backgroundPosition = `center calc(65% + ${offset}px)`;
    });
  }

  /* =========================
     Mobile Menu (Placeholder)
     Note: Your current HTML does not have a mobile menu (#mobile-menu) 
     or toggle buttons. These functions are kept safe but won't trigger 
     until you add the mobile menu HTML.
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

  // Optional: Smooth scroll for generic links if CSS scroll-behavior isn't enough
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
        
        // Close mobile menu if open
        window.closeMobileMenu();
      }
    });
  });

});
