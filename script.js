const categories = [
  {
    id: "food",
    name: "식품",
    icon: "🍜",
    products: [
     { image: "kimchi.png", name: "매운 실비 김치 3kg", desc: "매콤하게 당기는 실비김치!", link: "https://toss.im/_m/pXeWEdi7" },
{ image: "hobak.png", name: "제주 미니 밤호박 5kg", desc: "달콤하고 포슬포슬한 미니밤호박!", link: "https://toss.im/_m/NVV6IyXp" },
{ image: "hambak.png", name: "애슐리 함박 스테이크 360g", desc: "간편하게 즐기는 함박스테이크!", link: "https://toss.im/_m/VKjDBkw8" },
{ image: "pizza.png", name: "애슐리 크런치즈엣지 피자", desc: "바삭하고 고소한 치즈 피자!", link: "https://toss.im/_m/JWnXIeLD" }
    ]
  },
  {
    id: "beauty",
    name: "뷰티",
    icon: "💄",
    products: [
      { image: "tomato.png", name: "성분에디터 그린토마토 포어 리프팅 앰플 플러스 30ml, 2개", desc: "모공 탄력 케어!", link: "https://toss.im/_m/LEw80DlD" },
{ image: "cream.png", name: "레이디어 히알루론산 촉촉 수분크림 100ml, 1개", desc: "촉촉한 수분 케어!", link: "https://toss.im/_m/x29i1Vb6" },
{ image: "mist.png", name: "닥터멜락신 마이너스 오점칠 오일 미스트 100ml, 1개", desc: "간편한 미스트 케어!", link: "https://toss.im/_m/ZPC8GPAz" },
{ image: "madeca.png", name: "센텔리안24 마데카 크림 타이트 리프팅 50ml, 5개 + 15ml, 2개", desc: "탄탄한 리프팅 케어!", link: "https://toss.im/_m/7wRcB6Tb" },
{ image: "suncream.png", name: "AHC 마스터즈 아쿠아 리치 선크림 SPF50+ PA++++, 30ml, 2개", desc: "매일 챙기는 선케어!", link: "https://link.coupang.com/a/f4kaVOJN1g", store: "coupang" },
{ image: "deepclean.png", name: "뉴트로지나 딥클린 포밍 클렌저, 100g, 3개", desc: "깔끔한 데일리 클렌징!", link: "https://link.coupang.com/a/f4kQQKRUvk", store: "coupang" },
{ image: "maskpack.png", name: "닥터지 레드 블레미쉬 쿨 수딩 마스크, 10개입, 1개", desc: "간편하게 즐기는 데일리 케어!", link: "https://link.coupang.com/a/f4kgPylCai", store: "coupang" },
{ image: "hairessence.png", name: "미쟝센 퍼펙트 베이스업 헤어 에센스, 200ml, 2개", desc: "간편한 데일리 헤어 케어!", link: "https://link.coupang.com/a/f4kqOfB5FI", store: "coupang" }    ]
  },
  {
    id: "living",
    name: "생활",
    icon: "🏠",
    products: [
      { image: "shoes.png", name: "신발 세탁망 그레이 19×39cm, 2개", desc: "신발 세탁을 간편하게!", link: "https://toss.im/_m/fL6eQNbs" },
{ image: "multi.png", name: "무아스 더 큐브 마그넷 3구 USB 고용량 멀티탭", desc: "깔끔하고 편리한 멀티탭!", link: "https://toss.im/_m/fsyl0Ibs" },
{ image: "cleaner.png", name: "무아스 길이조절 올인원 스탠드 테이블 클리너", desc: "구석구석 간편한 청소!", link: "https://toss.im/_m/zns3g602" },
{ image: "wipes.png", name: "크리넥스 마이비데 클린케어 화장실용 물티슈 40매, 9팩", desc: "깔끔한 욕실 필수템!", link: "https://toss.im/_m/vDaQbRld" },
{ image: "fan.png", name: "알리사 100단 아이스 터보 MAX 휴대용 선풍기", desc: "휴대하기 좋은 시원한 바람!", link: "https://link.coupang.com/a/f4hAOwhlJY",store: "coupang" },
{ image: "detergent.png", name: "퍼실 딥클린 초미세세탁 라벤더젤 맥스 드럼용 액체세제 리필", desc: "매일 쓰는 세탁 필수템!", link: "https://link.coupang.com/a/f4hNHk6xxI",store: "coupang" },
{ image: "sofa.png", name: "도모디자인 아르티제 가죽 3인용 소파 + 쿠션 2p 세트 방문설치", desc: "편안한 공간을 위한 쇼파!", link: "https://link.coupang.com/a/f4hUQW1fW0",store: "coupang" },
{ image: "blocks.png", name: "벨베이비 영유아 휠 자석블럭 빅사이즈 35mm, 파스텔, 1개", desc: "재미있게 즐기는 자석블럭!", link: "https://link.coupang.com/a/f4h3dMU2Am",store: "coupang" },   
]
  },
  {
    id: "health",
    name: "건강식품",
    icon: "💊",
    products: [
      { image: "hongsam.png", name: "풍년보감 고려홍삼정 에브리데이100", desc: "간편하게 챙기는 홍삼!", link: "https://toss.im/_m/vbb6F8Nj" },
{ image: "vitaminb.png", name: "대웅제약 임팩타민 비타민B", desc: "하루 한 알 영양 관리!", link: "https://toss.im/_m/9PFwnVr3" },
{ image: "olle.png", name: "Mommy care 올레즙", desc: "상큼하게 챙기는 건강즙!", link: "https://toss.im/_m/7j32F0Ht" },
{ image: "lutein.png", name: "퍼니트 미니 루테인지아잔틴", desc: "간편한 눈 건강 관리!", link: "https://toss.im/_m/xLYkZrH4" }
    ]
  }
];

