const img = (name) => `assets/images/${name}.jpg`;
const mapsUrl = (name, mode = "w") => `https://maps.apple.com/?q=${encodeURIComponent(`${name} 贵阳 贵州`)}&dirflg=${mode}`;

const stats = [
  ["5 Days", "4 Nights"],
  ["3 Landscapes", "贵阳 / 黄果树 / 荔波"],
  ["1 Old Town", "民生路与蔡家街"],
  ["Lots of Food", "烙锅 / 糯米饭 / 肠旺面"],
  ["2 Long Days", "黄果树 / 小七孔"],
  ["1 Hotel", "喷水池太平路"]
];

const days = [
  {
    day: 1,
    date: "8.24 MON",
    label: "DAY 01",
    title: "XI'AN → GUIYANG",
    cn: "抵达贵阳",
    cover: img("guiyang-oldtown"),
    quote: "第一天不安排景点。落地、入住，然后开始吃。",
    why: "第一天最重要的是把节奏放下来。酒店就在喷水池和太平路附近，傍晚不用跑远，散步、烙锅、喝一杯，就已经是贵阳的开始。",
    tags: ["抵达", "老城", "烙锅"],
    timeline: [
      ["10:45", "西安咸阳 T3 起飞", "出发前确认身份证、手机、充电宝。"],
      ["12:40", "抵达贵阳龙洞堡", "落地后前往酒店，别急着安排景点。"],
      ["下午", "酒店入住与休息", "维也纳国际酒店（贵阳喷水池地铁站太平路网红街店）。"],
      ["傍晚", "太平路附近散步", "以熟悉周边和找吃的为主。"],
      ["晚饭", "烙锅", "优先考虑一烙锅，牛肉、五花肉、洋芋、包浆豆腐。"],
      ["饭后", "去茶山", "推荐干酪云南普洱。"]
    ],
    transport: [
      ["推荐", "🚕 打车", "机场到酒店", "约 35-50 分钟", "带行李最省心。"],
      ["晚上", "🚶 步行", "太平路周边", "800 米内", "第一晚不为了探店跑很远。"]
    ],
    gallery: [img("guiyang-oldtown"), img("guizhou-food"), img("xiaoqikong"), img("huangguoshu")],
    food: ["一烙锅", "去茶山", "太平路随便走走"],
    tips: ["第一天不用为了探店跑很远", "住在喷水池，本身就适合慢慢吃", "晚饭别点太多，后面还有很多东西"]
  },
  {
    day: 2,
    date: "8.25 TUE",
    label: "DAY 02",
    title: "QIANLING MOUNTAIN · OLD TOWN",
    cn: "贵阳慢慢逛",
    cover: img("guiyang-oldtown"),
    quote: "这是整趟旅程里最适合吃东西的一天。",
    why: "黔灵山适合上午散步，下午回老城扫街。把民生路、蔡家街、太平路放在同一天，减少来回折腾，也方便吃一点、走一点、再吃一点。",
    tags: ["黔灵山", "老城", "小吃"],
    timeline: [
      ["早餐", "毛阿姨糯米饭 / 罗记肠旺面", "二选一即可，Day 5 再补另一家。"],
      ["上午", "黔灵山公园", "以散步为主，穿舒服鞋，注意猴子。"],
      ["下午", "民生路 → 蔡家街 → 太平路", "蛋包洋芋、豆腐圆子、冰浆、丝娃娃、香酥鸭。"],
      ["规则", "ONE PORTION, TWO PEOPLE", "每样买一份，两个人分着吃。"],
      ["晚上", "看战斗力决定", "很撑就回太平路散步或喝东西。"]
    ],
    transport: [
      ["推荐", "🚶 步行", "老城区域", "800 米内", "小吃密集，边走边吃最舒服。"],
      ["备选", "🚕 打车", "黔灵山往返", "约 15-25 元", "累了就打车，不硬撑。"],
      ["备选", "🚇 地铁", "喷水池周边", "约 2-3 元", "不堵车，但进出站要走路。"]
    ],
    gallery: [img("guiyang-oldtown"), img("guizhou-food"), img("xiaoqikong"), img("huangguoshu")],
    food: ["毛阿姨糯米饭", "罗记肠旺面", "豆腐圆子", "蛋包洋芋", "冰浆"],
    tips: ["两个早餐不用都吃", "食物不要拿在手上逗猴子", "不要把打卡所有店当任务", "贵阳最好吃的体验是边走边吃"]
  },
  {
    day: 3,
    date: "8.26 WED",
    label: "DAY 03",
    title: "HUANGGUOSHU WATERFALL",
    cn: "去看大瀑布",
    cover: img("huangguoshu"),
    quote: "今天只做一件事：去看瀑布。",
    why: "黄果树距离贵阳远，一天只安排它才舒服。今天不叠加探店，晚上回贵阳后看体力吃豆米火锅。",
    tags: ["黄果树", "一日游", "雨衣"],
    timeline: [
      ["09:00", "延安西路老客车站出发", "提前到站，不压线。"],
      ["约 11:30", "抵达黄果树", "先确认返程时间。"],
      ["白天", "黄果树瀑布游览", "雨衣比雨伞更有用。"],
      ["17:30", "返程", "不要把时间耗到太晚。"],
      ["晚上", "回贵阳", "推荐豆米火锅，按体力决定。"]
    ],
    transport: [
      ["推荐", "🚌 景区大巴", "约 2.5 小时", "以当日为准", "直达、稳定，适合一日游。"],
      ["景区内", "🚶 步行", "按景区路线", "0 元", "防滑鞋比好看更重要。"]
    ],
    gallery: [img("huangguoshu"), img("xiaoqikong"), img("guizhou-food"), img("guiyang-oldtown")],
    food: ["豆米火锅", "简单晚饭", "少量零食"],
    bag: ["一次性雨衣", "防滑运动鞋", "备用袜子", "手机防水袋", "充电宝", "水", "少量零食"],
    tips: ["雨伞可以带，但瀑布面前雨衣更有用", "备用袜子很重要", "晚上不要再安排远距离探店"]
  },
  {
    day: 4,
    date: "8.27 THU",
    label: "DAY 04",
    title: "LIBO · XIAOQIKONG",
    cn: "最漂亮，也最赶的一天",
    cover: img("xiaoqikong"),
    quote: "最重要的不是把小七孔全部玩完，而是按时回到荔波站。",
    why: "小七孔很漂亮，但这天真正的风险是时间。中午到、晚上 20:12 返程，高铁时间是底线，游览要围绕返程倒推。",
    tags: ["小七孔", "高铁", "轻装"],
    timeline: [
      ["10:11", "贵阳北站出发", "只带当天小包，轻装。"],
      ["11:50", "抵达荔波站", "出站后尽快转公交。"],
      ["约 12:05", "公交前往小七孔东门", "公交约 15 分钟。"],
      ["下午", "小七孔游览", "优先水面、桥、核心景观，不贪全。"],
      ["18:30 左右", "准备离开景区", "开始前往车站。"],
      ["20:12", "荔波站出发", "今天最重要的时间。"],
      ["21:25", "抵达贵阳站", "回酒店休息，简单吃。"]
    ],
    transport: [
      ["推荐", "🚄 高铁", "贵阳北 → 荔波", "10:11-11:50", "时间固定，提前到站。"],
      ["接驳", "🚌 公交", "约 15 分钟", "以当日为准", "到小七孔东门。"],
      ["返程", "🚄 高铁", "荔波 → 贵阳站", "20:12-21:25", "DON'T MISS THE TRAIN。"]
    ],
    gallery: [img("xiaoqikong"), img("huangguoshu"), img("guiyang-oldtown"), img("guizhou-food")],
    food: ["荔波就近解决", "回贵阳简单吃", "不安排专门探店"],
    bag: ["防晒", "雨衣", "运动鞋", "水", "充电宝"],
    tips: ["DON'T MISS THE TRAIN", "18:30 左右就要准备离开景区", "不建议为了多看一个点冒险赶车"]
  },
  {
    day: 5,
    date: "8.28 FRI",
    label: "DAY 05",
    title: "GUIYANG → XI'AN",
    cn: "睡醒，再吃一顿",
    cover: img("guizhou-food"),
    quote: "最后一天什么都不赶，把还没吃到的补上。",
    why: "航班在 14:40，上午适合在喷水池和太平路附近随便走走，补早餐、买伴手礼，回酒店拿行李后直接去机场。",
    tags: ["早餐", "伴手礼", "返程"],
    timeline: [
      ["早餐", "补另一家", "Day 2 吃糯米饭，今天吃肠旺面；反过来也可以。"],
      ["上午", "喷水池 / 太平路随便走走", "不新增远距离景点。"],
      ["伴手礼", "但家香酥鸭 / 丁家脆哨", "只买确定会吃的。"],
      ["中午", "回酒店拿行李", "检查身份证、手机、票。"],
      ["14:40", "贵阳龙洞堡起飞", "返程西安。"],
      ["16:35", "抵达西安咸阳 T3", "旅程结束。"]
    ],
    transport: [
      ["推荐", "🚶 步行", "酒店周边", "800 米内", "最后一天不折腾。"],
      ["返程", "🚕 打车", "酒店到机场", "约 35-50 分钟", "带行李最稳。"]
    ],
    gallery: [img("guizhou-food"), img("guiyang-oldtown"), img("xiaoqikong"), img("huangguoshu")],
    food: ["毛阿姨糯米饭", "罗记肠旺面", "但家香酥鸭", "丁家脆哨"],
    tips: ["伴手礼只买确定会吃的", "上午不安排新景点", "机场前别压线"]
  }
];

