const STORAGE_KEYS = {
  autoSave: "yy_nailong_auto_save_v1",
  manualSave: "yy_nailong_manual_save_v1",
  endings: "yy_nailong_endings_v1",
  settings: "yy_nailong_settings_v1"
};

const ASSETS = {
  bg: {
    classroomDay: "./assets/bg/classroom-day-v3-hd.jpg",
    classroomNight: "./assets/bg/classroom-night-v3-hd.jpg",
    classroomEvening: "./assets/bg/classroom-day-v3-hd.jpg",
    classroomSun: "./assets/bg/classroom-day-v3-hd.jpg",
    classroomCoolday: "./assets/bg/classroom-day-v3-hd.jpg",
    musicNight: "./assets/bg/classroom-night-v3-hd.jpg",
    musicSunset: "./assets/bg/street-sunset-v3-hd.jpg",
    musicDay: "./assets/bg/classroom-day-v3-hd.jpg",
    streetNight: "./assets/bg/street-night-v3-hd.jpg",
    streetSunset: "./assets/bg/street-sunset-v3-hd.jpg",
    streetDay: "./assets/bg/street-day-v3-hd.jpg",
    festivalCafe: "./assets/bg/festival-cafe-v3-hd.jpg",
    sakura: "./assets/bg/street-sunset-v3-hd.jpg",
    neon: "./assets/bg/street-night-v3-hd.jpg",
    river: "./assets/bg/street-day-v3-hd.jpg",
    bridge: "./assets/bg/classroom-day-v3-hd.jpg"
  },
  hero: {
    daily: "./assets/images/yuanyuan-v2-05-hd.jpg",
    wink: "./assets/images/yuanyuan-v2-06-hd.jpg",
    stage: "./assets/images/yuanyuan-v2-01-hd.jpg",
    walk: "./assets/images/yuanyuan-v2-04-hd.jpg"
  },
  dragon: {
    happy: "./assets/images/nailong-09-hd.jpg",
    wow: "./assets/images/nailong-10-hd.jpg",
    sleep: "./assets/images/nailong-08-hd.jpg"
  }
};

const ENDING_LIBRARY = {
  ending_warm: {
    title: "结局一：软糖月光",
    desc: "你们在晨桥看日出，奶龙把“永远在一起”写进了云里。"
  },
  ending_adventure: {
    title: "结局二：极光远征",
    desc: "蒝蒝与奶龙踏上远行，追逐每一扇通往未知的光门。"
  },
  ending_daily: {
    title: "结局三：街角烟火",
    desc: "没有奇迹大爆发，但每个平凡夜晚都成了最温柔的冒险。"
  },
  ending_secret: {
    title: "隐藏结局：银河双生",
    desc: "你们唱出的旋律唤醒了星河核心，整个城市为你们点亮。"
  }
};

Object.assign(ENDING_LIBRARY, {
  ending_warm: {
    title: "结局一：护腕约定",
    desc: "比赛后的护腕与约定，让学妹的心意终于落地。"
  },
  ending_adventure: {
    title: "结局二：追分计划",
    desc: "蒝蒝决定先变强，把距离化成可以追上的步数。"
  },
  ending_daily: {
    title: "结局三：默契日常",
    desc: "没有轰鸣的告白，却有稳定的并肩与陪伴。"
  },
  ending_secret: {
    title: "隐藏结局：终身陪练",
    desc: "歌单、护腕与笑意，让攻略写成了真正的主线。"
  }
});

