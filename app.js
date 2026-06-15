"use strict";

const WHATSAPP_NUMBER = "992007884423";
const STORAGE_KEY = "tajikset-cart-v1";
const LANGUAGE_KEY = "tajikset-language";
const FORM_KEY = "tajikset-checkout-v1";
const VIEW_KEY = "tajikset-view-v1";

const translations = {
  tg: {
    brandLine: "Электротранспорт",
    heroEyebrow: "Фурӯши онлайн • 24/7",
    heroTitle: "Қувва барои ҳар роҳ.",
    heroText: "Электроскутерҳои боэътимод барои шаҳр, деҳа, кор ва доставка.",
    viewCatalog: "Дидани каталог",
    askWhatsapp: "Савол дар WhatsApp",
    alwaysOpen: "Ҳамеша фаъол",
    alwaysOpenText: "Қабули фармоиш 24/7",
    freeDelivery: "Расонидани ройгон",
    freeDeliveryText: "Дар ҳудуди Душанбе",
    allCountry: "Саросари кишвар",
    allCountryText: "Нарх дар WhatsApp",
    catalogEyebrow: "Интихоби шумо",
    catalogTitle: "Электроскутерҳо",
    productsCount: "модел",
    searchPlaceholder: "Ҷустуҷӯи модел...",
    filterAll: "Ҳама",
    filterPromo: "Аксия",
    filterCity: "Барои шаҳр",
    filterDelivery: "Барои доставка",
    filterPower: "Пурқувват",
    popularEyebrow: "Тавсияи мо",
    popularTitle: "Моделҳои машҳур",
    shareProduct: "Моделро мубодила кунед",
    shared: "Пайванд нусхабардорӣ шуд",
    invalidPhone: "Рақами телефонро пурра нависед",
    invalidAddress: "Суроғаи пурраро нависед",
    whatsappBlocked: "WhatsApp кушода нашуд. Ба браузер иҷозат диҳед.",
    back: "Қафо",
    addShort: "Ба сабад",
    chooseShort: "Интихоб",
    nothingFound: "Ҳеҷ чиз ёфт нашуд",
    tryAnother: "Номи дигарро нависед ё филтрро иваз кунед.",
    simpleOrder: "Осон ва зуд",
    howTitle: "Чӣ тавр фармоиш диҳем?",
    step1Title: "Моделро интихоб кунед",
    step1Text: "Хусусиятҳо ва варианти мувофиқро бинед.",
    step2Title: "Маълумотро пур кунед",
    step2Text: "Ном, рақам ва суроғаи расонидан.",
    step3Title: "Ба WhatsApp фиристед",
    step3Text: "Фармоиши тайёр ба оператор меравад.",
    footerLine: "Қувва. Эътимод. Ҳаракат.",
    cart: "Сабад",
    chooseVariant: "Интихоби аккумулятор",
    price: "Нарх",
    addToCart: "Ба сабад",
    yourOrder: "Фармоиши шумо",
    cartEmpty: "Сабад ҳоло холӣ аст",
    cartEmptyText: "Модели писандро аз каталог илова кунед.",
    backToCatalog: "Ба каталог",
    deliveryDetails: "Маълумоти расонидан",
    dushanbe: "Душанбе",
    free: "Ройгон",
    regions: "Дигар шаҳру ноҳияҳо",
    agreeWhatsapp: "Нарх дар WhatsApp",
    name: "Ном",
    namePlaceholder: "Номи шумо",
    phone: "Телефон",
    address: "Суроға",
    addressPlaceholder: "Шаҳр, кӯча, хона",
    comment: "Шарҳ",
    commentPlaceholder: "Ранг ё маълумоти иловагӣ",
    payment: "Пардохт",
    paymentText: "Интиқоли маблағ пас аз тасдиқи оператор",
    productsTotal: "Ҷамъи молҳо",
    delivery: "Расонидан",
    sendOrder: "Фиристодан ба WhatsApp",
    added: "Ба сабад илова шуд",
    removed: "Аз сабад хориҷ шуд",
    from: "аз",
    promo: "Аксия",
    limited: "Миқдор маҳдуд",
    newModel: "Модели 2026",
    motor: "Муҳаррик",
    speed: "Суръат",
    range: "Масофа",
    load: "Борбардорӣ",
    orderTitle: "Салом! Мехоҳам аз TAJIKSET фармоиш диҳам:",
    orderTotal: "Ҷамъ",
    orderDeliveryDushanbe: "Расонидан: Душанбе — ройгон",
    orderDeliveryRegions: "Расонидан: дигар шаҳру ноҳия — нархро мувофиқа мекунем",
    orderCustomer: "Маълумоти харидор",
    orderPayment: "Пардохт: интиқоли маблағ",
    variant: "Вариант",
    units: "дона"
  },
  ru: {
    brandLine: "Электротранспорт",
    heroEyebrow: "Интернет-магазин • 24/7",
    heroTitle: "Энергия для любого пути.",
    heroText: "Надёжные электроскутеры для города, села, работы и доставки.",
    viewCatalog: "Смотреть каталог",
    askWhatsapp: "Спросить в WhatsApp",
    alwaysOpen: "Всегда на связи",
    alwaysOpenText: "Принимаем заказы 24/7",
    freeDelivery: "Бесплатная доставка",
    freeDeliveryText: "В пределах Душанбе",
    allCountry: "По всей стране",
    allCountryText: "Цена в WhatsApp",
    catalogEyebrow: "Выберите свой",
    catalogTitle: "Электроскутеры",
    productsCount: "моделей",
    searchPlaceholder: "Найти модель...",
    filterAll: "Все",
    filterPromo: "Акция",
    filterCity: "Для города",
    filterDelivery: "Для доставки",
    filterPower: "Мощные",
    popularEyebrow: "Наш выбор",
    popularTitle: "Популярные модели",
    shareProduct: "Поделиться моделью",
    shared: "Ссылка скопирована",
    invalidPhone: "Введите полный номер телефона",
    invalidAddress: "Введите полный адрес",
    whatsappBlocked: "WhatsApp не открылся. Разрешите всплывающие окна.",
    back: "Назад",
    addShort: "В корзину",
    chooseShort: "Выбрать",
    nothingFound: "Ничего не найдено",
    tryAnother: "Попробуйте другое название или фильтр.",
    simpleOrder: "Просто и быстро",
    howTitle: "Как сделать заказ?",
    step1Title: "Выберите модель",
    step1Text: "Посмотрите характеристики и выберите вариант.",
    step2Title: "Заполните данные",
    step2Text: "Имя, телефон и адрес доставки.",
    step3Title: "Отправьте в WhatsApp",
    step3Text: "Готовый заказ получит наш оператор.",
    footerLine: "Сила. Надёжность. Движение.",
    cart: "Корзина",
    chooseVariant: "Выберите аккумулятор",
    price: "Цена",
    addToCart: "В корзину",
    yourOrder: "Ваш заказ",
    cartEmpty: "Корзина пока пустая",
    cartEmptyText: "Добавьте понравившуюся модель из каталога.",
    backToCatalog: "В каталог",
    deliveryDetails: "Данные для доставки",
    dushanbe: "Душанбе",
    free: "Бесплатно",
    regions: "Другие города и районы",
    agreeWhatsapp: "Цена в WhatsApp",
    name: "Имя",
    namePlaceholder: "Ваше имя",
    phone: "Телефон",
    address: "Адрес",
    addressPlaceholder: "Город, улица, дом",
    comment: "Комментарий",
    commentPlaceholder: "Цвет или дополнительная информация",
    payment: "Оплата",
    paymentText: "Перевод после подтверждения оператора",
    productsTotal: "Сумма товаров",
    delivery: "Доставка",
    sendOrder: "Отправить в WhatsApp",
    added: "Добавлено в корзину",
    removed: "Удалено из корзины",
    from: "от",
    promo: "Акция",
    limited: "Количество ограничено",
    newModel: "Модель 2026",
    motor: "Мотор",
    speed: "Скорость",
    range: "Запас хода",
    load: "Нагрузка",
    orderTitle: "Здравствуйте! Хочу оформить заказ в TAJIKSET:",
    orderTotal: "Итого",
    orderDeliveryDushanbe: "Доставка: Душанбе — бесплатно",
    orderDeliveryRegions: "Доставка: другой город или район — стоимость согласуем",
    orderCustomer: "Данные покупателя",
    orderPayment: "Оплата: перевод",
    variant: "Вариант",
    units: "шт."
  }
};

