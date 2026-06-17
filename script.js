const img = (name) => `assets/images/${name}.jpg`;
const mapsUrl = (name, mode = "w") => `https://maps.apple.com/?q=${encodeURIComponent(`${name} 哈尔滨`)}&dirflg=${mode}`;

const overviewStats = [
  ["5 Days", "4 Nights"],
  ["9 Spots", "精选景点"],
  ["10 Restaurants", "餐厅与咖啡"],
  ["2 Ferries", "1 Cable Car"],
  ["57,321", "Estimated Steps"],
  ["¥2,800", "Estimated Budget"]
];

const restaurants = {
  老厨家: ["锅包肉 / 雪衣豆沙", "100 元", "排队高", "★★★★★", img("guobaorou"), "锅包肉要趁热吃，两个人再加一个素菜就够。"],
  山河屯: ["铁锅炖 / 贴饼子", "100-130 元", "排队中", "★★★★☆", img("food"), "适合想吃东北铁锅炖时作为老厨家替代。"],
  东方饺子王: ["三鲜饺子 / 家常菜", "60-80 元", "排队低", "★★★★☆", img("food"), "轻松、稳、不累，适合不想排队的一餐。"],
  张包铺: ["排骨包 / 熏酱", "50-70 元", "排队中", "★★★★☆", img("food"), "更像本地小吃，适合午餐或早午餐。"],
  波特曼: ["俄餐 / 西餐", "130-200 元", "排队中", "★★★★☆", img("restaurant-room"), "华梅排队太久时的替补。"],
  华梅: ["红菜汤 / 罐焖牛肉", "120-180 元", "排队高", "★★★★☆", img("restaurant-room"), "吃的是哈尔滨老牌西餐氛围，别按性价比理解。"],
  塔道斯: ["俄式烤肉 / 甜点", "120-180 元", "排队中", "★★★★☆", img("restaurant-room"), "第一晚适合轻松收尾。"],
  金刚山: ["烧烤 / 冷面", "90-140 元", "排队高", "★★★★☆", img("food"), "晚高峰明显，少点一些。"],
  秋林里道斯: ["红肠 / 列巴", "30-120 元", "排队中", "★★★★☆", img("food"), "伴手礼第 5 天上午集中买。"],
  马迭尔: ["冰棍 / 酸奶", "10-40 元", "排队低", "★★★★★", img("central-morning"), "现场吃比袋装更值得。"],
  老昌春饼: ["春饼 / 京酱肉丝", "60-90 元", "排队中", "★★★★☆", img("guobaorou"), "比大菜更轻松，适合返程日前的简单一餐。"]
};