const SCENES = {
  intro: {
    bg: "streetNight",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "春末的晚风掠过街道，蒝蒝刚走出地铁站，就看见了一团奶油色的小身影。" },
      { speaker: "蒝蒝", text: "欸？你是...奶龙？怎么一个人躲在路灯下面发呆。" },
      { speaker: "奶龙", text: "今天的夜空会开一扇“愿望门”，但我有点不敢去。要不要和我一起？", dragon: "wow" },
      { speaker: "蒝蒝", text: "当然可以呀，你不是一个人。我们今晚一起把故事写到最好。", hero: "wink" },
      { speaker: "旁白", text: "路边的樱花像舞台幕布一样缓缓落下，冒险从这一刻正式开始。" }
    ],
    choices: [
      { text: "陪奶龙去追那道会唱歌的流星", next: "route_adventure", effects: { courage: 1, wonder: 1 } },
      { text: "拉着奶龙去夜市，先把肚子喂饱再谈理想", next: "route_market", effects: { bond: 1 } },
      { text: "带奶龙去排练今晚的舞台演出", next: "route_stage", effects: { bond: 1, wonder: 1 } }
    ]
  },
  route_adventure: {
    bg: "streetSunset",
    hero: "walk",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "你们沿着星河步道奔跑，霓光像流星一样从脚边划过。" },
      { speaker: "奶龙", text: "前面分成两条路，一条快，一条美。蒝蒝，你来选！" },
      { speaker: "蒝蒝", text: "不管哪条路，只要你在旁边，我都敢走。", hero: "daily" }
    ],
    choices: [
      { text: "翻过旧天桥，抢在光门关闭前抵达", next: "midnight_meet", effects: { courage: 2 } },
      { text: "在河岸写下愿望，让夜风带路", next: "midnight_meet", effects: { bond: 1, wonder: 1 } }
    ]
  },
  route_market: {
    bg: "festivalCafe",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "夜市霓虹亮起，奶龙闻到烤棉花糖味道后眼睛立刻发光。" },
      { speaker: "奶龙", text: "蒝蒝，我今天想成为“最会营业的奶龙主播”！" },
      { speaker: "蒝蒝", text: "那我来当你的经纪人。先吃饱，再征服镜头。", hero: "wink" }
    ],
    choices: [
      { text: "和奶龙完成直播挑战，边唱边跳", next: "midnight_meet", effects: { courage: 1, wonder: 1 } },
      { text: "给奶龙准备草莓可丽饼，安抚紧张情绪", next: "midnight_meet", effects: { bond: 2 } }
    ]
  },
  route_stage: {
    bg: "musicNight",
    hero: "stage",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "临时舞台灯光点亮，蒝蒝的发尾被染成温柔的粉色。" },
      { speaker: "奶龙", text: "如果台下的人太多，我会不会唱跑调呀...", dragon: "sleep" },
      { speaker: "蒝蒝", text: "你跟着我就好。我们不是表演给别人看，是在讲我们的故事。", hero: "stage", dragon: "wow" }
    ],
    choices: [
      { text: "直接上台，把心跳当节拍", next: "midnight_meet", effects: { courage: 2 } },
      { text: "幕后合拍练习十分钟，再一起亮相", next: "midnight_meet", effects: { bond: 1, wonder: 1 } }
    ]
  },
  midnight_meet: {
    bg: "classroomNight",
    hero: "wink",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "午夜十二点，星桥中央出现一道缓慢旋转的光门。" },
      { speaker: "奶龙", text: "蒝蒝，我听见里面有音乐...像你刚刚哼的那段旋律。", dragon: "wow" },
      { speaker: "蒝蒝", text: "那我们就用今晚的选择，决定明天会变成什么样。", hero: "daily" }
    ],
    choices: [
      { text: "把手给奶龙，一起冲向光门", next: "final_judge", effects: { courage: 1, wonder: 1 } },
      { text: "轻轻抱住奶龙，告诉它“别怕，我在”", next: "final_judge", effects: { bond: 2 } },
      { text: "向星空唱出只有你们懂的和声", next: "final_judge", effects: { wonder: 2, bond: 1 } }
    ]
  },
  final_judge: {
    onEnter: (game) => {
      const s = game.state;
      if (s.wonder >= 4 && s.bond >= 3) return "ending_secret";
      if (s.bond >= 4) return "ending_warm";
      if (s.courage >= 4) return "ending_adventure";
      return "ending_daily";
    },
    lines: []
  },
  ending_warm: {
    endingId: "ending_warm",
    bg: "classroomSun",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "晨曦爬上桥栏，城市慢慢苏醒。你们靠在一起，看云层被染成草莓奶油色。" },
      { speaker: "奶龙", text: "蒝蒝，原来最厉害的魔法不是光门，是你说“我在”的那一刻。" },
      { speaker: "蒝蒝", text: "那就约定好吧。以后每个清晨，都一起看第一束光。", hero: "wink" }
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  },
  ending_adventure: {
    endingId: "ending_adventure",
    bg: "streetDay",
    hero: "walk",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "光门之后是无边夜空与漂浮列车。蒝蒝和奶龙踏上了新的旅行地图。" },
      { speaker: "奶龙", text: "下一站是极光海！再下一站去收集会笑的星星！" },
      { speaker: "蒝蒝", text: "那就不设终点。只要你还想看远方，我们就一直前进。", hero: "daily" }
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  },
  ending_daily: {
    endingId: "ending_daily",
    bg: "musicDay",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "光门没有完全打开，但夜市烟火在你们头顶炸开了彩色星雨。" },
      { speaker: "奶龙", text: "好像没有发生大奇迹，但我今天特别开心。" },
      { speaker: "蒝蒝", text: "因为幸福本来就藏在这些小事里呀。我们明晚继续。", hero: "wink" }
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  },
  ending_secret: {
    endingId: "ending_secret",
    bg: "musicSunset",
    hero: "stage",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "当你们的和声落下，整片星河像被点燃。隐藏的“银河核心”在桥上展开。" },
      { speaker: "奶龙", text: "传说里说的双生共鸣...原来就是我们！" },
      { speaker: "蒝蒝", text: "今夜开始，我们要把这座城市变成会发光的舞台。", hero: "stage" }
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  }
};

