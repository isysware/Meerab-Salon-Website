/* Centralized destinations and release gates. Set verified=true ONLY after owner confirmation and real-world testing. */
window.YAMIMA_CONFIG = Object.freeze({
  reviewMode: true,
  businessName: 'YAMIMA Bridal Studio',
  whatsapp: Object.freeze({
    verified: false,
    reviewHandoffEnabled: true, /* visitor explicitly requested prototype link; recipient is not yet tested */
    number: '923232547717', /* client-approved primary contact; WhatsApp account capability not independently verified */
    proposedButUNVERIFIED: '923232547717'
  }),
  contacts: Object.freeze({
    primary: Object.freeze({ display: '0323 2547717', tel: '+923232547717', whatsapp: '923232547717' }),
    sehar: Object.freeze([{ display: '021-35845999', tel: '+922135845999' }]),
    ittehad: Object.freeze([{ display: '021-35349494', tel: '+922135349494' }]),
    tariqRoad: Object.freeze([{ display: '0323-2547717', tel: '+923232547717' }, { display: '0322-2958474', tel: '+923222958474' }])
  }),
  socials: Object.freeze({
    instagram: 'https://www.instagram.com/meerabs_salon?mdxt=MTNhdmg1Y2lkZ3g1MQ==',
    facebook: 'https://www.facebook.com/share/1JELaCfAcy/'
  }),
  branches: Object.freeze({
    'BR-01': Object.freeze({ label: 'DHA Phase 6 — Ittehad Commercial', verified: false, mapsUrl: '', candidateUnverified: 'https://maps.app.goo.gl/tvm57N589h8Hg7qn6?g_st=iw' }),
    'BR-02': Object.freeze({ label: 'PECHS — Tariq Road', verified: false, mapsUrl: '', candidateUnverified: 'https://maps.app.goo.gl/ik6AJMrnUY5wdLgAA?g_st=iw' }),
    'BR-03': Object.freeze({ label: 'DHA Phase 7 — Sehar Commercial', verified: false, mapsUrl: '', candidateUnverified: 'https://maps.app.goo.gl/zVA8huZYAWqU23N38?g_st=iw' }),
    'Need Advice': Object.freeze({ label: 'Need Advice', verified: false, mapsUrl: '' })
  })
});