const days = [
  {
    day: 1,
    date: "6.22 SUN",
    title: "Arrival & Night Walk",
    cn: "抵达与夜游",
    hero: img("sophia"),
    quote: "第一晚只做一件事：把哈尔滨最漂亮的夜色，慢慢走完。",
    why: "刚落地不适合复杂换乘。酒店到圣索菲亚、中央大街、防洪纪念塔都适合步行，夜景连续，体力消耗可控。",
    timeline: [
      ["16:00", "抵达哈尔滨", "机场直接打车，不坐机场大巴。"],
      ["17:20", "酒店休息", "入住、洗漱、补水，先让妈妈恢复体力。"],
      ["18:30", "圣索菲亚教堂", "蓝调时刻看外观，广场远景最出片。"],
      ["19:15", "中央大街", "慢慢走，吃第一根马迭尔冰棍。"],
      ["20:20", "防洪纪念塔", "江边夜色、斯大林公园顺路走。"],
      ["21:00", "塔道斯晚餐", "俄式西餐轻松收尾。"]
    ],
    transport: [
      ["推荐", "🚕 打车", "45-60 分钟", "70-90 元", "机场到酒店带行李，打车最稳。"],
      ["夜游", "🚶 步行", "2.4km", "0 元", "景点密集，步行体验最好。"],
      ["不推荐", "🚌 机场大巴", "时间不稳定", "20 元左右", "拖行李不舒服。"]
    ],
    gallery: [img("sophia"), img("hero-central"), img("river"), img("central-morning")],
    restaurants: ["塔道斯", "华梅", "波特曼", "马迭尔", "秋林里道斯"],
    tips: ["天气：18°-26°，晚间带薄外套", "穿搭：舒服鞋优先", "拍照：圣索菲亚日落后 30 分钟", "东北菜：第一晚不要吃太撑", "Coffee：中央大街附近休息即可"]
  },
  {
    day: 2,
    date: "6.23 MON",
    title: "Old Harbin",
    cn: "老哈尔滨",
    hero: img("baroque"),
    quote: "一座城市最好的打开方式，是慢慢走。",
    why: "上午逛早市和中央大街，下午把中华巴洛克留到 16 点以后，光线更柔，人也没那么燥。",
    timeline: [
      ["08:30", "红专街早市", "少量尝鲜，不要吃太撑。"],
      ["10:30", "中央大街白天", "补拍建筑细节。"],
      ["11:30", "秋林里道斯", "当天吃的可以买，伴手礼留到返程日。"],
      ["12:30", "东北菜午餐", "老厨家或山河屯，2-3 个菜足够。"],
      ["16:20", "中华巴洛克", "傍晚拍街巷、门头和砖墙。"],
      ["19:00", "烧烤晚餐", "金刚山或附近烧烤。"]
    ],
    transport: [
      ["推荐", "🚶 步行", "800m-1km", "0 元", "核心区域距离短，默认步行。"],
      ["备选", "🚕 打车", "10-15 分钟", "15-25 元", "去中华巴洛克时可省体力。"],
      ["备选", "🚇 地铁", "18-25 分钟", "2-3 元", "不堵车，但进出站会多走路。"]
    ],
    gallery: [img("baroque"), img("central-morning"), img("food"), img("guobaorou")],
    restaurants: ["老厨家", "山河屯", "东方饺子王", "张包铺", "金刚山"],
    tips: ["天气：19°-28°，中午偏晒", "穿搭：浅色衣服适合街区照片", "防晒：早市后就要补防晒", "分量：东北菜别点 5 个菜", "Coffee：巴洛克前安排一杯"]
  },
  {
    day: 3,
    date: "6.24 TUE",
    title: "River Day",
    cn: "松花江与太阳岛",
    hero: img("sun-island"),
    quote: "把时间留给松花江的风，而不是赶路。",
    why: "上午去太阳岛更凉快，树荫多；下午回程坐索道，光线逆着江面，正好回中央大街吃晚餐。",
    timeline: [
      ["09:30", "防洪纪念塔码头", "从酒店步行到码头。"],
      ["10:00", "轮渡过江", "把交通变成景点。"],
      ["10:40", "太阳岛观光车", "一定买，不建议全程步行。"],
      ["11:20", "太阳石与湖边", "草坪、湖边慢慢走。"],
      ["14:30", "咖啡休息", "俄罗斯风情区停留不要太久。"],
      ["17:30", "索道回程", "日落前一小时最好。"],
      ["19:00", "华梅晚餐", "回中央大街吃饭。"]
    ],
    transport: [
      ["去程推荐", "⛴ 轮渡", "10-15 分钟", "约 2-10 元", "有江风和视野，不走回头路。"],
      ["岛内推荐", "🚌 观光车", "随上随下", "以当日为准", "太阳岛很大，保护体力。"],
      ["回程推荐", "🚡 索道", "15-20 分钟", "以当日为准", "下午光线最漂亮。"]
    ],
    gallery: [img("sun-island"), img("river"), img("hero-central"), img("central-morning")],
    restaurants: ["华梅", "波特曼", "塔道斯", "马迭尔", "秋林里道斯"],
    tips: ["天气：20°-29°，江边有风", "穿搭：舒服鞋 + 帽子", "防晒：太阳岛必须防晒", "避雷：风情小镇不要停太久", "Coffee：下午作为体力恢复点"]
  },
  {
    day: 4,
    date: "6.25 WED",
    title: "Ocean Day",
    cn: "波塞冬与最后一晚",
    hero: img("poseidon"),
    quote: "今天不多走，把演出、休息和最后一晚排顺。",
    why: "波塞冬离市区远，打车最省心。进园先看演出时间，再倒推路线，15 点离园还能回酒店休息。",
    timeline: [
      ["09:30", "打车出发", "酒店到波塞冬海底世界。"],
      ["10:30", "先看演出时间", "倒推海豚、白鲸、美人鱼。"],
      ["12:40", "午餐", "提前或延后，不要卡演出。"],
      ["13:40", "海底隧道", "最后走，节奏更顺。"],
      ["15:00", "离园", "回中央大街休息。"],
      ["17:30", "江边与最后晚餐", "咖啡、松花江、想再吃的餐厅。"]
    ],
    transport: [
      ["推荐", "🚕 打车", "45-55 分钟", "90-120 元", "路程远，省体力。"],
      ["备选", "🚇 地铁+打车", "70-90 分钟", "20-40 元", "便宜但耗时。"],
      ["馆内", "🚶 步行", "按演出倒推", "0 元", "不要一进园先进隧道。"]
    ],
    gallery: [img("poseidon"), img("river"), img("restaurant-room"), img("food")],
    restaurants: ["波特曼", "华梅", "塔道斯", "金刚山", "东方饺子王"],
    tips: ["天气：19°-27°，室内为主", "穿搭：轻便即可", "午餐：错峰更舒服", "拍照：海底隧道人少时再拍", "Coffee：回中央大街后安排"]
  },
  {
    day: 5,
    date: "6.26 THU",
    title: "Departure",
    cn: "返程",
    hero: img("central-morning"),
    quote: "最后一天只做三件事：慢走、买对伴手礼、舒服去机场。",
    why: "上午中央大街人少，适合补照片和采购。所有东西买完先回酒店整理，再打车去机场，节奏最稳。",
    timeline: [
      ["09:30", "中央大街清晨", "最后慢走，补拍照片。"],
      ["10:30", "买红肠和列巴", "只买确定会吃的。"],
      ["11:40", "回酒店整理", "检查证件、行李和伴手礼。"],
      ["13:00", "打车去机场", "预留 45-60 分钟车程。"],
      ["14:00", "机场", "留足安检和休息时间。"]
    ],
    transport: [
      ["推荐", "🚶 步行", "800m 内", "0 元", "购物点集中，默认步行。"],
      ["返程推荐", "🚕 打车", "45-60 分钟", "70-90 元", "带行李去机场最稳。"],
      ["不推荐", "🚌 机场大巴", "时间不稳定", "20 元左右", "不适合最后一天拖行李。"]
    ],
    gallery: [img("central-morning"), img("hero-central"), img("food"), img("river")],
    restaurants: ["马迭尔", "秋林里道斯", "东方饺子王", "老昌春饼", "张包铺"],
    tips: ["天气：18°-26°，早上舒服", "伴手礼：少买、买对", "避雷：俄罗斯食品不买", "机场：不要压线出发", "Coffee：只作为等车前休息"]
  }
];

