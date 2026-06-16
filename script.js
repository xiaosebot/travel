const img = (name) => `assets/images/${name}.jpg`;

const mapsUrl = (name, mode = "w") =>
  `https://maps.apple.com/?q=${encodeURIComponent(`${name} 哈尔滨`)}&dirflg=${mode}`;

const overviewStats = [
  ["▣", "5 Days", "4 Nights"],
  ["⌖", "9 Spots", "6 Restaurants"],
  ["⌁", "2 Ferries", "1 Cable Car"],
  ["♡", "57,321", "Estimated Steps"],
  ["¥", "2,800", "Estimated Budget"],
  ["☕", "5 Coffee", "Slow breaks"]
];

const days = [
  {
    day: 1,
    date: "6.22 SUN",
    title: "Arrival & Night Walk",
    cn: "抵达与夜游",
    quote: "第一晚不安排复杂动线，只把哈尔滨最漂亮的夜色放在脚边。",
    image: img("sophia"),
    routeKey: "walk",
    memory: ["去了 5 个地方", "吃了 1 家店", "约 8,600 步", "18°-26° 晴"],
    timeline: [
      ["16:00", "抵达哈尔滨", "机场直接打车，不坐机场大巴。"],
      ["17:20", "酒店休息", "入住、洗漱、补水，先恢复体力。"],
      ["18:30", "圣索菲亚教堂", "蓝调时刻拍夜景，外观比内部更值得。"],
      ["19:15", "中央大街", "慢慢走，第一根马迭尔冰棍安排在这里。"],
      ["20:20", "防洪纪念塔与江边", "看松花江边夜色，走到斯大林公园。"],
      ["21:00", "塔道斯晚餐", "俄式西餐轻松收尾，点经典菜即可。"]
    ],
    transport: [
      ["推荐", "🚕 打车", "45-60 分钟", "70-90 元", "行李多，最省体力"],
      ["夜游", "🚶 步行", "全程约 2.4km", "0 元", "景点密集，夜景连贯"],
      ["备选", "🚇 地铁", "不推荐", "3-5 元", "第一晚换乘意义不大"]
    ],
    tips: ["第一晚全部步行", "不买俄罗斯食品", "夜景比白天更漂亮", "外套带薄款即可"],
    places: ["圣索菲亚教堂", "中央大街"],
    meal: "晚餐"
  },
  {
    day: 2,
    date: "6.23 MON",
    title: "Old Harbin",
    cn: "老哈尔滨",
    quote: "早市、老街、巴洛克和东北菜，今天适合把城市的烟火气放慢看。",
    image: img("food"),
    routeKey: "food",
    memory: ["去了 4 个地方", "吃了 2 家店", "约 12,400 步", "19°-28° 晴"],
    timeline: [
      ["08:30", "红专街早市", "少量尝鲜，不要吃太撑。"],
      ["10:30", "中央大街", "补拍白天建筑细节。"],
      ["11:30", "秋林里道斯", "只买当天吃的，纪念品留到第 5 天。"],
      ["12:30", "东北菜午餐", "两个人 3 个菜足够。"],
      ["16:20", "中华巴洛克", "16 点以后光线更柔，适合街巷照片。"],
      ["19:00", "烧烤晚餐", "金刚山或附近烧烤，不要点太多。"]
    ],
    transport: [
      ["推荐", "🚶 步行", "8-18 分钟/段", "0 元", "核心区域距离短"],
      ["备选", "🚕 打车", "10-15 分钟", "15-25 元", "去中华巴洛克可省体力"],
      ["备选", "🚇 地铁", "15-25 分钟", "2-3 元", "适合跨区但不如打车直接"]
    ],
    tips: ["老厨家避开饭点", "东北菜分量大", "巴洛克傍晚拍照", "咖啡作为体力缓冲"],
    places: ["中央大街", "中华巴洛克"],
    meal: "午餐"
  },
  {
    day: 3,
    date: "6.24 TUE",
    title: "River Day",
    cn: "江边与太阳岛",
    quote: "The best way to know Harbin is to slow down beside the Songhua River.",
    image: img("sun-island"),
    routeKey: "river",
    memory: ["去了 5 个地方", "吃了 1 家店", "约 13,800 步", "20°-29° 晴"],
    timeline: [
      ["09:30", "防洪纪念塔码头", "从酒店步行到码头。"],
      ["10:00", "轮渡过江", "把交通变成景点。"],
      ["10:40", "太阳岛观光车", "上岛先买观光车，不暴走。"],
      ["11:20", "太阳石与湖边", "拍太阳石，湖边慢逛。"],
      ["14:30", "俄罗斯风情区咖啡", "中段休息，给妈妈留体力。"],
      ["17:30", "索道回程", "日落前一小时乘坐，视野最好。"],
      ["19:00", "华梅西餐厅", "回中央大街晚餐。"]
    ],
    transport: [
      ["去程", "⛴ 轮渡", "10-15 分钟", "约 2-10 元", "风景最好，不走回头路"],
      ["岛内", "🚌 观光车", "随上随下", "以当日为准", "保护体力，强烈推荐"],
      ["回程", "🚡 索道", "15-20 分钟", "以当日为准", "日落前一小时体验最佳"]
    ],
    tips: ["去程轮渡", "回程索道", "买观光车", "不建议暴走"],
    places: ["太阳岛", "松花江索道"],
    meal: "晚餐"
  },
  {
    day: 4,
    date: "6.25 WED",
    title: "Ocean Day",
    cn: "海洋馆与最后一晚",
    quote: "今天不是为了打卡更多地方，而是把演出、休息和最后一晚排顺。",
    image: img("poseidon"),
    routeKey: "ocean",
    memory: ["去了 3 个地方", "吃了 2 家店", "约 9,700 步", "19°-27° 多云"],
    timeline: [
      ["09:30", "打车出发", "酒店到波塞冬海底世界。"],
      ["10:30", "先看演出时间", "倒推海豚、白鲸、美人鱼。"],
      ["12:40", "午餐", "提前或延后，不要卡演出。"],
      ["13:40", "海底隧道", "最后走，节奏更顺。"],
      ["15:00", "离园", "返回中央大街休息。"],
      ["17:30", "秋林里道斯与咖啡", "补买当天吃的，最后看江边。"]
    ],
    transport: [
      ["推荐", "🚕 打车", "45-55 分钟", "90-120 元", "路程远，节省体力"],
      ["备选", "🚇 地铁+打车", "70-90 分钟", "20-40 元", "便宜但耗时"],
      ["园区", "🚶 步行", "馆内路线", "0 元", "按演出时间倒推"]
    ],
    tips: ["先看演出时间", "不要先进海底隧道", "午餐错峰", "15:00 离园回酒店休息"],
    places: ["波塞冬海底世界", "松花江"],
    meal: "午餐"
  },
  {
    day: 5,
    date: "6.26 THU",
    title: "Departure",
    cn: "返程",
    quote: "最后一天只做三件事：慢走、买对伴手礼、舒服去机场。",
    image: img("river"),
    routeKey: "walk",
    memory: ["去了 2 个地方", "买了 3 样伴手礼", "约 5,900 步", "18°-26° 晴"],
    timeline: [
      ["09:30", "中央大街慢走", "最后补拍与买马迭尔。"],
      ["10:30", "买红肠和列巴", "只买确定会吃的。"],
      ["11:40", "回酒店整理", "把伴手礼放好，检查证件。"],
      ["13:00", "打车去机场", "预留 45-60 分钟车程。"],
      ["14:00", "机场", "留足安检和休息时间。"]
    ],
    transport: [
      ["推荐", "🚶 步行", "10-20 分钟", "0 元", "购物点都在附近"],
      ["返程", "🚕 打车", "45-60 分钟", "70-90 元", "带行李最稳"],
      ["不推荐", "🚌 机场大巴", "时间不稳定", "20 元左右", "拖行李不舒服"]
    ],
    tips: ["上午集中采购", "俄罗斯食品不买", "行李先回酒店整理", "机场前不要安排新景点"],
    places: ["中央大街"],
    meal: "早餐"
  }
];

