let $contextBox1Wrap = document.querySelector("#content_box1_wrap");
let $prev1 = document.querySelector("#prev1");
let $next1 = document.querySelector("#next1");
let $box1Wrap = document.querySelector("#box1_wrap");
let $box1 = document.querySelectorAll(".box1");

let $contextBox2Wrap = document.querySelector("#content_box2_wrap");
let $prev2 = document.querySelector("#prev2");
let $next2 = document.querySelector("#next2");
let $box2Wrap = document.querySelector("#box2_wrap");
let $box2 = document.querySelectorAll(".box2");

let $contextBox3Wrap = document.querySelector("#content_box3_wrap");
let $prev3 = document.querySelector("#prev3");
let $next3 = document.querySelector("#next3");
let $box3Wrap = document.querySelector("#box3_wrap");
let $box3 = document.querySelectorAll(".box3");

let $contextBox4Wrap = document.querySelector("#content_box4_wrap");
let $prev4 = document.querySelector("#prev4");
let $next4 = document.querySelector("#next4");
let $box4Wrap = document.querySelector("#box4_wrap");
let $box4 = document.querySelectorAll(".box4");

let currentIndex1 = 0;
const slideWidth1 = 1140;
let leftValue1;

let currentIndex2 = 0;
const slideWidth2 = 1140;
let leftValue2;

let currentIndex3 = 0;
const slideWidth3 = 1140;
let leftValue3;

let currentIndex4 = 0;
const slideWidth4 = 1140;
let leftValue4;

$prev1.addEventListener("click", () => {
  currentIndex1--;
  if (currentIndex1 == -1) {
    leftValue1 = -currentIndex1 * slideWidth1;
    $box1Wrap.style.transform = `translateX(${leftValue1}px)`;
    currentIndex1 = 2;
  } else {
    $prev1.style.display = "flex";
    $next1.style.display = "flex";
  }
  leftValue1 = -currentIndex1 * slideWidth1;
  $box1Wrap.style.transform = `translateX(${leftValue1}px)`;
});
$next1.addEventListener("click", () => {
  currentIndex1++;
  if (currentIndex1 == 3) {
    leftValue1 = currentIndex1 * slideWidth1;
    $box1Wrap.style.transform = `translateX(${leftValue1}px)`;
    currentIndex1 = 0;
  } else {
    $prev1.style.display = "flex";
    $next1.style.display = "flex";
  }
  leftValue1 = -currentIndex1 * slideWidth1;
  $box1Wrap.style.transform = `translateX(${leftValue1}px)`;
});

$prev2.addEventListener("click", () => {
  currentIndex2--;
  if (currentIndex2 == -1) {
    leftValue2 = -currentIndex2 * slideWidth2;
    $box2Wrap.style.transform = `translateX(${leftValue2}px)`;
    currentIndex2 = 1;
  } else {
    $prev2.style.display = "flex";
    $next2.style.display = "flex";
  }
  leftValue2 = -currentIndex2 * slideWidth2;
  $box2Wrap.style.transform = `translateX(${leftValue2}px)`;
});
$next2.addEventListener("click", () => {
  currentIndex2++;
  if (currentIndex2 == 2) {
    leftValue2 = currentIndex2 * slideWidth1;
    $box2Wrap.style.transform = `translateX(${leftValue2}px)`;
    currentIndex2 = 0;
  } else {
    $prev2.style.display = "flex";
    $next2.style.display = "flex";
  }
  leftValue2 = -currentIndex2 * slideWidth1;
  $box2Wrap.style.transform = `translateX(${leftValue2}px)`;
});

$prev3.addEventListener("click", () => {
  currentIndex3--;
  if (currentIndex3 == -1) {
    leftValue3 = -currentIndex3 * slideWidth3;
    $box3Wrap.style.transform = `translateX(${leftValue3}px)`;
    currentIndex3 = 1;
  } else {
    $prev3.style.display = "flex";
    $next3.style.display = "flex";
  }
  leftValue3 = -currentIndex3 * slideWidth3;
  $box3Wrap.style.transform = `translateX(${leftValue3}px)`;
});
$next3.addEventListener("click", () => {
  currentIndex3++;
  if (currentIndex3 == 2) {
    leftValue3 = currentIndex3 * slideWidth3;
    $box3Wrap.style.transform = `translateX(${leftValue3}px)`;
    currentIndex3 = 0;
  } else {
    $prev3.style.display = "flex";
    $next3.style.display = "flex";
  }
  leftValue3 = -currentIndex3 * slideWidth3;
  $box3Wrap.style.transform = `translateX(${leftValue3}px)`;
});

