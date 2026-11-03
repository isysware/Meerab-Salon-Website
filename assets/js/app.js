/* YAMIMA Bridal Studio — accessible, dependency-free prototype interaction layer.
   No storage, email delivery, analytics or server-side form submission. */
(() => {
  'use strict';
  const config = window.YAMIMA_CONFIG || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const isSafeHttps = url => { try { const parsed = new URL(url); return parsed.protocol === 'https:'; } catch { return false; } };
  const recipient = config.whatsapp || {};
  const reviewHandoff = recipient.reviewHandoffEnabled === true && recipient.verified !== true;
  const whatsappReady = (recipient.verified === true || reviewHandoff) && /^\d{10,15}$/.test(String(recipient.number || ''));
  const makeWhatsAppUrl = message => `https://wa.me/${recipient.number}?text=${encodeURIComponent(message)}`;
  const clean = value => String(value || '').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/[ \t]{2,}/g, ' ').trim();
  const cleanMultiline = value => String(value || '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, '').trim();
  const todayLocal = () => { const d = new Date(); const pad = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  $('#year').textContent = new Date().getFullYear();

  // Desktop/mobile anchor navigation with accessible modal menu.
  const menu = $('#mobile-nav');
  const menuOpen = $('#mobile-menu-open');
  const menuClose = $('#mobile-menu-close');
  const closeMenu = () => { if (menu.open) menu.close(); };
  menuOpen.addEventListener('click', () => {
    menu.showModal();
    menuOpen.setAttribute('aria-expanded', 'true');
    $('.mobile-nav-links a', menu).focus();
  });
  menuClose.addEventListener('click', closeMenu);
  menu.addEventListener('close', () => menuOpen.setAttribute('aria-expanded', 'false'));
  menu.addEventListener('click', event => {
    // Close if visitor taps the actual scrim around the visible drawer.
    if (event.target === menu && event.clientX < menu.getBoundingClientRect().left) closeMenu();
  });
  // Internal navigation centrally closes the mobile menu before scrolling.

  // Indicate active position without making scroll functionality depend on JavaScript.
  const allNavLinks = $$('.nav-link, .mobile-nav-links a');
  const mainSections = ['home','about','services','portfolio','client-words','contact','enquiry'].map(id => document.getElementById(id));
  const setActive = id => allNavLinks.forEach(a => {
    if (a.getAttribute('href') === `#${id === 'enquiry' || id === 'enquiry-form' ? 'enquiry' : id}`) a.setAttribute('aria-current','location');
    else a.removeAttribute('aria-current');
  });
  setActive((location.hash || '#home').substring(1).replace(/^(enquiry-form|locations)$/, 'enquiry'));
  window.yamimaSetActive = setActive;
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      const active = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (active) setActive(active.target.id === 'contact' ? 'enquiry' : active.target.id);
    }, { rootMargin:'-25% 0px -55% 0px', threshold: [0, .05, .2, .5] });
    mainSections.forEach(section => sectionObserver.observe(section));
  }
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    setActive(['locations','enquiry-form'].includes(id) ? 'enquiry' : id);
  });

  // Social and directions URLs are read from one audited configuration source.
  const socialLinks = [['#social-instagram', config.socials?.instagram],['#social-facebook', config.socials?.facebook]];
  socialLinks.forEach(([id,url]) => {
    const el = $(id);
    if (!el) return;
    if (isSafeHttps(url)) el.href = url;
    else { el.removeAttribute('href'); el.setAttribute('aria-disabled','true'); el.title='Social URL pending confirmation'; }
  });
  $$('.branch-card').forEach((card, index) => {
    const id = ['BR-01','BR-02','BR-03'][index];
    const settings = config.branches?.[id];
    const action = $('.pending-direction',card);
    if (settings?.verified === true && isSafeHttps(settings.mapsUrl)) {
      action.disabled = false;
      action.textContent = 'Get Directions ↗';
      action.classList.add('directions-ready');
      action.setAttribute('aria-label', `Open verified directions for ${settings.label} in a new tab`);
      action.addEventListener('click', () => window.open(settings.mapsUrl, '_blank', 'noopener,noreferrer'));
    }
  });
  // Optional service context is forwarded locally to the one contact form.
  $$('.service-select').forEach(link => link.addEventListener('click', () => {
    const service = $('#service');
    service.value = link.dataset.service;
    clearError(service);
  }));
  $('.portfolio-select').addEventListener('click', () => {
    $('#service').value = 'Other / Not Sure';
    clearError($('#service'));
  });

  // One validated form; ONLY a locally generated draft until WhatsApp recipient is verified.
  const form = $('#enquiry-form');
  const status = $('#form-status');
  const date = $('#preferred-date');
  date.min = todayLocal();
  const rules = {
    'full-name': input => { const n=clean(input.value); if (!n) return 'Please enter your full name.'; if (n.length<2 || n.length>80) return 'Name must contain 2 to 80 characters.'; return ''; },
    'phone': input => { const p=input.value.trim(); if (!p) return ''; const digits=p.replace(/\D/g,''); if (!/^\+?[0-9()\s.\-]+$/.test(p) || digits.length<9 || digits.length>15) return 'Enter a valid phone number using 9 to 15 digits.'; return ''; },
    'service': input => input.value && $$('option',input).some(o=>o.value===input.value) ? '' : 'Choose the service you are interested in.',
    'branch': input => input.value && $$('option',input).some(o=>o.value===input.value) ? '' : 'Choose your preferred branch.',
    'preferred-date': input => input.value && input.value < todayLocal() ? 'Preferred date cannot be in the past.' : '',
    'message': input => input.value.length > 1000 ? 'Keep your message within 1,000 characters.' : ''
  };
  function clearError(input) {
    input.removeAttribute('aria-invalid');
    const error = $(`#${input.id === 'full-name' ? 'name' : input.id === 'preferred-date' ? 'date' : input.id}-error`);
    if (error) error.textContent = '';
  }
  function showError(input, message) {
    const error = $(`#${input.id === 'full-name' ? 'name' : input.id === 'preferred-date' ? 'date' : input.id}-error`);
    if (message) input.setAttribute('aria-invalid','true'); else input.removeAttribute('aria-invalid');
    if (error) error.textContent = message;
  }
  Object.keys(rules).forEach(id => {
    const input = document.getElementById(id);
    const eventName = ['service','branch','preferred-date'].includes(id) ? 'change' : 'input';
    input.addEventListener(eventName, () => {
      if (input.hasAttribute('aria-invalid')) showError(input,rules[id](input));
      status.textContent = '';
    });
  });
  const whatsappDialog = $('#whatsapp-dialog');
  const preview = $('#message-preview');
  const copyStatus = $('#copy-status');
  const openWA = $('#open-whatsapp');
  const recipientStatus = $('#recipient-status');
  if (whatsappReady) {
    $('.submit-button').firstChild.textContent = 'Continue to WhatsApp '; 
    openWA.disabled = false;
    openWA.textContent = reviewHandoff ? 'Open WhatsApp (review) ↗' : 'Open WhatsApp ↗';
    recipientStatus.textContent = reviewHandoff ? 'REVIEW NUMBER: 0323 2547717 (WhatsApp-enabled status unverified). Confirm recipient, then press Send in WhatsApp. The website cannot verify receipt.' : 'Press Open WhatsApp, then press Send inside WhatsApp to deliver your enquiry. This site cannot verify receipt.';
  }
  const buildMessage = values => {
    const lines = [
      `Hello ${config.businessName || 'YAMIMA Bridal Studio'},`,
      'I would like to enquire about your services.',
      `Name: ${clean(values.name)}`,
    ];
    if (clean(values.phone)) lines.push(`Phone: ${clean(values.phone)}`);
    lines.push(`Service: ${clean(values.service)}`);
    lines.push(`Preferred Branch: ${clean(config.branches?.[values.branch]?.label || values.branch)}`);
    if (values.date) lines.push(`Preferred Date: ${values.date}`);
    if (cleanMultiline(values.message)) lines.push(`Message: ${cleanMultiline(values.message)}`);
    lines.push('Please share details and availability. Thank you.');
    return lines.join('\n');
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    let firstInvalid = null;
    for (const id of Object.keys(rules)) {
      const input = document.getElementById(id);
      const message = rules[id](input);
      showError(input,message);
      if (message && !firstInvalid) firstInvalid = input;
    }
    if (firstInvalid) { status.textContent = 'Please correct the highlighted fields.'; firstInvalid.focus(); return; }
    const data = Object.fromEntries(new FormData(form).entries());
    preview.value = buildMessage(data);
    copyStatus.textContent = '';
    status.textContent = whatsappReady ? 'Enquiry prepared. Check recipient 0323 2547717 and press Send in WhatsApp yourself; no message has been sent yet.' : 'Demo message prepared. WhatsApp recipient awaits verification; nothing has been sent.';
    whatsappDialog.showModal();
    $('#copy-message').focus();
  });
  $('#whatsapp-dialog-close').addEventListener('click', () => whatsappDialog.close());
  $('#copy-message').addEventListener('click', async () => {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(preview.value); copied=true; }
    } catch { /* Fall back to the selected-text path */ }
    if (!copied) {
      preview.focus(); preview.select();
      try { copied = document.execCommand('copy'); } catch { copied = false; }
    }
    copyStatus.textContent = copied ? 'Copied to clipboard. The message has not been sent.' : 'Please select and copy the message manually. Nothing was sent.';
  });
  openWA.addEventListener('click', () => {
    if (!whatsappReady) return;
    const tab = window.open(makeWhatsAppUrl(preview.value), '_blank', 'noopener,noreferrer');
    copyStatus.textContent = tab === null ? 'WhatsApp may be blocked. Copy your message and open WhatsApp yourself; no enquiry was sent by this page.' : 'WhatsApp handoff requested. Press Send there to deliver your enquiry.';
  });
  document.documentElement.dataset.meerabReady = 'true';
})();