const places = {
  "圣索菲亚教堂": {
    image: img("sophia"),
    rating: "★★★★★",
    open: "08:30-17:00",
    duration: "45-60 分钟",
    ticket: "外观免费",
    play: "看外观、广场远景和侧面砖墙。夜景比白天更有记忆点。",
    route: "酒店步行前往，之后顺路进入中央大街。",
    photo: "日落后 30 分钟，站在广场斜侧方。",
    avoid: "不用买广场商业拍照点，外观已经足够。",
    why: "真正值得看的是哈尔滨的城市混血感：欧式轮廓、砖色、夜色和广场尺度。",
    nearby: ["中央商城卫生间", "中央大街咖啡", "马迭尔冰棍"]
  },
  "中央大街": {
    image: img("hero-central"),
    rating: "★★★★☆",
    open: "全天",
    duration: "1.5-2 小时",
    ticket: "免费",
    play: "慢走建筑、吃马迭尔、一路去防洪纪念塔和江边。",
    route: "圣索菲亚后步行进入，沿主街向江边走。",
    photo: "清晨人少，蓝调时刻灯光最好。",
    avoid: "俄罗斯食品店和高价伴手礼少买。",
    why: "它不是一个景点，而是哈尔滨最容易进入状态的城市封面。",
    nearby: ["华梅西餐厅", "秋林里道斯", "防洪纪念塔"]
  },
  "太阳岛": {
    image: img("sun-island"),
    rating: "★★★★★",
    open: "08:30-17:00",
    duration: "4-5 小时",
    ticket: "以当日为准",
    play: "轮渡上岛、观光车移动、太阳石打卡、湖边慢逛、索道回程。",
    route: "去程轮渡，回程索道，不走回头路。",
    photo: "索道日落前一小时，湖边下午光线最柔。",
    avoid: "不要暴走，岛内距离比想象更消耗体力。",
    why: "江、岛、索道连在一起，才是哈尔滨夏天最完整的一天。",
    nearby: ["俄罗斯风情区咖啡", "太阳石", "松花江索道"]
  },
  "波塞冬海底世界": {
    image: img("poseidon"),
    rating: "★★★★☆",
    open: "09:00-16:30",
    duration: "4-5 小时",
    ticket: "需购票",
    play: "先看演出时间，倒推白鲸、海豚、美人鱼和海底隧道。",
    route: "酒店打车往返，15:00 左右离园。",
    photo: "海底隧道尽量等人少，演出前不要卡点。",
    avoid: "不要一进园先进海底隧道，会打乱演出节奏。",
    why: "这是给亲子和妈妈都轻松的一天，室内、节奏可控、不怕晒。",
    nearby: ["园区餐饮区", "中央大街咖啡", "松花江夜景"]
  }
};

