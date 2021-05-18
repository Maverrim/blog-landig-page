gsap.registerPlugin(ScrollTrigger);

gsap.from('.header__main-tittle', {
    scrollTrigger: {
        trigger: '.header__main-tittle',
        toggleActions: 'restart none none none'
    },
    y: -600,
    rotation: 0,
    duration: 2
});

gsap.from('.intro', {
    scrollTrigger: {
        trigger: '.intro',
        toggleActions: 'restart none none none'
    },
    x: -600,
    rotation: 0,
    duration: 2
});

gsap.from('.robust', {
    scrollTrigger: {
        trigger: '.robust',
        toggleActions: 'restart none none none'
    },
    x: 600,
    rotation: 0,
    duration: 2
});


gsap.to('.state-of-art__phones-wrapper', {
    scrollTrigger: {
        trigger: '.state-of-art__phones-wrapper',
        toggleActions: 'restart none none none'
    },
    opacity: 1,
    duration: 2
});

gsap.from('.content-wrapper', {
    scrollTrigger: {
        trigger: '.content-wrapper',
        toggleActions: 'restart none none none'
    },
    y: 300,
    opacity: 1,
    duration: 1.5
});