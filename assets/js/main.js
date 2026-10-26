(() => {
  'use strict';

  const root = document.documentElement;
  const PAGE = document.body.dataset.page || 'home';
  const WHATSAPP = '96176684096';

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
    'meta.title.home': 'Fit House | جيم وحديقة وقهوة بالحوش، صور',
    'meta.title.house': 'البيت | Fit House، الحوش، صور',
    'meta.title.classes': 'الكلاسات | Fit House، الحوش، صور',
    'meta.title.cafe': 'الكافيه | Fit House، الحوش، صور',
    'meta.title.bundles': 'الباقات | Fit House، الحوش، صور',
    'meta.title.visit': 'زورونا | Fit House، الحوش، صور',
    'meta.title.book': 'احجز كلاس | Fit House، الحوش، صور',
    'nav.home': 'الرئيسية',
    'nav.cafe': 'الكافيه',
    'footer.pages': 'كل الصفحات',
    'crumb.label': 'مكانك بالموقع',
    'next.label': 'الصفحة الجاية',
    'page.house': 'البيت',
    'page.classes': 'الكلاسات',
    'page.cafe': 'الكافيه',
    'page.bundles': 'الباقات',
    'page.visit': 'زورونا',
    'page.book': 'احجز',
    'explore.title1': 'فوت لجوّا',
    'explore.title2': 'وشوف البيت',
    'explore.lede': 'كل قسم من Fit House إلو صفحة. اختار من وين بدّك تبلّش.',
    'explore.house': 'صالة الجيم، كارديو مقابيل الشجر، الحديقة، الكافيه وFuel، كلّو تحت سقف واحد.',
    'explore.classes': 'مواي تاي تلات مسيات بالأسبوع، للولاد والكبار.',
    'explore.cafe': 'قهوة، ماتشا وبروتين شيك، والماكروز مكتوبة عالمنيو.',
    'explore.bundles': 'من دخول بـ 5$ لاشتراك كامل بـ 80$ بالشهر.',
    'explore.visit': 'الحوش، صور. الصبحيات للسيدات، وبعد الضهر والسبت مختلط.',
    'explore.book': 'اختار كلاس وابعتلنا الرسالة عالواتساب.',
    'house.intro': 'مساحة كبيرة بس إحساس بيت: أوزان وأجهزة، كارديو حدّ الشبابيك، حديقة برّا وكافيه تقعد فيه بعد التمرين.',
    'corners.title1': 'كل زاوية',
    'corners.title2': 'معمولة لرجعتك',
    'corners.lede': 'مرّق الماوس على أي كلمة لتشوف هالزاوية من البيت.',
    'corner.cardio': 'تريدميل وبسكليتات مصفوفين حدّ الشبابيك.',
    'corner.weights': 'بلايتات، رفوف وأوزان حرّة.',
    'corner.machines': 'أجهزة بلايتات وكابلات لكل عضلة.',
    'corner.classes': 'مواي تاي للولاد والكبار، تلات مسيات بالأسبوع.',
    'corner.stretching': 'محل تعمل ستريتشينغ جوّا، أو برّا عالعشب.',
    'corner.coaching': 'مدرّبين عالأرض ليرافقوك برجعتك.',
    'tour.title1': 'خود',
    'tour.title2': 'جولة',
    'tour.lede': 'اسحب أو مرّق عالجنب لتتفرّج عالبيت.',
    'tour.label': 'صور من Fit House',
    'tour.window': 'التريدميل مقابيل الحديقة.',
    'tour.floor': 'كابلات، بنشات ودامبلز.',
    'tour.racks': 'رفوف وبلايتات للأيام التقيلة.',
    'tour.grip': 'امسك، ارفع، تنفّس.',
    'tour.entrance': 'لحّق اليافطات وفوت.',
    'tour.garden': 'وبعدين اطلع برّا.',
    'photo.gymWide': 'أجهزة كابلات وبنشات ودامبلز بصالة Fit House',
    'photo.racks': 'بلايتات ورفوف حدّ حيط فيه مرايات',
    'photo.grip': 'إيدين ماسكين بار عن قرب',
    'classes.intro': 'أكتر من تمرين. انضباط، ثقة وقوّة تحت السيطرة، للولاد والكبار.',
    'who.title1': 'كلاس واحد',
    'who.title2': 'لعمرين',
    'who.kidsTitle': 'تركيز وثقة بالنفس',
    'who.kidsText': 'الولاد بيتعلّموا التكنيك خطوة بخطوة، وبيطلعوا بتركيز وثقة أكتر من يلي فاتوا فيهن.',
    'who.when': 'إيمتى',
    'who.kidsWhen': 'الاثنين، الأربعاء، الجمعة، 6–7 مساءً',
    'who.price': 'السعر',
    'who.priceValue': '40$ بالشهر',
    'who.kidsAsk': 'اسأل عن كلاسات الولاد',
    'who.adultsTitle': 'قوّة ومهارة',
    'who.adultsText': 'تمرّن بقوة، تعلّم الصح والاقي إيقاعك، إن كنت عم تبلّش أو راجع.',
    'who.adultsWhen': 'الاثنين، الأربعاء، الجمعة، 7–8 مساءً',
    'who.adultsAsk': 'اسأل عن كلاسات الكبار',
    'quote.label': 'مواي تاي بـ Fit House',
    'quote.1': 'تمرّن بقوة.',
    'quote.2': 'تعلّم الصح.',
    'quote.3': 'والاقي إيقاعك.',
    'women.title1': 'كلاسات',
    'women.title2': 'السيدات',
    'women.lede': 'الصبحيات بأيام الأسبوع للسيدات بس، وكلاسات السيدات ماشية خلال الموسم. راسلونا لتعرفوا برنامج هالموسم.',
    'women.ask': 'اسألي عن كلاسات السيدات',
    'cafe.intro': 'لا، مش لازم تتركي قهوتك كرمال تتمرّني. خدي التنين سوا وكفّي نهارك.',
    'macro.protein': 'بروتين',
    'macro.carbs': 'كاربوهيدرات',
    'macro.fat': 'دهون',
    'stay.title1': 'ضلّ',
    'stay.title2': 'شوي كمان',
    'stay.lede': 'تمرّن، اقعد، اشرب قهوتك. ما تلغي قعدة الشباب وبتلحّق تمرينك.',
    'stay.1': 'قهوة، ماتشا وبروتين شيك',
    'stay.2': 'طاولات حدّ الشبابيك، والحديقة برّا',
    'stay.3': 'السعرات والماكروز مكتوبة لكل مشروب',
    'fuel.title2': 'من DNA Nutrition',
    'fuel.lede': 'ألواح بروتين DNA Fuel ومكمّلات من DNA Nutrition، متوفّرة عنّا عالاستقبال.',
    'fuel.recipes': 'مدرّبينا بيشاركوا وصفات سريعة غنية بالبروتين، متل بولات الترويقة، على إنستغرام.',
    'fuel.ig': 'شوف الوصفات على إنستغرام',
    'bundles.intro': 'الاستمرارية ما بتصير بالصدفة. بتبلّش بقرار ذكي.',
    'bundles.card': 'دخول بـ 5$، أو اشتراك كامل بـ 80$ بالشهر.',
    'compare.title1': 'شو بيشمل',
    'compare.title2': 'كل اشتراك',
    'compare.gym': 'دخول الجيم المفتوح',
    'compare.classes': 'الكلاسات، 3 بالأسبوع',
    'compare.length': 'المدّة',
    'compare.yes': 'مشمول',
    'compare.no': 'مش مشمول',
    'compare.note': 'مش جاهز لشهر؟ الدخول للجيم بـ 5$ والكلاس الواحد بـ 10$. كلاسات الولاد بـ 30$ بالشهر أو 8$ للكلاس.',
    'visit.intro': 'مرّوا عالحوش، صور. الباب مفتوح ست أيام بالأسبوع.',
    'reach.title1': 'تواصل',
    'reach.title2': 'معنا',
    'reach.call': 'اتصل',
    'reach.whatsapp': 'اكتب رسالتك',
    'reach.map': 'الطريق',
    'book.intro': 'مش الكل بيلحق محل. اختار شو بدّك وابعتلنا الرسالة عالواتساب.',
    'book.card': 'ابدأ رسالتك',
    'steps.title1': 'كيف بيمشي',
    'steps.title2': 'الحجز',
    'steps.1title': 'اختار شو بدّك',
    'steps.1text': 'كلاس للولاد أو الكبار، كلاسات السيدات، باقة، أو بس زيارة.',
    'steps.2title': 'ابعتها عالواتساب',
    'steps.2text': 'الرسالة مكتوبة إلك. بيفتح واتساب وهي جاهزة للإرسال.',
    'steps.3title': 'منأكّدلك محلك',
    'steps.3text': 'منردّ عليك بالشات لنأكّد محلك.',
    'skip': 'انتقل للمحتوى',
    'brand.label': 'Fit House، الصفحة الرئيسية',
    'nav.label': 'القائمة الرئيسية',
    'nav.house': 'البيت',
    'nav.classes': 'الكلاسات',
    'nav.bundles': 'الباقات',
    'nav.visit': 'زورونا',
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
    'photo.cafe': 'كونتر الكافيه، ولوحتين المنيو فوق ماكينة الإسبريسو',
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
    'hero.drink': 'ماتشا لاتيه',
    'hero.drinkNote': '120 سعرة بالكافيه',
    'pass.month': 'بالشهر',
    'cups.lede':'كافيه Fit House بيكتبلك السعرات والماكروز لكل مشروب، من القهوة للبروتين شيك.',
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
    'price.fullDetail': 'الجيم والكلاسات.',
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
  // Every spot that shows the next class: the timetable chip, the page banner, the Home tile.
  const nextClassEls = document.querySelectorAll('[data-next-class]');

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
    nextClassEls.forEach((el) => {
      el.textContent = text;
      el.hidden = false;
      el.dataset.live = String(n.live);
    });
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
    document.title = ar ? AR[`meta.title.${PAGE}`] ?? titleEn : titleEn;

    const toggle = document.getElementById('lang-toggle');
    toggle.textContent = t().toggle;
    toggle.lang = t().toggleLang;


    renderTimes();
    renderStatus();
    renderClasses();
    renderRibbons();
    updateMessage();
    requestAnimationFrame(fitPageWords);
    if (heroActive) requestAnimationFrame(() => { measureHero(); renderHero(); });

    try { localStorage.setItem('fithouse-lang', lang); } catch (e) { /* storage unavailable */ }
  }

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(lang === 'ar' ? 'en' : 'ar');
  });

  /* ---------------- Navigation ---------------- */

  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('nav-menu');
  // Home has the big hero; every other page opens with a smaller framed banner.
  const hero = document.getElementById('hero');
  const pageBanner = document.querySelector('.phero');

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

  // The pill stays glassy over the dark banner and turns solid once you scroll past it.
  function renderNav() {
    const wall = hero || pageBanner;
    if (!wall) {
      nav.classList.add('nav--solid');
      return;
    }
    const pastWall = heroActive
      ? -hero.getBoundingClientRect().top > window.innerHeight * 0.35 || (autoMode && autoP > 0.5)
      : wall.getBoundingClientRect().bottom <= nav.offsetHeight + 24;
    nav.classList.toggle('nav--solid', pastWall);
  }

  /* ---------------- Hero: the window opens as you scroll ---------------- */

  const stage = hero?.querySelector('.hero__stage');
  const frame = document.getElementById('hero-frame');
  const heroInner = hero?.querySelector('.hero__inner');
  const windowEl = document.getElementById('hero-window');
  const outside = hero?.querySelector('.hero__outside');
  const outsideMark = hero?.querySelector('.hero__outside-mark');
  const outsideLeaves = outside?.querySelector('.leaves');
  const outsidePhoto = outside?.querySelector('.hero__photo');
  // Every piece of the wall except the window. Each one fades on its own, because fading a
  // shared parent would flatten the layers and push the words in front of the photo.
  const wallParts = hero
    ? [...heroInner.querySelectorAll('.hero__title > *, .hero__inner > :not(.hero__title):not(.hero__window)')]
    : [];
  let heroActive = false;
  let rect = null;
  let frameGap = 0;
  let frameRadius = 0;

  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

  function measureHero() {
    if (!hero) return;
    stage.style.removeProperty('--fm');
    frame.style.removeProperty('--fr');
    frameGap = parseFloat(getComputedStyle(stage).paddingTop) || 0;
    frameRadius = parseFloat(getComputedStyle(frame).borderTopLeftRadius) || 0;
    const s = frame.getBoundingClientRect();
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

  // Phones and tablets don't scrub the window with the scroll: the first swipe down opens it
  // in one go and the animation finishes on its own, then the page scrolls as normal.
  const autoQuery = matchMedia('(max-width: 760px), (pointer: coarse)');
  const OPEN_MS = 1300;
  let autoMode = false;
  let autoP = 0;        // how open the window is in that mode, 0 → 1
  let autoTarget = 0;   // where it is heading
  let autoFrame = 0;
  let leftTop = false;  // scrolled well away from the top since it opened

  function heroProgress() {
    if (autoMode) return autoP;
    const travel = hero.offsetHeight - stage.offsetHeight;
    return clamp(-hero.getBoundingClientRect().top / travel);
  }

  function playHero(target) {
    if (autoTarget === target && (autoFrame || autoP === target)) return;
    autoTarget = target;
    cancelAnimationFrame(autoFrame);
    const from = autoP;
    const start = performance.now();
    const duration = OPEN_MS * Math.abs(target - from);
    const step = (now) => {
      const k = duration ? clamp((now - start) / duration) : 1;
      autoP = from + (target - from) * k;
      renderHero();
      renderNav();
      autoFrame = k < 1 ? requestAnimationFrame(step) : 0;
    };
    autoFrame = requestAnimationFrame(step);
  }

  function setHeroMode() {
    autoMode = heroActive && autoQuery.matches;
    hero.classList.toggle('hero--auto', autoMode);
    cancelAnimationFrame(autoFrame);
    autoFrame = 0;
    autoP = autoTarget = 0;
    leftTop = false;
    measureHero();
    renderHero();
    renderNav();
  }

  // The page holds still while the window opens, then lets go.
  const opening = () => autoMode && autoTarget === 1 && autoFrame !== 0;
  // A swipe down from the very top, with the window shut, opens it instead of scrolling.
  const opensHere = () => autoMode && autoTarget === 0 && window.scrollY <= 2 && !nav.classList.contains('nav--open');

  if (hero) {
    let touchY = null;
    let touchDecided = false;
    window.addEventListener('touchstart', (e) => {
      touchY = e.touches[0].clientY;
      touchDecided = false;
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (!autoMode || touchY === null) return;
      if (opening()) { e.preventDefault(); return; }
      // Decide on the first move: once the browser starts scrolling it can't be stopped.
      if (touchDecided) return;
      touchDecided = true;
      if (touchY - e.touches[0].clientY > 0 && opensHere()) {
        e.preventDefault();
        playHero(1);
      }
    }, { passive: false });

    // A trackpad flick keeps sending wheel events after the window opens; swallow the rest of it.
    let wheelAt = 0;
    let wheelHeld = false;
    window.addEventListener('wheel', (e) => {
      if (!autoMode) return;
      const now = performance.now();
      const sameFlick = now - wheelAt < 160;
      wheelAt = now;
      if (opening() || (wheelHeld && sameFlick)) { e.preventDefault(); return; }
      wheelHeld = false;
      if (e.deltaY > 0 && opensHere()) {
        e.preventDefault();
        wheelHeld = true;
        playHero(1);
      }
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
      if (!autoMode || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === ' ' && e.target !== document.body) return;
      if (!['ArrowDown', 'PageDown', ' ', 'End', 'ArrowUp', 'PageUp', 'Home'].includes(e.key)) return;
      if (opening()) { e.preventDefault(); return; }
      if (['ArrowDown', 'PageDown', ' ', 'End'].includes(e.key) && opensHere()) {
        e.preventDefault();
        playHero(1);
      }
    });
  }

  // Back at the top after scrolling away, the window closes again, as the scrubbed version does.
  function watchHeroTop() {
    if (!autoMode || autoTarget !== 1 || autoFrame) return;
    if (window.scrollY > stage.offsetHeight * 0.5) leftTop = true;
    else if (leftTop && window.scrollY <= 2) {
      leftTop = false;
      playHero(0);
    }
  }

  function renderHero() {
    if (!heroActive || !rect) return;
    const p = heroProgress();
    const e = 1 - ease(p);
    const winW = rect.stageW - (rect.left + rect.right) * e;
    const shrink = (winW / 2) * (1 - ease(introK));
    const radius = Math.min(rect.radius * e, winW / 2 - shrink);
    outside.style.clipPath =
      `inset(${rect.top * e}px ${rect.right * e + shrink}px ${rect.bottom * e}px ${rect.left * e + shrink}px round ${radius}px)`;
    const fade = clamp(p / 0.4);
    wallParts.forEach((el) => {
      el.style.opacity = String(1 - fade);
      el.style.transform = fade ? `translateY(${-fade * 2.5}rem)` : '';
      el.style.visibility = fade >= 1 ? 'hidden' : '';
    });
    // In the last stretch the frame's margin and corners melt away, so the green runs edge to edge.
    const melt = clamp((p - 0.72) / 0.28);
    stage.style.setProperty('--fm', `${frameGap * (1 - melt)}px`);
    frame.style.setProperty('--fr', `${frameRadius * (1 - melt)}px`);
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

  // Wraps each word (or letter) so it can rise out of its own little mask.
  function splitInto(el, unit, start) {
    const text = el.textContent.trim();
    const parts = unit === 'letter' ? [...text] : text.split(/\s+/);
    el.textContent = '';
    parts.forEach((part, i) => {
      const outer = document.createElement('span');
      const inner = document.createElement('span');
      outer.className = 'w';
      inner.style.setProperty('--i', start + i);
      inner.textContent = part;
      outer.appendChild(inner);
      el.append(outer);
      if (unit === 'word' && i < parts.length - 1) el.append(' ');
    });
    return start + parts.length;
  }

  function splitHeadline() {
    if (!hero || heroInner.classList.contains('is-split')) return;
    const h1 = document.getElementById('hero-title');
    // Split letters would be read one by one, so the heading keeps its sentence as a label.
    h1.setAttribute('aria-label', h1.textContent.replace(/\s+/g, ' ').trim());
    let i = splitInto(heroInner.querySelector('.hero__let'), 'word', 0);
    const outs = heroInner.querySelectorAll('.hero__out');
    outs.forEach((el) => splitInto(el, 'letter', i));
    i += outs[0].textContent.length;
    splitInto(heroInner.querySelector('.hero__in'), 'word', i);
    heroInner.classList.add('is-split');
  }

  /* ---------------- Motion ---------------- */

  // Animations are always on, whatever the device's motion setting.
  const motion = true;

  function setupMotion() {
    heroActive = Boolean(hero);
    root.classList.add('motion');
    if (heroActive) {
      setHeroMode();
      autoQuery.addEventListener('change', setHeroMode);
    }
    renderNav();
    renderDrift();
  }

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
      watchHeroTop();
      renderNav();
      renderProgress();
      renderDrift();
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
  // Blocks taller than the screen (the stacked house on a phone) can never show 20% of
  // themselves, so they also count once they fill a third of the screen.
  const onReveal = new Map();
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const fills = entry.rootBounds && entry.intersectionRect.height > entry.rootBounds.height / 3;
        if (entry.isIntersecting && (entry.intersectionRatio >= 0.2 || fills)) reveal(entry.target);
      });
    }, { threshold: [0, 0.05, 0.1, 0.15, 0.2], rootMargin: '0px 0px -8% 0px' })
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

  // Two crossing ribbons with the rhythm of a visit, in the page's language.
  const RIBBONS = {
    en: { a: ['Train', 'Sit', 'Sip', 'Breathe', 'Repeat'], b: ['Let the outside in', 'Housh, Tyre', 'Gym', 'Garden', 'Café'] },
    ar: { a: ['تمرّن', 'اقعد', 'اشرب', 'تنفّس', 'عيد'], b: ['Let the outside in', 'الحوش، صور', 'جيم', 'حديقة', 'كافيه'] },
  };
  const RIBBON_MARK = '<span class="ribbon__mark mark"><span class="mark__roof"></span><span class="mark__fig"></span></span>';

  function renderRibbons() {
    document.querySelectorAll('[data-ribbon]').forEach((track) => {
      const words = RIBBONS[lang][track.dataset.ribbon];
      const run = words.map((w) => `<span class="ribbon__item">${w}</span>${RIBBON_MARK}`).join('');
      // Two identical halves, each wider than the screen, so the loop never shows a seam.
      track.innerHTML = run.repeat(3) + run.repeat(3);
    });
  }

  // Big outlined MUAY THAI slides sideways as the classes section passes.
  const driftEl = document.querySelector('.drift');
  function renderDrift() {
    if (!driftEl) return;
    if (!motion) { driftEl.style.removeProperty('--sx'); return; }
    const r = driftEl.parentElement.getBoundingClientRect();
    const k = clamp((window.innerHeight - r.top) / (window.innerHeight + r.height));
    driftEl.style.setProperty('--sx', `${(0.06 - k * 0.4) * 100}vw`);
  }

  // Daylight on the dark walls follows the mouse; bento tiles get the same spotlight.
  document.querySelectorAll('.hero__frame, .phero__frame, .tile').forEach((wallEl) => {
    wallEl.addEventListener('pointermove', (e) => {
      if (!motion || e.pointerType !== 'mouse') return;
      const r = wallEl.getBoundingClientRect();
      wallEl.style.setProperty('--mx', `${e.clientX - r.left}px`);
      wallEl.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // The membership card tilts toward the pointer and catches the light.
  const pass = document.getElementById('pass');
  if (pass) {
    pass.addEventListener('pointermove', (e) => {
      if (!motion || e.pointerType !== 'mouse') return;
      const r = pass.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      pass.classList.add('is-tilting');
      pass.style.setProperty('--ry', `${((x - 0.5) * 18).toFixed(2)}deg`);
      pass.style.setProperty('--rx', `${((0.5 - y) * 14).toFixed(2)}deg`);
      pass.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
      pass.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
    });
    pass.addEventListener('pointerleave', () => {
      pass.classList.remove('is-tilting');
      ['--rx', '--ry', '--gx', '--gy'].forEach((prop) => pass.style.removeProperty(prop));
    });
  }

  // House page: pointing at a word in the list shows a photo of that corner beside the pointer.
  document.querySelectorAll('.corner').forEach((row) => {
    const photo = row.querySelector('.corner__photo');
    row.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = row.getBoundingClientRect();
      row.style.setProperty('--px', `${e.clientX - r.left}px`);
      row.style.setProperty('--py', `${e.clientY - r.top}px`);
      row.classList.add('is-peek');
    });
    row.addEventListener('pointerleave', () => row.classList.remove('is-peek'));
    if (photo) photo.addEventListener('error', () => photo.remove());
  });

  // House page: the photo strip can be dragged sideways with the mouse.
  document.querySelectorAll('.tour__track').forEach((track) => {
    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      dragging = true;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add('is-dragging');
    });
    window.addEventListener('pointermove', (e) => {
      if (dragging) track.scrollLeft = startScroll - (e.clientX - startX);
    });
    window.addEventListener('pointerup', () => {
      dragging = false;
      track.classList.remove('is-dragging');
    });
  });

  // Page banners: the big word is sized to fill the frame, whatever the language.
  function fitPageWords() {
    document.querySelectorAll('.phero__inner').forEach((inner) => {
      const word = inner.querySelector('.phero__word');
      if (!word) return;
      inner.style.setProperty('--F', '100px');
      const width = word.scrollWidth;
      if (!width) return;
      const room = inner.clientWidth * 0.9;
      const tallest = inner.clientHeight * 0.42;
      inner.style.setProperty('--F', `${Math.min((100 * room) / width, tallest, 330).toFixed(1)}px`);
    });
  }
  window.addEventListener('resize', fitPageWords);
  // The Arabic font only loads once Arabic text shows up, so re-fit whenever a font arrives.
  if (document.fonts) {
    document.fonts.ready.then(fitPageWords);
    document.fonts.addEventListener('loadingdone', fitPageWords);
  }

  // Leaving for another page: the green curtain closes first, then opens on the next page.
  const curtain = document.getElementById('curtain');
  document.addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[href]');
    if (!link || !motion || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    const url = new URL(link.href, location.href);
    const samePage = url.pathname === location.pathname && url.search === location.search;
    if (url.origin !== location.origin || samePage || !/\.html$|\/$/.test(url.pathname)) return;
    e.preventDefault();
    try { sessionStorage.setItem('fithouse-curtain', '1'); } catch (err) { /* storage unavailable */ }
    // Reset the curtain below the screen without animating, then raise it.
    curtain.style.transition = 'none';
    root.classList.remove('is-arrived');
    void curtain.offsetHeight;
    curtain.style.transition = '';
    root.classList.add('is-leaving');
    setTimeout(() => { location.href = url.href; }, 560);
  });
  function openCurtain() {
    try { sessionStorage.removeItem('fithouse-curtain'); } catch (err) { /* storage unavailable */ }
    if (!root.classList.contains('is-arriving')) return;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      root.classList.add('is-arrived');
      root.classList.remove('is-arriving');
    }));
  }
  // Coming back with the browser's back button restores the old page, curtain and all.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) root.classList.remove('is-leaving', 'is-arriving');
  });

  // Buttons lean toward the pointer a little.
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      if (!motion || e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mgx', `${((e.clientX - (r.left + r.width / 2)) * 0.22).toFixed(1)}px`);
      el.style.setProperty('--mgy', `${((e.clientY - (r.top + r.height / 2)) * 0.3).toFixed(1)}px`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.removeProperty('--mgx');
      el.style.removeProperty('--mgy');
    });
  });

  // A ring follows the mouse with a little lag and swells over anything you can press.
  const cursor = document.getElementById('cursor');
  const cursorRing = cursor.querySelector('.cursor__ring');
  const cursorDot = cursor.querySelector('.cursor__dot');
  const PRESSABLE = 'a, button, label, select, summary, .cup, .pass';
  let cx = 0;
  let cy = 0;
  let rx = 0;
  let ry = 0;
  let cursorFrame = null;
  let cursorSeen = false;

  function cursorLoop() {
    rx += (cx - rx) * 0.2;
    ry += (cy - ry) * 0.2;
    cursorRing.style.transform = `translate(${rx.toFixed(1)}px, ${ry.toFixed(1)}px)`;
    cursorFrame = Math.abs(cx - rx) + Math.abs(cy - ry) > 0.2 ? requestAnimationFrame(cursorLoop) : null;
  }

  document.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    root.classList.add('has-mouse');
    if (!motion) return;
    cx = e.clientX;
    cy = e.clientY;
    if (!cursorSeen) { rx = cx; ry = cy; cursorSeen = true; }
    cursorDot.style.transform = `translate(${cx}px, ${cy}px)`;
    cursor.classList.remove('is-out');
    cursor.classList.toggle('is-hover', Boolean(e.target.closest && e.target.closest(PRESSABLE)));
    if (!cursorFrame) cursorFrame = requestAnimationFrame(cursorLoop);
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => cursor.classList.add('is-out'));

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

  const hint = form?.querySelector('.composer__hint');
  let typingTimer = null;
  let typingFrame = null;
  let sent = false;

  // Once the message has gone to WhatsApp, the bubble gets the two ticks.
  function finishBubble() {
    preview.removeAttribute('aria-busy');
    if (!sent) return;
    const ticks = document.createElement('span');
    ticks.className = 'bubble__ticks';
    ticks.setAttribute('aria-hidden', 'true');
    ticks.textContent = '✓✓';
    preview.appendChild(ticks);
  }

  // With motion on, a change shows WhatsApp-style typing dots, then types the new message out.
  function showMessage(text, animate) {
    clearTimeout(typingTimer);
    cancelAnimationFrame(typingFrame);
    preview.classList.remove('is-sent');
    if (!animate || !motion) {
      preview.textContent = text;
      finishBubble();
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
        else finishBubble();
      };
      typingFrame = requestAnimationFrame(step);
    }, 550);
  }

  function updateMessage(animate = false) {
    if (form) showMessage(composeMessage(), animate);
  }

  if (form) {
    form.addEventListener('change', () => {
      sent = false;
      updateMessage(true);
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = composeMessage();
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      hint.textContent = t().sent;
      sent = true;
      if (motion) {
        // The bubble flies off as if sent, then comes back with its ticks.
        clearTimeout(typingTimer);
        preview.classList.add('is-sent');
        typingTimer = setTimeout(() => showMessage(text, true), 650);
      } else {
        showMessage(text, false);
      }
    });

    // Links like book.html?pick=women arrive with that option already chosen.
    const pick = new URLSearchParams(location.search).get('pick');
    const picked = pick && [...form.querySelectorAll('input[name="interest"]')].find((input) => input.value === pick);
    if (picked) picked.checked = true;
  }

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
  openCurtain();
  if (heroActive) playIntro();

  watch('.manifesto__line, .manifesto__verdict, .manifesto__body, .house, .hours');
  watch('.bento, .who, .steps, .compare, .corners__list, .reach, .split__grid, .quote');
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