function renderOverview() {
  document.querySelector("#overviewStats").innerHTML = overviewStats.map(([value, label]) => `
    <article><b>${value}</b><span>${label}</span></article>
  `).join("");

  document.querySelector("#dailyStrip").innerHTML = days.map((day) => `
    <a href="#day${day.day}">
      <span>DAY ${String(day.day).padStart(2, "0")}</span>
      <b>${day.date.split(" ")[0]}</b>
      <em>${day.cn}</em>
    </a>
  `).join("");
}

function renderRestaurant(name, compact = false) {
  const r = restaurants[name] || restaurants.老厨家;
  return `
    <article class="${compact ? "food-row" : "restaurant-card"}">
      <img loading="lazy" src="${r[4]}" alt="${name}推荐餐厅">
      <div>
        <h3>${name}</h3>
        <p>${r[5]}</p>
        <dl>
          <div><dt>推荐菜</dt><dd>${r[0]}</dd></div>
          <div><dt>人均</dt><dd>${r[1]}</dd></div>
          <div><dt>排队</dt><dd>${r[2]}</dd></div>
          <div><dt>指数</dt><dd>${r[3]}</dd></div>
        </dl>
        <a href="${mapsUrl(name)}"> 地图</a>
      </div>
    </article>
  `;
}

function renderDays() {
  document.querySelector("#days").innerHTML = days.map((day, index) => `
    <section class="day-section snap-section" id="day${day.day}" data-day="${day.day}">
      <div class="day-cover">
        <img loading="lazy" src="${day.hero}" alt="${day.cn}">
        <div>
          <p>DAY ${String(day.day).padStart(2, "0")} · ${day.date}</p>
          <h2>${day.title}</h2>
          <span>${day.cn}</span>
        </div>
      </div>

      <div class="quote-panel reveal">
        <blockquote>${day.quote}</blockquote>
      </div>

      <div class="rhythm-grid ${index % 2 ? "reverse" : ""}">
        <div class="timeline reveal">
          ${day.timeline.map(([time, title, text], i) => `
            <details ${i === 0 ? "open" : ""}>
              <summary><span>${time}</span><b>${title}</b></summary>
              <p>${text}</p>
            </details>
          `).join("")}
        </div>
        <div class="why-card reveal">
          <p class="section-label">WHY THIS PLAN</p>
          <h3>为什么这样安排</h3>
          <p>${day.why}</p>
        </div>
      </div>

      <div class="transport-strip reveal">
        ${day.transport.map(([label, mode, time, cost, reason]) => `
          <article>
            <span>${label}</span>
            <b>${mode}</b>
            <em>${time} · ${cost}</em>
            <p>${reason}</p>
          </article>
        `).join("")}
      </div>

      <div class="gallery-block reveal">
        <div class="mini-heading"><span>GALLERY</span><b>${day.cn}的四个画面</b></div>
        <div class="gallery-grid">
          ${day.gallery.map((image, i) => `<img loading="lazy" src="${image}" alt="${day.cn}照片 ${i + 1}">`).join("")}
        </div>
      </div>

      <div class="food-block reveal">
        <div class="mini-heading"><span>TOP 5 RESTAURANTS</span><b>今天可以选的餐厅</b></div>
        <div class="food-list">
          ${day.restaurants.map((name) => renderRestaurant(name, true)).join("")}
        </div>
      </div>

      <div class="today-tips reveal">
        <div class="mini-heading"><span>TODAY TIPS</span><b>今天的小提醒</b></div>
        <div>${day.tips.map((tip) => `<span>${tip}</span>`).join("")}</div>
      </div>
    </section>
  `).join("");
}

