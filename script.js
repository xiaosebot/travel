const img = (name) => `assets/images/${name}.jpg`;

const days = [
  {
    day: 1,
    title: "抵达",
    image: img("sophia"),
    route: "机场 → 打车 → 酒店 → 圣索菲亚教堂 → 中央大街 → 马迭尔冰棍 → 防洪纪念塔 → 松花江边 → 斯大林公园 → 塔道斯西餐厅 → 酒店",
    transport: "机场到酒店推荐打车，不坐机场大巴。预计 45-60 分钟，70-90 元。",
    food: "塔道斯西餐厅。第一晚走到哪吃到哪，不安排硬任务。",
    tips: ["第一晚全部步行", "不买俄罗斯食品", "夜景比白天更漂亮"],
    timeline: [
      ["16:00", "抵达哈尔滨", "落地后直接打车去酒店，减少换乘和拖行李。"],
      ["17:20", "酒店休息", "入住、洗漱、休息，先让妈妈恢复体力。"],
      ["18:30", "圣索菲亚教堂", "看夜景，拍广场远景和侧面砖墙。"],
      ["19:15", "中央大街", "慢慢逛，马迭尔冰棍作为第一口哈尔滨。"],
      ["20:20", "松花江边", "防洪纪念塔、松花江边、斯大林公园连走。"],
      ["21:00", "晚餐", "塔道斯西餐厅，点经典俄式菜即可。"]
    ]
  },
  {
    day: 2,
    title: "老街",
    image: img("food"),
    route: "酒店 → 红专街早市 → 中央大街 → 秋林里道斯 → 老厨家 → 中华巴洛克 → 咖啡 → 金刚山",
    transport: "全天以步行为主，中华巴洛克段视体力打车。",
    food: "午餐老厨家，两个人点 3 个菜足够。晚餐金刚山烧烤。",
    tips: ["老厨家避开正饭点", "巴洛克建议 16 点以后拍照", "早市少量尝鲜，不要吃太撑"],
    timeline: [
      ["08:30", "红专街早市", "早点出门，豆腐脑、锅包肉小吃浅尝。"],
      ["10:30", "中央大街", "补拍白天建筑细节。"],
      ["11:30", "秋林里道斯", "只买当天吃的，纪念品留到第 5 天。"],
      ["12:30", "老厨家", "锅包肉、地三鲜、一个汤或凉菜。"],
      ["16:20", "中华巴洛克", "光线更柔，适合街巷和门头照片。"],
      ["19:00", "金刚山", "烧烤收尾，别点太多。"]
    ]
  },
  {
    day: 3,
    title: "太阳岛",
    image: img("sun-island"),
    route: "酒店 → 步行 → 防洪纪念塔码头 → 轮渡 → 太阳岛 → 观光车 → 太阳石 → 湖边 → 俄罗斯风情区 → 咖啡 → 索道 → 中央大街 → 华梅西餐厅",
    transport: "去程轮渡，回程索道。索道建议日落前一小时乘坐。",
    food: "华梅西餐厅。吃环境和经典，不追求极致性价比。",
    tips: ["去程轮渡", "回程索道", "买观光车", "不建议暴走"],
    timeline: [
      ["09:30", "码头", "从酒店步行到防洪纪念塔码头。"],
      ["10:00", "轮渡", "轮渡过江，把交通变成景点。"],
      ["10:40", "观光车", "上岛先买观光车票，不硬走。"],
      ["11:20", "太阳石", "打卡太阳石，随后去湖边慢逛。"],
      ["14:30", "咖啡", "在俄罗斯风情区域休息。"],
      ["17:30", "索道", "日落前一小时回程，视野最好。"],
      ["19:00", "华梅西餐厅", "中央大街晚餐。"]
    ]
  },
  {
    day: 4,
    title: "波塞冬",
    image: img("poseidon"),
    route: "酒店 → 打车 → 波塞冬海底世界 → 海豚 → 白鲸 → 海底隧道 → 美人鱼 → 午餐 → 15:00 离园 → 酒店 → 秋林里道斯 → 咖啡 → 松花江 → 最后一顿晚餐",
    transport: "往返打车。进园前先看演出时间，倒推路线。",
    food: "午餐提前或延后，避免演出时间被打断。晚餐选最后想再吃一次的餐厅。",
    tips: ["先看演出时间", "不要先进海底隧道", "午餐提前或延后", "15:00 离园回中央大街休息"],
    timeline: [
      ["09:30", "打车", "酒店打车去波塞冬海底世界。"],
      ["10:30", "演出", "先确认海豚、白鲸、美人鱼演出。"],
      ["12:40", "午餐", "根据演出空档吃饭。"],
      ["13:40", "海底隧道", "最后走海底隧道，节奏更顺。"],
      ["15:00", "离园", "离园返回中央大街。"],
      ["17:00", "松花江", "咖啡、松花江、最后晚餐。"]
    ]
  },
  {
    day: 5,
    title: "返程",
    image: img("river"),
    route: "酒店 → 中央大街 → 马迭尔 → 红肠 → 列巴 → 酒店 → 打车 → 机场",
    transport: "购物结束回酒店整理，再打车机场。",
    food: "只买可携带、确定会吃的东西。马迭尔现场吃，红肠列巴带走。",
    tips: ["上午集中采购", "俄罗斯食品不买", "机场前预留 45-60 分钟车程", "行李先回酒店整理"],
    timeline: [
      ["09:30", "中央大街", "最后慢走，补买马迭尔。"],
      ["10:30", "购物", "红肠、列巴、少量伴手礼。"],
      ["11:40", "酒店", "回酒店整理行李。"],
      ["13:00", "打车", "打车去机场。"],
      ["14:00", "机场", "留足安检和休息时间。"]
    ]
  }
];

