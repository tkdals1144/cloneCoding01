let $dropdownList = document.querySelectorAll(".dropdown_list");
const items = [
    "골드스위프트",
    "누아골드",
    "리볼버",
    "터닝메카드",
    "기아타이거즈",
    "폴드6",
    "펜타포트",
    "4070",
    "게이밍컴퓨터",
    "7800x39",
    "매직패스",
    "한화이글스",
    "아이폰14",
    "에르메스 원주",
    "스팀덱",
    "경운기",
    "컴퓨터",
    "s24",
    "아이패드",
    "슈퍼커브"
];
let $searchListUl = document.querySelector("#search_list_ul");
let $headerLeft = document.querySelector("#left");
let $headerRight = document.querySelector("#right");
let $thirdWrap = document.querySelector("#third_wrap");
let $logo1 = document.querySelector("#logo");
let headerCurrentIndex = 0;
const headerUlWidth = 650;

window.addEventListener("load", () => {
    $dropdownList[0].addEventListener("click", () => {
        window.scrollTo(
            {
                top : 480,
                left : 0,
                behavior : "smooth"
            }
        );
    });
    $dropdownList[1].addEventListener("click", () => {
        window.scrollTo(
            {
                top : 912,
                left : 0,
                behavior : "smooth"
            }
        );
    });
    $dropdownList[2].addEventListener("click", () => {
        window.scrollTo(
            {
                top : 1344,
                left : 0,
                behavior : "smooth"
            }
        );
    });
    $dropdownList[3].addEventListener("click", () => {
        window.scrollTo(
            {
                top : 1776,
                left : 0,
                behavior : "smooth"
            }
        );
    });
});

items.forEach((item, index) => {
    let list = document.createElement("li");
    list.innerHTML = `<b>${index+1}.</b> <p>${item}</p>`
    list.classList.add("search_list");
    $searchListUl.appendChild(list);
});

$headerLeft.addEventListener("click", () => {
    if (headerCurrentIndex > 0) {
        headerCurrentIndex--;
        console.log(headerCurrentIndex);
        let currentWidth = -headerCurrentIndex * headerUlWidth;
        $searchListUl.style.left = `${currentWidth}px`
    } else {
        console.log("0이야");
    }
});

$headerRight.addEventListener("click", () => {
    if (headerCurrentIndex < 3) {
        headerCurrentIndex++;
        console.log(headerCurrentIndex);
        let currentWidth = -headerCurrentIndex * headerUlWidth;
        $searchListUl.style.left = `${currentWidth}px`
    }
});

$logo1.addEventListener("click", () => {
    window.location.href = 'index.html';
});

$thirdWrap.addEventListener("click", () => {
    window.location.href = 'loginpage.html';
});