const restaurantGroups = [
  ["烙锅", "一烙锅", "牛肉 / 五花肉 / 洋芋 / 包浆豆腐", "MUST TRY", "第一晚最适合，别为了别的店跑太远。"],
  ["早餐", "毛阿姨糯米饭", "糯米饭", "PLAN A", "想尝本地早餐、喜欢糯米和脆哨就选它。"],
  ["早餐", "罗记肠旺面", "肠旺面", "PLAN B", "贵阳代表性早餐，Day 2 / Day 5 各吃一家即可。"],
  ["贵阳小吃", "豆腐圆子 / 蛋包洋芋 / 丝娃娃 / 冰浆", "共享一份", "SHARE", "不要每样都点完整一份，两个人共享。"],
  ["正餐", "豆米火锅", "豆米火锅", "AFTER WATERFALL", "黄果树回来晚上吃，暖胃但别点太多。"],
  ["DRINK", "去茶山", "干酪云南普洱", "小张推荐", "饭后散步喝一杯，适合第一晚。"]
];

const packing = [
  ["DOCUMENTS", ["身份证", "手机", "机票 / 高铁票"]],
  ["DAILY BAG", ["充电宝", "折叠伞", "一次性雨衣", "防晒", "纸巾", "水"]],
  ["WATERFALL DAYS", ["防滑运动鞋", "备用袜子", "手机防水袋"]],
  ["MEDICINE", ["肠胃药", "晕车药", "创可贴", "个人常用药"]]
];