const places = [
  ["圣索菲亚教堂", "★★★★★", "45-60 分钟", "08:30-17:00", "外观免费", "夜景外观、广场远景、侧面砖墙", "广场商业拍照点不用买", "日落后 30 分钟", "中央商城", "附近咖啡馆", "60-120 元", "支持较少"],
  ["中央大街", "★★★★☆", "1.5-2 小时", "全天", "免费", "慢走建筑、买马迭尔、去江边", "不买俄罗斯食品", "清晨或蓝调时刻", "商场内", "马迭尔周边", "30-100 元", "部分支持"],
  ["太阳岛", "★★★★★", "4-5 小时", "08:30-17:00", "以当日为准", "轮渡去、观光车、索道回", "不建议暴走", "日落前索道", "入口/服务区", "俄式风情区", "150-260 元", "部分支持"],
  ["波塞冬海底世界", "★★★★☆", "4-5 小时", "09:00-16:30", "需购票", "倒推演出时间", "不要先进海底隧道", "演出前排队前", "园区内", "园区餐饮区", "260-420 元", "部分支持"]
];

const restaurants = [
  ["老厨家", "锅包肉 / 地三鲜 / 汤", "80-120 元/人", "10:30-21:00", "饭点排队，2 人 3 菜足够"],
  ["华梅", "红菜汤 / 罐焖牛肉 / 面包", "120-180 元/人", "11:00-21:00", "吃环境，避开黄金饭点"],
  ["塔道斯", "俄式西餐 / 烤肉 / 甜点", "120-180 元/人", "11:00-21:00", "第一晚更适合轻松收尾"],
  ["波特曼", "俄餐 / 西餐 / 甜品", "130-200 元/人", "11:00-21:00", "适合替补华梅"],
  ["金刚山", "烧烤 / 冷面 / 啤酒", "90-140 元/人", "16:00-凌晨", "晚餐高峰排队明显"],
  ["秋林里道斯", "红肠 / 列巴 / 糕点", "30-120 元", "09:00-20:00", "第 5 天再集中买"]
];

function mapsUrl(name) {
  return `https://maps.apple.com/?q=${encodeURIComponent(name + " 哈尔滨")}&dirflg=w`;
}

function renderDays() {
  const root = document.querySelector("#days");
  root.innerHTML = days.map((d) => `
    <section class="section day snap-section" id="day${d.day}" data-day="${d.day}">
      <div class="day-header">
        <div><span>第 ${String(d.day).padStart(2, "0")} 天</span><h2>${d.title}</h2></div>
        <a class="maps-button" href="${mapsUrl(d.title)}"> 地图</a>
      </div>
      <div class="timeline reveal">
        ${d.timeline.map(([time, title, text], i) => `
          <details ${i === 0 ? "open" : ""}>
            <summary><span class="time">${time}</span><h3>${title}</h3></summary>
            <p>${text}</p>
          </details>`).join("")}
      </div>
      <div class="day-grid">
        <article class="day-card reveal">
          <h3>路线</h3><p>${d.route}</p>
          <div class="tagline">${d.tips.map(t => `<span>${t}</span>`).join("")}</div>
        </article>
        <article class="day-card reveal">
          <h3>交通</h3><p>${d.transport}</p>
          <h3>餐厅</h3><p>${d.food}</p>
        </article>
        <article class="place-card reveal">
          <img loading="lazy" src="${d.image}" alt="${d.title}行程照片">
          <div class="place-body">
            <h3>${d.title}</h3>
            <p>当天的照片停靠点。行程保持简单，把时间留给天气、体力和偶然发现。</p>
          </div>
        </article>
        ${d.day === 3 ? placeCard(places[2]) : d.day === 4 ? placeCard(places[3]) : d.day === 1 ? placeCard(places[0]) : d.day === 2 ? placeCard(places[1]) : ""}
      </div>
    </section>
  `).join("");
}