$prev4.addEventListener("click", () => {
  currentIndex4--;
  if (currentIndex4 == -1) {
    leftValue4 = -currentIndex4 * slideWidth4;
    $box4Wrap.style.transform = `translateX(${leftValue4}px)`;
    currentIndex4 = 1;
  } else {
    $prev4.style.display = "flex";
    $next4.style.display = "flex";
  }
  leftValue4 = -currentIndex4 * slideWidth4;
  $box4Wrap.style.transform = `translateX(${leftValue4}px)`;
});
$next4.addEventListener("click", () => {
  currentIndex4++;
  if (currentIndex4 == 2) {
    leftValue4 = currentIndex4 * slideWidth4;
    $box4Wrap.style.transform = `translateX(${leftValue4}px)`;
    currentIndex4 = 0;
  } else {
    $prev4.style.display = "flex";
    $next4.style.display = "flex";
  }
  leftValue4 = -currentIndex4 * slideWidth4;
  $box4Wrap.style.transform = `translateX(${leftValue4}px)`;
});

//제품 데이터 리스트
let item_list = [
  {
    title: "이어폰 헤드폰 블루투스헤드셋",
    category: "전자제품",
    price: "16,500원",
    content:
      "제품상태:새상품 거래방식:택배 레노버 </br> TH30 무선 블루투스 접이식 헤드셋 250mAh. </br>마이크장착 색상 블래 화이트 핑크 쿠팡 네이버등 사이트보다 저렴하게 판매합니다 </br> 배송기간 빠르면 7일 지역 및 사정에 따라 배송이 빠르고 지연될 수 있읍니다</br> 시간적 여유 있는분만 구매하세요",
    image: "/images/headset01.jpeg",
    isClicked: false,
  },
  {
    title: "펄스3D 무선헤드셋 미개봉 팝니다",
    category: "전자제품",
    price: "65,000원",
    content: "제품상태:새상품 거래방식:택배</br> 택포 65000원에 팝니다",
    image: "/images/headset02.jpeg",
    isClicked: false,
  },
  {
    title: "소니 WH-XB910N 무선헤드폰",
    category: "전자제품",
    price: "60,000원",
    content:
      "음질, 사운드, 마이크, 노캔 등 기능은 모두 정상이지만</br>3번째 사진처럼 최근들어 가죽이 헤지기 시작했습니다. 박스가 있긴 한데 사진 그대로 껍데기랑 설명서만 있습니다. </br>여러가지 감안해서 저렴히 올립니다. 택포 6만원입니다",
    image: "/images/headset03.jpeg",
    isClicked: false,
  },
  {
    title: "갤럭시 노트 9.스마트폰",
    category: "전자제품",
    price: "80,000원",
    content:
      "노트9입니다</br>액정에 잔상이 있어요</br>금.깨진부분은 없어요</br>본체 뒤커버가 약간 들뜬이 있네요.</br>노트펜은 없어요.",
    image: "/images/phone01.jpeg",
    isClicked: false,
  },
  {
    title: "삼성 공기계 스마트폰 갤럭시 S4",
    category: "전자제품",
    price: "40,000원",
    content: "S4 / SHV-E330 / 32GB",
    image: "/images/phone02.jpeg",
    isClicked: false,
  },
  {
    title: "갤럭시S22플러스 블랙 A급 핸드폰 팔아요",
    category: "전자제품",
    price: "210,500원",
    content:
      "기종 : 갤럭시S22플러스</br></br>특이사항 : 약한생활감 외 상태 좋습니다</br>인기색상 블랙입니다 A급 입니다</br>사진 참고해주세요</br>새상품 충전기 같이 드려요</br>새상품 케이스 같이 드려요</br>새상품 보호필름 부착되어 있습니다</br></br>통신사 SKT LG KT 알뜰통신사 전부 사용 가능합니다</br></br>초기화 후 보관중으로 유심만 넣으시면 바로 사용 가능하세요",
    image: "/images/phone03.jpeg",
    isClicked: false,
  },
  {
    title: "서피스랩탑5 15인치 512 램16G 미개봉",
    category: "전자제품",
    price: "1,150,000원",
    content:
      "서피스랩탑5 15인치 512 램16G 미개봉</br>마이크로소프트 2022 서피스 랩탑5 노트북 15 코어i7 인텔 12세대, 블랙, 512GB, 16GB, WIN11 Home, RIP-00046</br></br>미개봉 새제품</br></br>화곡1동 직거래우선</br>택배시 우체국착불",
    image: "/images/notebook01.jpeg",
    isClicked: false,
  },
  {
    title: "삼성 노트북 인텔코어 CPU 깔끔네이비 슬림/휴대성",
    category: "전자제품",
    price: "199,000원",
    content:
      "삼성전자 정품 노트북</br></br>C P U : Intel(R) Core(TM) i3-4020Y</br>CPU 1.50GHz</br></br>R A M : 4G</br></br>저장장치 : MSATA SSD 128G",
    image: "/images/notebook02.jpeg",
    isClicked: false,
  },
  {
    title: "리전 5i 프로 16irx rtx4070 미개봉",
    category: "전자제품",
    price: "2,200,000원",
    content:
      "리전 5i 프로 16irx rtx4070 미개봉</br>레노버 2024 리전 5i 프로 16IRX 코어i9 인텔 14세대 지포스 RTX 4070, 83DF001HKR, WIN11 Home, 32GB, 1TB, Onyx Grey",
    image: "/images/notebook03.jpeg",
    isClicked: false,
  },
  {
    title: "카페의자 식당의자 중고업소용가구 원목의자",
    category: "가구",
    price: "50,000원",
    content:
      "1. 제품정보</br>- 제품명 J1623</br>- 가격 85,000원</br>- 제품상태: 거의 새것</br>- 제품명 J1621</br>- 가격 70,000원</br>- 제품상태: 거의 새것</br>- 제품명 J1614</br>- 가격 50,000원",
    image: "/images/chair01.jpeg",
    isClicked: false,
  },
  {
    title: "영국빈티지의자(엔틱체어)",
    category: "가구",
    price: "90,000원",
    content:
      "영국 오리지널 빈티지체어</br></br>상태좋아요.빈티지가구아는분만 문의주세요.</br></br>스튜디오촬영용으로 썻어요.</br></br>이태원에서 하나당 20만원에.샀던 영국펍체어입니다.",
    image: "/images/chair02.jpeg",
    isClicked: false,
  },
  {
    title: "영업용 철제 식당 의자",
    category: "가구",
    price: "23,000원",
    content:
      "영업용 철제 호프 식당 의자 1개당23000</br></br>새제풍 이고 아주 튼튼하고 좋아요</br></br>구매 하시면 후회는 없을 거에요</br></br>많이 가져 가실분 부담없씨 톡주세요</br></br>제품 특성상 환불은 어렵습니다만</br></br>현장에서</br>제품 확인하고 구매하시는건 대환영 합니다</br></br>반품불가이오니 신중한 거래요청드립니다.",
    image: "/images/chair03.jpeg",
    isClicked: false,
  },
  {
    title: "보컨셉 이스트라 3인용 소파",
    category: "가구",
    price: "800,000원",
    content:
      "덴마크 보컨셉 이스트라 오리지날 3인용 소파입니다.</br></br>가죽의 색상이 고급스런 연회색이고 다리는 스틸 재질로 모던한 스타일입니다. 동일한 색상의 쿠션 3개가 포함됩니다.</br></br>4년전 400만원 가까이 주고 구매한 제품으로 얼룩도 없고 가죽질이 최상급이라 부드럽습니다.</br></br>크기는 2060x960x860m 이며, 팔걸이가 공간을 크게 차지하지 않아 앉는 자리가 넓습니다.</br></br>엘리베이터로 옮길 수 있는 사이즈입니다. 배송시 화물 운송비는 포함하지 않은 가격입니다.",
    image: "/images/sofa01.jpeg",
    isClicked: false,
  },
  {
    title: "다우닝 4인쇼파 팔아요 (가격협의 가능!)",
    category: "가구",
    price: "810,000원",
    content:
      "안녕하세요 :)</br></br>다우닝 쇼파 리클라이너 4인용 팔아요!</br>(3년 밖에 안 썼어요)</br>흠집, 푹 쳐짐, 리클라이너 고장 없습니다 👊🏻</br>(완전 양호합니다 거의 새거예요)</br>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</br>🤜🏻통가죽 입니다</br>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</br>양쪽에는 리클라이너가 각각 달려있고</br>가운데는 더 편하게 기댈 수 있게 뒤로 조금 더 기울여져 있습니다</br>(짱 편해요) 양쪽 충전도 가능!</br>단점을 굳이 굳이 뽑자면 가운데 자리가 리클라이너가 안된 다는 점?",
    image: "/images/sofa02.jpeg",
    isClicked: false,
  },
  {
    title: "아쿠아클린 코너형스윙소파(드라이세탁완료)서울경기무료배송",
    category: "가구",
    price: "470,000원",
    content:
      "문의 010 5543 3161(카드결제 가능)</br>(방문시 출발하시기전 미리 연락주시면 감사하겠습니다!!)</br></br>새상품 가격:250만원</br></br>아쿠아클린 코너형 스윙 소파쇼파(드라이세탁완료)급 4 7 만원 서울경기 무료배송 그외 배송가능</br></br>길이310/세로223/앉은높이43</br>색상 블루</br>사용기간 24개월</br></br>저희는 다른 중고소파 판매하는 곳보다</br>차별화된 서비스로 고객님께 배송을 해드립니다.",
    image: "/images/sofa03.jpeg",
    isClicked: false,
  },
  {
    title: "야외테이블 정원 카페 테이블 pvc 라탄의자 새제품",
    category: "가구",
    price: "30,000원",
    content:
      "야외테이블 정원 카페 테이블 pvc 라탄의자 새제품</br></br></br>커피색 테이블 60 커피색 라탄의자 2개 세트 (11만원)</br></br>블랙 테이블 60 블랙 라탄의자 2개 세트 11만원 배송포함</br></br>라탄의자 고급PVC라탄+스틸프레임</br>커피, 블랙 두 가지 색상 (의자 개당 3만원)</br></br></br>의정부 카페에 직접 배송해드린</br>사이즈 60 커피색상 테이블입니다</br>(60사이즈 테이블 택배비포함 5만원)</br>60사이즈는 그늘우산꽂는 구멍이 없습니다</br></br></br>진접 치킨집에 배송 설치해드린 80사이즈 블랙 테이블과 의자입니다</br>80사이즈 테이블 배송포함 7만원",
    image: "/images/table01.jpeg",
    isClicked: false,
  },
  {
    title: "포밍테이블 작업테이블 사무실테이블 (급처)",
    category: "가구",
    price: "20,000원",
    content:
      "사무실 이전으로 인한 공간부족으로 내놓습니다.</br>옷 포장용으로 사용하던 테이블입니다.</br></br>사용감 적음(A급)</br>1800*900 월넛 1개</br>1800*600 월넛 1개</br></br>사용감 있음(B급)</br>1800*900 월넛 1개, 우드 1개</br>1800*600 우드 1개 (접이식)</br></br>A급: ₩30,000 B급:₩20,000</br>개당 가격이며, 일괄구매시 10만원에 드립니다.</br></br>직접 가져가셔야 합니다.</br>지역은 양산입니다.",
    image: "/images/table02.jpeg",
    isClicked: false,
  },
  {
    title: "매그너스 올레센 magnus olesen 빈티지 테이블",
    category: "가구",
    price: "900,000원",
    content:
      "매그너스 올레센 사각 테이블입니다.</br>많이 보신 분들은 아시겠지만,</br>빈티지샵에서는 100만원 이상에 판매되고 있습니다.</br></br>무엇보다 나무나 상판 상태가 너무너무 좋습니다.</br>(상판에 까진 부분 없음.)</br>복원되고 구매한지 얼마 안되었어요.</br></br>상판도 라이트 그레이 / 약간 블루빛 나는 컬러이구요.</br>매그너스 올레센 빈티지 경우에는 원래 화이트가 없더라구요. 저도 이게 매력적이라 도장 제품 말고 오리지널 제품을 구매했어요.</br></br>빈티지샵들 많이 가봤는데 매그너스 올레센 상태가 너무 안좋아서 꽤 오래 찾아보고 들인 제품입니다.</br></br>제가 올린 의자들과 함께 구매하시면 조금 네고 해드립니다 :)</br></br>지역은 서울시 용산구입니다!",
    image: "/images/table03.jpeg",
    isClicked: false,
  },
  {
    title: "[새상품]남성슬랙스34 여름슬랙스 밴딩바지 남성바지",
    category: "의류",
    price: "15,000",
    content:
      "새상품 indicode 남성밴딩팬츠</br></br>베이직한 디자인,컬러에 얇고,가벼우며 살에 달라붙지 않아 착용감 좋아요.</br></br>여름에 시원하게 입을 수 있어요.</br></br>허리밴딩과 신축성이 있어 활동성 좋은 기능성바지에요.</br></br>색상은 각각 블랙,그레이 개별가격이에요.</br></br>사이즈34</br>허리둘레86 밑위30 허벅지둘레67 밑단18 총길이98cm",
    image: "/images/pants01.jpeg",
    isClicked: false,
  },
  {
    title: "32)라코스테 스판바지 면바지 해외판 카고바지",
    category: "의류",
    price: "60,000원",
    content:
      "라코스테 스판바지 면바지 해외판 카고바지</br></br>실사이즈</br>허리 32</br>밑단 21.5</br>허벅지 32.5</br>총기장 108</br>스판기좋아요~</br></br>명품브랜드</br>라코스테 스판바지</br>면바지 해외판 카고바지 입니다</br></br>신품대비 컨디션 90% 정도입니다.</br>신품대비 컨디션은 개인기준에 따라 차이는 있습니다.</br></br>빈티지 특성상 사용감이나 색바램은 있을 수 있으니 민감한 분들은 구매 자제 바랍니다.",
    image: "/images/pants02.jpeg",
    isClicked: false,
  },
  {
    title: "NIX 크롭청바지32 여름청바지 디스트로이드진 찢청",
    category: "의류",
    price: "25,000원",
    content:
      "새상품 NIX 남성 크롭청바지 아이스</br></br>부드럽고,가볍고 얇아 여름에 입기 좋아요.</br></br>편안한 핏에 스판이 있어 착용감 좋아요.</br></br>디스트로이진 아이스컬러라 시원해 보여요.</br></br>소재</br>면60 폴리29 레이온10 폴우1 (단위%)</br></br>편안한 사이즈32(82)</br>허리41.5 밑위25 허벅지30 밑단19 총기장96(단면측정cm)",
    image: "/images/pants03.jpeg",
    isClicked: false,
  },
  {
    title: "빠니깔레 남성 반팔 빈티지 티셔츠 95",
    category: "의류",
    price: "15,000원",
    content:
      "사용감 있지만 상태 좋아요 ~</br></br>어깨 42</br>가슴 49</br>길이 60</br></br>cu반택 2000원</br>일반택배 3500원",
    image: "/images/tshirt01.jpeg",
    isClicked: false,
  },
  {
    title: "나이키 드라이핏 XXL 티셔츠",
    category: "의류",
    price: "10,000원",
    content:
      "나이키 드라이핏 XXL 티셔츠</br></br>나이키 병행수입제품입니다.</br>구매 후 한번 세탁하고 한번도 입고나가지 않았던 옷입니다.</br>(오염/ 이염 xxx)</br>드라이핏으로 잘마릅니다.</br></br>*색상: 화이트</br>*사이즈: XXL(남여공용)</br>가슴단면 54.5 총장 73",
    image: "/images/tshirt02.jpeg",
    isClicked: false,
  },
  {
    title: "띠어리 Theory 티셔츠, 셔츠, 글랜셔츠 린넨셔츠",
    category: "의류",
    price: "40,000원",
    content:
      "띠어리 Theory 티셔츠, 셔츠, 글랜셔츠 린넨셔츠</br></br>1. 띠어리 반팔 티셔츠 : 40,000원 택배착불</br>택달린 새제품입니다.</br>Sail blue 색상 쨍하고 선명한 블루 색상입니다.</br>사이즈 라지, 겨드랑이 폭 55센티미터 입니다.</br></br>2. 띠어리 긴팔셔츠 : 70,000원 택배착불</br>택달린 새제품입니다.</br>색상이 묘한데 Teal 색상이라고 해야 할듯하네요. 약간 그린과 그레이가 섞인 색상입니다.</br>사이즈 라지, 슬림한 핏입니다. 사이즈 라지, 겨드랑이 폭 55센티미터 입니다.",
    image: "/images/tshirt03.jpeg",
    isClicked: false,
  },
  {
    title: "MAR CONA여자세무가죽롱코트(내피포함)(66~77)",
    category: "의류",
    price: "180,000원",
    content:
      "▷브랜드 : MAR CONA</br></br>▷ 상 태 : A</br></br>▷라벨 사이즈 : 66~77</br></br>▷실측 단면사이즈(cm) (재는위치에 따라1~4cm정도차이 있습니다)</br></br>어 깨 : 43 팔길이 : 58 가 슴 : 58 총기장 : 114</br></br>▷ 상품설명</br></br></br>MAR CONA 여자 세무재질의 가죽롱코트이며 내피 있습니다.</br></br>상태좋으며 예쁜옷입니다.</br></br>정품 입니다.",
    image: "/images/coat01.jpeg",
    isClicked: false,
  },
  {
    title: "[105~110]커스텀멜로우 구스다운 캐시미어 울코트",
    category: "의류",
    price: "300,000원",
    content:
      "사이즈는 105 정도 생각하시면 됩니다</br>정가 649,000원인 제품입니다</br></br>안에 구스다운 조끼패딩처럼 분리돼서 봄에도 가볍게 착용 가능합니다.</br></br>착용감은 딱 입으면 몸에 감기고 엄청 가볍습니다</br>미리 사두세요 ㅎㅎ</br></br>택배, 편의점택배, 직거래(영등포구청역, 마곡나루 주변) 다 가능합니다. 택배비는 별도입니당</br>연락주세요!",
    image: "/images/coat02.jpeg",
    isClicked: false,
  },
  {
    title: "플라스틱아일랜드 겨울코트 무료배송",
    category: "의류",
    price: "25,000원",
    content:
      "사이즈 xs입니다</br></br>실사이즈 가로 약 55센티</br></br>세로 약 105센티</br></br>겨드랑이에서 팔끝까지 약 35센티</br></br>어깨에서 팔끝까지 약 49센티</br></br>바닥에 놓고 잰 치수입니다</br></br>평소 입는 옷과 비교하면 좋습니다</br></br>상태 양호합니다만</br>중고라는 점은 감안해주세요",
    image: "/images/coat03.jpeg",
    isClicked: false,
  },
];
localStorage.setItem("item_list", JSON.stringify(item_list)); //상품 정보 저장