const products = [
  {
    id: 1,
    image: "images/products/product-01.webp",
    title: { tg: "Электроскутер SK 2026 — 500W", ru: "Электроскутер SK 2026 — 500W" },
    description: {
      tg: "Модели бароҳат барои ду нафар, роҳҳои шаҳр ва истифодаи ҳаррӯза.",
      ru: "Удобная модель на двоих для города и ежедневных поездок."
    },
    power: "500W", speed: "40–50 км/с", range: "30–40 км", load: "130–150 кг",
    price: 2199, tags: ["promo", "city"], label: "promo",
    specs: {
      tg: ["Контроллер M20", "Шинаҳои калон", "Тормози дискӣ", "Чароғҳои LED", "Барои 2 нафар", "Пуршавии осон дар хона"],
      ru: ["Контроллер M20", "Большие колёса", "Дисковые тормоза", "LED-фары", "Для двух человек", "Простая зарядка дома"]
    }
  },
  {
    id: 2,
    image: "images/products/product-02.webp",
    title: { tg: "Электроскутер M4 2026", ru: "Электроскутер M4 2026" },
    description: {
      tg: "Муҳаррики мисии пурқувват барои кор, тиҷорат ва доставка.",
      ru: "Мощный медный мотор для работы, бизнеса и доставки."
    },
    power: "1500W", speed: "то 100 км/с", range: "то 80 км", load: "баланд",
    price: 5999, tags: ["delivery", "power"], label: "newModel",
    specs: {
      tg: ["6 аккумулятори A+", "Мозги интеллектуалӣ", "Кашиши баланд", "Сарфаи энергия", "Пуркунии осон дар хона", "Мувофиқ барои доставка"],
      ru: ["6 аккумуляторов A+", "Умный контроллер", "Высокая тяга", "Экономичный расход", "Зарядка дома", "Подходит для доставки"]
    }
  },
  {
    id: 3,
    image: "images/products/product-03.webp",
    title: { tg: "Электроскутери пурқувват 2026", ru: "Мощный электроскутер 2026" },
    description: {
      tg: "Мотори мисии аслӣ ва масофаи калон барои кори фаъол.",
      ru: "Оригинальный медный мотор и большой запас хода для активной работы."
    },
    power: "1500W", speed: "то 100 км/с", range: "80–90 км", load: "баланд",
    price: 6199, tags: ["delivery", "power"], label: "newModel",
    specs: {
      tg: ["6 аккумулятори 20Ah", "Мозги интеллектуалӣ", "Мотори мисии аслӣ", "Барои кор ва тиҷорат", "Сарфаи маблағ", "Пуркунии осон"],
      ru: ["6 аккумуляторов 20Ah", "Умный контроллер", "Оригинальный медный мотор", "Для работы и бизнеса", "Экономичная эксплуатация", "Простая зарядка"]
    }
  },
  {
    id: 4,
    image: "images/products/product-04.webp",
    title: { tg: "Электроскутер SK 2026 — 600W", ru: "Электроскутер SK 2026 — 600W" },
    description: {
      tg: "SK бо муҳаррики 600W, чароғҳои LED ва ҷой барои ду нафар.",
      ru: "SK с мотором 600W, LED-фарами и местом для двоих."
    },
    power: "600W", speed: "40–50 км/с", range: "30–40 км", load: "130–150 кг",
    price: 2199, tags: ["promo", "city"], label: "promo",
    specs: {
      tg: ["Контроллер M20 600", "Шинаҳои калон", "Тормози дискӣ", "Чароғҳои LED", "Барои 2 нафар", "Пуршавӣ дар хона"],
      ru: ["Контроллер M20 600", "Большие колёса", "Дисковые тормоза", "LED-фары", "Для двух человек", "Домашняя зарядка"]
    }
  },
  {
    id: 5,
    image: "images/products/product-05.webp?v=20260616-2",
    title: { tg: "Электроскутер 60V/20Ah", ru: "Электроскутер 60V/20Ah" },
    description: {
      tg: "Модели сарфакор ва боэътимод барои истифодаи ҳаррӯза.",
      ru: "Экономичная и надёжная модель для ежедневного использования."
    },
    power: "800W", speed: "то 60 км/с", range: "то 70 км", load: "180–200 кг",
    price: 3699, tags: ["city"], label: "newModel",
    specs: {
      tg: ["Аккумулятор 60V/20Ah", "5 аккумулятори A+", "Smart Controller", "Пуршавӣ 4–5 соат", "2 калид + 2 пулт", "Барои шаҳр ва ноҳияҳо"],
      ru: ["Аккумулятор 60V/20Ah", "5 аккумуляторов A+", "Smart Controller", "Зарядка 4–5 часов", "2 ключа + 2 пульта", "Для города и районов"]
    }
  },
  {
    id: 6,
    image: "images/products/product-06.webp",
    title: { tg: "Electric Scooter — 800W", ru: "Electric Scooter — 800W" },
    description: {
      tg: "Скутери компактӣ бо шинаҳои off-road ва амортизатсияи дугона.",
      ru: "Компактный скутер с off-road колёсами и двойной подвеской."
    },
    power: "800W", speed: "35–50 км/с", range: "35–45 км", load: "120–140 кг",
    price: 3499, tags: ["city"], label: "newModel",
    specs: {
      tg: ["Brushless Motor", "48V Lithium Battery (BMS)", "Smart M800 Eco / Sport", "Пуршавӣ 4–5 соат", "Dual Suspension", "Шинаҳои 10” Off-road"],
      ru: ["Brushless Motor", "48V Lithium Battery (BMS)", "Smart M800 Eco / Sport", "Зарядка 4–5 часов", "Dual Suspension", "Колёса 10” Off-road"]
    }
  },
  {
    id: 7,
    image: "images/products/product-07.webp",
    title: { tg: "DEMASH 2026 — 2500W", ru: "DEMASH 2026 — 2500W" },
    description: {
      tg: "Модели варзишии хеле пурқувват бо комплекти бой ва кафолат.",
      ru: "Очень мощная спортивная модель с богатой комплектацией и гарантией."
    },
    power: "2500W", speed: "то 90 км/с", range: "80–100 км", load: "250–270 кг",
    price: 5999, tags: ["delivery", "power"], label: "newModel",
    specs: {
      tg: ["72V / 20.3Ah — 6 A+", "Fast Charge", "Багажники паҳлӯӣ", "Панели рақамӣ", "Чароғҳои LED", "1 сол кафолат ба корпус"],
      ru: ["72V / 20.3Ah — 6 A+", "Fast Charge", "Боковые багажники", "Цифровая панель", "LED-фары", "1 год гарантии на корпус"]
    }
  },
  {
    id: 8,
    image: "images/products/product-08.webp",
    title: { tg: "DEMANSH 2026 — 2000W", ru: "DEMANSH 2026 — 2000W" },
    description: {
      tg: "Барои шаҳр, деҳа ва доставка. Ду варианти аккумулятор дорад.",
      ru: "Для города, села и доставки. Доступен с двумя аккумуляторами."
    },
    power: "2000W", speed: "то 80 км/с", range: "то 80 км", load: "200–250 кг",
    price: 3900, tags: ["delivery", "power"], label: "limited",
    variants: [
      { id: "60v", name: "60V / 20Ah", price: 3900 },
      { id: "72v", name: "72V / 20Ah", price: 4599 }
    ],
    specs: {
      tg: ["Контроллер M20 2000", "Пуршавӣ 4 соат", "Шинаҳои калон", "Тормози дискӣ", "Чароғҳои LED", "Барои 2 нафар"],
      ru: ["Контроллер M20 2000", "Зарядка 4 часа", "Большие колёса", "Дисковые тормоза", "LED-фары", "Для двух человек"]
    }
  },
  {
    id: 9,
    image: "images/products/product-09.webp",
    title: { tg: "Электроскутери спортӣ 2026", ru: "Спортивный электроскутер 2026" },
    description: {
      tg: "Модели варзишӣ бо се варианти аккумулятор ва нархи аксионӣ.",
      ru: "Спортивная модель с тремя аккумуляторами и акционной ценой."
    },
    power: "1000W", speed: "то 80 км/с", range: "80–90 км", load: "180–200 кг",
    price: 3200, tags: ["promo", "city"], label: "limited",
    variants: [
      { id: "48v", name: "48V / 20Ah", price: 3200 },
      { id: "60v", name: "60V / 20Ah", price: 3700 },
      { id: "72v", name: "72V / 20Ah", price: 4399 }
    ],
    specs: {
      tg: ["Контроллер M20 1000", "Пуршавӣ 4 соат", "Шинаҳои калон", "Тормози дискӣ", "Чароғҳои LED", "Барои 2 нафар"],
      ru: ["Контроллер M20 1000", "Зарядка 4 часа", "Большие колёса", "Дисковые тормоза", "LED-фары", "Для двух человек"]
    }
  },
  {
    id: 10,
    image: "images/products/product-10.webp?v=20260616-2",
    title: { tg: "Электроскутер SK 2026 — 600W", ru: "Электроскутер SK 2026 — 600W" },
    description: {
      tg: "Модели SK барои шаҳр ва деҳа бо нархи махсус ва миқдори маҳдуд.",
      ru: "Модель SK для города и села по специальной цене, количество ограничено."
    },
    power: "600W", speed: "то 50 км/с", range: "30–40 км", load: "130–150 кг",
    price: 2199, tags: ["promo", "city"], label: "limited",
    specs: {
      tg: ["Контроллер M20 600", "Пуршавӣ дар хона", "Шинаҳои калон", "Тормози дискӣ", "Чароғҳои LED", "Барои 2 нафар"],
      ru: ["Контроллер M20 600", "Домашняя зарядка", "Большие колёса", "Дисковые тормоза", "LED-фары", "Для двух человек"]
    }
  }
];