Object.assign(SCENES, {
  intro: {
    bg: "classroomDay",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "体育课临时选项里出现了篮球课。蒝蒝本想避开，可签到时才发现名单已经提交。她几乎不懂篮球，只能站在场边看别人奔跑。"},
      { speaker: "旁白", text: "奶龙前辈是篮球队主力，外号小科比。平时你们几乎没有交集，这节课却刚好同班。"},
      { speaker: "蒝蒝", text: "（他好像每次投篮都稳得过分……）", hero: "wink" },
      { speaker: "旁白", text: "课间休息，男生们嬉笑打闹，一颗篮球突然朝蒝蒝脸上飞来。她下意识闭上了眼。"},
      { speaker: "旁白", text: "下一秒，球停在半空——奶龙前辈单手抓住了篮球，顺势把球丢回去。男生们连连道歉。"},
      { speaker: "奶龙", text: "没事吧？下次记得看球。", dragon: "wow" },
      { speaker: "蒝蒝", text: "我……我没事。谢谢你，前辈。", hero: "daily" }
    ],
    choices: [
      { text: "认真道谢，递上随身带的水", next: "after_class", effects: { bond: 2 } },
      { text: "装作镇定，悄悄记住他的名字", next: "after_class", effects: { wonder: 1, bond: 1 } }
    ]
  },
  after_class: {
    bg: "classroomDay",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "下课后，蒝蒝站在走廊，手心还带着刚才的汗。她第一次意识到，和前辈说话比跑800还紧张。"},
      { speaker: "奶龙", text: "你是新生吧？篮球课不难，怕的话就站边上看战术。", dragon: "happy" },
      { speaker: "蒝蒝", text: "我想学一点……至少不拖大家后腿。", hero: "wink" },
      { speaker: "旁白", text: "奶龙前辈没有立刻回答，只是把毛巾递给她。"},
      { speaker: "奶龙", text: "那从最基础的传球开始。明天训练结束，我等你十分钟。", dragon: "wow" }
    ],
    choices: [
      { text: "答应下来，决定认真练习", next: "training_start", effects: { courage: 2 } },
      { text: "说自己时间少，但愿意帮忙记录训练", next: "training_start", effects: { bond: 2 } },
      { text: "偷偷做一份篮球歌单想送给他", next: "training_start", effects: { wonder: 2 } }
    ]
  },
  training_start: {
    bg: "streetSunset",
    hero: "walk",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "几次练习后，蒝蒝依旧不算有运动细胞，但她开始听得懂传球、掩护和节奏。"},
      { speaker: "奶龙", text: "你学得比想象中快。篮球不是天赋，是习惯。", dragon: "wow" },
      { speaker: "蒝蒝", text: "那我就把习惯练成你看得见的进步。", hero: "daily" },
      { speaker: "旁白", text: "你们的距离从礼貌，慢慢变成了熟悉。"},
      { speaker: "旁白", text: "就在这时，学校通知：全校统一进行校园跑。蒝蒝必须参加。"}
    ],
    choices: [
      { text: "决定认真跑完，不给前辈添麻烦", next: "campus_run", effects: { courage: 1 } },
      { text: "担心自己跑不完，提前准备音乐鼓励自己", next: "campus_run", effects: { wonder: 1 } }
    ]
  },
  campus_run: {
    bg: "streetDay",
    hero: "walk",
    dragon: "sleep",
    lines: [
      { speaker: "旁白", text: "校园跑当天，蒝蒝一直切歌，想用音乐撑住节奏。结果不小心跑偏路线，多跑了整整2公里。"},
      { speaker: "旁白", text: "回到终点时，计时器显示无效。她站在操场边，鼻涕和眼泪一起掉下来。"},
      { speaker: "蒝蒝", text: "我怎么总是把事情搞砸……", hero: "daily" },
      { speaker: "旁白", text: "她一路低头往回走，风把哭声吹得很轻。就在拐角，奶龙前辈出现了。"},
      { speaker: "奶龙", text: "我听说你跑错路线了。过来，先把气喘匀。", dragon: "wow" },
      { speaker: "蒝蒝", text: "我真的好笨……", hero: "wink" },
      { speaker: "奶龙", text: "笨的不是你，是那张路线图。你已经跑了2公里，还能哭着回来，已经很厉害了。", dragon: "happy" }
    ],
    choices: [
      { text: "努力止住眼泪，想继续努力", next: "comfort_scene", effects: { courage: 2 } },
      { text: "把委屈说出来，告诉他自己很害怕", next: "comfort_scene", effects: { bond: 2 } }
    ]
  },
  comfort_scene: {
    bg: "streetSunset",
    hero: "wink",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "奶龙前辈放慢语气，把外套披到她肩上，像在给一场小小的雨找到避风处。"},
      { speaker: "奶龙", text: "你不是不擅长运动，你只是害怕别人看见你不擅长。"},
      { speaker: "蒝蒝", text: "那我可以……在你面前试着不怕吗？", hero: "daily" },
      { speaker: "奶龙", text: "可以。我会在你旁边。", dragon: "wow" },
      { speaker: "旁白", text: "那一刻，蒝蒝知道自己正在攻略一个温柔的前辈。"}
    ],
    choices: [
      { text: "邀请前辈一起复盘路线", next: "bond_growth", effects: { bond: 2 } },
      { text: "提出想学三分球当作目标", next: "bond_growth", effects: { courage: 2 } },
      { text: "把歌单分享给他，记录这天的心情", next: "bond_growth", effects: { wonder: 2 } }
    ]
  },
  bond_growth: {
    bg: "classroomEvening",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "之后的日子里，蒝蒝开始主动参加训练，也开始了解奶龙前辈的比赛和压力。"},
      { speaker: "奶龙", text: "你每次出现，训练就不那么累了。", dragon: "sleep" },
      { speaker: "蒝蒝", text: "那我就一直出现，直到你习惯为止。", hero: "wink" },
      { speaker: "旁白", text: "你们的关系从前辈与学妹，悄悄接近一种更亲密的节奏。"}
    ],
    choices: [
      { text: "决定在比赛前向他表露心意", next: "final_judge", effects: { bond: 3 } },
      { text: "把心意藏在比赛应援里", next: "final_judge", effects: { wonder: 2, bond: 1 } },
      { text: "先让自己变得更强，再追上他", next: "final_judge", effects: { courage: 3 } }
    ]
  },
  final_judge: {
    onEnter: (game) => {
      const s = game.state;
      if (s.bond >= 7 && s.wonder >= 3) return "ending_secret";
      if (s.bond >= 7) return "ending_warm";
      if (s.courage >= 7) return "ending_adventure";
      return "ending_daily";
    },
    lines: []
  },
  ending_warm: {
    endingId: "ending_warm",
    bg: "classroomSun",
    hero: "wink",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "比赛结束后，奶龙前辈在走廊拦下蒝蒝，轻轻把她拉进人少的角落。"},
      { speaker: "奶龙", text: "你是不是在攻略我？", dragon: "wow" },
      { speaker: "蒝蒝", text: "如果是的话，成功了吗？", hero: "wink" },
      { speaker: "旁白", text: "他没有回答，只是把手心的护腕递给她。那一刻，答案已经足够。"}
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  },
  ending_adventure: {
    endingId: "ending_adventure",
    bg: "streetDay",
    hero: "walk",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "蒝蒝选择先把自己练强。她的传球越来越准，陪练的次数越来越多。"},
      { speaker: "奶龙", text: "等你投进第一个三分，我们就去吃庆功甜品。", dragon: "happy" },
      { speaker: "旁白", text: "她抬头看见篮筐，心里只剩一句话：我要追上他，也要让他看到我。"}
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  },
  ending_daily: {
    endingId: "ending_daily",
    bg: "festivalCafe",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "你们没有立刻表白，但每次训练后的并肩走路，都像一种默契。"},
      { speaker: "奶龙", text: "你今天没哭了。", dragon: "sleep" },
      { speaker: "蒝蒝", text: "因为有人在等我。", hero: "wink" },
      { speaker: "旁白", text: "故事还没结束，只是换成了更柔软的速度。"}
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  },
  ending_secret: {
    endingId: "ending_secret",
    bg: "classroomSun",
    hero: "stage",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "比赛当天，蒝蒝把歌单换成了第一节课的那首。奶龙前辈在罚球线回头看她，笑得很轻。"},
      { speaker: "奶龙", text: "学妹，你这个攻略太犯规了。", dragon: "wow" },
      { speaker: "蒝蒝", text: "那就判我终身陪练。", hero: "stage" },
      { speaker: "旁白", text: "掌声落下时，你们都知道，故事进入了真正的主线。"}
    ],
    choices: [
      { text: "回到标题", action: "title" },
      { text: "再体验一次（保留图鉴）", action: "restart" }
    ]
  }
});

