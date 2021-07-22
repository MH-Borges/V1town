document.addEventListener("DOMContentLoaded", () => {
    var tl1 = gsap.timeline();
    tl1
    .to('.screen-loading', {
        duration: 1,
        opacity: 0,
        delay: 2.2,
    })
    .from(".Logo, .Menu, .content", { 
        opacity: 0, 
        y: 50,
    },"-=1")
    .to(".Logo, .Menu, .content", {
        duration: 1, 
        opacity: 1, 
        y: 0,
    })
    .from(".LongLogo, .MenuInside", {
        opacity: 0, 
        y: 50,
    }, "-=1")
    .to(".LongLogo, .MenuInside", {
        duration: 1, 
        opacity: 1, 
        y: 0,
    })
    .from(".About", {
        opacity: 0, 
        y: 50,
    }, "-=1.5")
    .to(".About",{ 
        opacity: 1,
        duration: 1,
        y: 0,
    })
    .from(".textabout", {
        opacity: 0, 
        y: 50,
    }, "-=3")
    .to(".textabout",{ 
        opacity: 1, 
        duration: 1,
        y: 0,
    })
    .from(".Links, .TabsBx", {
        opacity: 0, 
        y: 50,
    }, "-=3")
    .to(".Links, .TabsBx",{ 
        opacity: 1,
        duration: 1,
        y: 0,
    })
    .from(".link", {
        opacity: 0, 
        y: 50,
    }, "-=3.5")
    .to(".link",{ 
        opacity: 1,
        duration: 1,
        y: 0,
    })
    .from(".dark, .theme-switch", {
        opacity: 0, 
        y: 50,
    }, '-=4')
    .to(".dark, .theme-switch",{ 
        opacity: 1, 
        duration: 1,
        y: 0,
    })
});