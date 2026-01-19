function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function switchTab(tab) {
  const tabs = ['digital', 'ingles', 'valores'];

  tabs.forEach(t => {
    document.getElementById(`content-${t}`)?.classList.add('hidden');
    document.getElementById(`tab-${t}`)?.classList.remove('active-tab');
  });

  document.getElementById(`content-${tab}`)?.classList.remove('hidden');
  document.getElementById(`tab-${tab}`)?.classList.add('active-tab');
}