const dom = {
  startScreen: document.getElementById("start-screen"),
  startBtn: document.getElementById("start-btn"),
  continueBtn: document.getElementById("continue-btn"),
  openEndingBtn: document.getElementById("open-ending-btn"),
  bgImage: document.getElementById("bg-image"),
  hero: document.getElementById("hero-sprite"),
  dragon: document.getElementById("dragon-sprite"),
  speaker: document.getElementById("speaker"),
  dialogue: document.getElementById("dialogue-text"),
  choiceContainer: document.getElementById("choice-container"),
  nextHint: document.getElementById("next-hint"),
  dialoguePanel: document.getElementById("dialogue-panel"),
  autoBtn: document.getElementById("auto-btn"),
  saveBtn: document.getElementById("save-btn"),
  loadBtn: document.getElementById("load-btn"),
  historyBtn: document.getElementById("history-btn"),
  endingBtn: document.getElementById("ending-btn"),
  muteBtn: document.getElementById("mute-btn"),
  volume: document.getElementById("volume-slider"),
  historyModal: document.getElementById("history-modal"),
  endingModal: document.getElementById("ending-modal"),
  historyList: document.getElementById("history-list"),
  endingList: document.getElementById("ending-list"),
  toast: document.getElementById("toast"),
  statBond: document.getElementById("stat-bond"),
  statCourage: document.getElementById("stat-courage"),
  statWonder: document.getElementById("stat-wonder"),
  bgm: document.getElementById("bgm")
};

