/* Editorial enhancements: source-site-inspired banner motion and attributed short testimonial previews. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Progressive enhancement: content is visible by default, including on script failure.
  // Only elements below the first viewport are animated, and never before they intersect.
  if ('IntersectionObserver' in window && !reduced.matches) {
    const selector='.section-heading-split, .service-row, .gallery-card, .branch-card, .about-grid, .testimonial-section, .signature-feature, .section-contact .section-heading';
    const nodes=[...document.querySelectorAll(selector)];
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    },{threshold:0.04,rootMargin:'0px 0px 40px 0px'});
    nodes.forEach((el,i)=>{
      if(el.closest('[hidden]'))return;
      const rect=el.getBoundingClientRect();
      if(rect.top<window.innerHeight+100){el.classList.add('is-revealed');return;}
      el.style.setProperty('--reveal-delay',`${(i%3)*55}ms`);
      el.classList.add('reveal-pending');
      observer.observe(el);
    });
    window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});
  }
  // Owner-supplied testimonials: preserve the four existing reviews in order.
  // Only the third original quote is edited to remove its specified emojis.
  const reviews = [
    {name:'Ayesha Farhan',quote:'Totally satisfied with their services. Loved ambiance and specifically manager is very friendly. Must go place for quality services.'},
    {name:'Khizra Usman',quote:'Love the place, prices, ambiance and quality service and genuine product usage overall perfect package.'},
    {name:'Maha Zaib',quote:'Best Experience everr too much satisfied with their services.. Highly Recommended'},
    {name:'Sana Khan',quote:'I take service from their amazing experience and their staff are too cooperative and friendly.'},
    {name:'Salwa Alwajih',quote:'Got my Kados Fibre infusion treatment done at Meerub. The level of professionalism was beyond my expectations. So Satisfied.',rating:5},
    {name:'Mehak Danish',quote:'had a great experience. Amir did my hair color and it turned out exactly how I imagined, even better. He’s very skilled and pays attention to every detail. Definitely coming back',rating:5,service:'Hairstyling'},
    {name:'NehaSajal',quote:'Shoutout to Fozia! Hair work at Tariq Road Branch is amazing and my hair feels so much healthier now.',rating:5}
  ];
  const reviewCards=document.getElementById('testimonial-cards');
  const counter=document.getElementById('review-counter');
  const narrow=window.matchMedia('(max-width: 700px)');
  let page=0;
  function renderReviews(){
    const perPage=narrow.matches?1:2;
    const total=Math.ceil(reviews.length/perPage);
    page=(page+total)%total;
    reviewCards.replaceChildren();
    reviews.slice(page*perPage,page*perPage+perPage).forEach(item=>{
      const article=document.createElement('article');article.className='testimonial-card';
      const stars=document.createElement('div');stars.className='testimonial-stars';stars.setAttribute('aria-label',item.rating===5?'5 out of 5 stars':'Star symbols shown in supplied review screenshot');stars.textContent=item.rating===5?'★★★★★':'★★★★☆';
      const quote=document.createElement('blockquote');quote.textContent=item.quote;
      const avatar=document.createElement('div');avatar.className='testimonial-avatar';avatar.setAttribute('aria-hidden','true');avatar.textContent=item.name.charAt(0);
      const name=document.createElement('h4');name.textContent=item.name;
      const label=document.createElement('p');label.className='testimonial-role';label.textContent='Happy Customer';
      article.append(stars,quote,avatar,name,label);reviewCards.append(article);
    });
    counter.textContent=`${page+1} / ${total}`;
  }
  document.getElementById('review-prev').addEventListener('click',()=>{page--;renderReviews();});
  document.getElementById('review-next').addEventListener('click',()=>{page++;renderReviews();});
  narrow.addEventListener?.('change',()=>{page=0;renderReviews();});
  renderReviews();

  // Position the semantic, keyboard-focusable links over the approved flat artwork.
  // Read intrinsic image dimensions rather than assuming the previous 1672×941 image.
  // `object-fit: contain` preserves both text/button graphics at desktop widths;
  // object-fit/position and the link geometry use the same fitted rectangle.
  const hero = document.querySelector('.hero-approved');
  const artwork = hero?.querySelector('.hero-approved-photo');
  if (hero && artwork) {
    const resizeHotspots = () => {
      const width = hero.clientWidth, height = hero.clientHeight;
      const imageWidth = artwork.naturalWidth || Number(artwork.getAttribute('width'));
      const imageHeight = artwork.naturalHeight || Number(artwork.getAttribute('height'));
      if (!width || !height || !imageWidth || !imageHeight) return;
      const fit = getComputedStyle(artwork).objectFit;
      const scale = fit === 'contain'
        ? Math.min(width / imageWidth, height / imageHeight)
        : Math.max(width / imageWidth, height / imageHeight);
      const shiftX = (width - imageWidth * scale) / 2;
      const shiftY = (height - imageHeight * scale) / 2;
      hero.querySelectorAll('[data-artwork-rect]').forEach(anchor => {
        const [x1, y1, x2, y2] = anchor.dataset.artworkRect.split(',').map(Number);
        anchor.style.left = `${shiftX + x1 * scale}px`;
        anchor.style.top = `${shiftY + y1 * scale}px`;
        anchor.style.width = `${(x2 - x1) * scale}px`;
        anchor.style.height = `${(y2 - y1) * scale}px`;
      });
    };
    if (artwork.complete && artwork.naturalWidth) resizeHotspots();
    else artwork.addEventListener('load', resizeHotspots, { once: true });
    if ('ResizeObserver' in window) {
      const heroObserver = new ResizeObserver(resizeHotspots);
      heroObserver.observe(hero);
      window.addEventListener('pagehide', () => heroObserver.disconnect(), { once: true });
    } else {
      window.addEventListener('resize', resizeHotspots, { passive: true });
    }
  }
})();
