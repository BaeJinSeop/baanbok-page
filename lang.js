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
      'app.bannerNote': '배너 광고 · 탭 영역과 분리',
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
      'app.bannerNote': 'Banner ad · separated from tap area',
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
    },
  };

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function detect() {
    var s = stored();
    if (s === 'ko' || s === 'en') return s;
    var n = ((navigator.languages && navigator.languages[0]) || navigator.language || 'ko').toLowerCase();
    return n.indexOf('ko') === 0 ? 'ko' : 'en';
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
    els = document.querySelectorAll('[data-lang-block]');
    for (i = 0; i < els.length; i++) {
      els[i].style.display = (els[i].getAttribute('data-lang-block') === lang) ? '' : 'none';
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