const mealCollections = {
  早餐: ["马迭尔", "老昌春饼", "东方饺子王"],
  午餐: ["老厨家", "山河屯", "东方饺子王", "张包铺"],
  晚餐: ["华梅", "塔道斯", "波特曼", "金刚山"]
};

const restaurants = {
  老厨家: ["锅包肉 / 地三鲜 / 汤", "80-120 元/人", "10:30-21:00", "饭点排队", "★★★★★", "高"],
  山河屯: ["铁锅炖 / 贴饼子", "90-130 元/人", "10:30-21:00", "建议预约", "★★★★☆", "中高"],
  东方饺子王: ["三鲜饺子 / 家常菜", "50-80 元/人", "10:00-21:00", "排队较少", "★★★★☆", "中"],
  张包铺: ["排骨包 / 熏酱", "45-70 元/人", "09:00-20:30", "可能排队", "★★★★☆", "中高"],
  华梅: ["红菜汤 / 罐焖牛肉 / 面包", "120-180 元/人", "11:00-21:00", "高峰排队", "★★★★☆", "高"],
  塔道斯: ["俄式西餐 / 烤肉 / 甜点", "120-180 元/人", "11:00-21:00", "适中", "★★★★☆", "中高"],
  波特曼: ["俄餐 / 西餐 / 甜品", "130-200 元/人", "11:00-21:00", "适中", "★★★★☆", "中"],
  金刚山: ["烧烤 / 冷面 / 啤酒", "90-140 元/人", "16:00-凌晨", "晚高峰明显", "★★★★☆", "高"],
  秋林里道斯: ["红肠 / 列巴 / 糕点", "30-120 元", "09:00-20:00", "购物排队", "★★★★☆", "高"],
  老昌春饼: ["春饼 / 京酱肉丝", "50-80 元/人", "10:00-21:00", "适中", "★★★★☆", "中"],
  马迭尔: ["冰棍 / 面包 / 酸奶", "10-40 元", "全天", "人多但快", "★★★★★", "高"],
  Luyu: ["拿铁 / 手冲", "35-60 元/人", "10:00-20:00", "适中", "★★★★☆", "中"],
  "Grand Coffee": ["美式 / 甜品", "35-65 元/人", "10:00-21:00", "适中", "★★★★☆", "中"],
  "M Stand": ["拿铁 / 创意咖啡", "35-55 元/人", "10:00-21:00", "适中", "★★★★☆", "中"]
};