const game = {
  sceneId: "intro",
  lineIndex: 0,
  currentScene: null,
  typingTimer: null,
  pendingAutoTimer: null,
  typingText: "",
  typingCursor: 0,
  isTyping: false,
  canAdvance: false,
  isAuto: false,
  history: [],
  unlockedEndings: loadUnlockedEndings(),
  state: createDefaultState(),
  settings: loadSettings()
};

function createDefaultState() {
  return { bond: 0, courage: 0, wonder: 0 };
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 1500);
}

function loadUnlockedEndings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.endings)) || {};
  } catch (error) {
    return {};
  }
}

function persistUnlockedEndings() {
  localStorage.setItem(STORAGE_KEYS.endings, JSON.stringify(game.unlockedEndings));
}

function loadSettings() {
  const fallback = { volume: 0.55, muted: false };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(STORAGE_KEYS.settings)) || {}) };
  } catch (error) {
    return fallback;
  }
}

function persistSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(game.settings));
}

function applySettings() {
  dom.volume.value = String(game.settings.volume);
  dom.bgm.volume = game.settings.volume;
  dom.bgm.muted = game.settings.muted;
  dom.muteBtn.classList.toggle("active", game.settings.muted);
  dom.muteBtn.textContent = game.settings.muted ? "已静音" : "静音";
}

function updateStats() {
  dom.statBond.textContent = String(game.state.bond);
  dom.statCourage.textContent = String(game.state.courage);
  dom.statWonder.textContent = String(game.state.wonder);
}

function syncPortraitLayout() {
  const panel = dom.dialoguePanel;
  const topUi = document.getElementById("top-ui");
  if (!panel || !topUi) return;
  const topRect = topUi.getBoundingClientRect();
  const rect = panel.getBoundingClientRect();
  const bottomReserve = Math.max(
    250,
    Math.min(Math.round(window.innerHeight * 0.62), Math.round(window.innerHeight - rect.top + 32))
  );
  const topReserve = Math.max(86, Math.min(240, Math.round(topRect.height + topRect.top + 18)));
  document.documentElement.style.setProperty("--dialogue-reserve", `${bottomReserve}px`);
  document.documentElement.style.setProperty("--top-ui-reserve", `${topReserve}px`);
}

function setVisuals(bgKey, heroKey, dragonKey) {
  if (bgKey && ASSETS.bg[bgKey]) dom.bgImage.src = ASSETS.bg[bgKey];
  if (heroKey && ASSETS.hero[heroKey]) dom.hero.src = ASSETS.hero[heroKey];
  if (dragonKey && ASSETS.dragon[dragonKey]) dom.dragon.src = ASSETS.dragon[dragonKey];
}

function pushHistory(speaker, text) {
  const line = `${speaker}：${text}`;
  game.history.push(line);
  if (game.history.length > 120) game.history.shift();
}