function renderFoodGuide() {
  const top = ["老厨家", "山河屯", "东方饺子王", "波特曼", "华梅", "塔道斯", "金刚山", "秋林里道斯", "马迭尔"];
  document.querySelector("#restaurantCollection").innerHTML = top.map((name) => renderRestaurant(name)).join("");
  document.querySelector("#xhsTags").innerHTML = [
    "锅包肉要趁热吃",
    "雪衣豆沙一定要点",
    "东北菜不要点 5 个菜",
    "马迭尔袋装不推荐",
    "秋林认准里道斯",
    "太阳岛一定买观光车"
  ].map((tip) => `<span>${tip}</span>`).join("");
}

function renderShoppingAndTips() {
  document.querySelector("#shoppingGrid").innerHTML = [
    ["马迭尔冰棍", "现场吃，不建议大量带走。", img("central-morning")],
    ["秋林红肠", "认准里道斯，返程上午买。", img("food")],
    ["大列巴", "买小份，避免占行李。", img("restaurant-room")],
    ["明信片", "轻、好看，比套娃更克制。", img("hero-central")]
  ].map(([name, desc, image]) => `
    <article><img loading="lazy" src="${image}" alt="${name}"><b>${name}</b><span>${desc}</span></article>
  `).join("");

  document.querySelector("#globalTips").innerHTML = [
    ["天气", "18°-28°", "早晚薄外套，中午注意防晒。"],
    ["穿搭", "舒服鞋", "比好看更重要，江边路不少。"],
    ["交通", "短途步行", "800 米以内默认步行。"],
    ["分量", "少点菜", "东北菜两个人 2-3 个菜足够。"],
    ["拍照", "早晚最好", "中午光硬，适合室内或休息。"],
    ["节奏", "留白", "每天下午至少留一次咖啡休息。"]
  ].map(([title, value, desc]) => `
    <article><span>${title}</span><b>${value}</b><p>${desc}</p></article>
  `).join("");
}

function setupMotion() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting));
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const sections = [...document.querySelectorAll("[data-day]")];
  const dayLabel = document.querySelector("#progressDay");
  const bar = document.querySelector("#progressBar");
  const topButton = document.querySelector("#topButton");
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const day = Number(visible.target.dataset.day || 1);
    dayLabel.textContent = `Day ${day} / 5`;
    bar.style.width = `${Math.round((day / 5) * 100)}%`;
  }, { threshold: [0.35, 0.62] });
  sections.forEach((section) => observer.observe(section));

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const hero = document.querySelector(".hero-image");
    if (hero) hero.style.transform = `scale(1.04) translateY(${y * 0.04}px)`;
    topButton.classList.toggle("show", y > 520);
  }, { passive: true });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

renderOverview();
renderDays();
renderFoodGuide();
renderShoppingAndTips();
setupMotion();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
