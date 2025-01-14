// 인트로애니
        
const intro = gsap.timeline();
const calcX = (window.innerWidth/2) - 145

intro.to("#intro .intro_me", {x: calcX})
     .to("#intro .intro_me", {y:"-19vh"})
    .to("#intro .star", {y:"-20vh"})
    .to("#intro .star", {autoAlpha: 0}, 1)
    .to("#intro .star2", {autoAlpha: 1}, 1)
    .to("#intro .star2", {rotationY: 1080})
    .to("#intro .star2", {y:"8vh"}, 2)
    .to("#intro .star2", {scale: 8}, 2)
    .to("#intro .star2", {autoAlpha: 0})
    .to("#intro .aboutbox", {autoAlpha:1})
    .to("#intro .aboutbox", {duration: 1})
    
ScrollTrigger.create({
    animation: intro,
    trigger: "#intro",
    start: "top top",
    end: "+=10000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true
})