const xhsTips = [
  "锅包肉要趁热吃",
  "雪衣豆沙看到就点",
  "东北菜两个人别点 5 个菜",
  "马迭尔袋装不推荐",
  "秋林认准里道斯",
  "索道日落前一小时最好",
  "太阳岛一定买观光车",
  "中央大街伴手礼少买"
];

const shopping = [
  ["马迭尔冰棍", "现场吃，不建议大量带走。", img("food")],
  ["秋林红肠", "认准里道斯，返程上午买。", img("food")],
  ["大列巴", "买小份，避免太占行李。", img("food")],
  ["明信片", "轻、好看、比套娃更克制。", img("hero-central")]
];

const globalTips = [
  ["天气", "18°-28°", "晴天多，早晚带薄外套。"],
  ["穿搭", "浅外套", "江边和索道会有风。"],
  ["交通", "短途步行", "800 米以内默认步行。"],
  ["防晒", "帽子+伞", "太阳岛和江边需要防晒。"],
  ["分量", "少点菜", "东北菜两个人 2-3 个菜足够。"],
  ["咖啡", "中段休息", "把咖啡当体力管理工具。"]
];

function renderOverview() {
  document.querySelector("#overviewStats").innerHTML = overviewStats.map(([icon, value, label]) => `
    <article>
      <i>${icon}</i>
      <b>${value}</b>
      <span>${label}</span>
    </article>
  `).join("");

  document.querySelector("#dailyStrip").innerHTML = days.map((day) => `
    <a href="#day${day.day}">
      <span>DAY ${String(day.day).padStart(2, "0")}</span>
      <b>${day.date.split(" ")[0]}</b>
      <em>${day.cn}</em>
    </a>
  `).join("");
}

function renderMapLegend() {
  const items = [
    ["walk", "夜游步行线", "酒店 / 圣索菲亚 / 中央大街"],
    ["river", "太阳岛过江线", "轮渡 / 太阳岛 / 索道"],
    ["food", "餐厅线", "中央大街 / 华梅 / 烧烤"],
    ["ocean", "波塞冬线", "打车往返 / 15:00 离园"]
  ];
  document.querySelector("#mapLegend").innerHTML = items.map(([key, title, desc], index) => `
    <button class="${index === 0 ? "active" : ""}" data-route="${key}">
      <b>${title}</b>
      <span>${desc}</span>
    </button>
  `).join("");
}