function renderHistory() {
  dom.historyList.innerHTML = "";
  if (!game.history.length) {
    dom.historyList.innerHTML = `<div class="history-item">还没有对话记录。</div>`;
    return;
  }
  for (const item of game.history.slice().reverse()) {
    const div = document.createElement("div");
    div.className = "history-item";
    div.textContent = item;
    dom.historyList.appendChild(div);
  }
}

function renderEndingLibrary() {
  dom.endingList.innerHTML = "";
  Object.entries(ENDING_LIBRARY).forEach(([id, info]) => {
    const unlocked = Boolean(game.unlockedEndings[id]);
    const card = document.createElement("div");
    card.className = `ending-item ${unlocked ? "" : "locked"}`.trim();
    card.innerHTML = `
      <h3>${unlocked ? info.title : "？？？未解锁结局"}</h3>
      <div>${unlocked ? info.desc : "继续游玩以解锁该结局。"}</div>
    `;
    dom.endingList.appendChild(card);
  });
}

function unlockEnding(endingId) {
  if (!endingId || game.unlockedEndings[endingId]) return;
  game.unlockedEndings[endingId] = true;
  persistUnlockedEndings();
  renderEndingLibrary();
  showToast(`已解锁：${ENDING_LIBRARY[endingId].title}`);
}

function openModal(el) {
  el.classList.add("visible");
}

function closeModal(el) {
  el.classList.remove("visible");
}

function clearTyping() {
  if (game.typingTimer) clearInterval(game.typingTimer);
  game.typingTimer = null;
}

function clearAutoTimer() {
  if (game.pendingAutoTimer) clearTimeout(game.pendingAutoTimer);
  game.pendingAutoTimer = null;
}

function startTyping(text) {
  clearTyping();
  clearAutoTimer();

  game.typingText = text;
  game.typingCursor = 0;
  game.isTyping = true;
  game.canAdvance = false;
  dom.dialogue.textContent = "";
  dom.nextHint.textContent = "正在显示文字...";

  const immediate = text.length <= 2;
  if (immediate) {
    finishTyping();
    return;
  }

  game.typingTimer = setInterval(() => {
    game.typingCursor += 1;
    dom.dialogue.textContent = game.typingText.slice(0, game.typingCursor);
    if (game.typingCursor >= game.typingText.length) {
      finishTyping();
    }
  }, 24);
}

function finishTyping() {
  if (!game.isTyping) return;
  clearTyping();
  dom.dialogue.textContent = game.typingText;
  game.isTyping = false;
  game.canAdvance = true;
  dom.nextHint.textContent = "点击对话框或按 Enter 继续";

  const line = game.currentScene?.lines?.[game.lineIndex];
  if (line) {
    pushHistory(line.speaker, line.text);
    renderHistory();
  }

  if (game.isAuto) {
    clearAutoTimer();
    game.pendingAutoTimer = setTimeout(() => {
      advanceStory();
    }, 1050);
  }
}

function applyLineVisuals(line) {
  setVisuals(line.bg || game.currentScene.bg, line.hero || game.currentScene.hero, line.dragon || game.currentScene.dragon);
  const dragonSpeaking = line.speaker === "奶龙";
  const heroSpeaking = line.speaker === "蒝蒝";
  dom.hero.classList.toggle("dim", dragonSpeaking);
  dom.dragon.classList.toggle("dim", heroSpeaking);
}

function renderCurrentLine() {
  const line = game.currentScene.lines[game.lineIndex];
  if (!line) return;
  applyLineVisuals(line);
  dom.speaker.textContent = line.speaker;
  startTyping(line.text);
  requestAnimationFrame(syncPortraitLayout);
}

function clearChoices() {
  dom.choiceContainer.innerHTML = "";
  requestAnimationFrame(syncPortraitLayout);
}

function showChoices() {
  clearChoices();
  const choices = game.currentScene.choices || [];
  if (!choices.length) return;

  game.canAdvance = false;
  dom.nextHint.textContent = "请选择一个选项（可按数字 1~3）";
  choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = `${index + 1}. ${choice.text}`;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      pickChoice(choice);
    });
    dom.choiceContainer.appendChild(btn);
  });
  requestAnimationFrame(syncPortraitLayout);
}

function applyEffects(effects) {
  if (!effects) return;
  Object.entries(effects).forEach(([key, value]) => {
    if (typeof game.state[key] !== "number") game.state[key] = 0;
    game.state[key] += value;
  });
  updateStats();
}

