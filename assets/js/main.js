(() => {
  'use strict';

  const root = document.documentElement;
  const WHATSAPP = '96176684096';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Opening hours in minutes after midnight, Beirut time. Index 0 is Sunday.
  const HOURS = [
    [],
    [['ladies', 480, 750], ['mixed', 780, 1320]],
    [['ladies', 480, 750], ['mixed', 780, 1320]],
    [['ladies', 480, 750], ['mixed', 780, 1320]],
    [['ladies', 480, 750], ['mixed', 780, 1320]],
    [['ladies', 480, 750], ['mixed', 780, 1320]],
    [['mixed', 780, 1110]],
  ];
  const AXIS_START = 7;
  const AXIS_SPAN = 16;

  /* ---------------- Arabic copy ---------------- */

  const AR = {
    'meta.title': 'Fit House | جيم وحديقة وقهوة بالحوش، صور',
    'skip': 'انتقل للمحتوى',
    'brand.label': 'Fit House، رجوع لفوق',
    'nav.label': 'القائمة الرئيسية',
    'nav.house': 'البيت',
    'nav.classes': 'الكلاسات',
    'nav.bundles': 'الباقات',
    'nav.visit': 'الدوام والموقع',
    'nav.book': 'احجز كلاس',
    'nav.menu': 'القائمة',
    'hero.lede': 'جيم مع حديقة وقهوة وشبابيك عالشجر. بالحوش، صور.',
    'hero.book': 'احجز كلاس',
    'hero.bundles': 'شوف الباقات',
    'status.fallback': 'من الاثنين للجمعة 8:00 ص لـ 10:00 م، السبت 1:00 لـ 6:30 م',
    'manifesto.label': 'قصتنا',
    'manifesto.1': 'قالولك <s>القوة مكانها عالباطون.</s>',
    'manifesto.2': 'قالولك <s>الرياضة لازم تكون تحت ضو بيرجف وسقف مسكّر.</s>',
    'manifesto.3': 'قالولك <s>اختار: يا الجيم يا القهوة، يا رفقاتك يا الرياضة.</s>',
    'manifesto.verdict': 'كانوا غلطانين.',
    'manifesto.body': 'Fit House جيم مع حديقة وقهوة وشبابيك عالشجر. تمرّن عَ راحتك، بمكان بيحترم وقتك وطاقتك.',
    'house.title1': 'كلّو تحت',
    'house.title2': 'سقف واحد',
    'house.lede': 'تمرّن، اقعد، اشرب قهوتك، وكفّي نهارك بطاقة أعلى من يلي فتت فيها.',
    'photo.window': 'تريدميل اتنين مقابيل شبّاك عريض عالشجر والعشب',
    'photo.gymFloor': 'رفوف وأوزان وأجهزة رجلين بصالة Fit House',
    'photo.bikes': 'بسكليتات رياضة مصفوفة حدّ شبّاك عالشجر',
    'photo.cafe': 'مشترك عم يحرّك قهوته على طاولة حدّ شبّاك الكافيه',
    'photo.fuel': 'ألواح بروتين DNA Fuel ولبن يوناني على طاولة خشب',
    'photo.garden': 'مشترك حامل كيتل بيل بحديقة Fit House',
    'photo.matcha': 'ماتشا لاتيه مع كولد فوم بكبّاية Fit House',
    'photo.raspberry': 'راسبيري شيك بكبّاية Fit House',
    'photo.peanut': 'بروتين شيك زبدة فستق وموز بكبّاية Fit House',
    'photo.entrance': 'مشترك فايت عمدخل Fit House، مع يافطات للجيم والكافيه',
    'room.gym.title': 'صالة الجيم',
    'room.gym.text': 'أوزان حرّة، رفوف وأجهزة لكل عضلة.',
    'room.gym.note': 'الصبحيات بأيام الأسبوع للسيدات بس.',
    'room.cardio.title': 'كارديو مع منظر',
    'room.cardio.text': 'البسكليتات والتريدميل مصفوفين حدّ الشبابيك، يعني بتتمرّن وإنت عم تتطلّع عالشجر.',
    'room.cafe.title': 'كافيه Fit House',
    'room.cafe.text': 'قهوة، ماتشا وبروتين شيك. ضلّ بعد التمرين، أو تعا بس كرمال القهوة.',
    'room.fuel.text': 'ألواح بروتين DNA Fuel ومكمّلات من DNA Nutrition، متوفّرة عنّا.',
    'room.garden.title': 'الحديقة',
    'room.garden.text': 'مساحة خضرا لترتاح، تعمل ستريتشينغ، أو تقعد مع رفقاتك.',
    'cups.title1': 'شو بكبّايتك',
    'cups.title2': 'كمان بيفرق',
    'cups.lede': 'كافيه Fit House بيكتبلك السعرات والماكروز لكل مشروب، من القهوة للبروتين شيك.',
    'cup.matcha': 'ماتشا لاتيه مع كولد فوم',
    'cup.matchaProtein': '4.1 غ بروتين',
    'cup.matchaNote': 'كمان متوفّر بالفريز، التوت الأزرق والمانغا.',
    'cup.raspberry': 'راسبيري شيك',
    'cup.raspberryProtein': '30.5 غ بروتين',
    'cup.peanut': 'بروتين شيك زبدة فستق وموز',
    'cup.peanutProtein': '36 غ بروتين',
    'cup.peanutNote': 'بالحليب والبروتين يلي بتختارهن.',
    'classes.title1': 'هيدا مش',
    'classes.title2': 'جدول كلاسات عادي',
    'classes.lede': 'مواي تاي تلات مسيات بالأسبوع، للولاد والكبار. تعلّم الصح والاقي إيقاعك.',
    'classes.note': 'الثلاثاء والخميس والسبت للجيم المفتوح. اسألونا عن كلاسات السيدات لهالموسم.',
    'who.kids': 'ولاد',
    'who.adults': 'كبار',
    'day.any': 'أي يوم',
    'day.sun': 'الأحد',
    'day.mon': 'الاثنين',
    'day.tue': 'الثلاثاء',
    'day.wed': 'الأربعاء',
    'day.thu': 'الخميس',
    'day.fri': 'الجمعة',
    'day.sat': 'السبت',
    'bundles.title': 'اختار الباقة يلي بتناسبك',
    'bundles.tabs': 'الباقات لـ',
    'bundles.adults': 'كبار',
    'bundles.kids': 'ولاد',
    'bundles.help': 'مش متأكد شو بيناسبك؟ ابعتلنا رسالة ومنساعدك تختار.',
    'price.mtKids': 'اشتراك مواي تاي',
    'bundles.ask': 'اسأل عن باقة',
    'bundles.kidsNote': 'الولاد بيشتركوا بالكلاسات بس.',
    'price.gym': 'اشتراك الجيم',
    'price.month': 'شهر واحد',
    'price.dropin': 'دخول للجيم',
    'price.session': 'جلسة وحدة',
    'price.classes': 'اشتراك الكلاسات',
    'price.monthly3': 'شهري، 3 كلاسات بالأسبوع',
    'price.single': 'كلاس واحد',
    'price.oneClass': 'كلاس واحد',
    'price.full': 'اشتراك كامل',
    'price.fullDetail': 'الجيم والكلاسات. أوفر بـ 10$ من الاشتراكين لحال.',
    'book.title1': 'مش الكل',
    'book.title2': 'رح يلحق محل',
    'book.lede': 'الأماكن بكل كلاس محدودة. اختار شو بيهمّك وابعتلنا الرسالة عالواتساب.',
    'book.call': 'بتفضّل تتصل؟',
    'book.dm': 'أو راسلنا على إنستغرام:',
    'book.what': 'عن شو بدّك تسأل؟',
    'book.day': 'أنسب يوم إلك',
    'book.preview': 'رسالتك',
    'book.send': 'ابعت عالواتساب',
    'book.hint': 'بيفتحلك واتساب والرسالة جاهزة للإرسال.',
    'interest.mtKids': 'مواي تاي للولاد',
    'interest.mtAdults': 'مواي تاي للكبار',
    'interest.women': 'كلاسات السيدات',
    'interest.bundle': 'باقات الاشتراك',
    'interest.tour': 'زيارة لشوف المكان',
    'visit.title': 'فتحنا',
    'visit.lede': 'الصبحيات من الاثنين للجمعة للسيدات بس. بعد الضهر ونهار السبت الدوام مختلط.',
    'visit.mapTitle': 'خريطة بتبيّن موقع Fit House بالحوش، صور',
    'visit.entrance': 'دوّر على يافطة Fit House ويافطة الكافيه عالمدخل.',
    'visit.find': 'وين نحنا',
    'visit.address': 'الحوش، صور، جنوب لبنان',
    'visit.directions': 'دلّني عالطريق',
    'hours.weekdays': 'من الاثنين للجمعة',
    'hours.today': 'اليوم',
    'hours.ladies': 'سيدات فقط',
    'hours.mixed': 'مختلط',
    'hours.closed': 'مسكّر',
    'footer.call': 'اتصل',
    'footer.legal': '© 2026 Fit House. الحوش، صور.',
  };

  // Strings built at runtime, in both languages.
  const UI = {
    en: {
      toggle: 'عربي',
      toggleLang: 'ar',
      locale: 'en-US',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      kind: { ladies: 'ladies-only hours', mixed: 'mixed hours' },
      openUntil: (kind, t) => `Open now: ${kind} until ${t}`,
      opensToday: (t, kind) => `Closed now. Opens today at ${t} for ${kind}.`,
      opensTomorrow: (t, kind) => `Closed now. Opens tomorrow at ${t} for ${kind}.`,
      opensOn: (day, t, kind) => `Closed now. Opens ${day} at ${t} for ${kind}.`,
      message: (interest, day) =>
        `Hi Fit House! I'd like to ask about ${interest.toLowerCase().replace(/^muay thai/, 'Muay Thai')}.` +
        (day ? ` The best day for me is ${day}.` : ''),
      sent: 'Opened in WhatsApp. Tap send there to book.',
      motionOn: 'Animations: on',
      motionOff: 'Animations: off',
      today: 'Today',
      who: { kids: 'for kids', adults: 'for adults' },
      liveClass: (who, until) => `Happening now: Muay Thai ${who}, until ${until}`,
      nextToday: (who, at, wait) => `Next class: Muay Thai ${who}, today at ${at} (in ${wait})`,
      nextTomorrow: (who, at) => `Next class: Muay Thai ${who}, tomorrow at ${at}`,
      nextOn: (who, day, at) => `Next class: Muay Thai ${who}, ${day} at ${at}`,
      wait: (h, m) => (h ? `${h} h ${m} min` : `${m} min`),
    },
    ar: {
      toggle: 'English',
      toggleLang: 'en',
      locale: 'ar-LB-u-nu-latn',
      days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
      kind: { ladies: 'دوام السيدات', mixed: 'الدوام المختلط' },
      openUntil: (kind, t) => `مفتوح هلّق: ${kind} لحدّ الساعة ${t}`,
      opensToday: (t, kind) => `مسكّر هلّق. منفتح اليوم الساعة ${t}، ${kind}.`,
      opensTomorrow: (t, kind) => `مسكّر هلّق. منفتح بكرا الساعة ${t}، ${kind}.`,
      opensOn: (day, t, kind) => `مسكّر هلّق. منفتح نهار ${day} الساعة ${t}، ${kind}.`,
      message: (interest, day) =>
        `مرحبا Fit House! بدّي إسأل عن ${interest}.` + (day ? ` أنسب يوم إلي هو ${day}.` : ''),
      sent: 'انفتح واتساب. اكبس إرسال هونيك لتحجز.',
      motionOn: 'الحركة: شغّالة',
      motionOff: 'الحركة: مطفيّة',
      today: 'اليوم',
      who: { kids: 'للولاد', adults: 'للكبار' },
      liveClass: (who, until) => `هلّق عم يصير: مواي تاي ${who}، لحدّ الساعة ${until}`,
      nextToday: (who, at, wait) => `الكلاس الجاي: مواي تاي ${who}، اليوم الساعة ${at} (بعد ${wait})`,
      nextTomorrow: (who, at) => `الكلاس الجاي: مواي تاي ${who}، بكرا الساعة ${at}`,
      nextOn: (who, day, at) => `الكلاس الجاي: مواي تاي ${who}، نهار ${day} الساعة ${at}`,
      wait: (h, m) => (h ? `${h} س و${m} د` : `${m} د`),
    },
  };

  let lang = 'en';
  const t = () => UI[lang];

  /* ---------------- Time helpers ---------------- */

  function formatTime(minutes, opts = {}) {
    const d = new Date(2000, 0, 3, Math.floor(minutes / 60), minutes % 60);
    const fmt = { hour: 'numeric', ...(opts.short && minutes % 60 === 0 ? {} : { minute: '2-digit' }) };
    return new Intl.DateTimeFormat(t().locale, fmt).format(d);
  }

  function toMinutes(hhmm) {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
  }

  function beirutNow() {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Beirut',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    return { day, mins: Number(get('hour')) * 60 + Number(get('minute')) };
  }

  function renderTimes() {
    document.querySelectorAll('time[data-range]').forEach((el) => {
      const [a, b] = el.dataset.range.split('-').map(toMinutes);
      el.textContent = `${formatTime(a)} – ${formatTime(b)}`;
    });
    document.querySelectorAll('.tt-axis [data-h]').forEach((el) => {
      el.textContent = formatTime(Number(el.dataset.h) * 60);
    });
    document.querySelectorAll('.hours__axis [data-h]').forEach((el) => {
      el.textContent = formatTime(Number(el.dataset.h) * 60, { short: true });
    });
  }

  /* ---------------- Open now ---------------- */

  function currentStatus() {
    const { day, mins } = beirutNow();
    for (const [kind, from, to] of HOURS[day]) {
      if (mins >= from && mins < to) return { open: true, kind, at: to };
    }
    for (let offset = 0; offset < 8; offset++) {
      const d = (day + offset) % 7;
      for (const [kind, from] of HOURS[d]) {
        if (offset > 0 || from > mins) return { open: false, kind, at: from, offset, day: d };
      }
    }
    return null;
  }

  function renderStatus() {
    const s = currentStatus();
    const { day, mins } = beirutNow();
    if (s) {
      const ui = t();
      const kind = ui.kind[s.kind];
      const time = formatTime(s.at);
      let text;
      if (s.open) text = ui.openUntil(kind, time);
      else if (s.offset === 0) text = ui.opensToday(time, kind);
      else if (s.offset === 1) text = ui.opensTomorrow(time, kind);
      else text = ui.opensOn(ui.days[s.day], time, kind);
      document.querySelectorAll('[data-status]').forEach((el) => {
        el.textContent = text;
        el.dataset.open = String(s.open);
      });
    }

    document.querySelectorAll('.hours__row').forEach((row) => {
      const days = row.dataset.days.split(',').map(Number);
      const isToday = days.includes(day);
      row.classList.toggle('is-today', isToday);
      const marker = row.querySelector('.hours__now');
      if (!marker) return;
      const pos = (mins / 60 - AXIS_START) / AXIS_SPAN;
      const visible = isToday && pos >= 0 && pos <= 1;
      marker.classList.toggle('is-visible', visible);
      if (visible) marker.style.setProperty('--n', pos.toFixed(4));
    });
  }

  /* ---------------- Live class status ---------------- */

  // Muay Thai, as posted on 23 September 2026: Monday, Wednesday, Friday.
  const CLASSES = [1, 3, 5].flatMap((day) => [
    { day, from: 1080, to: 1140, who: 'kids' },
    { day, from: 1140, to: 1200, who: 'adults' },
  ]);
  const nextClassEl = document.getElementById('next-class');

  function nextClass(day, mins) {
    const live = CLASSES.find((c) => c.day === day && mins >= c.from && mins < c.to);
    if (live) return { ...live, live: true };
    for (let off = 0; off < 8; off++) {
      const d = (day + off) % 7;
      const c = CLASSES.filter((x) => x.day === d && (off > 0 || x.from > mins)).sort((a, b) => a.from - b.from)[0];
      if (c) return { ...c, live: false, off, wait: off * 1440 + c.from - mins };
    }
    return null;
  }

  function renderClasses() {
    const { day, mins } = beirutNow();
    const ui = t();
    document.querySelectorAll('.tt-day').forEach((col) => {
      const isToday = Number(col.dataset.day) === day;
      col.classList.toggle('is-today', isToday);
      const h3 = col.querySelector('h3');
      let badge = h3.querySelector('.tt-today');
      if (isToday) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'tt-today';
          h3.appendChild(badge);
        }
        badge.textContent = ui.today;
      } else if (badge) {
        badge.remove();
      }
      col.querySelectorAll('.slot').forEach((slot) => {
        const who = slot.classList.contains('slot--kids') ? 'kids' : 'adults';
        const c = CLASSES.find((x) => x.day === day && x.who === who);
        slot.classList.toggle('is-live', isToday && Boolean(c) && mins >= c.from && mins < c.to);
      });
    });

    const n = nextClass(day, mins);
    if (!n) return;
    const who = ui.who[n.who];
    let text;
    if (n.live) text = ui.liveClass(who, formatTime(n.to));
    else if (n.off === 0) text = ui.nextToday(who, formatTime(n.from), ui.wait(Math.floor(n.wait / 60), n.wait % 60));
    else if (n.off === 1) text = ui.nextTomorrow(who, formatTime(n.from));
    else text = ui.nextOn(who, ui.days[n.day], formatTime(n.from));
    nextClassEl.textContent = text;
    nextClassEl.hidden = false;
  }

  /* ---------------- Language ---------------- */

  const original = new Map();
  const remember = (el, key, value) => {
    if (!original.has(el)) original.set(el, {});
    const store = original.get(el);
    if (!(key in store)) store[key] = value;
    return store[key];
  };

  function applyLang(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    const ar = lang === 'ar';
    root.lang = lang;
    root.dir = ar ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const en = remember(el, 'text', el.textContent);
      el.textContent = ar ? AR[el.dataset.i18n] ?? en : en;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const en = remember(el, 'html', el.innerHTML);
      el.innerHTML = ar ? AR[el.dataset.i18nHtml] ?? en : en;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        const en = remember(el, `@${attr}`, el.getAttribute(attr));
        el.setAttribute(attr, ar ? AR[key] ?? en : en);
      });
    });

    const titleEn = remember(document, 'title', document.title);
    document.title = ar ? AR['meta.title'] : titleEn;

    const toggle = document.getElementById('lang-toggle');
    toggle.textContent = t().toggle;
    toggle.lang = t().toggleLang;

    motionToggle.textContent = motion ? t().motionOn : t().motionOff;

    renderTimes();
    renderStatus();
    renderClasses();
    updateMessage();
    if (heroActive) requestAnimationFrame(() => { measureHero(); renderHero(); });

    try { localStorage.setItem('fithouse-lang', lang); } catch (e) { /* storage unavailable */ }
  }

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(lang === 'ar' ? 'en' : 'ar');
  });

  /* ---------------- Navigation ---------------- */

  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('nav-menu');
  const hero = document.getElementById('hero');

  function setMenu(open) {
    nav.classList.toggle('nav--open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('nav--open')));
  document.querySelectorAll('#nav-links a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  function renderNav() {
    const pastWall = heroActive
      ? -hero.getBoundingClientRect().top > window.innerHeight * 0.35
      : hero.getBoundingClientRect().bottom <= nav.offsetHeight;
    nav.classList.toggle('nav--solid', pastWall);
  }

  /* ---------------- Hero: the window opens as you scroll ---------------- */

  const stage = hero.querySelector('.hero__stage');
  const windowEl = document.getElementById('hero-window');
  const outside = hero.querySelector('.hero__outside');
  const outsideMark = hero.querySelector('.hero__outside-mark');
  const outsideLeaves = outside.querySelector('.leaves');
  const outsidePhoto = outside.querySelector('.hero__photo');
  const copy = hero.querySelector('.hero__copy');
  let heroActive = false;
  let rect = null;

  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

  function measureHero() {
    const s = stage.getBoundingClientRect();
    const w = windowEl.getBoundingClientRect();
    rect = {
      top: w.top - s.top,
      right: s.right - w.right,
      bottom: s.bottom - w.bottom,
      left: w.left - s.left,
      radius: Math.min(w.width, w.height) / 2,
      stageW: s.width,
      stageH: s.height,
    };
  }

  // 0 → 1 while the window first opens on page load, like a pair of curtains.
  let introK = 1;

  function playIntro() {
    introK = 0;
    const start = performance.now() + 250;
    const step = (now) => {
      introK = clamp((now - start) / 1100);
      renderHero();
      if (introK < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderHero() {
    if (!heroActive || !rect) return;
    const travel = hero.offsetHeight - stage.offsetHeight;
    const p = clamp(-hero.getBoundingClientRect().top / travel);
    const e = 1 - ease(p);
    const winW = rect.stageW - (rect.left + rect.right) * e;
    const shrink = (winW / 2) * (1 - ease(introK));
    const radius = Math.min(rect.radius * e, winW / 2 - shrink);
    outside.style.clipPath =
      `inset(${rect.top * e}px ${rect.right * e + shrink}px ${rect.bottom * e}px ${rect.left * e + shrink}px round ${radius}px)`;
    const fade = clamp(p / 0.4);
    copy.style.opacity = String(1 - fade);
    copy.style.transform = `translateY(${-fade * 2.5}rem)`;
    copy.style.visibility = fade >= 1 ? 'hidden' : '';
    // The photo grows with the window, so it starts framed like the still pill,
    // then dissolves into the green as the window opens fully.
    const ps = outsidePhoto.style;
    // Free the right and bottom edges, or right-to-left layout ignores `left`.
    ps.right = 'auto';
    ps.bottom = 'auto';
    ps.top = `${rect.top * e}px`;
    ps.left = `${rect.left * e}px`;
    ps.width = `${rect.stageW - (rect.left + rect.right) * e}px`;
    ps.height = `${rect.stageH - (rect.top + rect.bottom) * e}px`;
    ps.opacity = String(1 - clamp((p - 0.55) / 0.35));
    outsideMark.style.opacity = String(clamp((p - 0.62) / 0.3));
    // Fade the hero's leaf shadows so the stage hands over cleanly to the manifesto below.
    outsideLeaves.style.opacity = String(0.3 * (1 - clamp((p - 0.7) / 0.3)));
  }

  function splitHeadline() {
    const h1 = document.getElementById('hero-title');
    if (h1.classList.contains('is-split')) return;
    const words = h1.textContent.trim().split(/\s+/);
    h1.textContent = '';
    words.forEach((word, i) => {
      const outer = document.createElement('span');
      const inner = document.createElement('span');
      outer.className = 'w';
      inner.style.setProperty('--i', i);
      inner.textContent = word;
      outer.appendChild(inner);
      h1.append(outer, i < words.length - 1 ? ' ' : '');
    });
    h1.classList.add('is-split');
  }

  /* ---------------- Motion switch ---------------- */

  // The OS setting decides by default; the footer switch overrides it and is remembered.
  const MOTION_KEY = 'fithouse-motion';
  const motionToggle = document.getElementById('motion-toggle');
  let motion = false;
  let motionOverride = null;

  function motionWanted() {
    let pref = motionOverride;
    if (!pref) {
      try { pref = localStorage.getItem(MOTION_KEY); } catch (e) { /* storage unavailable */ }
    }
    return pref === 'on' || (pref !== 'off' && !reduceMotion.matches);
  }

  function setupMotion() {
    motion = motionWanted();
    heroActive = motion;
    root.classList.toggle('motion', motion);
    motionToggle.setAttribute('aria-pressed', String(motion));
    motionToggle.textContent = motion ? t().motionOn : t().motionOff;
    if (heroActive) {
      measureHero();
      renderHero();
    } else {
      introK = 1;
      outside.style.clipPath = '';
      outsideLeaves.style.opacity = '';
      outsidePhoto.removeAttribute('style');
      copy.style.opacity = '';
      copy.style.transform = '';
      copy.style.visibility = '';
    }
    renderNav();
  }

  motionToggle.addEventListener('click', () => {
    motionOverride = motion ? 'off' : 'on';
    try { localStorage.setItem(MOTION_KEY, motionOverride); } catch (e) { /* storage unavailable */ }
    setupMotion();
  });
  reduceMotion.addEventListener('change', setupMotion);

  /* ---------------- Scroll progress ---------------- */

  const progress = document.getElementById('progress');
  let moveTimer = null;

  function renderProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--progress', (max > 0 ? clamp(window.scrollY / max) : 0).toFixed(4));
    // The little figure only runs while you are scrolling.
    progress.classList.add('is-moving');
    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => progress.classList.remove('is-moving'), 180);
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      renderHero();
      renderNav();
      renderProgress();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (heroActive) { measureHero(); renderHero(); }
    renderNav();
  });

  /* ---------------- Reveals ---------------- */

  const clampEase = (k) => 1 - Math.pow(1 - k, 3);

  function countUp(el, to, format = String, duration = 900) {
    const start = performance.now();
    const step = (now) => {
      const k = clamp((now - start) / duration);
      el.textContent = format(Math.round(to * clampEase(k)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Each target gets .is-in once it scrolls into view; CSS animates only under .motion.
  const onReveal = new Map();
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target); });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' })
    : null;

  function reveal(el) {
    el.classList.add('is-in');
    if (io) io.unobserve(el);
    const run = onReveal.get(el);
    if (run) run();
  }

  function watch(selector, run) {
    document.querySelectorAll(selector).forEach((el) => {
      if (run) onReveal.set(el, run);
      if (io) io.observe(el);
      else reveal(el);
    });
  }

  /* ---------------- Playful details ---------------- */

  // Leaf shadows drift away from the mouse, like light moving through the branches.
  document.querySelectorAll('.hero__stage, .manifesto').forEach((zone) => {
    zone.addEventListener('pointermove', (e) => {
      if (!motion || e.pointerType !== 'mouse') return;
      const r = zone.getBoundingClientRect();
      zone.style.setProperty('--wx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
      zone.style.setProperty('--wy', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
    });
    zone.addEventListener('pointerleave', () => {
      zone.style.removeProperty('--wx');
      zone.style.removeProperty('--wy');
    });
  });

  // On touch screens there is no hover, so a tap makes the logo figure do its rep.
  document.querySelectorAll('.brand, .footer__brand').forEach((el) => {
    el.addEventListener('pointerdown', (e) => {
      if (!motion || e.pointerType === 'mouse') return;
      const mark = el.querySelector('.mark');
      mark.classList.remove('is-repping');
      void mark.getBoundingClientRect();
      mark.classList.add('is-repping');
      setTimeout(() => mark.classList.remove('is-repping'), 1600);
    });
  });

  // The footer wordmark is split into letters so they can wave.
  const footerWord = document.getElementById('footer-word');
  const footerText = footerWord.textContent;
  footerWord.textContent = '';
  const footerLabel = document.createElement('span');
  footerLabel.className = 'sr-only';
  footerLabel.textContent = footerText;
  footerWord.appendChild(footerLabel);
  [...footerText].forEach((ch, i) => {
    const l = document.createElement('span');
    l.className = 'l';
    l.setAttribute('aria-hidden', 'true');
    l.style.setProperty('--i', i);
    l.textContent = ch === ' ' ? ' ' : ch;
    footerWord.appendChild(l);
  });

  /* ---------------- Bundles tabs ---------------- */

  const tabs = Array.from(document.querySelectorAll('.seg [role="tab"]'));
  let bundlesSeen = false;

  // Rows slide in and prices count up whenever a price list comes into view.
  function playPanel(panel) {
    panel.classList.remove('is-entering');
    void panel.offsetWidth;
    panel.querySelectorAll('.prices li').forEach((li, i) => li.style.setProperty('--d', i));
    panel.classList.add('is-entering');
    panel.querySelectorAll('.price').forEach((p) => countUp(p, Number(p.value), (n) => `$${n}`, 700));
  }

  function selectTab(tab, focus) {
    tabs.forEach((x) => {
      const on = x === tab;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(x.getAttribute('aria-controls'));
      panel.hidden = !on;
      if (on && motion && bundlesSeen) playPanel(panel);
    });
    if (focus) tab.focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (e) => {
      const forward = lang === 'ar' ? 'ArrowLeft' : 'ArrowRight';
      const back = lang === 'ar' ? 'ArrowRight' : 'ArrowLeft';
      if (e.key === forward || e.key === back) {
        e.preventDefault();
        const step = e.key === forward ? 1 : -1;
        selectTab(tabs[(i + step + tabs.length) % tabs.length], true);
      }
    });
  });
  if (tabs.length) selectTab(tabs[0]);

  /* ---------------- WhatsApp message composer ---------------- */

  const form = document.getElementById('composer');
  const preview = document.getElementById('composer-msg');

  function composeMessage() {
    const interest = form.querySelector('input[name="interest"]:checked');
    const label = interest ? interest.nextElementSibling.textContent.trim() : '';
    const select = form.elements.day;
    const day = select.value === 'any' ? null : select.options[select.selectedIndex].textContent.trim();
    return t().message(label, day);
  }

  const hint = form.querySelector('.composer__hint');
  let typingTimer = null;
  let typingFrame = null;

  // With motion on, a change shows WhatsApp-style typing dots, then types the new message out.
  function showMessage(text, animate) {
    clearTimeout(typingTimer);
    cancelAnimationFrame(typingFrame);
    preview.classList.remove('is-sent');
    if (!animate || !motion) {
      preview.textContent = text;
      preview.removeAttribute('aria-busy');
      return;
    }
    preview.setAttribute('aria-busy', 'true');
    preview.innerHTML = '<span class="typing" aria-hidden="true"><i></i><i></i><i></i></span>';
    typingTimer = setTimeout(() => {
      const start = performance.now();
      const duration = Math.min(900, text.length * 14);
      const step = (now) => {
        const k = clamp((now - start) / duration);
        preview.textContent = text.slice(0, Math.ceil(text.length * k));
        if (k < 1) typingFrame = requestAnimationFrame(step);
        else preview.removeAttribute('aria-busy');
      };
      typingFrame = requestAnimationFrame(step);
    }, 550);
  }

  function updateMessage(animate = false) {
    if (form) showMessage(composeMessage(), animate);
  }

  form.addEventListener('change', () => updateMessage(true));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = composeMessage();
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    hint.textContent = t().sent;
    if (motion) {
      // The bubble flies off as if sent, then the message comes back for another go.
      clearTimeout(typingTimer);
      preview.classList.add('is-sent');
      typingTimer = setTimeout(() => showMessage(text, true), 650);
    }
  });

  document.querySelectorAll('[data-pick]').forEach((link) => {
    link.addEventListener('click', () => {
      const input = form.querySelector(`input[name="interest"][value="${link.dataset.pick}"]`);
      if (input) {
        input.checked = true;
        updateMessage(true);
      }
    });
  });

  /* ---------------- Start ---------------- */

  let initial = 'en';
  try {
    const saved = localStorage.getItem('fithouse-lang');
    if (saved) initial = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('ar')) initial = 'ar';
  } catch (e) { /* storage unavailable */ }

  splitHeadline();
  setupMotion();
  applyLang(initial);
  renderNav();
  renderProgress();
  progress.classList.remove('is-moving');
  if (motion) playIntro();

  watch('.manifesto__line, .manifesto__verdict, .manifesto__body, .house, .hours');
  watch('.cups', () => {
    if (motion) document.querySelectorAll('.cups .count').forEach((c) => countUp(c, Number(c.dataset.to)));
  });
  watch('.timetable', () => {
    document.querySelectorAll('.timetable .slot').forEach((slot, i) => slot.style.setProperty('--d', i));
  });
  watch('.bundles__lists', () => {
    bundlesSeen = true;
    const open = document.querySelector('.bundles__lists .panel:not([hidden])');
    if (open && motion) playPanel(open);
  });

  setInterval(() => { renderStatus(); renderClasses(); }, 30 * 1000);
})();
