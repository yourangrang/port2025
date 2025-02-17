
let scrollTimeout; // 스크롤이 멈춘 후 타이머를 위한 변수
let lastScrollY = 0; // 이전 스크롤 위치

// 공통 처리 함수
function handleMushroom(index) {
    const mushroom = document.querySelector(`.mushroom${index}`);
    const sitebox = document.querySelector(`.site_box${index}`);
    const coin = document.querySelector(`.coin${index}`);

    const mushrect = mushroom.getBoundingClientRect();
    const mushroomStart = mushrect.left + window.scrollY;

    if (window.scrollY > mushroomStart - 300) {
        console.log(mushroomStart);
        sitebox.classList.add("show");
        mushroom.classList.add("change");
        coin.classList.add("change");

        setTimeout(() => {
            coin.style.visibility = "hidden";
        }, 500);
    }
}

window.addEventListener('scroll', function() {
    const me = document.querySelector('.me');
    const intro_me = document.querySelector('.intro_me');
    const down_me = document.querySelector('.down_me');

    const currentScrollY = window.scrollY; 
    const viewportHeight = window.innerHeight;
    const viewport = viewportHeight + currentScrollY;

    const skill = document.querySelector(".skill_box");
    const rect = skill.getBoundingClientRect();
    const skillStart = rect.top + window.scrollY;

    const down = document.querySelector(".down");
    const downStart = down.getBoundingClientRect().top + window.scrollY;
    const downEnd = down.getBoundingClientRect().bottom + window.scrollY;

    const pipe = document.querySelector(".pipe");
    const pipeStart = pipe.getBoundingClientRect().left + window.scrollY;

    //down시작값부터 down_me나타내기
    if (viewport >= downStart + 400 && viewport <= downEnd) {
        down_me.classList.add("on"); 
    } else {
        down_me.classList.remove("on"); 
    }
    
    // #skill시작위치에서 .me 나타내기
    if (viewport > skillStart  + 200) { 
        me.classList.add("on");  
    } else {
        me.classList.remove("on"); 
    }

    if (viewport > pipeStart + 600 ) { 
        me.style.opacity = '0';
    } else {
        me.style.opacity = '1'; 
    }
    

    // 스크롤을 내릴 때 
    if (currentScrollY > lastScrollY) {
        me.classList.add('showDown');  
        me.classList.remove('showUp'); 
        intro_me.classList.add('showDown');  
        intro_me.classList.remove('showUp'); 
    // 스크롤을 올릴 때
    } else {
        me.classList.add('showUp');  
        me.classList.remove('showDown'); 
        intro_me.classList.add('showUp');  
        intro_me.classList.remove('showDown'); 
    }


    
    // 1부터 3까지 반복하여 각 mushroom, sitebox, coin에 대해 처리
    for (let i = 1; i <= 3; i++) {
        handleMushroom(i);
    }

    // 이전 스크롤 위치를 현재 위치로 업데이트
    lastScrollY = currentScrollY;

    // 이전에 설정된 타이머를 지우고 새로 시작
    clearTimeout(scrollTimeout);

    // 스크롤이 멈춘 후 1초가 지나면 클래스를 제거
    scrollTimeout = setTimeout(function() {
        me.classList.remove('showUp');   
        me.classList.remove('showDown');   
        intro_me.classList.remove('showDown'); 
        intro_me.classList.remove('showUp');   
    }, 80);

    document.querySelector(".paraScroll span").innerText = parseInt(currentScrollY);
});


