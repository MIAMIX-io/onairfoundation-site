// ==============================
// Smooth Scroll to Section
// ==============================
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// ==============================
// Scroll Spy (Active Navigation)
// ==============================
const sections = document.querySelectorAll('section[id], header[id]');
const navButtons = document.querySelectorAll('.nav-btn');

function onScroll() {
  const scrollPosition = window.scrollY + 120; // offset for sticky nav

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick')?.includes(id)) {
          btn.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScroll);