const specialSlides = [
  [
   { image: "dakgalbi.png", name: "순살 닭갈비 500g × 2개", desc: "매콤하게 즐기는 순살 닭갈비", link: "https://toss.im/_m/rcCpLxri" },
    { image: "aloe.png", name: "알로에베라 모이스처 수딩젤 300ml × 5개", desc: "촉촉하게 채우는 수딩 케어", link: "https://toss.im/_m/BeEOU487" },
    { image: "hongsam.png", name: "풍년보감 고려홍삼정 에브리데이100", desc: "간편하게 챙기는 홍삼!", link: "https://toss.im/_m/vbb6F8Nj" }
  ],
  [
    { image: "cleaner.png", name: "무아스 길이조절 올인원 스탠드 테이블 클리너", desc: "구석구석 간편한 청소!", link: "https://toss.im/_m/zns3g602" },
    { image: "lutein.png", name: "퍼니트 미니 루테인지아잔틴", desc: "간편한 눈 건강 관리!", link: "https://toss.im/_m/xLYkZrH4" },
    { image: "mist.png", name: "닥터멜락신 마이너스 오점칠 오일 미스트 100ml, 1개", desc: "간편한 미스트 케어!", link: "https://toss.im/_m/ZPC8GPAz" }
  ],
  [
    { image: "pizza.png", name: "애슐리 크런치즈엣지 피자", desc: "바삭하고 고소한 치즈 피자!", link: "https://toss.im/_m/JWnXIeLD" },
    { image: "shoes.png", name: "신발 세탁망 그레이 19×39cm, 2개", desc: "신발 세탁을 간편하게!", link: "https://toss.im/_m/fL6eQNbs" },
    { image: "wipes.png", name: "크리넥스 마이비데 클린케어 화장실용 물티슈 40매, 9팩", desc: "깔끔한 욕실 필수템!", link: "https://toss.im/_m/vDaQbRld" }
  ]
];

const specialProducts = document.querySelector("#specialProducts");
const categorySections = document.querySelector("#categorySections");
const specialDots = document.querySelector("#specialDots");
let specialIndex = 0;

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image">
  ${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}
</div>
${product.store === "coupang" ? '<span class="store-badge coupang">쿠팡</span>' : ''}
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <a class="price-link" href="${product.link}" target="_blank" rel="noopener noreferrer sponsored">👉 최저가 보기</a>
    </article>
  `;
}

function renderSpecial() {
  specialProducts.innerHTML = specialSlides[specialIndex].map(productCard).join("");
  [...specialDots.children].forEach((dot, index) => {
    dot.classList.toggle("active", index === specialIndex);
    dot.setAttribute("aria-current", index === specialIndex ? "true" : "false");
  });
}

function renderDots() {
  specialDots.innerHTML = specialSlides.map((_, index) => (
    `<button class="dot ${index === 0 ? "active" : ""}" data-index="${index}" aria-label="${index + 1}번째 특가"></button>`
  )).join("");
}

function renderCategories() {
  categorySections.innerHTML = categories.map(category => `
    <section id="${category.id}" class="category-section ${category.id}">
      <div class="section-heading">
        <h2 class="section-title">
          <span class="title-icon">${category.icon}</span>
          ${category.name}
        </h2>
        <button class="more-button" type="button" data-more="${category.id}">더보기 ›</button>
      </div>
      <div class="product-grid">
        ${category.products.map(productCard).join("")}
      </div>
    </section>
  `).join("");
}

document.querySelector("#prevSpecial").addEventListener("click", () => {
  specialIndex = (specialIndex - 1 + specialSlides.length) % specialSlides.length;
  renderSpecial();
});

document.querySelector("#nextSpecial").addEventListener("click", () => {
  specialIndex = (specialIndex + 1) % specialSlides.length;
  renderSpecial();
});

specialDots.addEventListener("click", event => {
  const dot = event.target.closest(".dot");
  if (!dot) return;
  specialIndex = Number(dot.dataset.index);
  renderSpecial();
});

document.querySelector(".category-nav").addEventListener("click", event => {
  const button = event.target.closest(".nav-button");
  if (!button) return;

  document.querySelectorAll(".nav-button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");

  document.querySelector(`#${button.dataset.target}`).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

categorySections.addEventListener("click", event => {
  const button = event.target.closest("[data-more]");
  if (!button) return;
  alert(`${button.dataset.more} 카테고리 상품을 추가할 예정입니다.`);
});

renderDots();
renderSpecial();
renderCategories();

setInterval(() => {
  specialIndex = (specialIndex + 1) % specialSlides.length;
  renderSpecial();
}, 6000);
