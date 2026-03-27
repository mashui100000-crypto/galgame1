Original prompt: 用市面优秀水准帮我制作一个galgame，主题是蒝蒝与奶龙的故事，奶龙是很火的一个动漫角色，你设计一下故事情节，保证功能完善，我上传了蒝蒝的照片和bgm，背景要二次元

2026-03-27
- 初始化项目目录：assets/audio, assets/images, assets/bg。
- 已复制用户素材：
  - assets/images/yuanyuan-1.jpg
  - assets/images/yuanyuan-2.jpg
  - assets/images/yuanyuan-3.jpg
  - assets/images/yuanyuan-4.jpg
  - assets/audio/bgm.flac
- 下一步：实现剧情引擎、UI、分支结局、存档读档、历史记录、自动与跳过功能，并接入二次元背景与奶龙立绘。

2026-03-27（开发中）
- 新增二次元背景 SVG：
  - assets/bg/sakura-town.svg
  - assets/bg/neon-street.svg
  - assets/bg/star-river.svg
  - assets/bg/morning-bridge.svg
- 新增奶龙立绘 SVG：
  - assets/images/nailong-happy.svg
  - assets/images/nailong-wow.svg
  - assets/images/nailong-sleep.svg
- 新增主程序文件：
  - index.html
  - style.css
  - game.js
- 已实现：
  - 多分支剧情与 4 结局（含隐藏结局）
  - 打字机效果、自动/跳过、回溯
  - 手动存档/读档与自动存档
  - 结局图鉴永久解锁
  - BGM 播放、音量与静音控制
  - 键盘快捷键与移动端适配
- 下一步：本地运行并做交互全流程验证，修复问题后收尾。

2026-03-27（联调）
- 环境检测：
  - node -v -> v25.8.0
  - npx -v -> 11.11.0
  - 安装依赖：npm init -y && npm install playwright
- 自动化测试阻塞：
  - 运行 Playwright 客户端时缺少浏览器内核，安装 `chromium` 过程出现网络重置 `ECONNRESET`，导致无法完成自动截图回归。
- 已执行可用验证：
  - node --check game.js 通过
  - 启动本地服务并验证资源返回：
    - /index.html -> 200
    - /game.js -> 200
    - /style.css -> 200
    - /assets/audio/bgm.flac -> 200
- 代码修正：
  - 优化启动流程，避免标题页阶段提前播放剧情文本。
  - 当选项可见时支持 Enter 快捷确认首项，便于键盘推进和自动化兼容。
- TODO：
  - 网络恢复后执行 `npx playwright install chromium`，再跑 `web_game_playwright_client.js` 做截图与状态回归验证。

2026-03-27（背景升级）
- 用户提供了 11 张二次元背景图，已全部复制到 `assets/bg/*.jpg` 并按语义重命名。
- 已将剧情场景背景切换为用户素材：
  - 开场：`street-night.jpg`
  - 冒险线：`street-sunset.jpg`
  - 夜市线：`festival-cafe.jpg`
  - 舞台线：`music-night.jpg`
  - 汇合场景：`classroom-night.jpg`
  - 各结局：`classroom-sun.jpg` / `street-day.jpg` / `music-day.jpg` / `music-sunset.jpg`
- 已启动本地服务并打开：
  - `http://127.0.0.1:4173/index.html`

2026-03-27（奶龙替换 + 高清保障）
- 新增用户提供奶龙图 10 张到 `assets/images/nailong-01.jpg` ~ `nailong-10.jpg`。
- 已生成高清版本 `assets/images/nailong-01-hd.jpg` ~ `nailong-10-hd.jpg`（1800x1800，锐化优化）。
- 已替换游戏内奶龙立绘引用：
  - happy -> `nailong-09-hd.jpg`
  - wow -> `nailong-10-hd.jpg`
  - sleep -> `nailong-08-hd.jpg`
- 背景高清校验：主要背景均为 `1920x1080`（`*-hd.jpg`）。

2026-03-27（蒝蒝立绘替换 v2）
- 新增蒝蒝新图 6 张：`assets/images/yuanyuan-v2-01.jpg` ~ `yuanyuan-v2-06.jpg`。
- 已生成高清增强版本（最长边 2600）：`assets/images/yuanyuan-v2-01-hd.jpg` ~ `yuanyuan-v2-06-hd.jpg`。
- 已替换游戏内蒝蒝立绘引用：
  - daily -> `yuanyuan-v2-05-hd.jpg`
  - wink -> `yuanyuan-v2-06-hd.jpg`
  - stage -> `yuanyuan-v2-01-hd.jpg`
  - walk -> `yuanyuan-v2-04-hd.jpg`

2026-03-27（背景替换 v3 高清）
- 用户提供 6 张新背景图，已统一处理为 `2560x1440` 高清版本：
  - `classroom-night-v3-hd.jpg`
  - `classroom-day-v3-hd.jpg`
  - `street-sunset-v3-hd.jpg`
  - `street-night-v3-hd.jpg`
  - `festival-cafe-v3-hd.jpg`
  - `street-day-v3-hd.jpg`
- 已在 `game.js` 中全量重映射背景键位到 `v3` 高清图，旧背景资源不再被剧情读取。

2026-03-27（剧情扩展 + 防遮挡）
- 剧情扩展为多章节结构（新增二段路线与三个核心章节）：
  - `route_adventure_2`
  - `route_market_2`
  - `route_stage_2`
  - `chapter_void_station`
  - `chapter_mirror_archive`
  - `chapter_clock_loop`
- 调整结局判定阈值，匹配更长剧情下的数值成长。
- 新增 `syncPortraitLayout()`，根据对话框高度动态计算立绘保留空间，解决“人物被对话框遮挡”。
- 样式调整：
  - `--dialogue-reserve` 动态留白变量
  - 降低立绘尺寸与最大高度
  - 移动端与平板断点同步优化