// Single scroll coordinator for every same-page anchor (main nav, CTA, footer,
// browser history, direct deep links). Avoid native + script smooth-scroll races.
(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const mobileMenu = document.getElementById('mobile-nav');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!header) return;
  const doc = document.documentElement;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  const headerHeight = () => {
    const size = Math.ceil(header.getBoundingClientRect().height);
    doc.style.setProperty('--actual-sticky-height', `${size}px`);
    return size;
  };
  const targetFor = (hash) => {
    if (!hash || hash[0] !== '#' || hash.length < 2) return null;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return null; }
    const element = document.getElementById(id);
    return element && !element.closest('[hidden]') ? element : null;
  };
  const showVisibleContent = (target) => {
    // All destination descendants must be usable even if an IO callback is delayed.
    const reveal = (element) => {
      element.classList.remove('reveal-pending');
      // Navigation reveals immediately; ordinary scroll reveals retain their subtle transition.
      element.classList.add('is-revealed', 'nav-reveal-now');
      element.style.removeProperty('--reveal-delay');
    };
    reveal(target);
    target.querySelectorAll('.reveal-pending, .js-reveal').forEach(reveal);
    const available = window.innerHeight;
    document.querySelectorAll('.reveal-pending').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom > headerHeight() && rect.top < available) reveal(element);
    });
  };
  const align = (hash) => {
    if (hash === '#main') {
      // Skip link: main contains multiple sections; begin at the first section.
      return align('#home');
    }
    const target = targetFor(hash);
    if (!target) return false;
    const top = Math.max(0, Math.round(window.scrollY + target.getBoundingClientRect().top - headerHeight() - 4));
    // Instant alignment is intentional: a long, cancelable smooth scroll was leaving
    // the visitor midway through a section when reveal animations started.
    window.scrollTo({top, behavior:'instant'});
    showVisibleContent(target);
    window.yamimaSetActive?.(['locations','enquiry-form','contact'].includes(target.id) ? 'enquiry' : target.id);
    return true;
  };
  window.yamimaScrollTo = (hash) => align(hash);
  const syncLocation = () => {
    headerHeight();
    if (location.hash) align(location.hash);
    else align('#home');
  };
  const afterMenuCloses = (hash) => {
    // dialog.close() restores focus and can itself change browser scroll position.
    if (mobileMenu?.open) mobileMenu.close();
    requestAnimationFrame(() => requestAnimationFrame(() => align(hash)));
  };
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || anchor.hasAttribute('download') || !targetFor(anchor.getAttribute('href')) && anchor.getAttribute('href') !== '#main') return;
    event.preventDefault();
    const hash = anchor.getAttribute('href');
    if (location.hash !== hash) history.pushState({section: hash}, '', hash);
    afterMenuCloses(hash);
  });
  // Consistent restoration for keyboard navigation, hash history and reloads.
  window.addEventListener('popstate', () => requestAnimationFrame(syncLocation));
  window.addEventListener('hashchange', () => requestAnimationFrame(syncLocation));
  window.addEventListener('pageshow', () => requestAnimationFrame(syncLocation));
  window.addEventListener('load', () => requestAnimationFrame(syncLocation));
  window.addEventListener('resize', headerHeight, {passive:true});
  headerHeight();
})();


// Keep all displayed contact details synchronized with the shared configuration.
(() => {
  const contacts = window.YAMIMA_CONFIG?.contacts;
  if (!contacts) return;
  const branchKeys = { 'Sehar Branch': 'sehar', 'Ittehad Branch': 'ittehad', 'Tariq Road Branch': 'tariqRoad' };
  document.querySelectorAll('.branch-card').forEach(card => {
    const key = branchKeys[card.querySelector('h4')?.textContent.trim()];
    const links = card.querySelectorAll('.branch-phones a');
    (contacts[key] || []).forEach((phone, index) => {
      if (links[index]) { links[index].textContent = phone.display; links[index].href = `tel:${phone.tel}`; }
    });
  });
  const footerPhone = document.querySelector('.footer-contact-col .source-phone a');
  if (footerPhone) { footerPhone.textContent = contacts.primary.display; footerPhone.href = `tel:${contacts.primary.tel}`; }
  const floating = document.querySelector('.floating-whatsapp');
  if (floating) {
    const message = 'Hello YAMIMA Bridal Studio, I would like to enquire about your services.';
    floating.href = `https://wa.me/${contacts.primary.whatsapp}?text=${encodeURIComponent(message)}`;
  }
})();
