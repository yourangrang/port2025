//nav 부드럽게 이동동
document.querySelectorAll(".header__nav ul li a").forEach(elem => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
});



// document.querySelector('.skill').addEventListener('click', function() {
//     gsap.to(window, {
//         scrollTo: 11520,   // 19473px로 스크롤
//         duration: 1,        // 스크롤 애니메이션 시간
//         ease: "power2.inOut", // 스크롤 애니메이션 효과
//     });
// });

// document.querySelector('.site').addEventListener('click', function() {
//     gsap.to(window, {
//         scrollTo: 19473,   // 19473px로 스크롤
//         duration: 1,        // 스크롤 애니메이션 시간
//         ease: "power2.inOut", // 스크롤 애니메이션 효과
//     });
// });

// 스크롤 위치 매핑 객체
window.addEventListener('load', () => {
    // 스크롤 위치를 계산하는 함수
    const getScrollPosition = selector => document.querySelector(selector)?.getBoundingClientRect().top + window.scrollY || 0;
    
const scrollPositions = {
    '.intro': 0,
    '.skill': 11520,
    '.site': 16000,
    '.ani': getScrollPosition("#ani"),
    '.script': getScrollPosition("#script"),
    '.contact': getScrollPosition("#contact"),
};


// 각 요소에 대해 클릭 이벤트 처리
Object.keys(scrollPositions).forEach(selector => {
    document.querySelector(selector).addEventListener('click', () => {
        gsap.to(window, {
            scrollTo: scrollPositions[selector],
            duration: 1,
            ease: "power2.inOut",
        });
    });
});
});







//nav 모바일메뉴 토글효과
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    headerToggle.addEventListener("click", () => {
        headerNav.classList.toggle("show");
    });