function placeCard(p) {
  const [name, rate, play, open, ticket, how, avoid, photo, toilet, coffee, cost, pay] = p;
  return `<article class="place-card reveal">
    <div class="place-body">
      <h3>${name}</h3>
      <div class="meta">
        <div><span>推荐指数</span><b>${rate}</b></div>
        <div><span>游玩时间</span><b>${play}</b></div>
        <div><span>开放时间</span><b>${open}</b></div>
        <div><span>门票</span><b>${ticket}</b></div>
        <div><span>预约</span><b>${ticket === "免费" || ticket === "外观免费" ? "不需要" : "建议提前查"}</b></div>
        <div><span>苹果支付</span><b>${pay}</b></div>
        <div><span>卫生间</span><b>${toilet}</b></div>
        <div><span>人均</span><b>${cost}</b></div>
      </div>
      <p><b>推荐玩法</b><br>${how}</p>
      <p><b>避雷</b><br>${avoid}</p>
      <p><b>最佳机位</b><br>${photo}</p>
      <p><b>咖啡推荐</b><br>${coffee}</p>
      <p><b>纪念品</b><br>${name === "中央大街" ? "只买马迭尔和少量明信片。" : "不作为主要购物点。"}</p>
      <a class="maps-button" href="${mapsUrl(name)}"> 地图</a>
    </div>
  </article>`;
}

function renderRestaurants() {
  document.querySelector("#restaurants").innerHTML = restaurants.map((r) => `
    <article class="restaurant reveal">
      <img loading="lazy" src="${img("food")}" alt="${r[0]}推荐菜">
      <div class="restaurant-body">
        <h3>${r[0]}</h3>
        <div class="meta">
          <div><span>推荐菜</span><b>${r[1]}</b></div>
          <div><span>人均</span><b>${r[2]}</b></div>
          <div><span>营业时间</span><b>${r[3]}</b></div>
          <div><span>排队提醒</span><b>${r[4]}</b></div>
        </div>
        <a class="maps-button" href="${mapsUrl(r[0])}"> 地图</a>
      </div>
    </article>
  `).join("");
}

function setupMotion() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting));
  }, { threshold: 0.14 });
  document.querySelectorAll(".section > *, .reveal").forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  const sections = [...document.querySelectorAll("[data-day]")];
  const navLinks = [...document.querySelectorAll(".bottom-nav a")];
  const dayLabel = document.querySelector("#progressDay");
  const bar = document.querySelector("#progressBar");
  const pct = document.querySelector("#progressPct");
  const topButton = document.querySelector("#topButton");
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const day = Number(visible.target.dataset.day || 1);
    const percent = Math.round((day / 5) * 100);
    dayLabel.textContent = `第 ${day} 天 / 共 5 天`;
    bar.style.width = `${percent}%`;
    pct.textContent = `${percent}%`;
    navLinks.forEach((a) => a.classList.toggle("active", visible.target.id && a.getAttribute("href").includes(visible.target.id)));
  }, { threshold: [0.35, 0.6] });
  sections.forEach(s => observer.observe(s));

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    document.querySelector(".hero-image").style.transform = `scale(1.05) translateY(${y * 0.05}px)`;
    topButton.classList.toggle("show", y > 500);
  }, { passive: true });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupLiveCard() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.querySelector("#liveTime").textContent = `${String(hour).padStart(2, "0")}:${minutes}`;
  const plan = hour < 10
    ? ["红专街早市", "7 分钟", "先轻食，别吃太撑。"]
    : hour < 14
      ? ["太阳岛轮渡", "6 分钟", "可以买冰棍。"]
      : hour < 18
        ? ["索道", "12 分钟", "日落前一小时最舒服。"]
        : ["中央大街", "4 分钟", "夜景比白天更漂亮。"];
  document.querySelector("#liveNext").textContent = plan[0];
  document.querySelector("#liveWalk").textContent = plan[1];
  document.querySelector("#liveTip").textContent = plan[2];
}

renderDays();
renderRestaurants();
setupMotion();
setupLiveCard();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