function pickChoice(choice) {
  applyEffects(choice.effects);
  clearChoices();

  if (choice.action === "title") {
    autoSave(true);
    showTitle();
    return;
  }

  if (choice.action === "restart") {
    restartRun();
    return;
  }

  if (choice.next) {
    enterScene(choice.next);
    autoSave(true);
  }
}

function enterScene(sceneId, options = {}) {
  const scene = SCENES[sceneId];
  if (!scene) return;

  clearTyping();
  clearAutoTimer();
  clearChoices();

  game.sceneId = sceneId;
  game.currentScene = scene;
  game.lineIndex = Number.isInteger(options.lineIndex) ? options.lineIndex : 0;

  if (typeof scene.onEnter === "function") {
    const redirect = scene.onEnter(game);
    if (redirect) {
      enterScene(redirect, {});
      return;
    }
  }

  if (scene.endingId) unlockEnding(scene.endingId);
  setVisuals(scene.bg, scene.hero, scene.dragon);
  updateStats();
  requestAnimationFrame(syncPortraitLayout);

  if (!scene.lines.length) {
    if (scene.choices?.length) showChoices();
    else if (scene.next) enterScene(scene.next);
    return;
  }

  if (options.pendingChoice && game.lineIndex >= scene.lines.length - 1) {
    const line = scene.lines[scene.lines.length - 1];
    dom.speaker.textContent = line.speaker;
    dom.dialogue.textContent = line.text;
    applyLineVisuals(line);
    game.isTyping = false;
    game.canAdvance = false;
    showChoices();
    return;
  }

  if (game.lineIndex >= scene.lines.length) game.lineIndex = scene.lines.length - 1;
  renderCurrentLine();
}

function hasVisibleChoices() {
  return dom.choiceContainer.children.length > 0;
}

function advanceStory() {
  if (dom.startScreen.classList.contains("visible")) return;

  if (game.isTyping) {
    finishTyping();
    return;
  }

  if (hasVisibleChoices()) {
    const firstChoice = game.currentScene.choices?.[0];
    if (firstChoice) pickChoice(firstChoice);
    return;
  }
  if (!game.canAdvance) return;

  if (game.lineIndex < game.currentScene.lines.length - 1) {
    game.lineIndex += 1;
    renderCurrentLine();
    autoSave(true);
    return;
  }

  if (game.currentScene.choices?.length) {
    showChoices();
    autoSave(true);
    return;
  }

  if (game.currentScene.next) {
    enterScene(game.currentScene.next);
    autoSave(true);
  }
}

function getSavePayload() {
  return {
    sceneId: game.sceneId,
    lineIndex: game.lineIndex,
    pendingChoice: hasVisibleChoices(),
    state: game.state,
    history: game.history,
    unlockedEndings: game.unlockedEndings,
    settings: game.settings,
    timestamp: Date.now()
  };
}

function saveSlot(key, silent = false) {
  const payload = getSavePayload();
  localStorage.setItem(key, JSON.stringify(payload));
  if (!silent) showToast("已保存当前进度");
  refreshContinueButton();
}

function autoSave(silent = true) {
  saveSlot(STORAGE_KEYS.autoSave, silent);
}

function loadSlot(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
}

function loadFromPayload(payload) {
  if (!payload || !payload.sceneId || !SCENES[payload.sceneId]) return false;
  game.state = { ...createDefaultState(), ...(payload.state || {}) };
  game.history = Array.isArray(payload.history) ? payload.history : [];
  game.unlockedEndings = { ...game.unlockedEndings, ...(payload.unlockedEndings || {}) };
  game.settings = { ...game.settings, ...(payload.settings || {}) };
  persistUnlockedEndings();
  persistSettings();
  applySettings();
  renderHistory();
  renderEndingLibrary();
  updateStats();
  enterScene(payload.sceneId, { lineIndex: payload.lineIndex || 0, pendingChoice: payload.pendingChoice });
  return true;
}

function manualSave() {
  saveSlot(STORAGE_KEYS.manualSave, false);
}

function manualLoad() {
  const manual = loadSlot(STORAGE_KEYS.manualSave);
  if (!manual) {
    showToast("没有找到手动存档");
    return;
  }
  loadFromPayload(manual);
  showToast("手动存档读取成功");
}

function continueGame() {
  const auto = loadSlot(STORAGE_KEYS.autoSave);
  const manual = loadSlot(STORAGE_KEYS.manualSave);
  const candidate = [auto, manual]
    .filter(Boolean)
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))[0];

  if (!candidate) {
    showToast("暂无可继续进度，已为你开始新故事");
    startNewGame();
    return;
  }
  hideTitle();
  loadFromPayload(candidate);
  tryPlayBgm();
}

