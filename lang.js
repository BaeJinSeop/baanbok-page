// baanbok landing — language state. Single source of truth: localStorage['baanbok-lang'].
// Mirrors the app's i18n (ko/en). Values: 'ko' | 'en' (absent => detect from navigator).
//
// Three mechanisms, all driven by the active language:
//   [data-i18n]       → element.textContent  = DICT[lang][key]
//   [data-i18n-html]  → element.innerHTML     = DICT[lang][key]   (for copy with <br>/<span>)
//   [data-lang-block] → shown only when its value === lang        (for long-form legal text)
(function () {
  var KEY = 'baanbok-lang';

  var DICT = {
    ko: {
      'meta.title': 'baanbok · 매일은 0초로',

      // nav / hero
      'hero.badge': '운동·식단 체크 앱',
      'hero.h1': '매일은 0초로.<br/>결국, 추세만.',
      'hero.sub': '정해둔 계획을 매일 탭 한 번으로 체크만. 어긋나도 다그치지 않고, 방향만 보여줘요.',

      // today mockup
      'app.date': '6월 24일 · 수요일',
      'app.today': '오늘',
      'app.dietA': '식단 A형',
      'app.toB': 'B형으로',
      'app.diet': '식단',
      'app.breakfast': '아침',
      'app.lunch': '점심',
      'app.preSnack': '운동 전 간식',
      'app.dinner': '저녁',
      'app.macros': '매크로 · 체크한 항목 합산',
      'app.workout': '운동',
      'app.shoulderDay': '어깨 데이',
      'app.ohp': '오버헤드프레스',
      'app.lateral': '사이드 레터럴',
      'app.incline': '인클라인 프레스',
      'app.warmup': '웜업',
      'app.main': '메인',
      'app.drop': '드랍',
      'app.volume': '실볼륨 · 웜업 제외',
      'app.volumeVal': '3세트 · 850kg',
      'app.flow': '어제의 흐름보다 앞서 있어요',
      'tab.today': '오늘',
      'tab.trends': '추세',
      'tab.templates': '템플릿',
      'tab.settings': '설정',

      // features
      'feat.eyebrow': '왜 baanbok 인가',
      'feat.h2': '노동은 위로,<br/>매일은 아래로',
      'feat.1.t': '마찰 0 — 탭 한 번',
      'feat.1.b': '매일 쓰는 오늘 화면은 가장 가볍게. 상위 항목을 누르면 하위까지 한 번에 체크돼요.',
      'feat.2.t': '어긋남이 기본',
      'feat.2.b': 'A형이 안 맞는 날은 B로. 옵션 교체가 예외가 아니라 메인 동작이에요.',
      'feat.3.t': '세트까지 그대로',
      'feat.3.b': '무게·횟수·태그를 세트별로. 별도 화면 없이 인라인으로 바로 수정해요.',
      'feat.4.t': '추세만 봅니다',
      'feat.4.b': '어긋나도 다그치지 않아요. 하루가 아니라 한 달의 방향만 차분하게.',

      // flow showcase (어제의 흐름)
      'flow.eyebrow': '어제의 흐름',
      'flow.h2': '어제의 나와,<br/>나란히 갑니다',
      'flow.p': '어제 체크한 시각이 오늘의 페이스메이커가 돼요. 앞서 있을 때만 알려주고, 뒤처진 날은 조용히 — 오늘은 오늘 페이스로.',
      'flow.strip': '어제의 흐름은 08:10에 시작했어요',
      'flow.notifTitle': '나의 흐름',
      'flow.notifTime': '지금',
      'flow.notifBody': "지난주 이맘때 '스쿼트' 운동을 시작했어요 · 오늘은 오늘 페이스로 가도 괜찮아요",
      'flow.rest': '휴식',
      'flow.myPace': '내 리듬',
      'flow.restHint': '5초 전부터 소리로 알려줘요 · 백그라운드에서도 흘러요',

      // more features (1.7 mini grid)
      'more.h2': '그리고, 조용히<br/>챙겨주는 것들',
      'more.1.t': '운동 사전 105종',
      'more.1.b': '장비·부위로 찾고, 설명은 5개 언어. 대체 운동도 같은 부위로 바로.',
      'more.2.t': '오늘의 펄스',
      'more.2.b': '지금 함께 체크 중인 사람들. 합계만 보여요 — 개인 기록은 비공개.',
      'more.3.t': '물 마시기',
      'more.3.b': '물방울 여덟 개, 탭으로 채우기. 여기도 입력이 아니라 체크.',
      'more.4.t': '템플릿 공유 코드',
      'more.4.b': '6자리 코드로 내 루틴을 친구에게. 받으면 내 것으로 복사돼요.',
      'more.5.t': '지하 헬스장에서도',
      'more.5.b': '신호가 없어도 체크는 그대로. 연결되면 알아서 저장돼요.',
      'more.6.t': '가입 없이 시작',
      'more.6.b': '먼저 써보고, 마음에 들면 그때 계정으로. 기록은 그대로 이어져요.',

      // trends showcase
      'tr.eyebrow': '추세 중심',
      'tr.h3': '다그치지 않아요.<br/>추세만 봅니다',
      'tr.p': '목표 대비 실제 체중, 주간 달성률, 핵심 중량까지 — 하루의 어긋남이 아니라 한 달의 방향을 봅니다.',
      'tr.subtitle': '다그치지 않아요 · 추세만 봅니다',
      'tr.trends': '추세',
      'tr.weight': '체중 · 목표 vs 실제',
      'tr.toGoal': '목표까지 2.4kg',
      'tr.actual': '실제',
      'tr.goal': '목표',
      'tr.8wago': '8주 전',
      'tr.thisWk': '이번주',
      'tr.weekly': '주간 달성률',
      'tr.avg': '평균',
      'tr.bar8': '8주',
      'tr.bar7': '7주',
      'tr.bar6': '6주',
      'tr.bar5': '5주',
      'tr.bar4': '4주',
      'tr.bar3': '3주',
      'tr.bar2': '2주',
      'tr.barNow': '이번주',
      'tr.waist': '허리둘레',
      'tr.ohp': '오버헤드프레스',

      // quote + CTA + footer
      'quote': '“어긋남이 <span style="color:var(--green);">기본 흐름</span>이에요.<br/>A/B 전환도, 옵션 교체도<br/>예외가 아니라 메인 동작.”',
      'cta.h3': '오늘부터, 0초 체크',
      'cta.p': '무료로 시작하세요. 매일의 체크는 가장 가볍게.',
      'foot.privacy': '개인정보',
      'foot.terms': '이용약관',
      'foot.contact': '문의',
      'foot.copy': '© 2026 baanbok · 매일은 0초로',

      // legal shared
      'legal.back': '← baanbok 홈으로',
      'legal.privacyTitle': '개인정보처리방침 · baanbok',
      'legal.termsTitle': '이용약관 · baanbok',
      'legal.deleteTitle': '계정 삭제 요청 · baanbok',
      'foot.delete': '계정 삭제',
    },

    en: {
      'meta.title': 'baanbok · Zero seconds a day',

      'hero.badge': 'Workout & Diet Check App',
      'hero.h1': 'Zero seconds a day.<br/>In the end, just the trend.',
      'hero.sub': 'Just tap once a day to check off your plan. No nagging when you slip — it only shows the direction.',

      'app.date': 'Wed, Jun 24',
      'app.today': 'Today',
      'app.dietA': 'Diet A',
      'app.toB': 'Switch to B',
      'app.diet': 'Diet',
      'app.breakfast': 'Breakfast',
      'app.lunch': 'Lunch',
      'app.preSnack': 'Pre-workout snack',
      'app.dinner': 'Dinner',
      'app.macros': 'Macros · sum of checked items',
      'app.workout': 'Workout',
      'app.shoulderDay': 'Shoulder Day',
      'app.ohp': 'Overhead Press',
      'app.lateral': 'Lateral Raise',
      'app.incline': 'Incline Press',
      'app.warmup': 'Warm-up',
      'app.main': 'Main',
      'app.drop': 'Drop',
      'app.volume': 'Working volume · excl. warm-up',
      'app.volumeVal': '3 sets · 850kg',
      'app.flow': "You're ahead of yesterday's flow",
      'tab.today': 'Today',
      'tab.trends': 'Trends',
      'tab.templates': 'Templates',
      'tab.settings': 'Settings',

      'feat.eyebrow': 'Why baanbok',
      'feat.h2': 'Effort up,<br/>friction down',
      'feat.1.t': 'Zero friction — one tap',
      'feat.1.b': 'The daily Today screen stays the lightest. Tap a parent item and everything under it checks off at once.',
      'feat.2.t': 'Deviation is the default',
      'feat.2.b': 'Switch to B on days A doesn’t fit. Swapping options is the main action, not an exception.',
      'feat.3.t': 'Down to every set',
      'feat.3.b': 'Weight, reps and tags per set. Edit inline — no separate screen.',
      'feat.4.t': 'Just the trend',
      'feat.4.b': 'No nagging when you slip. Not a single day, just the month’s direction — calmly.',

      'flow.eyebrow': "Yesterday's Flow",
      'flow.h2': 'Side by side<br/>with yesterday’s you',
      'flow.p': 'The times you checked yesterday become today’s pacer. It only speaks up when you’re ahead — on slower days it stays quiet. Today runs at today’s pace.',
      'flow.strip': 'Yesterday’s flow started at 08:10',
      'flow.notifTitle': 'My Flow',
      'flow.notifTime': 'now',
      'flow.notifBody': 'Around this time last week you started ‘Squat’ · today can go at today’s pace',
      'flow.rest': 'Rest',
      'flow.myPace': 'My rhythm',
      'flow.restHint': 'Beeps from 5 seconds out · keeps running in the background',

      'more.h2': 'And the quiet things<br/>that look after you',
      'more.1.t': '105-exercise library',
      'more.1.b': 'Browse by equipment and muscle, with how-to notes in 5 languages. Swap to same-muscle alternatives in a tap.',
      'more.2.t': 'Today’s Pulse',
      'more.2.b': 'People checking in right now. Totals only — personal records stay private.',
      'more.3.t': 'Water tracking',
      'more.3.b': 'Eight droplets, filled by tapping. A check here too — never typing.',
      'more.4.t': 'Template share codes',
      'more.4.b': 'Send your routine with a 6-letter code. It copies as their own.',
      'more.5.t': 'Basement-gym proof',
      'more.5.b': 'No signal, no problem — checks are kept and saved once you’re back online.',
      'more.6.t': 'Start without signing up',
      'more.6.b': 'Try it first; add an account when it clicks. Your records carry over.',

      'tr.eyebrow': 'Trend-first',
      'tr.h3': 'No nagging.<br/>Just the trend.',
      'tr.p': 'Goal vs actual weight, weekly completion, key lifts — see the month’s direction, not a single day’s slip.',
      'tr.subtitle': 'No nagging · just the trend',
      'tr.trends': 'Trends',
      'tr.weight': 'Weight · goal vs actual',
      'tr.toGoal': '2.4kg to goal',
      'tr.actual': 'Actual',
      'tr.goal': 'Goal',
      'tr.8wago': '8 wks ago',
      'tr.thisWk': 'This wk',
      'tr.weekly': 'Weekly completion',
      'tr.avg': 'avg',
      'tr.bar8': '8w',
      'tr.bar7': '7w',
      'tr.bar6': '6w',
      'tr.bar5': '5w',
      'tr.bar4': '4w',
      'tr.bar3': '3w',
      'tr.bar2': '2w',
      'tr.barNow': 'Now',
      'tr.waist': 'Waist',
      'tr.ohp': 'Overhead Press',

      'quote': '“Deviation is the <span style="color:var(--green);">default flow</span>.<br/>A/B switching, option swaps —<br/>the main action, not an exception.”',
      'cta.h3': 'Start today — zero-second checks',
      'cta.p': 'Start free. The daily check stays the lightest.',
      'foot.privacy': 'Privacy',
      'foot.terms': 'Terms',
      'foot.contact': 'Contact',
      'foot.copy': '© 2026 baanbok · Zero seconds a day',

      'legal.back': '← Back to baanbok',
      'legal.privacyTitle': 'Privacy Policy · baanbok',
      'legal.termsTitle': 'Terms of Service · baanbok',
      'legal.deleteTitle': 'Account Deletion · baanbok',
      'foot.delete': 'Delete Account',
    },

    // 앱 언어팩(1.7.0)과 용어 통일: 흐름=流れ/节奏/ritmo, 펄스=パルス/脉搏/Pulso, 태그=앱 사전 그대로.
    // 법률 본문(data-lang-block)은 ko/en만 존재 — ja/zh/es에선 en 블록으로 폴백(apply 참조).
    ja: {
      'meta.title': 'baanbok · 毎日は0秒で',

      'hero.badge': '運動・食事チェックアプリ',
      'hero.h1': '毎日は0秒で。<br/>結局、トレンドだけ。',
      'hero.sub': '決めておいたプランを毎日タップ一つでチェック。ズレても責めずに、方向だけ見せてくれます。',

      'app.date': '6月24日 · 水曜日',
      'app.today': '今日',
      'app.dietA': '食事A',
      'app.toB': 'Bに切替',
      'app.diet': '食事',
      'app.breakfast': '朝食',
      'app.lunch': '昼食',
      'app.preSnack': 'トレ前スナック',
      'app.dinner': '夕食',
      'app.macros': 'マクロ · チェック済み合計',
      'app.workout': 'トレーニング',
      'app.shoulderDay': 'ショルダーデイ',
      'app.ohp': 'オーバーヘッドプレス',
      'app.lateral': 'サイドレイズ',
      'app.incline': 'インクラインプレス',
      'app.warmup': 'ウォームアップ',
      'app.main': 'メイン',
      'app.drop': 'ドロップ',
      'app.volume': '実ボリューム · ウォームアップ除く',
      'app.volumeVal': '3セット · 850kg',
      'app.flow': '昨日の流れより先に進んでいます',
      'tab.today': '今日',
      'tab.trends': 'トレンド',
      'tab.templates': 'テンプレート',
      'tab.settings': '設定',

      'feat.eyebrow': 'なぜ baanbok か',
      'feat.h2': '労力は上へ、<br/>毎日は下へ',
      'feat.1.t': '摩擦ゼロ — タップ一つ',
      'feat.1.b': '毎日使う「今日」画面は最軽量。親項目をタップすれば下位までまとめてチェックされます。',
      'feat.2.t': 'ズレが基本',
      'feat.2.b': 'Aが合わない日はBへ。オプションの切り替えは例外ではなくメインの操作です。',
      'feat.3.t': 'セット単位までそのまま',
      'feat.3.b': '重量・回数・タグをセットごとに。別画面なしでインライン編集。',
      'feat.4.t': 'トレンドだけ見る',
      'feat.4.b': 'ズレても責めません。一日ではなく、一か月の方向だけ静かに。',

      'flow.eyebrow': '昨日の流れ',
      'flow.h2': '昨日の自分と、<br/>並んで進む',
      'flow.p': '昨日チェックした時刻が今日のペースメーカーに。先に進んでいるときだけ知らせて、遅れた日は静かに — 今日は今日のペースで。',
      'flow.strip': '昨日の流れは08:10にはじまりました',
      'flow.notifTitle': '私の流れ',
      'flow.notifTime': 'いま',
      'flow.notifBody': '先週の今ごろ「スクワット」をはじめました · 今日は今日のペースで大丈夫です',
      'flow.rest': '休憩',
      'flow.myPace': 'マイペース',
      'flow.restHint': '5秒前からビープでお知らせ · バックグラウンドでも進みます',

      'more.h2': 'そして、静かに<br/>支えてくれるもの',
      'more.1.t': '種目辞典 105種',
      'more.1.b': '器具・部位で探せて、説明は5言語。代替種目も同じ部位からすぐ。',
      'more.2.t': '今日のパルス',
      'more.2.b': 'いま一緒にチェックしている人たち。合計だけ — 個人の記録は非公開。',
      'more.3.t': '水分補給',
      'more.3.b': '水滴8つをタップで満たす。ここも入力ではなくチェック。',
      'more.4.t': 'テンプレート共有コード',
      'more.4.b': '6桁コードで自分のルーティンを友だちへ。受け取った側は自分用にコピー。',
      'more.5.t': '地下ジムでも',
      'more.5.b': '電波がなくてもチェックはそのまま。つながったら自動で保存。',
      'more.6.t': '登録なしではじめる',
      'more.6.b': 'まず使ってみて、気に入ったらアカウントを。記録はそのまま引き継ぎ。',

      'tr.eyebrow': 'トレンド中心',
      'tr.h3': '責めません。<br/>トレンドだけ。',
      'tr.p': '目標と実際の体重、週間達成率、メインリフトまで — 一日のズレではなく一か月の方向を見ます。',
      'tr.subtitle': '責めません · トレンドだけ',
      'tr.trends': 'トレンド',
      'tr.weight': '体重 · 目標 vs 実際',
      'tr.toGoal': '目標まで2.4kg',
      'tr.actual': '実際',
      'tr.goal': '目標',
      'tr.8wago': '8週間前',
      'tr.thisWk': '今週',
      'tr.weekly': '週間達成率',
      'tr.avg': '平均',
      'tr.bar8': '8週',
      'tr.bar7': '7週',
      'tr.bar6': '6週',
      'tr.bar5': '5週',
      'tr.bar4': '4週',
      'tr.bar3': '3週',
      'tr.bar2': '2週',
      'tr.barNow': '今週',
      'tr.waist': 'ウエスト',
      'tr.ohp': 'オーバーヘッドプレス',

      'quote': '「ズレが<span style="color:var(--green);">基本の流れ</span>です。<br/>A/B切替もオプション交換も<br/>例外ではなくメインの操作。」',
      'cta.h3': '今日から、0秒チェック',
      'cta.p': '無料ではじめられます。毎日のチェックは最軽量に。',
      'foot.privacy': 'プライバシー',
      'foot.terms': '利用規約',
      'foot.contact': 'お問い合わせ',
      'foot.copy': '© 2026 baanbok · 毎日は0秒で',

      'legal.back': '← baanbokホームへ',
      'legal.privacyTitle': 'プライバシーポリシー · baanbok',
      'legal.termsTitle': '利用規約 · baanbok',
      'legal.deleteTitle': 'アカウント削除リクエスト · baanbok',
      'foot.delete': 'アカウント削除',
    },

    zh: {
      'meta.title': 'baanbok · 每天只要0秒',

      'hero.badge': '运动·饮食打卡应用',
      'hero.h1': '每天只要0秒。<br/>最终,只看趋势。',
      'hero.sub': '定好的计划,每天点一下就完成打卡。偏离了也不责备,只告诉你方向。',

      'app.date': '6月24日 · 周三',
      'app.today': '今天',
      'app.dietA': '饮食A',
      'app.toB': '切换到B',
      'app.diet': '饮食',
      'app.breakfast': '早餐',
      'app.lunch': '午餐',
      'app.preSnack': '练前加餐',
      'app.dinner': '晚餐',
      'app.macros': '宏量 · 已打卡合计',
      'app.workout': '训练',
      'app.shoulderDay': '肩部日',
      'app.ohp': '站姿肩推',
      'app.lateral': '侧平举',
      'app.incline': '上斜卧推',
      'app.warmup': '热身',
      'app.main': '正式组',
      'app.drop': '递减组',
      'app.volume': '有效容量 · 不含热身',
      'app.volumeVal': '3组 · 850kg',
      'app.flow': '你已领先昨天的节奏',
      'tab.today': '今天',
      'tab.trends': '趋势',
      'tab.templates': '模板',
      'tab.settings': '设置',

      'feat.eyebrow': '为什么选 baanbok',
      'feat.h2': '准备做在前,<br/>每天最省力',
      'feat.1.t': '零摩擦 — 点一下',
      'feat.1.b': '每天用的"今天"页面保持最轻。点上级条目,下级一并打卡。',
      'feat.2.t': '偏离才是默认',
      'feat.2.b': 'A不合适的日子就切到B。换选项不是例外,而是主操作。',
      'feat.3.t': '细到每一组',
      'feat.3.b': '重量·次数·标签按组记录,无需另开页面,直接就地修改。',
      'feat.4.t': '只看趋势',
      'feat.4.b': '偏离了也不责备。不看某一天,只安静地看一个月的方向。',

      'flow.eyebrow': '昨天的节奏',
      'flow.h2': '和昨天的自己,<br/>并肩前行',
      'flow.p': '昨天打卡的时间成为今天的配速员。领先时才提醒,落后的日子保持安静 — 今天按今天的节奏来。',
      'flow.strip': '昨天的节奏从08:10开始',
      'flow.notifTitle': '我的节奏',
      'flow.notifTime': '现在',
      'flow.notifBody': '上周这个时候开始了"深蹲" · 今天按今天的节奏来就好',
      'flow.rest': '休息',
      'flow.myPace': '我的节奏',
      'flow.restHint': '最后5秒有提示音 · 后台也会继续计时',

      'more.h2': '还有这些,<br/>安静地帮你',
      'more.1.t': '动作库 105个',
      'more.1.b': '按器械·部位查找,说明支持5种语言。同部位替换动作一键切换。',
      'more.2.t': '今日脉搏',
      'more.2.b': '此刻一起打卡的人们。只显示总数 — 个人记录不公开。',
      'more.3.t': '喝水',
      'more.3.b': '八滴水,点一下填一滴。这里也是打卡,不用输入。',
      'more.4.t': '模板分享码',
      'more.4.b': '用6位代码把你的计划分享给朋友,对方一键复制为自己的。',
      'more.5.t': '地下健身房也没问题',
      'more.5.b': '没信号照样打卡,联网后自动保存。',
      'more.6.t': '无需注册即可开始',
      'more.6.b': '先试用,喜欢再创建账号,记录原样保留。',

      'tr.eyebrow': '趋势优先',
      'tr.h3': '不责备。<br/>只看趋势。',
      'tr.p': '目标与实际体重、每周完成率、核心重量 — 看的是一个月的方向,不是某一天的偏离。',
      'tr.subtitle': '不责备 · 只看趋势',
      'tr.trends': '趋势',
      'tr.weight': '体重 · 目标 vs 实际',
      'tr.toGoal': '距目标2.4kg',
      'tr.actual': '实际',
      'tr.goal': '目标',
      'tr.8wago': '8周前',
      'tr.thisWk': '本周',
      'tr.weekly': '每周完成率',
      'tr.avg': '平均',
      'tr.bar8': '8周',
      'tr.bar7': '7周',
      'tr.bar6': '6周',
      'tr.bar5': '5周',
      'tr.bar4': '4周',
      'tr.bar3': '3周',
      'tr.bar2': '2周',
      'tr.barNow': '本周',
      'tr.waist': '腰围',
      'tr.ohp': '站姿肩推',

      'quote': '"偏离是<span style="color:var(--green);">默认的节奏</span>。<br/>A/B切换、更换选项,<br/>都是主操作,不是例外。"',
      'cta.h3': '从今天起,0秒打卡',
      'cta.p': '免费开始。每天的打卡保持最轻。',
      'foot.privacy': '隐私',
      'foot.terms': '服务条款',
      'foot.contact': '联系我们',
      'foot.copy': '© 2026 baanbok · 每天只要0秒',

      'legal.back': '← 返回 baanbok 首页',
      'legal.privacyTitle': '隐私政策 · baanbok',
      'legal.termsTitle': '服务条款 · baanbok',
      'legal.deleteTitle': '删除账号申请 · baanbok',
      'foot.delete': '删除账号',
    },

    es: {
      'meta.title': 'baanbok · Cero segundos al día',

      'hero.badge': 'App de checks de entreno y dieta',
      'hero.h1': 'Cero segundos al día.<br/>Al final, solo la tendencia.',
      'hero.sub': 'Marca tu plan con un toque al día. Si te desvías, no te regaña — solo te muestra la dirección.',

      'app.date': 'Mié, 24 jun',
      'app.today': 'Hoy',
      'app.dietA': 'Dieta A',
      'app.toB': 'Cambiar a B',
      'app.diet': 'Dieta',
      'app.breakfast': 'Desayuno',
      'app.lunch': 'Comida',
      'app.preSnack': 'Snack pre-entreno',
      'app.dinner': 'Cena',
      'app.macros': 'Macros · suma de lo marcado',
      'app.workout': 'Entreno',
      'app.shoulderDay': 'Día de hombro',
      'app.ohp': 'Press militar',
      'app.lateral': 'Elevación lateral',
      'app.incline': 'Press inclinado',
      'app.warmup': 'Calent.',
      'app.main': 'Principal',
      'app.drop': 'Drop',
      'app.volume': 'Volumen efectivo · sin calent.',
      'app.volumeVal': '3 series · 850kg',
      'app.flow': 'Vas por delante del ritmo de ayer',
      'tab.today': 'Hoy',
      'tab.trends': 'Tendencias',
      'tab.templates': 'Plantillas',
      'tab.settings': 'Ajustes',

      'feat.eyebrow': 'Por qué baanbok',
      'feat.h2': 'El esfuerzo, una vez.<br/>El día a día, cero.',
      'feat.1.t': 'Cero fricción — un toque',
      'feat.1.b': 'La pantalla de Hoy es la más ligera. Toca el elemento padre y todo lo de dentro se marca a la vez.',
      'feat.2.t': 'Desviarse es lo normal',
      'feat.2.b': 'Los días que A no encaja, cambia a B. Cambiar de opción es la acción principal, no la excepción.',
      'feat.3.t': 'Hasta cada serie',
      'feat.3.b': 'Peso, reps y etiquetas por serie. Se edita en línea, sin pantallas aparte.',
      'feat.4.t': 'Solo la tendencia',
      'feat.4.b': 'Sin regañinas cuando te desvías. No un día — la dirección del mes, con calma.',

      'flow.eyebrow': 'El ritmo de ayer',
      'flow.h2': 'Codo a codo<br/>con tu yo de ayer',
      'flow.p': 'Las horas que marcaste ayer se convierten en tu pacer de hoy. Solo avisa cuando vas por delante; los días lentos guarda silencio — hoy se va al paso de hoy.',
      'flow.strip': 'El ritmo de ayer empezó a las 08:10',
      'flow.notifTitle': 'Mi ritmo',
      'flow.notifTime': 'ahora',
      'flow.notifBody': 'La semana pasada a esta hora empezaste «Sentadilla» · hoy ve a tu propio paso',
      'flow.rest': 'Descanso',
      'flow.myPace': 'tu ritmo',
      'flow.restHint': 'Pitidos desde 5 segundos antes · sigue en segundo plano',

      'more.h2': 'Y las cosas que<br/>te cuidan en silencio',
      'more.1.t': 'Biblioteca de 105 ejercicios',
      'more.1.b': 'Busca por equipo y músculo, con explicaciones en 5 idiomas. Alternativas del mismo músculo en un toque.',
      'more.2.t': 'Pulso de hoy',
      'more.2.b': 'Gente marcando ahora mismo. Solo totales — los registros personales son privados.',
      'more.3.t': 'Agua',
      'more.3.b': 'Ocho gotas que se llenan tocando. Aquí también es un check, no teclear.',
      'more.4.t': 'Códigos para compartir plantillas',
      'more.4.b': 'Envía tu rutina con un código de 6 caracteres. Se copia como suya.',
      'more.5.t': 'A prueba de gimnasio sótano',
      'more.5.b': 'Sin señal, los checks se guardan igual y se sincronizan al volver la conexión.',
      'more.6.t': 'Empieza sin registrarte',
      'more.6.b': 'Pruébalo primero; crea la cuenta cuando te convenza. Tus registros se conservan.',

      'tr.eyebrow': 'Tendencia primero',
      'tr.h3': 'Sin regañinas.<br/>Solo la tendencia.',
      'tr.p': 'Peso objetivo vs real, cumplimiento semanal, levantamientos clave — la dirección del mes, no el desliz de un día.',
      'tr.subtitle': 'Sin regañinas · solo la tendencia',
      'tr.trends': 'Tendencias',
      'tr.weight': 'Peso · objetivo vs real',
      'tr.toGoal': '2,4kg para el objetivo',
      'tr.actual': 'Real',
      'tr.goal': 'Objetivo',
      'tr.8wago': 'hace 8 sem',
      'tr.thisWk': 'esta sem',
      'tr.weekly': 'Cumplimiento semanal',
      'tr.avg': 'media',
      'tr.bar8': '8s',
      'tr.bar7': '7s',
      'tr.bar6': '6s',
      'tr.bar5': '5s',
      'tr.bar4': '4s',
      'tr.bar3': '3s',
      'tr.bar2': '2s',
      'tr.barNow': 'Ahora',
      'tr.waist': 'Cintura',
      'tr.ohp': 'Press militar',

      'quote': '«Desviarse es el <span style="color:var(--green);">flujo por defecto</span>.<br/>Cambiar de A a B, cambiar opciones —<br/>la acción principal, no la excepción.»',
      'cta.h3': 'Desde hoy, checks de cero segundos',
      'cta.p': 'Empieza gratis. El check diario, siempre lo más ligero.',
      'foot.privacy': 'Privacidad',
      'foot.terms': 'Términos',
      'foot.contact': 'Contacto',
      'foot.copy': '© 2026 baanbok · Cero segundos al día',

      'legal.back': '← Volver a baanbok',
      'legal.privacyTitle': 'Política de privacidad · baanbok',
      'legal.termsTitle': 'Términos del servicio · baanbok',
      'legal.deleteTitle': 'Eliminación de cuenta · baanbok',
      'foot.delete': 'Eliminar cuenta',
    },
  };

  var LANGS = ['ko', 'en', 'ja', 'zh', 'es'];

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function detect() {
    var s = stored();
    if (LANGS.indexOf(s) !== -1) return s;
    var n = ((navigator.languages && navigator.languages[0]) || navigator.language || 'ko').toLowerCase();
    for (var i = 0; i < LANGS.length; i++) {
      if (n.indexOf(LANGS[i]) === 0) return LANGS[i];
    }
    return 'en';
  }
  function apply(lang) {
    var d = DICT[lang] || DICT.ko;
    document.documentElement.setAttribute('lang', lang);

    var i, els;
    els = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < els.length; i++) {
      var k1 = els[i].getAttribute('data-i18n');
      if (d[k1] != null) els[i].textContent = d[k1];
    }
    els = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < els.length; i++) {
      var k2 = els[i].getAttribute('data-i18n-html');
      if (d[k2] != null) els[i].innerHTML = d[k2];
    }
    // 법률 본문 블록은 ko/en 원문만 존재 — ja/zh/es는 en 블록으로 폴백
    var blockLang = (lang === 'ko' || lang === 'en') ? lang : 'en';
    els = document.querySelectorAll('[data-lang-block]');
    for (i = 0; i < els.length; i++) {
      els[i].style.display = (els[i].getAttribute('data-lang-block') === blockLang) ? '' : 'none';
    }

    var titleKey = document.documentElement.getAttribute('data-title-key') || 'meta.title';
    if (d[titleKey] != null) document.title = d[titleKey];

    var sels = document.querySelectorAll('.lang-select');
    for (i = 0; i < sels.length; i++) sels[i].value = lang;
  }

  window.setLang = function (lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
  };

  function init() { apply(detect()); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
