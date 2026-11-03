/* Yamima Bridal Studio — six-image Signature banner only.
   Service categories are descriptive labels and have no tab/panel behavior. */
(() => {
  'use strict';
  const banner = document.getElementById('signature-feature');
  if (!banner) return;
  const slides = [...banner.querySelectorAll('.signature-slide')];
  const activeName = document.getElementById('signature-name');
  if (!slides.length || !activeName) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let interval = null;

  function displaySlide(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    activeName.textContent = slides[index].dataset.name || '';
  }

  function startSlideshow() {
    clearInterval(interval);
    interval = null;
    if (!reducedMotion.matches && !document.hidden && slides.length > 1) {
      interval = window.setInterval(() => displaySlide(index + 1), 4800);
    }
  }

  document.addEventListener('visibilitychange', startSlideshow);
  reducedMotion.addEventListener?.('change', startSlideshow);
  displaySlide(0);
  startSlideshow();
})();
