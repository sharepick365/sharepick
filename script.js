const categories = [
  {
    id: "food",
    name: "식품",
    icon: "🍜",
    products: [
      { emoji: "🍜", name: "오뚜기 진라면 매운맛 5개입", desc: "매콤하고 진한 국물!", link: "#" },
      { emoji: "🥫", name: "동원참치 라이트 스탠다드", desc: "담백하고 맛있는 참치!", link: "#" },
      { emoji: "💧", name: "아이시스 8.0 2L 6병", desc: "깨끗하고 깔끔한 물!", link: "#" },
      { emoji: "🥣", name: "포스트 콘푸라이트 600g", desc: "바삭하고 고소한 시리얼!", link: "#" }
    ]
  },
  {
    id: "beauty",
    name: "뷰티",
    icon: "💄",
    products: [
      { emoji: "🧴", name: "라네즈 립 슬리핑 마스크", desc: "입술 각질 케어 & 보습", link: "#" },
      { emoji: "🧪", name: "넘버즈인 3번 결광 세럼", desc: "맑고 건강한 피부 케어", link: "#" },
      { emoji: "☀️", name: "닥터지 브라이트닝 업 선", desc: "자연스러운 톤업을 한 번에", link: "#" },
      { emoji: "🧼", name: "일리윤 세라마이드 워시", desc: "순하고 촉촉한 바디 클렌저", link: "#" }
    ]
  },
  {
    id: "living",
    name: "생활",
    icon: "🏠",
    products: [
      { emoji: "🧻", name: "베베숲 오리지널 물티슈", desc: "부드럽고 도톰한 데일리 물티슈", link: "#" },
      { emoji: "🧽", name: "크리넥스 클린케어", desc: "더 도톰하고 부드러운 사용감", link: "#" },
      { emoji: "🫧", name: "피죤 섬유유연제", desc: "은은한 향과 부드러운 옷감", link: "#" },
      { emoji: "🧺", name: "지퍼백 이지 오픈형", desc: "간편한 보관의 필수 아이템", link: "#" }
    ]
  },
  {
    id: "health",
    name: "건강",
    icon: "💊",
    products: [
      { emoji: "🟩", name: "세노비스 수퍼바이오틱스", desc: "장 건강 & 유산균 관리", link: "#" },
      { emoji: "🟨", name: "락토핏 골드", desc: "장 건강, 온 가족 유산균", link: "#" },
      { emoji: "🍃", name: "GNM 종합비타민 미네랄", desc: "하루 한 알로 영양 밸런스", link: "#" },
      { emoji: "🟥", name: "정관장 홍삼 스틱", desc: "간편하게 챙기는 홍삼", link: "#" }
    ]
  }
];

const specialSlides = [
  [
    { emoji: "🍜", name: "농심 신라면 10개입", desc: "얼큰하고 시원한 국물!", link: "#" },
    { emoji: "🍘", name: "비비고 재래김 16봉", desc: "바삭하고 고소한 김!", link: "#" },
    { emoji: "🥛", name: "매일우유 오리지널 1L", desc: "신선한 1등급 원유!", link: "#" }
  ],
  [
    { emoji: "🍪", name: "초코칩 쿠키 대용량", desc: "달콤하고 바삭한 간식!", link: "#" },
    { emoji: "🧴", name: "세라마이드 바디워시", desc: "민감한 피부도 순하게!", link: "#" },
    { emoji: "💊", name: "루테인 눈 건강 캡슐", desc: "매일 간편한 눈 건강 관리!", link: "#" }
  ],
  [
    { emoji: "🥤", name: "제철 과채 건강즙", desc: "하루 한 포 간편하게!", link: "#" },
    { emoji: "🧻", name: "도톰한 물티슈 80매", desc: "생활 속 필수품!", link: "#" },
    { emoji: "🧺", name: "대용량 지퍼백 세트", desc: "냉장·냉동 보관을 깔끔하게!", link: "#" }
  ]
];

const specialProducts = document.querySelector("#specialProducts");
const categorySections = document.querySelector("#categorySections");
const specialDots = document.querySelector("#specialDots");
let specialIndex = 0;

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image" aria-hidden="true">${product.emoji}</div>
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
