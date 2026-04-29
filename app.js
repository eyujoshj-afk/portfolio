// Simple SPA navigation (switches visible section)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Active class
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // Show correct section
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('visible'));
    const sectionId = this.getAttribute('href').replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('visible');
    // Scroll to top of page for mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// Show home by default if JS loaded and hash is empty or unknown
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'about', 'services', 'contact'];
  let page = validPages.includes(hash) ? hash : 'home';
  document.querySelector('.nav-link[href="#' + page + '"]').click();
});