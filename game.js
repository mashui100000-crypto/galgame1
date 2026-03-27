const STORAGE_KEYS = {
  autoSave: "yy_nailong_auto_save_v1",
  manualSave: "yy_nailong_manual_save_v1",
  endings: "yy_nailong_endings_v1",
  settings: "yy_nailong_settings_v1"
};

const ASSETS = {
  bg: {
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
    bg: "streetNight",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "凌晨零点零七分，蒝蒝在通学路听见了一声像汽水开罐的轻响。整条街忽然开始倒放：云在回流，路灯在吸光，影子往脚底爬。" },
      { speaker: "蒝蒝", text: "这条路怎么像在呼吸……奶龙，你也听见了吗？" },
      { speaker: "奶龙", text: "听见了。那是愿望门在试音。今晚它会挑一个最不按逻辑的人，去写明天。", dragon: "wow" },
      { speaker: "蒝蒝", text: "那它运气不错，我平时就挺不讲逻辑。", hero: "wink" },
      { speaker: "奶龙", text: "不过规则很怪：同一句对白说两遍，世界会长出第二个答案。", dragon: "sleep" },
      { speaker: "旁白", text: "风把纸片吹到你们脚边，纸上写着：请在荒诞里保持温柔。" }
    ],
    choices: [
      { text: "追着反方向坠落的流星跑", next: "route_adventure", effects: { courage: 2, wonder: 1 } },
      { text: "先去学园祭教室，确认现实是否稳定", next: "route_market", effects: { bond: 2 } },
      { text: "去夜排练室，用节拍把空间钉住", next: "route_stage", effects: { bond: 1, wonder: 2 } }
    ]
  },
  route_adventure: {
    bg: "streetSunset",
    hero: "walk",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "你们拐进黄昏街道，天空像被橘子汽水浸泡过，电线杆上挂着未寄出的星期三。" },
      { speaker: "奶龙", text: "这里叫迟到者之坡。每走一步，昨天就会追上来半秒。" },
      { speaker: "蒝蒝", text: "那就别怕迟到，把昨天也带去明天。", hero: "daily" },
      { speaker: "旁白", text: "路边邮箱忽然开口，吐出三张盖着星尘邮戳的车票。" }
    ],
    choices: [
      { text: "坐上终点写着“未定义”的末班车", next: "route_adventure_2", effects: { courage: 2, wonder: 1 } },
      { text: "沿着影子的反方向步行，手写路线", next: "route_adventure_2", effects: { bond: 1, wonder: 2 } }
    ]
  },
  route_adventure_2: {
    bg: "streetNight",
    hero: "walk",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "零点巴士站没有司机，只有一面会报站的镜子。镜子里的你们比现实慢半拍。" },
      { speaker: "奶龙", text: "镜像在抢台词。先说出口的人，能决定下一站。", dragon: "sleep" },
      { speaker: "蒝蒝", text: "那我先说：下一站叫“别把遗憾养太大”。", hero: "stage" },
      { speaker: "旁白", text: "报站器短促地笑了一声：收到，正在偏航。" }
    ],
    choices: [
      { text: "相信奶龙的直觉，闭眼三秒再前进", next: "chapter_void_station", effects: { wonder: 2, bond: 1 } },
      { text: "把车票折成纸鹤，跟着飞行轨迹走", next: "chapter_void_station", effects: { courage: 2 } }
    ]
  },
  route_market: {
    bg: "festivalCafe",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "学园祭教室亮着奶油色灯光，黑板上的菜单每次眨眼都会改写。" },
      { speaker: "奶龙", text: "刚刚还是草莓可丽饼，现在变成了回忆拼盘。", dragon: "happy" },
      { speaker: "蒝蒝", text: "危险和香气经常一起出现。", hero: "wink" },
      { speaker: "旁白", text: "桌牌浮现一行字：请用一句谎话交换一句真心。" }
    ],
    choices: [
      { text: "认真营业，把混乱当作今晚主题", next: "route_market_2", effects: { bond: 2, courage: 1 } },
      { text: "先喂奶龙一口甜点，稳定心情", next: "route_market_2", effects: { bond: 3 } }
    ]
  },
  route_market_2: {
    bg: "classroomEvening",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "甜点入口的瞬间，教室四壁像翻页一样切成旧照片，每张都少了一个主角。" },
      { speaker: "奶龙", text: "这些照片在找缺席的人。我们会不会也被剪掉？", dragon: "sleep" },
      { speaker: "蒝蒝", text: "不会。互相记住的人，不会消失。", hero: "wink" },
      { speaker: "旁白", text: "黑板下方浮现粉笔字：记忆通过，允许进入下一幕。" }
    ],
    choices: [
      { text: "把你们的名字写在黑板正中", next: "chapter_void_station", effects: { bond: 2, wonder: 1 } },
      { text: "擦去旧照片边缘，给缺席者留出口", next: "chapter_void_station", effects: { courage: 1, wonder: 2 } }
    ]
  },
  route_stage: {
    bg: "musicNight",
    hero: "stage",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "排练室灯光调到最暗，空气里漂着琴弦被轻轻拨过的回音。" },
      { speaker: "奶龙", text: "这里的节拍器不走秒针，它走心跳。", dragon: "wow" },
      { speaker: "蒝蒝", text: "那就不按拍子，按勇气唱。", hero: "stage" },
      { speaker: "旁白", text: "舞台边缘亮起蓝光，像有人在台下无声鼓掌。" }
    ],
    choices: [
      { text: "即兴开唱，让歌词自己生长", next: "route_stage_2", effects: { wonder: 2, courage: 1 } },
      { text: "和奶龙合拍十次，再一起上台", next: "route_stage_2", effects: { bond: 2, wonder: 1 } }
    ]
  },
  route_stage_2: {
    bg: "musicSunset",
    hero: "stage",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "唱到第三段副歌时，墙上时钟解体成十二只会发光的蝴蝶。" },
      { speaker: "奶龙", text: "它们在提示我们：时间可以被编曲。", dragon: "happy" },
      { speaker: "蒝蒝", text: "那就把后悔这段旋律删掉。", hero: "stage" },
      { speaker: "旁白", text: "最后一个音落地，地板出现箭头，指向不存在于地图的站台。" }
    ],
    choices: [
      { text: "追着蝴蝶去站台", next: "chapter_void_station", effects: { wonder: 2 } },
      { text: "牵住奶龙，稳稳走向站台", next: "chapter_void_station", effects: { bond: 2, courage: 1 } }
    ]
  },
  chapter_void_station: {
    bg: "classroomNight",
    hero: "wink",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "你们抵达空白站。站牌没有地名，只有滚动字幕：下一班开往你最怕失去的东西。" },
      { speaker: "奶龙", text: "我怕失去的是“一起说废话的人”。", dragon: "sleep" },
      { speaker: "蒝蒝", text: "那你放心，我废话库存无限。", hero: "daily" },
      { speaker: "旁白", text: "广播切进来：请提交一句悖论，作为过闸口令。" },
      { speaker: "蒝蒝", text: "最晚到的人，最先被想念。" },
      { speaker: "奶龙", text: "口令通过。闸门打开。", dragon: "wow" }
    ],
    choices: [
      { text: "承认害怕，但继续前进", next: "chapter_mirror_archive", effects: { bond: 2, courage: 1 } },
      { text: "假装无敌，冲过去再说", next: "chapter_mirror_archive", effects: { courage: 2 } },
      { text: "把害怕写成歌名，边走边唱", next: "chapter_mirror_archive", effects: { wonder: 2, bond: 1 } }
    ]
  },
  chapter_mirror_archive: {
    bg: "festivalCafe",
    hero: "daily",
    dragon: "happy",
    lines: [
      { speaker: "旁白", text: "闸门后是镜像档案室，每个抽屉里都放着一个平行夜晚：有的你们错过，有的你们重逢三次。" },
      { speaker: "奶龙", text: "这里能看见“如果当时那样选”的版本。要打开吗？" },
      { speaker: "蒝蒝", text: "看一眼可以，但不住在里面。我们活在这条线。", hero: "wink" },
      { speaker: "旁白", text: "一只纸鹤停在你掌心，翅膀写着：现实不反对幻想，现实只反对逃跑。" },
      { speaker: "奶龙", text: "最后一扇门了。门后是核心舞台。", dragon: "wow" }
    ],
    choices: [
      { text: "带着所有可能性去开门", next: "chapter_clock_loop", effects: { wonder: 2 } },
      { text: "只带当下这一刻去开门", next: "chapter_clock_loop", effects: { bond: 2 } },
      { text: "先礼貌敲门，再勇敢推门", next: "chapter_clock_loop", effects: { courage: 2, bond: 1 } }
    ]
  },
  chapter_clock_loop: {
    bg: "musicNight",
    hero: "stage",
    dragon: "wow",
    lines: [
      { speaker: "旁白", text: "核心舞台悬在半空，四周星云逆时针流动。你们每说一句话，地板就向前亮一格。" },
      { speaker: "奶龙", text: "最后测试：选一种方式收束今晚。选完就没有回头键。", dragon: "sleep" },
      { speaker: "蒝蒝", text: "那就选一个不会后悔的方式。", hero: "stage" },
      { speaker: "旁白", text: "远处传来钟声，像有人把黎明折叠成纸船。" }
    ],
    choices: [
      { text: "拥抱奶龙，先保护彼此", next: "final_judge", effects: { bond: 3 } },
      { text: "冲向光门，把未知变成旅程", next: "final_judge", effects: { courage: 3 } },
      { text: "唱完最后一段副歌，再一起跨过去", next: "final_judge", effects: { wonder: 3, bond: 1 } }
    ]
  },
  final_judge: {
    onEnter: (game) => {
      const s = game.state;
      if (s.wonder >= 7 && s.bond >= 6) return "ending_secret";
      if (s.bond >= 7) return "ending_warm";
      if (s.courage >= 7) return "ending_adventure";
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
      { speaker: "旁白", text: "清晨落在木地板上，窗外风声像慢速播放的海浪。" },
      { speaker: "奶龙", text: "昨晚那么荒诞，醒来第一眼还是你。真好。", dragon: "happy" },
      { speaker: "蒝蒝", text: "世界偶尔发疯，我们负责温柔。", hero: "wink" },
      { speaker: "旁白", text: "你们在黑板角落写下日期。故事没结束，只是学会了慢慢继续。" }
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
      { speaker: "旁白", text: "光门另一侧是无穷延展的晴天公路，路标写着：向前，直到定义失效。" },
      { speaker: "奶龙", text: "今天去看会下糖纸雨的山谷，明天去看倒着游的云。", dragon: "wow" },
      { speaker: "蒝蒝", text: "行程别排太满，留点空白给惊喜。", hero: "daily" },
      { speaker: "旁白", text: "你们朝远方跑去，背影像两句还没写完的台词。" }
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
      { speaker: "旁白", text: "光门没有完全展开，但世界恢复了清晰边界。你们坐在窗边，把热可可吹到刚好入口。" },
      { speaker: "奶龙", text: "我们好像没拯救宇宙。", dragon: "sleep" },
      { speaker: "蒝蒝", text: "但我们拯救了今晚的自己，这也很厉害。", hero: "wink" },
      { speaker: "旁白", text: "楼道里传来笑声。你忽然发现，日常本身就是隐藏关卡。" }
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
      { speaker: "旁白", text: "你们的和声击中核心，整座城市进入共鸣模式：路灯会跟着心跳明暗，云层会回应笑声。" },
      { speaker: "奶龙", text: "双生共鸣不是力量，是同频。", dragon: "wow" },
      { speaker: "蒝蒝", text: "那就把这份同频，分给每个深夜还在赶路的人。", hero: "stage" },
      { speaker: "旁白", text: "天幕缓缓打开，浮现字幕：隐藏结局已解锁，愿你永远有勇气把荒诞活成浪漫。" }
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