const state = {
  language: localStorage.getItem(LANGUAGE_KEY) || "tg",
  filter: "all",
  query: "",
  viewMode: localStorage.getItem(VIEW_KEY) || "grid",
  cart: loadCart(),
  modalProductId: null,
  modalVariantId: null
};

const elements = {
  grid: document.getElementById("productGrid"),
  count: document.getElementById("resultCount"),
  empty: document.getElementById("emptyState"),
  search: document.getElementById("searchInput"),
  clearSearch: document.getElementById("clearSearch"),
  filters: document.getElementById("filters"),
  popularList: document.getElementById("popularList"),
  viewToggle: document.getElementById("viewToggle"),
  productModal: document.getElementById("productModal"),
  modalImage: document.getElementById("modalImage"),
  modalLabel: document.getElementById("modalLabel"),
  modalKicker: document.getElementById("modalKicker"),
  modalTitle: document.getElementById("modalProductTitle"),
  modalDescription: document.getElementById("modalDescription"),
  modalQuickSpecs: document.getElementById("modalQuickSpecs"),
  modalVariantBlock: document.getElementById("modalVariantBlock"),
  modalVariants: document.getElementById("modalVariants"),
  modalSpecs: document.getElementById("modalSpecs"),
  modalPrice: document.getElementById("modalPrice"),
  modalAddButton: document.getElementById("modalAddButton"),
  shareProduct: document.getElementById("shareProduct"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartItems: document.getElementById("cartItems"),
  cartEmpty: document.getElementById("cartEmpty"),
  checkoutForm: document.getElementById("checkoutForm"),
  deliveryCost: document.getElementById("deliveryCost"),
  floatingCart: document.querySelector(".floating-cart"),
  toast: document.getElementById("toast")
};

let lastFocusedElement = null;

function t(key) {
  return translations[state.language][key] || key;
}

function money(value) {
  return `${new Intl.NumberFormat(state.language === "ru" ? "ru-RU" : "tg-TJ").format(value)} сомонӣ`;
}

function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function getVariant(product, variantId) {
  return product.variants?.find(variant => variant.id === variantId) || product.variants?.[0] || null;
}

function productPrice(product, variantId) {
  return getVariant(product, variantId)?.price || product.price;
}

function activeLabel(product) {
  return t(product.label);
}

function renderProducts() {
  const query = state.query.trim().toLocaleLowerCase();
  const filtered = products.filter(product => {
    const searchable = [
      product.title.tg,
      product.title.ru,
      product.description.tg,
      product.description.ru,
      product.power,
      ...product.specs.tg,
      ...product.specs.ru
    ].join(" ").toLocaleLowerCase();
    const matchesSearch = !query || searchable.includes(query);
    const matchesFilter = state.filter === "all" || product.tags.includes(state.filter);
    return matchesSearch && matchesFilter;
  });

  elements.grid.innerHTML = filtered.map(product => {
    const hasVariants = Boolean(product.variants?.length);
    return `
      <article class="product-card reveal" data-product-id="${product.id}" tabindex="0" aria-label="${escapeHtml(product.title[state.language])}">
        <div class="product-image">
          <img src="${product.image}" alt="${escapeHtml(product.title[state.language])}" loading="lazy" width="1000" height="1000">
          <span class="product-label">${activeLabel(product)}</span>
        </div>
        <div class="product-content">
          <span class="product-kicker">TAJIKSET • ${product.power}</span>
          <h3>${escapeHtml(product.title[state.language])}</h3>
          <p>${escapeHtml(product.description[state.language])}</p>
          <div class="card-specs">
            <span>${product.speed}</span>
            <span>${product.range}</span>
          </div>
          <div class="card-footer">
            <div class="card-price">
              <small>${hasVariants ? t("from") : t("price")}</small>
              <strong>${money(product.price)}</strong>
            </div>
            <button class="add-button" type="button" data-quick-add="${product.id}" aria-label="${hasVariants ? t("chooseShort") : t("addToCart")}">
              <span class="add-button-icon">${hasVariants ? "›" : "+"}</span>
              <span class="add-button-text">${hasVariants ? t("chooseShort") : t("addShort")}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  elements.count.textContent = filtered.length;
  elements.empty.hidden = filtered.length > 0;
  elements.grid.classList.toggle("list-view", state.viewMode === "list");
  elements.viewToggle.setAttribute("aria-pressed", String(state.viewMode === "list"));
  observeReveals();
}

function renderPopularProducts() {
  const popular = [7, 8, 9, 2].map(getProduct).filter(Boolean);
  elements.popularList.innerHTML = popular.map(product => `
    <article class="product-card" data-product-id="${product.id}" tabindex="0" aria-label="${escapeHtml(product.title[state.language])}">
      <div class="product-image">
        <img src="${product.image}" alt="${escapeHtml(product.title[state.language])}" loading="lazy" width="1000" height="1000">
        <span class="product-label">${activeLabel(product)}</span>
      </div>
      <div class="product-content">
        <span class="product-kicker">TAJIKSET • ${product.power}</span>
        <h3>${escapeHtml(product.title[state.language])}</h3>
        <div class="card-footer">
          <div class="card-price"><small>${product.variants ? t("from") : t("price")}</small><strong>${money(product.price)}</strong></div>
          <button class="add-button" type="button" data-quick-add="${product.id}" aria-label="${product.variants ? t("chooseShort") : t("addToCart")}">
            <span class="add-button-icon">${product.variants ? "›" : "+"}</span>
            <span class="add-button-text">${product.variants ? t("chooseShort") : t("addShort")}</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem(LANGUAGE_KEY, language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  renderProducts();
  renderPopularProducts();
  renderCart();
  if (state.modalProductId) openProduct(state.modalProductId, state.modalVariantId, false);
}

function openProduct(productId, variantId = null, shouldOpen = true) {
  const product = getProduct(productId);
  if (!product) return;
  const variant = getVariant(product, variantId);
  state.modalProductId = product.id;
  state.modalVariantId = variant?.id || null;

  elements.modalImage.src = product.image;
  elements.modalImage.alt = product.title[state.language];
  elements.modalLabel.textContent = activeLabel(product);
  elements.modalKicker.textContent = `TAJIKSET • ${product.power}`;
  elements.modalTitle.textContent = product.title[state.language];
  elements.modalDescription.textContent = product.description[state.language];
  elements.modalQuickSpecs.innerHTML = `
    <span>${product.power}<small>${t("motor")}</small></span>
    <span>${product.speed}<small>${t("speed")}</small></span>
    <span>${product.range}<small>${t("range")}</small></span>
  `;
  elements.modalSpecs.innerHTML = [
    `${t("load")}: ${product.load}`,
    ...product.specs[state.language]
  ].map(spec => `<li>${escapeHtml(spec)}</li>`).join("");

  if (product.variants?.length) {
    elements.modalVariantBlock.hidden = false;
    elements.modalVariants.innerHTML = product.variants.map(item => `
      <button class="variant-button ${item.id === state.modalVariantId ? "active" : ""}" type="button" data-variant-id="${item.id}">
        ${item.name}<small>${money(item.price)}</small>
      </button>
    `).join("");
  } else {
    elements.modalVariantBlock.hidden = true;
    elements.modalVariants.innerHTML = "";
  }

  elements.modalPrice.textContent = money(productPrice(product, state.modalVariantId));
  if (shouldOpen) openOverlay(elements.productModal);
}

function closeProduct() {
  closeOverlay(elements.productModal);
  setTimeout(() => {
    state.modalProductId = null;
    state.modalVariantId = null;
  }, 250);
}

function quickAdd(productId) {
  const product = getProduct(productId);
  if (!product) return;
  if (product.variants?.length) {
    openProduct(product.id);
    return;
  }
  addToCart(product.id, null);
}

function addToCart(productId, variantId) {
  const product = getProduct(productId);
  if (!product) return;
  const variant = getVariant(product, variantId);
  const normalizedVariantId = variant?.id || null;
  const key = `${product.id}:${normalizedVariantId || "default"}`;
  const existing = state.cart.find(item => item.key === key);

  if (existing) existing.quantity += 1;
  else state.cart.push({ key, productId: product.id, variantId: normalizedVariantId, quantity: 1 });

  saveCart();
  renderCart();
  showToast(t("added"));
}

function changeQuantity(key, delta) {
  const item = state.cart.find(cartItem => cartItem.key === key);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) state.cart = state.cart.filter(cartItem => cartItem.key !== key);
  saveCart();
  renderCart();
}

function removeFromCart(key) {
  state.cart = state.cart.filter(item => item.key !== key);
  saveCart();
  renderCart();
  showToast(t("removed"));
}

function cartTotals() {
  return state.cart.reduce((result, item) => {
    const product = getProduct(item.productId);
    if (!product) return result;
    result.count += item.quantity;
    result.total += productPrice(product, item.variantId) * item.quantity;
    return result;
  }, { count: 0, total: 0 });
}

function renderCart() {
  const totals = cartTotals();
  elements.cartItems.innerHTML = state.cart.map(item => {
    const product = getProduct(item.productId);
    if (!product) return "";
    const variant = getVariant(product, item.variantId);
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${escapeHtml(product.title[state.language])}">
        <div class="cart-item-main">
          <strong>${escapeHtml(product.title[state.language])}</strong>
          <small>${variant ? `${variant.name} • ` : ""}${money(productPrice(product, item.variantId))}</small>
          <div class="quantity">
            <button type="button" data-quantity="${item.key}" data-delta="-1" aria-label="−">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="${item.key}" data-delta="1" aria-label="+">+</button>
          </div>
        </div>
        <button class="remove-item" type="button" data-remove-item="${item.key}" aria-label="×">×</button>
      </article>
    `;
  }).join("");

  elements.cartEmpty.hidden = totals.count > 0;
  elements.checkoutForm.hidden = totals.count === 0;
  document.querySelectorAll("[data-cart-count]").forEach(node => node.textContent = totals.count);
  document.querySelectorAll("[data-cart-total], [data-checkout-total]").forEach(node => node.textContent = money(totals.total));
  elements.floatingCart.classList.toggle("visible", totals.count > 0);
}

function openCart() {
  renderCart();
  openOverlay(elements.cartDrawer);
}

function closeCart() {
  closeOverlay(elements.cartDrawer);
}

function openOverlay(element) {
  lastFocusedElement = document.activeElement;
  element.removeAttribute("inert");
  element.classList.add("open");
  element.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  setTimeout(() => element.querySelector(".modal-close, button, [href], input, textarea, [tabindex]")?.focus(), 30);
}

function closeOverlay(element) {
  element.classList.remove("open");
  element.setAttribute("aria-hidden", "true");
  lastFocusedElement?.focus?.();
  element.setAttribute("inert", "");
  if (!document.querySelector(".modal.open, .cart-drawer.open")) document.body.classList.remove("locked");
}

function saveCheckoutForm() {
  const data = Object.fromEntries(new FormData(elements.checkoutForm).entries());
  localStorage.setItem(FORM_KEY, JSON.stringify(data));
}

function restoreCheckoutForm() {
  try {
    const data = JSON.parse(localStorage.getItem(FORM_KEY));
    if (!data) return;
    Object.entries(data).forEach(([name, value]) => {
      const fields = elements.checkoutForm.elements[name];
      if (!fields) return;
      if (fields instanceof RadioNodeList) {
        [...fields].forEach(field => field.checked = field.value === value);
      } else {
        fields.value = value;
      }
    });
  } catch {
    localStorage.removeItem(FORM_KEY);
  }
}

function validateCheckout() {
  const phone = elements.checkoutForm.elements.phone;
  const address = elements.checkoutForm.elements.address;
  const digits = phone.value.replace(/\D/g, "");
  phone.setCustomValidity(digits.length >= 9 ? "" : t("invalidPhone"));
  address.setCustomValidity(address.value.trim().length >= 5 ? "" : t("invalidAddress"));
  const valid = elements.checkoutForm.reportValidity();
  if (!valid) elements.checkoutForm.querySelector(":invalid")?.scrollIntoView({ behavior: "smooth", block: "center" });
  return valid;
}

function sendOrder(event) {
  event.preventDefault();
  if (!state.cart.length) return;
  if (!validateCheckout()) return;
  saveCheckoutForm();
  const form = new FormData(elements.checkoutForm);
  const zone = form.get("deliveryZone");
  const lines = [t("orderTitle"), ""];

  state.cart.forEach(item => {
    const product = getProduct(item.productId);
    if (!product) return;
    const variant = getVariant(product, item.variantId);
    const variantText = variant ? ` (${t("variant")}: ${variant.name})` : "";
    lines.push(`• ${product.title[state.language]}${variantText}`);
    lines.push(`  ${item.quantity} ${t("units")} × ${money(productPrice(product, item.variantId))} = ${money(productPrice(product, item.variantId) * item.quantity)}`);
  });

  lines.push("");
  lines.push(`${t("orderTotal")}: ${money(cartTotals().total)}`);
  lines.push(zone === "dushanbe" ? t("orderDeliveryDushanbe") : t("orderDeliveryRegions"));
  lines.push(t("orderPayment"));
  lines.push("");
  lines.push(`${t("orderCustomer")}:`);
  lines.push(`${t("name")}: ${form.get("name")}`);
  lines.push(`${t("phone")}: ${form.get("phone")}`);
  lines.push(`${t("address")}: ${form.get("address")}`);
  if (form.get("comment")) lines.push(`${t("comment")}: ${form.get("comment")}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  const opened = window.open(url, "_blank", "noopener");
  if (!opened) showToast(t("whatsappBlocked"));
}

async function shareCurrentProduct() {
  const product = getProduct(state.modalProductId);
  if (!product) return;
  const url = new URL(window.location.href);
  url.hash = `product-${product.id}`;
  const data = {
    title: product.title[state.language],
    text: `${product.title[state.language]} — ${money(productPrice(product, state.modalVariantId))}`,
    url: url.toString()
  };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(`${data.text}\n${data.url}`);
      showToast(t("shared"));
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast(t("shared"));
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("show"), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let revealObserver;
function observeReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(node => node.classList.add("visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach(node => revealObserver.observe(node));
  clearTimeout(observeReveals.fallback);
  observeReveals.fallback = setTimeout(() => {
    document.querySelectorAll(".reveal").forEach(node => node.classList.add("visible"));
  }, 900);
}

document.addEventListener("click", event => {
  const langButton = event.target.closest("[data-lang]");
  if (langButton) setLanguage(langButton.dataset.lang);

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    elements.filters.querySelectorAll(".filter-button").forEach(button => button.classList.toggle("active", button === filterButton));
    renderProducts();
  }

  const quickButton = event.target.closest("[data-quick-add]");
  if (quickButton) {
    event.stopPropagation();
    quickAdd(quickButton.dataset.quickAdd);
    return;
  }

  const productCard = event.target.closest("[data-product-id]");
  if (productCard) openProduct(productCard.dataset.productId);

  if (event.target.closest("[data-close-product]")) closeProduct();
  if (event.target.closest("[data-open-cart]")) openCart();
  if (event.target.closest("[data-close-cart]")) closeCart();

  const variantButton = event.target.closest("[data-variant-id]");
  if (variantButton && state.modalProductId) {
    openProduct(state.modalProductId, variantButton.dataset.variantId, false);
  }

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.delta));

  const removeButton = event.target.closest("[data-remove-item]");
  if (removeButton) removeFromCart(removeButton.dataset.removeItem);

  const popularScroll = event.target.closest("[data-popular-scroll]");
  if (popularScroll) {
    elements.popularList.scrollBy({
      left: Number(popularScroll.dataset.popularScroll) * Math.min(360, elements.popularList.clientWidth * .82),
      behavior: "smooth"
    });
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (elements.productModal.classList.contains("open")) closeProduct();
    if (elements.cartDrawer.classList.contains("open")) closeCart();
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-product-id]")) {
    event.preventDefault();
    openProduct(event.target.dataset.productId);
  }
});

elements.search.addEventListener("input", event => {
  state.query = event.target.value;
  event.target.closest(".search-box").classList.toggle("has-value", Boolean(state.query));
  renderProducts();
});

elements.clearSearch.addEventListener("click", () => {
  elements.search.value = "";
  elements.search.dispatchEvent(new Event("input"));
  elements.search.focus();
});

elements.modalAddButton.addEventListener("click", () => {
  if (!state.modalProductId) return;
  addToCart(state.modalProductId, state.modalVariantId);
});

elements.shareProduct.addEventListener("click", shareCurrentProduct);

elements.viewToggle.addEventListener("click", () => {
  state.viewMode = state.viewMode === "grid" ? "list" : "grid";
  localStorage.setItem(VIEW_KEY, state.viewMode);
  renderProducts();
});

elements.checkoutForm.addEventListener("submit", sendOrder);
elements.checkoutForm.addEventListener("input", saveCheckoutForm);
elements.checkoutForm.addEventListener("change", event => {
  if (event.target.name !== "deliveryZone") return;
  const isDushanbe = event.target.value === "dushanbe";
  elements.deliveryCost.textContent = isDushanbe ? t("free") : t("agreeWhatsapp");
  elements.deliveryCost.dataset.i18n = isDushanbe ? "free" : "agreeWhatsapp";
});

restoreCheckoutForm();
setLanguage(state.language);
observeReveals();

const initialProduct = window.location.hash.match(/^#product-(\d+)$/)?.[1];
if (initialProduct) openProduct(initialProduct);
