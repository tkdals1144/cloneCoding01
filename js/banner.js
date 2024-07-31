// 메인 움직이는 배너
let $prev = document.querySelector("#prev");
let $next = document.querySelector("#next");
let $slide = document.querySelector("#slide");
let $slideWrap = document.querySelector("#slide_wrap");
let $slides = document.querySelectorAll('.slide_item');
let $orders = document.querySelectorAll(".order");

const totalSlides = $slides.length - 2;
let currentIndex = 0;
const slideWidth = 360; // 슬라이드의 너비
const slideMargin = 20; // 슬라이드 사이의 마진
const autoSlideInterval = 2000; // 자동 슬라이드 간격 (2초)

let autoSlideTimer;
let isHovered = false;

$orders[0].classList.toggle("active");

function updateSlidePosition() {
    const offset = -currentIndex * (slideWidth + slideMargin); // 슬라이드 이동을 위한 offset 계산
    $slide.style.transform = `translateX(${offset}px)`;
    
    // console.log(`currentIndex = ${currentIndex}`);
    // console.log(`totalSldes = ${totalSlides}`);

    if (currentIndex === 0) {
        $prev.style.display = 'none';
    } else {
        $prev.style.display = 'block';
    }

    if (currentIndex === 5) {
        $next.style.display = 'none';
    } else {
        $next.style.display = 'block';
    }

    if (currentIndex === (totalSlides - 1)) {
        console.log("작동");
        setTimeout(reset, 500);
    } else {
        $slide.style.transition = 'transform 0.5s ease-in-out';
    }
}
function reset() {
    $slide.style.transition = 'none'; // 애니메이션을 비활성화
    $slide.style.transform = `translateX(0px)`; // 즉시 처음으로 돌아가기
}
function goToNextSlide() {
    $orders[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalSlides;
    $orders[currentIndex].classList.add("active");
    updateSlidePosition();
}

function goToPrevSlide() {
    $orders[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    $orders[currentIndex].classList.add("active");
    updateSlidePosition();
}

function startAutoSlide() {
    autoSlideTimer = setInterval(goToNextSlide, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

// 버튼 클릭 이벤트
$prev.addEventListener("click", () => {
    goToPrevSlide();
});

$next.addEventListener("click", () => {
    goToNextSlide();
});

// 슬라이드 랩의 호버 이벤트
$slideWrap.addEventListener('mouseenter', () => {
    isHovered = true;
    stopAutoSlide();
});

$slideWrap.addEventListener('mouseleave', () => {
    isHovered = false;
    startAutoSlide();
});

// 초기 슬라이드 위치 설정 및 자동 슬라이드 시작
updateSlidePosition();
startAutoSlide();