function placeCard(name) {
  const p = places[name];
  if (!p) return "";
  return `
    <article class="spot-card reveal">
      <img loading="lazy" src="${p.image}" alt="${name}">
      <div class="spot-body">
        <div class="spot-title">
          <h3>${name}</h3>
          <a href="${mapsUrl(name)}"> 地图</a>
        </div>
        <div class="spot-meta">
          <span>${p.rating}</span><span>${p.open}</span><span>${p.duration}</span><span>${p.ticket}</span>
        </div>
        <p><b>为什么值得来</b>${p.why}</p>
        <p><b>主要玩法</b>${p.play}</p>
        <p><b>推荐路线</b>${p.route}</p>
        <p><b>最佳拍照</b>${p.photo}</p>
        <p><b>避雷提醒</b>${p.avoid}</p>
        <div class="nearby-row">${p.nearby.map((item) => `<em>${item}</em>`).join("")}</div>
      </div>
    </article>
  `;
}

function restaurantCard(name) {
  const r = restaurants[name];
  if (!r) return "";
  return `
    <article class="restaurant-card">
      <img loading="lazy" src="${img("food")}" alt="${name}推荐菜">
      <div>
        <h3>${name}</h3>
        <p>${r[0]}</p>
        <dl>
          <div><dt>人均</dt><dd>${r[1]}</dd></div>
          <div><dt>营业</dt><dd>${r[2]}</dd></div>
          <div><dt>排队</dt><dd>${r[3]}</dd></div>
          <div><dt>热度</dt><dd>${r[5]}</dd></div>
        </dl>
        <a href="${mapsUrl(name)}"> 地图</a>
      </div>
    </article>
  `;
}

function renderDays() {
  document.querySelector("#days").innerHTML = days.map((day, index) => `
    <section class="section day-section snap-section" id="day${day.day}" data-day="${day.day}" data-route="${day.routeKey}">
      <div class="day-hero ${index % 2 ? "reverse" : ""}">
        <div>
          <p class="section-label">DAY ${String(day.day).padStart(2, "0")} · ${day.date}</p>
          <h2>${day.title}</h2>
          <h3>${day.cn}</h3>
          <blockquote>${day.quote}</blockquote>
        </div>
        <img loading="lazy" src="${day.image}" alt="${day.cn}">
      </div>

      <div class="day-rhythm">
        <div class="timeline reveal">
          ${day.timeline.map(([time, title, text], i) => `
            <details ${i === 0 ? "open" : ""}>
              <summary><span>${time}</span><b>${title}</b></summary>
              <p>${text}</p>
            </details>
          `).join("")}
        </div>
        <div class="transport-panel reveal">
          <h3>今日交通</h3>
          ${day.transport.map(([label, mode, time, cost, reason]) => `
            <article>
              <span>${label}</span>
              <b>${mode}</b>
              <em>${time} · ${cost}</em>
              <p>${reason}</p>
            </article>
          `).join("")}
        </div>
      </div>

      <div class="today-tips reveal">
        <h3>Today Tips</h3>
        <div>${day.tips.map((tip) => `<span>${tip}</span>`).join("")}</div>
      </div>

      <div class="spot-stack">
        ${day.places.map(placeCard).join("")}
      </div>

      <div class="collection-block reveal">
        <div class="mini-heading">
          <span>${day.meal}选择</span>
          <b>Restaurant Collection</b>
        </div>
        <div class="horizontal-cards">
          ${(mealCollections[day.meal] || mealCollections.午餐).map(restaurantCard).join("")}
        </div>
      </div>

      <div class="nearby-block reveal">
        <div class="mini-heading">
          <span>Explore Nearby</span>
          <b>附近可以顺手看的地方</b>
        </div>
        <div class="nearby-cards">
          ${["附近餐厅", "附近咖啡", "伴手礼", "拍照点"].map((label, i) => `
            <article>
              <span>${label}</span>
              <b>${day.places[i % Math.max(day.places.length, 1)] || "中央大街"}</b>
              <p>${["不绕路，适合顺手安排。", "作为体力缓冲点。", "只买确定会吃的。", "留给天气和光线。"][i]}</p>
            </article>
          `).join("")}
        </div>
      </div>

      <div class="memory-note reveal">
        <h3>今日记忆</h3>
        <div>${day.memory.map((item) => `<span>${item}</span>`).join("")}</div>
      </div>
    </section>
  `).join("");
}