//제품 리스트 불러오기 위한 초기화 함수
function createProductElement(product, num) {
  let productList = document.createElement("li");
  let productLink = document.createElement("a");
  let productImg = document.createElement("img");
  let productTitle = document.createElement("p");
  let productPrice = document.createElement("p");

  productTitle.textContent = product.title;
  productLink.href = "item_info.html";
  productImg.src = product.image;
  productPrice.textContent = product.price;

  productList.setAttribute("class", `box${num}`);
  console.log(`box${num}`);
  productImg.setAttribute("class", "box_img");
  productTitle.setAttribute("class", "box_name");
  productPrice.setAttribute("class", "box_price");

  productLink.appendChild(productImg);
  productLink.appendChild(productTitle);
  productLink.appendChild(productPrice);
  productList.appendChild(productLink);

  productLink.addEventListener("click", function () {
    product.isClicked = true;
    localStorage.setItem("item_list", JSON.stringify(item_list));
  });

  return productList;
}

//제품 리스트 데이터 호출
function loadProducts() {
  let productListElement = document.getElementById("box1_wrap");
  let producListElect = document.getElementById("box2_wrap");
  let producListFurni = document.getElementById("box3_wrap");
  let producListCloth = document.getElementById("box4_wrap");

  let randomProducts = getRandomItems(item_list, 18); // 랜덤으로 18개의 상품 선택

  randomProducts.forEach((product) => {
    let productDiv = createProductElement(product, 1);
    productListElement.appendChild(productDiv);
  });

  //카테고리별 상품 추가
  item_list.forEach((product) => {
    console.log(product);
    if (product.category === "전자제품") {
      let productDiv = createProductElement(product, 2);
      producListElect.appendChild(productDiv);
    } else if (product.category === "가구") {
      let productDiv = createProductElement(product, 3);
      producListFurni.appendChild(productDiv);
    } else if (product.category === "의류") {
      let productDiv = createProductElement(product, 4);
      producListCloth.appendChild(productDiv);
    }
  });

  //배열을 랜덤하게 섞고 원하는 개수만큼 반환
  function getRandomItems(arr, count) {
    let shuffled = arr.slice(0); // 배열의 복사본 생성
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Fisher-Yates shuffle 알고리즘
    }
    return shuffled.slice(0, count); // 지정한 개수만큼 잘라내기
  }
}