function restartRun() {
  game.state = createDefaultState();
  game.history = [];
  renderHistory();
  updateStats();
  enterScene("intro");
  autoSave(true);
  hideTitle();
}

function startNewGame() {
  game.state = createDefaultState();
  game.history = [];
  renderHistory();
  updateStats();
  enterScene("intro");
  autoSave(true);
  hideTitle();
  tryPlayBgm();
}

function hideTitle() {
  dom.startScreen.classList.remove("visible");
}

function showTitle() {
  dom.startScreen.classList.add("visible");
  refreshContinueButton();
}

function refreshContinueButton() {
  const hasAnySave = Boolean(loadSlot(STORAGE_KEYS.autoSave) || loadSlot(STORAGE_KEYS.manualSave));
  dom.continueBtn.disabled = !hasAnySave;
}

function tryPlayBgm() {
  dom.bgm.play().catch(() => {});
}

function toggleAuto() {
  game.isAuto = !game.isAuto;
  dom.autoBtn.classList.toggle("active", game.isAuto);
  if (game.isAuto && !game.isTyping && !hasVisibleChoices()) {
    clearAutoTimer();
    game.pendingAutoTimer = setTimeout(() => advanceStory(), 600);
  }
}

function toggleMute() {
  game.settings.muted = !game.settings.muted;
  applySettings();
  persistSettings();
}

function setupEvents() {
  dom.startBtn.addEventListener("click", startNewGame);
  dom.continueBtn.addEventListener("click", continueGame);
  dom.openEndingBtn.addEventListener("click", () => openModal(dom.endingModal));

  dom.dialoguePanel.addEventListener("click", () => advanceStory());
  dom.choiceContainer.addEventListener("click", (event) => event.stopPropagation());

  dom.autoBtn.addEventListener("click", toggleAuto);
  dom.saveBtn.addEventListener("click", manualSave);
  dom.loadBtn.addEventListener("click", manualLoad);
  dom.historyBtn.addEventListener("click", () => {
    renderHistory();
    openModal(dom.historyModal);
  });
  dom.endingBtn.addEventListener("click", () => {
    renderEndingLibrary();
    openModal(dom.endingModal);
  });
  dom.muteBtn.addEventListener("click", toggleMute);

  dom.volume.addEventListener("input", () => {
    game.settings.volume = Number(dom.volume.value);
    applySettings();
    persistSettings();
  });

  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close");
      const target = document.getElementById(id);
      if (target) closeModal(target);
    });
  });

  window.addEventListener("resize", () => {
    syncPortraitLayout();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(dom.historyModal);
      closeModal(dom.endingModal);
      return;
    }

    if (dom.startScreen.classList.contains("visible")) {
      if (event.key === "Enter") startNewGame();
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      advanceStory();
      return;
    }

    if (event.key === "a" || event.key === "A") {
      toggleAuto();
      return;
    }

    if (event.key === "m" || event.key === "M") {
      toggleMute();
      return;
    }

    if (event.key === "h" || event.key === "H") {
      renderHistory();
      openModal(dom.historyModal);
      return;
    }

    if (["1", "2", "3"].includes(event.key) && hasVisibleChoices()) {
      const index = Number(event.key) - 1;
      const choice = game.currentScene.choices?.[index];
      if (choice) pickChoice(choice);
    }
  });
}

function boot() {
  applySettings();
  renderHistory();
  renderEndingLibrary();
  refreshContinueButton();
  setVisuals("streetNight", "daily", "happy");
  dom.speaker.textContent = "系统";
  dom.dialogue.textContent = "点击“开始新故事”进入剧情。";
  updateStats();
  setupEvents();
  syncPortraitLayout();
  showTitle();
}

window.render_game_to_text = () => {
  const line = game.currentScene?.lines?.[game.lineIndex] || null;
  return JSON.stringify({
    mode: dom.startScreen.classList.contains("visible") ? "title" : "story",
    sceneId: game.sceneId,
    lineIndex: game.lineIndex,
    speaker: line?.speaker || null,
    textShown: dom.dialogue.textContent,
    choiceCount: dom.choiceContainer.children.length,
    stats: game.state,
    auto: game.isAuto,
    note: "坐标系：本作为视觉小说界面，无角色平面坐标。"
  });
};

window.advanceTime = (ms) => {
  if (ms >= 150 && game.isTyping) finishTyping();
  if (game.isAuto && !game.isTyping && !hasVisibleChoices()) {
    advanceStory();
  }
};

boot();