function renderFood() {
  const tabs = Object.keys(mealCollections);
  const tabsRoot = document.querySelector("#mealTabs");
  const listRoot = document.querySelector("#restaurantCollection");

  function paint(meal) {
    tabsRoot.innerHTML = tabs.map((tab) => `<button class="${tab === meal ? "active" : ""}" data-meal="${tab}">${tab}</button>`).join("");
    listRoot.innerHTML = mealCollections[meal].map(restaurantCard).join("");
  }

  paint("午餐");
  tabsRoot.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    paint(button.dataset.meal);
  });

  document.querySelector("#xhsTags").innerHTML = xhsTips.map((tip) => `<span>${tip}</span>`).join("");
}

function renderShoppingAndTips() {
  document.querySelector("#shoppingGrid").innerHTML = shopping.map(([name, desc, image]) => `
    <article>
      <img loading="lazy" src="${image}" alt="${name}">
      <b>${name}</b>
      <span>${desc}</span>
    </article>
  `).join("");

  document.querySelector("#globalTips").innerHTML = globalTips.map(([title, value, desc]) => `
    <article>
      <span>${title}</span>
      <b>${value}</b>
      <p>${desc}</p>
    </article>
  `).join("");
}

function setupMotion() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting));
  }, { threshold: 0.12 });
  document.querySelectorAll(".section > *, .reveal").forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  const sections = [...document.querySelectorAll("[data-day]")];
  const dayLabel = document.querySelector("#progressDay");
  const bar = document.querySelector("#progressBar");
  const topButton = document.querySelector("#topButton");
  const navLinks = [...document.querySelectorAll(".bottom-nav a")];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const day = Number(visible.target.dataset.day || 1);
    dayLabel.textContent = `Day ${day} / 5`;
    bar.style.width = `${Math.round((day / 5) * 100)}%`;
    navLinks.forEach((a) => a.classList.toggle("active", visible.target.id && a.getAttribute("href").includes(visible.target.id)));
    const route = visible.target.dataset.route;
    if (route) setRoute(route);
  }, { threshold: [0.34, 0.62] });
  sections.forEach((section) => observer.observe(section));

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const hero = document.querySelector(".hero-image");
    if (hero) hero.style.transform = `scale(1.04) translateY(${y * 0.045}px)`;
    topButton.classList.toggle("show", y > 520);
  }, { passive: true });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setRoute(route) {
  document.querySelectorAll(".map-route").forEach((line) => line.classList.toggle("active", line.dataset.route === route));
  document.querySelectorAll("#mapLegend button").forEach((button) => button.classList.toggle("active", button.dataset.route === route));
}

function setupInteractions() {
  document.querySelector("#mapLegend").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) setRoute(button.dataset.route);
  });
}

function setupLiveCard() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const plan = hour < 10
    ? ["红专街早市", "7 分钟", "先轻食，别吃太撑。"]
    : hour < 14
      ? ["太阳岛轮渡", "6 分钟", "可以买冰棍。"]
      : hour < 18
        ? ["索道", "12 分钟", "日落前一小时最舒服。"]
        : ["中央大街", "4 分钟", "夜景比白天更漂亮。"];
  document.querySelector("#liveTime").textContent = `${String(hour).padStart(2, "0")}:${minutes}`;
  document.querySelector("#liveNext").textContent = `下一站：${plan[0]}`;
  document.querySelector("#liveTip").textContent = `步行：${plan[1]} · 建议：${plan[2]}`;
}

renderOverview();
renderMapLegend();
renderDays();
renderFood();
renderShoppingAndTips();
setupInteractions();
setupMotion();
setupLiveCard();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
