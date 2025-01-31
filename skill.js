

// .wrap_inner와 .moveBg를 모두 선택
const horSection = gsap.utils.toArray(".item");
const moveBgSection = gsap.utils.toArray(".moveBg");
const ground2 = gsap.utils.toArray(".ground2");

// gsap.timeline()을 사용하여 두 애니메이션을 동시에 실행
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".right",
        start: "top 0px",
        end: "+=10000",
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
    }
});

// .wrap_inner 애니메이션
tl.to(horSection, {
    xPercent: -130 * (horSection.length - 1),
    ease: "none",
});

// .moveBg 애니메이션을 약간 느리게 설정 (속도를 0.8로 설정)
tl.to(moveBgSection, {
    xPercent: -200 * (moveBgSection.length - 1) * 11 ,  // 0.8로 속도를 줄임
    ease: "none",
}, 0); // 0으로 설정하여 동시에 시작되도록 함

tl.to(ground2, {
    xPercent: -10 * (ground2.length - 1) * 0.9 ,  // 0.8로 속도를 줄임
    ease: "none",
}, 0); // 0으로 설정하여 동시에 시작되도록 함