const tips = [
  ["WEATHER", "热 + 晒 + 阵雨", "防晒和雨衣不是二选一，是都带。"],
  ["SHOES", "运动鞋优先", "黄果树和小七孔尤其重要。"],
  ["RAIN", "雨衣常驻", "一次性雨衣放在随身包。"],
  ["POWER", "3C 标识清晰", "充电宝随身携带，不托运。"],
  ["FOOD", "辣 / 酸 / 油 / 糯", "妈妈肠胃敏感的话，不要一天集中吃太多。"],
  ["TIME", "8.27 看表", "20:12 荔波返程高铁是底线。"]
];

function tagList(tags) {
  return tags.map((tag) => `<span>${tag}</span>`).join("");
}

function renderOverview() {
  document.querySelector("#overviewStats").innerHTML = stats.map(([value, label]) => `
    <article><b>${value}</b><span>${label}</span></article>
  `).join("");

  document.querySelector("#dayStrip").innerHTML = days.map((day) => `
    <a href="#day${day.day}">
      <span>${day.label}</span>
      <b>${day.date.split(" ")[0]}</b>
      <em>${day.cn}</em>
      <small>${tagList(day.tags)}</small>
    </a>
  `).join("");
}

function renderDays() {
  document.querySelector("#days").innerHTML = days.map((day, index) => `
    <section class="day-section snap-section" id="day${day.day}" data-day="${day.day}">
      <div class="day-cover">
        <img loading="lazy" src="${day.cover}" alt="${day.cn}">
        <div>
          <p>${day.label} · ${day.date}</p>
          <h2>${day.title}</h2>
          <span>${day.cn}</span>
          <small>${tagList(day.tags)}</small>
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
        <aside class="why-card reveal">
          <p class="section-label">WHY THIS PLAN</p>
          <h3>为什么这样安排</h3>
          <p>${day.why}</p>
          ${day.bag ? `<div class="bag-card"><b>TODAY'S BAG</b>${day.bag.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
        </aside>
      </div>

      ${day.day === 4 ? `<div class="train-alert reveal"><span>DON'T MISS THE TRAIN</span><b>20:12 荔波站出发</b><p>今天最重要的不是把小七孔全部玩完，而是按时回到荔波站。</p></div>` : ""}

      <div class="transport-strip reveal">
        ${day.transport.map(([label, mode, route, time, reason]) => `
          <article><span>${label}</span><b>${mode}</b><em>${route} · ${time}</em><p>${reason}</p></article>
        `).join("")}
      </div>

      <div class="gallery-block reveal">
        <div class="mini-heading"><span>GALLERY</span><b>${day.cn}的四个画面</b></div>
        <div class="gallery-grid">
          ${day.gallery.map((image, i) => `<img loading="lazy" src="${image}" alt="${day.cn}照片 ${i + 1}">`).join("")}
        </div>
      </div>

      <div class="food-mini reveal">
        <div class="mini-heading"><span>EAT TODAY</span><b>今天吃什么</b></div>
        <div>${day.food.map((item) => `<span>${item}</span>`).join("")}</div>
      </div>

      <div class="today-tips reveal">
        <div class="mini-heading"><span>TODAY'S TIP</span><b>今天的小提醒</b></div>
        <div>${day.tips.map((tip) => `<span>${tip}</span>`).join("")}</div>
      </div>
    </section>
  `).join("");
}

function renderRestaurants() {
  document.querySelector("#restaurantGuide").innerHTML = restaurantGroups.map(([type, name, dish, badge, desc]) => `
    <article class="restaurant-card">
      <img loading="lazy" src="${type === "DRINK" ? img("guiyang-oldtown") : img("guizhou-food")}" alt="${name}">
      <div>
        <span>${type}</span>
        <h3>${name}</h3>
        <p>${desc}</p>
        <dl>
          <div><dt>推荐</dt><dd>${dish}</dd></div>
          <div><dt>标记</dt><dd>${badge}</dd></div>
          <div><dt>排队</dt><dd>不排队就换</dd></div>
          <div><dt>建议</dt><dd>两人共享</dd></div>
        </dl>
        <a href="${mapsUrl(name)}"> 地图</a>
      </div>
    </article>
  `).join("");
}

function renderLists() {
  document.querySelector("#packingList").innerHTML = packing.map(([title, items]) => `
    <article><span>${title}</span>${items.map((item) => `<b>${item}</b>`).join("")}</article>
  `).join("");

  document.querySelector("#travelTips").innerHTML = tips.map(([title, value, desc]) => `
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
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const day = Number(visible.target.dataset.day || 1);
    dayLabel.textContent = `Day ${day} / 5`;
    bar.style.width = `${Math.round((day / 5) * 100)}%`;
  }, { threshold: [0.35, 0.62] });
  sections.forEach((section) => observer.observe(section));

  const topButton = document.querySelector("#topButton");
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
renderRestaurants();
renderLists();
setupMotion();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
