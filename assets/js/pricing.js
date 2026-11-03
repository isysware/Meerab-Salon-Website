(() => {
  'use strict';
  const config = window.YAMIMA_PRICING;
  const tabs = [...document.querySelectorAll('.service-price-tab')];
  const panel = document.getElementById('pricing-panel');
  if (!config || !panel || tabs.length !== 6) return;
  const esc = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // The original prices remain unchanged in pricing-data.js for future internal reuse.
  // Public rendering intentionally consumes only names, headings and package inclusions.
  const group = g => `<section class="pricing-group" aria-labelledby="group-${esc(g.id)}"><h4 id="group-${esc(g.id)}">${esc(g.title)}</h4><ul class="service-name-list">${g.rows.map(r => `<li data-service-id="${esc(r.id)}">${esc(r.name)}</li>`).join('')}</ul></section>`;
  const packageCard = p => `<article class="pricing-package"><h4>${esc(p.name)}</h4><h5>Included Services</h5><ul>${p.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul><button type="button" class="package-book" data-package="${esc(p.name)}">Book Now</button></article>`;
  function selectCategory(id, focus = false) {
    const tab = tabs.find(t => t.dataset.category === id);
    if (!tab) return;
    tabs.forEach(t => { const active = t === tab; t.classList.toggle('is-active',active); t.setAttribute('aria-selected',String(active)); t.tabIndex = active ? 0 : -1; });
    if (id === 'packages') {
      panel.innerHTML = `<h3 class="pricing-main-title">Salon Packages</h3><div class="pricing-packages">${config.packages.map(packageCard).join('')}</div>`;
    } else {
      const c = config.categories.find(c => c.id === id);
      if (!c) return;
      panel.innerHTML = `<h3 class="pricing-main-title">${esc(c.title)}</h3><div class="pricing-groups">${c.groups.map(group).join('')}</div>`;
    }
    panel.setAttribute('aria-labelledby',tab.id);
    if (focus) tab.focus({preventScroll:true});
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      panel.classList.remove('pricing-enter'); void panel.offsetWidth; panel.classList.add('pricing-enter');
    }
  }
  tabs.forEach((tab,i) => {
    tab.addEventListener('click',() => selectCategory(tab.dataset.category));
    tab.addEventListener('keydown',e => {
      if (!['ArrowRight','ArrowLeft','Home','End'].includes(e.key)) return;
      e.preventDefault();
      const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length-1 : (i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      selectCategory(tabs[next].dataset.category,true);
      // Keep the selected tab visible *within the horizontal strip*; do not scroll the document.
      const strip = tabs[next].closest('.service-tabs');
      if (strip) {
        const left = tabs[next].offsetLeft - strip.offsetLeft;
        const right = left + tabs[next].offsetWidth;
        if (left < strip.scrollLeft) strip.scrollLeft = left;
        else if (right > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = right - strip.clientWidth;
      }
    });
  });
  panel.addEventListener('click',e => {
    const btn = e.target.closest('.package-book'); if (!btn) return;
    const packageName = btn.dataset.package;
    const service = document.getElementById('service');
    const message = document.getElementById('message');
    if (service) { service.value='Salon Packages'; service.dispatchEvent(new Event('change',{bubbles:true})); }
    if (message) { message.value = `I would like to enquire about the ${packageName}.`; message.dispatchEvent(new Event('input',{bubbles:true})); }
    // Share the same anchor coordinator as every other internal navigation action.
    if (location.hash !== '#enquiry-form') history.pushState({section:'#enquiry-form'},'', '#enquiry-form');
    window.yamimaScrollTo?.('#enquiry-form');
  });
  selectCategory('bridal');
})();
