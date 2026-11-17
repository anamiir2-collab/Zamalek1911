/* ============================================================
   js/site-core.js — بيانات الكتاب الأساسية
   الهوية · الشعار · المحطات الثلاثون · قاعدة البطولات · المراجع
   ============================================================ */

const SITE = {
  years: "1911–2026",
  ar: {
    title: "الزمالك.. حكاية وطن أبيض",
    subtitle: "كتاب مرجعي موثق في تاريخ نادي الزمالك",
    tagline: "من قصر النيل 1911 إلى خمسة عشر لقب دوري 2026",
    enter: "افتح الكتاب",
    navTitles: {
      cover: "الغلاف", intro: "مقدمة الكتاب", method: "المنهجية والمصادر",
      logo: "شعار النادي: قراءة في الهوية", parts: "الأبواب التسعة",
      milestones: "الخط الزمني الكبير", chapters: "السجل السنوي 1911–2026",
      honours: "قاعدة بيانات البطولات", legends: "سجل الشخصيات العشرين",
      references: "المراجع وقائمة التحقق"
    },
    ui: {
      search: "ابحث عن سنة أو حدث…", showing: "معروض", of: "من", chapters: "فصلًا",
      legendPlayers: "أولًا: أساطير المستطيل الأخضر",
      legendAdmins: "ثانيًا: رجال صنعوا تاريخ النادي",
      legendCoaches: "ثالثًا: العقول الفنية",
      reasonLabel: "سبب الاختيار", honoursLabel: "أبرز ألقابه مع الزمالك",
      selectedBy: "اختيار صاحب الكتاب", milestoneNote: "١١٥ عامًا في ثلاثين محطة موثّقة",
      chaptersNote: "١١٦ فصلًا مستقلًّا — فصل لكل سنة، بلا فجوات وبلا دمج",
      honoursNote: "كل رقم في هذه القاعدة مرّ على قائمة التحقق والمصادر",
      logoNote: "شرح العناصر كما وثّقتها المصادر", year: "سنة", era: "الحقبة",
      photoCredit: "صورة مؤرشفة", noPhotoNote: "أرشيف الصور يُستكمل تدريجيًا — الرواية موثقة في المصادر",
      refNote: "المصادر التي اعتمد عليها الكتاب فعليًا أثناء التحقق",
      closeLabel: "إغلاق", starLabel: "سنة تتويج أو تحول كبير"
    }
  },
  en: {
    title: "ZAMALEK SC — THE WHITE CASTLE STORY",
    subtitle: "A documented reference book on the history of Zamalek SC",
    tagline: "From Qasr el-Nil 1911 to fifteen league titles in 2026",
    enter: "Open the book",
    navTitles: {
      cover: "Cover", intro: "Introduction", method: "Methodology & Sources",
      logo: "The Club Crest: reading the identity", parts: "The Nine Parts",
      milestones: "Master Timeline", chapters: "Yearly Chronicle 1911–2026",
      honours: "Trophy Database", legends: "The Twenty-Personality Register",
      references: "References & Verification"
    },
    ui: {
      search: "Search a year or an event…", showing: "Showing", of: "of", chapters: "chapters",
      legendPlayers: "First: Legends of the green rectangle",
      legendAdmins: "Second: The men who made the club's history",
      legendCoaches: "Third: The tactical minds",
      reasonLabel: "Reason for selection", honoursLabel: "Key honours with Zamalek",
      selectedBy: "The author's selection", milestoneNote: "115 years in thirty documented stations",
      chaptersNote: "116 independent chapters — one per year, no gaps, no merging",
      honoursNote: "Every number here passed the verification checklist and sources",
      logoNote: "An explanation of the elements as documented by the sources",
      year: "Year", era: "Era", photoCredit: "Archived photograph",
      noPhotoNote: "Photo archive is growing gradually — the story itself is fully documented",
      refNote: "The sources actually relied on during verification",
      closeLabel: "Close", starLabel: "A crowning or turning-point year"
    }
  }
};

/* الحقب الزمنية للسجل السنوي (تلوين البطاقات) */
const ERAS = [
  { key: "e1", from: 1911, to: 1925, color: "#8f0b21", ar: "التأسيس والهوية المبكرة", en: "Founding & early identity" },
  { key: "e2", from: 1926, to: 1952, color: "#c8102e", ar: "العهد الملكي", en: "The royal era" },
  { key: "e3", from: 1953, to: 1970, color: "#b3492f", ar: "بعد ثورة 1952", en: "After the 1952 revolution" },
  { key: "e4", from: 1971, to: 1983, color: "#7a6a2f", ar: "البناء من جديد", en: "Rebuilding" },
  { key: "e5", from: 1984, to: 2002, color: "#a9852e", ar: "الجيل الذهبي", en: "The golden generation" },
  { key: "e6", from: 2003, to: 2014, color: "#55676a", ar: "عصر التحولات", en: "Years of transition" },
  { key: "e7", from: 2015, to: 2026, color: "#1c1b18", ar: "عصر البطولات", en: "The era of titles" }
];

/* ---------------- الشعار: قراءة في الهوية ---------------- */
const LOGO_STUDY = {
  ar: {
    kicker: "فصل الهوية",
    title: "شعار النادي: قراءة في الهوية",
    intro: [
      "الشعار ليس زخرفة على القميص؛ إنه اختصار قصة كاملة في شكل صغير. الشعار المعتمد حاليًا — الدرع الأبيض بإطار أحمر الذي يتوسطه رامي السهم — قائم منذ عام 1952، بعد أن استقر اسم النادي على «الزمالك»، وقد وصفته المصادر بأنه «خليط من النموذج الرياضي والحضارة المصرية القديمة». في هذا الفصل نقرأ عناصره كما وثّقتها المصادر، مع خريطة تطوره عبر ثلاث مراحل موثقة.",
      "ملاحظة أمانة مع الكاتب: اشترط صاحب الكتاب أن يُشرح الشعار «كما في الصورة»، لكن الصورة المرجعية لم تصل إلينا مع أوراق الكتاب؛ فاعتمدنا الشرح الموثق للعناصر الرسمية للشعار مع صورة رسمية منشورة على الويب، والفصل جاهز لاستكمال أي تفصيل إضافي فور توفير الصورة المرجعية."
    ],
    elements: [
      { name: "الدرع الأبيض", meaning: "جسم الشعار: درع أبيض نقي بإطار أحمر يحيط بالهوية كلها — بياض النادي الأصيل داخل تحصين أحمر الشغف." },
      { name: "رامي السهم الفرعوني", meaning: "الشخصية المركزية في النصف الأعلى: رامٍ بزي فرعوني يوجّه سهمه نحو الهدف — وفيه اجتمع وصف المصادر: «خليط من النموذج الرياضي والحضارة المصرية القديمة»." },
      { name: "السهم نحو الهدف", meaning: "الدلالة الموثقة في المصادر: السهم المتجه نحو الهدف إشارةٌ إلى «الهدف المشترك» بين النادي وذويه — طموح لا ينقطع." },
      { name: "اسم النادي", meaning: "«نادي الزمالك» بخط عربي أسفل الدرع — توقيع الهوية بعد أن استقر الاسم منذ 1952 على الحي الذي يسكنه النادي، بعد قصر النيل والمختلط وفاروق الأول." },
      { name: "الخيان الأحمران", meaning: "الرمز التقليدي على القميص: خطان أحمران متوازيان على صدر الأبيض — أقدم بصمة بصرية حملتها أقمشة النادي عبر العقود." },
      { name: "الألوان", meaning: "كما وثّقت المصادر عن ألوان النادي: تعبير عن «السلام والنضال» و«لم تتغير منذ التأسيس» — بياض السلام، وحمرة النضال." },
      { name: "تاريخ الشعار", meaning: "ثلاث مراحل موثقة: ختم «C.I.S.C.» على القمصان البيضاء (1913–1941)، ثم الشعار الملكي (1941–1952)، ثم الدرع برامي السهم منذ 1952 حتى اليوم." }
    ],
    figures: [
      { file: "assets/photos/Zamalek_official_crest_photo.jpg", caption: "الشعار الرسمي: الدرع برامي السهم واسم النادي (من صورة منشورة على الويب — الشعار علامة تجارية للنادي، الاستخدام توثيقي غير تجاري)" },
      { file: "assets/photos/zamalek-two-lines.svg", caption: "الرمز التقليدي على القميص: الخطان الأحمران على البياض — إعادة رسم مطابقة للرمز الموثق في ويكيميديا كومنز (CC BY 4.0)" }
    ]
  },
  en: {
    kicker: "IDENTITY CHAPTER",
    title: "The club crest: reading the identity",
    intro: [
      "The crest is not an ornament on the shirt; it is an entire story compressed into a small shape. The current crest — the white shield with a red border, an archer at its heart — has stood since 1952, after the club's name settled on \"Zamalek\"; sources describe it as \"a mixture of the sporting model and the ancient Egyptian civilization\". In this chapter we read its elements as documented by the sources, with a map of its evolution across three documented stages.",
      "A note of honesty with the author: the book's author required the crest to be explained \"as in the image\", but the reference image did not reach us with the book's papers; we therefore based this on the documented, official elements of the crest together with an official image published on the web. The chapter is ready to absorb any further detail once the reference image arrives."
    ],
    elements: [
      { name: "The white shield", meaning: "The crest's body: a pure white shield ringed by a red border holding the whole identity — the club's native whiteness inside a fortress of passionate red." },
      { name: "The pharaonic archer", meaning: "The central figure in the upper half: an archer in pharaonic dress aiming his arrow at the target — where the sources' description meets: \"a mixture of the sporting model and the ancient Egyptian civilization\"." },
      { name: "The arrow toward the target", meaning: "The documented symbolism: the arrow pointing to the target marks \"the common goal\" between the club and its people — an aspiration that never rests." },
      { name: "The club's name", meaning: "\"Zamalek SC\" in Arabic calligraphy beneath the shield — the identity's signature after the name settled, since 1952, on the neighbourhood the club lives in, after Qasr el-Nil, El Mokhtalat and Farouk I." },
      { name: "The two red lines", meaning: "The shirt's traditional symbol: two parallel red lines across the white chest — the oldest visual signature the club's shirts have carried for decades." },
      { name: "The colours", meaning: "As the sources document the club's colours: an expression of \"peace and struggle\", unchanged \"since its establishment\" — white for peace, red for struggle." },
      { name: "The crest's history", meaning: "Three documented stages: the \"C.I.S.C.\" stamp on the white shirts (1913–1941), the royal emblem (1941–1952), then the shield with the archer from 1952 to this day." }
    ],
    figures: [
      { file: "assets/photos/Zamalek_official_crest_photo.jpg", caption: "The official crest: the shield with the archer and the club's name (from an image published on the web — the crest is the club's trademark; use here is documentary, non-commercial)" },
      { file: "assets/photos/zamalek-two-lines.svg", caption: "The shirt's traditional symbol: two red lines on white — an exact re-drawing of the symbol documented on Wikimedia Commons (CC BY 4.0)" }
    ]
  }
};

/* ---------------- الخط الزمني: 30 محطة موثقة ---------------- */
const MILESTONES = [
  { y: 1911, ar: "التأسيس باسم «نادي قصر النيل» في 5 يناير.", en: "Founded as Qasr el-Nil Club on 5 January." },
  { y: 1913, ar: "الاسم يصير «النادي المختلط».", en: "The name becomes El Mokhtalat Club." },
  { y: 1915, ar: "تكوين نواة فريق الكرة.", en: "The football team's nucleus is formed." },
  { y: 1921, ar: "أول لقب وطني: كأس السلطان حسين على حساب الفرق الأجنبية.", en: "First national trophy: the Sultan Hussein Cup, ahead of foreign teams." },
  { y: 1922, ar: "الاحتفاظ بكأس السلطان حسين وأول كأس مصر في التاريخ.", en: "Sultan Hussein Cup retained; the first Egypt Cup in history." },
  { y: 1923, ar: "محمد حيدر باشا يتولى الرئاسة لنحو ثلاثة عقود.", en: "Mohamed Haidar Pasha begins a near-three-decade presidency." },
  { y: 1932, ar: "كأس مصر بفوز نهائي على الأهلي 2–1.", en: "Egypt Cup won, beating Al Ahly 2–1 in the final." },
  { y: 1934, ar: "مونديال إيطاليا: عبد الرحمن فوزي يسجل هدفين أمام المجر.", en: "Italy 1934: Abdelrahman Fawzi scores twice against Hungary." },
  { y: 1941, ar: "الاسم يصير «نادي فاروق الأول».", en: "The name becomes King Farouk I Club." },
  { y: 1944, ar: "نهائي الكأس: 6–0 على الأهلي، أعلى نتيجة في تاريخ الديربي.", en: "Cup final: 6–0 over Al Ahly, the derby's biggest result ever." },
  { y: 1948, ar: "انطلاق الدوري المصري، ويشارك فيه النادي.", en: "The Egyptian league begins; the club takes part." },
  { y: 1952, ar: "بعد ثورة يوليو: الاسم يصير «نادي الزمالك».", en: "After the July revolution: the name becomes Zamalek SC." },
  { y: 1956, ar: "عبد اللطيف أبو رجيلة يتولى الرئاسة.", en: "Abdel Latif Abou Regila takes the presidency." },
  { y: 1959, ar: "الانتقال إلى ميتم أوكبا وافتتاح ملعب النادي ومبناه الاجتماعي.", en: "Move to Mit Okba; the club's stadium and social building open." },
  { y: 1960, ar: "أول لقب دوري في التاريخ (1959–60)، ومعه كأس مصر.", en: "First league title in history (1959–60), with the Egypt Cup too." },
  { y: 1964, ar: "لقبان متتاليان يبدآن: دوري 1963–64.", en: "Back-to-back titles begin: the 1963–64 league." },
  { y: 1967, ar: "الحرب توقف المسابقات نحو أربع سنوات.", en: "War suspends competition for nearly four years." },
  { y: 1973, ar: "حلمي زامورا يعود للرئاسة، وشحاتة يعود للقلعة.", en: "Helmy Zamora returns to the presidency; Shehata returns to the Castle." },
  { y: 1974, ar: "كأس أكتوبر وجلاء حمادة إمام، وشحاتة أفضل لاعب في أمم أفريقيا.", en: "October Cup and Hamada Emam's farewell; Shehata is AFCON's best player." },
  { y: 1978, ar: "دوري 1977–78 بجيل شحاتة وجعفر.", en: "The 1977–78 league with the Shehata–Gaafar generation." },
  { y: 1984, ar: "أول تاج أفريقي ودوري 1983–84: بداية الجيل الذهبي.", en: "First African crown with the 1983–84 league: the golden generation begins." },
  { y: 1986, ar: "التاج الأفريقي الثاني.", en: "The second African crown." },
  { y: 1993, ar: "التاج الثالث مع محمود الجوهري، ومعه الدوري.", en: "Third crown with Mahmoud El-Gohary, alongside the league." },
  { y: 1996, ar: "كمال درويش للرئاسة، والتاج الأفريقي الرابع.", en: "Kamal Darwish becomes president; the fourth African crown arrives." },
  { y: 2000, ar: "كأس أفريقيا للأندية أبطال الكؤوس على حساب كانون الياوندي.", en: "African Cup Winners' Cup against Canon Yaoundé." },
  { y: 2002, ar: "التاج الأفريقي الخامس، ومعه كأس مصر.", en: "The fifth African crown, with the Egypt Cup too." },
  { y: 2015, ar: "ثنائية تاريخية: الدوري والكأس مع جيسوالدو فيريرا.", en: "A historic double: league and cup under Jesualdo Ferreira." },
  { y: 2019, ar: "أول كأس كونفدرالية إفريقية مع كريستيان جروس.", en: "First CAF Confederation Cup under Christian Gross." },
  { y: 2024, ar: "الكونفدرالية الثانية و«سوبر القرن» في الرياض.", en: "A second Confederation Cup and the \"Super of the Century\" in Riyadh." },
  { y: 2026, ar: "لقب الدوري الخامس عشر، ووصافة الكونفدرالية 2025–26.", en: "The fifteenth league title, and the 2025–26 Confederation Cup runners-up." }
];

/* ---------------- قاعدة بيانات البطولات ---------------- */
const HONOURS = {
  ar: {
    kicker: "قاعدة البيانات", title: "قاعدة بيانات البطولات", note: "كل رقم في هذه القاعدة مرّ على قائمة التحقق والمصادر المدرجة في آخر الكتاب.",
    groups: [
      { name: "البطولات المحلية", items: [
        { n: 15, name: "الدوري المصري الممتاز", years: "1959–60، 1963–64، 1964–65، 1977–78، 1983–84، 1987–88، 1991–92، 1992–93، 2000–01، 2002–03، 2003–04، 2014–15، 2020–21، 2021–22، 2025–26" },
        { n: 29, name: "كأس مصر", years: "من 1921–22 إلى 2024–25 — بينها كأسان مشتركان مع الأهلي (1942–43، 1957–58)" },
        { n: 4, name: "كأس السوبر المصري", years: "2001، 2002، 2016، 2020" },
        { n: 14, name: "دوري منطقة القاهرة", years: "عهد ما قبل الدوري الوطني" },
        { n: 2, name: "كأس السلطان حسين", years: "1921، 1922" }
      ]},
      { name: "البطولات القارية والعالمية", items: [
        { n: 5, name: "دوري أبطال أفريقيا (كأس الأندية أبطال الدوري)", years: "1984، 1986، 1993، 1996، 2002" },
        { n: 5, name: "كأس السوبر الأفريقي", years: "1994، 1997، 2003، 2020، 2024" },
        { n: 2, name: "كأس الكونفدرالية الإفريقية", years: "2019، 2024" },
        { n: 1, name: "كأس أفريقيا للأندية أبطال الكؤوس", years: "2000" },
        { n: 2, name: "بطولة أفروآسيا للأندية", years: "1987، 1997" },
        { n: 1, name: "البطولة العربية للأندية", years: "2003" }
      ]},
      { name: "ألقاب أخرى موثقة", items: [
        { n: 2, name: "السوبر المصري السعودي", years: "2003، 2018" },
        { n: 1, name: "كأس أكتوبر", years: "1974" },
        { n: 1, name: "كأس الاتحاد المصري", years: "1995" },
        { n: 1, name: "كأس الصداقة المصرية", years: "1986" }
      ]},
      { name: "النهائيات المفقودة (الوصافة)", items: [
        { n: 3, name: "وصافة دوري أبطال أفريقيا", years: "1994، 2016، 2020" },
        { n: 1, name: "وصافة كأس الكونفدرالية", years: "2025–26 أمام اتحاد الجزائر (8–7 ركلات الترجيح)" },
        { n: 1, name: "وصافة السوبر الأفريقي", years: "2001" },
        { n: 1, name: "وصافة أفروآسيا", years: "1994" }
      ]}
    ]
  },
  en: {
    kicker: "DATABASE", title: "Trophy database", note: "Every number here passed the verification checklist and the sources listed at the end of the book.",
    groups: [
      { name: "Domestic trophies", items: [
        { n: 15, name: "Egyptian Premier League", years: "1959–60, 1963–64, 1964–65, 1977–78, 1983–84, 1987–88, 1991–92, 1992–93, 2000–01, 2002–03, 2003–04, 2014–15, 2020–21, 2021–22, 2025–26" },
        { n: 29, name: "Egypt Cup", years: "From 1921–22 to 2024–25 — including two cups shared with Al Ahly (1942–43, 1957–58)" },
        { n: 4, name: "Egyptian Super Cup", years: "2001, 2002, 2016, 2020" },
        { n: 14, name: "Cairo Zone League", years: "The pre-national-league era" },
        { n: 2, name: "Sultan Hussein Cup", years: "1921, 1922" }
      ]},
      { name: "Continental & intercontinental", items: [
        { n: 5, name: "CAF Champions League (African Club Champions Cup)", years: "1984, 1986, 1993, 1996, 2002" },
        { n: 5, name: "CAF Super Cup", years: "1994, 1997, 2003, 2020, 2024" },
        { n: 2, name: "CAF Confederation Cup", years: "2019, 2024" },
        { n: 1, name: "African Cup Winners' Cup", years: "2000" },
        { n: 2, name: "Afro-Asian Club Championship", years: "1987, 1997" },
        { n: 1, name: "Arab Club Championship", years: "2003" }
      ]},
      { name: "Other documented honours", items: [
        { n: 2, name: "Egyptian–Saudi Super Cup", years: "2003, 2018" },
        { n: 1, name: "October Cup", years: "1974" },
        { n: 1, name: "Egyptian Federation Cup", years: "1995" },
        { n: 1, name: "Egyptian Friendship Cup", years: "1986" }
      ]},
      { name: "Lost finals (runners-up)", items: [
        { n: 3, name: "Champions League runners-up", years: "1994, 2016, 2020" },
        { n: 1, name: "Confederation Cup runners-up", years: "2025–26 vs USM Alger (8–7 on penalties)" },
        { n: 1, name: "CAF Super Cup runners-up", years: "2001" },
        { n: 1, name: "Afro-Asian runners-up", years: "1994" }
      ]}
    ]
  }
};

/* ---------------- المراجع وقائمة التحقق ---------------- */
const REFERENCES = {
  ar: {
    kicker: "المراجع", title: "المراجع وقائمة التحقق النهائية", note: "المصادر التي اعتمد عليها الكتاب فعليًا أثناء التحقق — كل رابط فُتح وقرأ أثناء إعداد هذه النسخة."
  },
  en: {
    kicker: "REFERENCES", title: "References & final verification checklist", note: "The sources actually relied on during verification — every link below was opened and read while preparing this edition."
  },
  list: [
    { ar: "نادي الزمالك — ويكيبيديا العربية (التأسيس، الأسماء، الرؤساء، الشعار)", en: "Zamalek SC — Arabic Wikipedia (founding, names, presidents, crest)", url: "https://ar.wikipedia.org/wiki/نادي_الزمالك" },
    { ar: "Zamalek SC — English Wikipedia (founding date, renaming years, honours)", en: "Zamalek SC — English Wikipedia (founding date, renaming years, honours)", url: "https://en.wikipedia.org/wiki/Zamalek_SC" },
    { ar: "قائمة بطولات كأس مصر التاريخية — رابصة RSSSF (كل نتائج النهائيات 1921–2025)", en: "Egypt Cup historical winners list — RSSSF (all finals 1921–2025)", url: "https://www.rsssf.org/tablese/egycuphist.html" },
    { ar: "الدوري المصري الممتاز — ويكيبيديا الإنجليزية (جدول الأبطال 1948–2026)", en: "Egyptian Premier League — English Wikipedia (champions table 1948–2026)", url: "https://en.wikipedia.org/wiki/Egyptian_Premier_League" },
    { ar: "الزمالك في كرة القدم الدولية — ويكيبيديا الإنجليزية (الألقاب القارية والوصافات)", en: "Zamalek SC in international football — English Wikipedia (continental titles & runners-up)", url: "https://en.wikipedia.org/wiki/Zamalek_SC_in_international_football" },
    { ar: "كأس السوبر الأفريقي — ويكيبيديا الإنجليزية (نسختا 2020 و2024)", en: "CAF Super Cup — English Wikipedia (the 2020 and 2024 editions)", url: "https://en.wikipedia.org/wiki/CAF_Super_Cup" },
    { ar: "نهائي كأس الكونفدرالية 2019 — ويكيبيديا الإنجليزية (بيركان والترجيح 5–3)", en: "2019 CAF Confederation Cup final — English Wikipedia (RS Berkane, 5–3 on pens)", url: "https://en.wikipedia.org/wiki/2019_CAF_Confederation_Cup_final" },
    { ar: "نهائي كأس الكونفدرالية 2025–26 — ويكيبيديا الإنجليزية (اتحاد الجزائر 8–7)", en: "2025–26 CAF Confederation Cup — English Wikipedia (USM Alger 8–7)", url: "https://en.wikipedia.org/wiki/2025%E2%80%9326_CAF_Confederation_Cup" },
    { ar: "جيسوالدو فيريرا — ويكيبيديا الإنجليزية (الثنائية 2015، عودة 2022)", en: "Jesualdo Ferreira — English Wikipedia (2015 double, 2022 return)", url: "https://en.wikipedia.org/wiki/Jesualdo_Ferreira" },
    { ar: "أوتو فيستر — ويكيبيديا الإنجليزية (ديسمبر 1999 – يونيو 2002 وألقابه الأربعة)", en: "Otto Pfister — English Wikipedia (Dec 1999 – Jun 2002 and his four trophies)", url: "https://en.wikipedia.org/wiki/Otto_Pfister" },
    { ar: "كريستيان جروس — ويكيبيديا الإنجليزية (الكونفدرالية 2018–19)", en: "Christian Gross — English Wikipedia (2018–19 Confederation Cup)", url: "https://en.wikipedia.org/wiki/Christian_Gross" },
    { ar: "نيلو فينجادا — ويكيبيديا الإنجليزية (موسم 2003–04 وألقابه)", en: "Nelo Vingada — English Wikipedia (2003–04 season and trophies)", url: "https://en.wikipedia.org/wiki/Nelo_Vingada" },
    { ar: "حمادة إمام — ويكيبيديا العربية (1943–2016، الثعلب، ألقابه)", en: "Hamada Emam — Arabic Wikipedia (1943–2016, the Fox, honours)", url: "https://ar.wikipedia.org/wiki/حمادة_إمام" },
    { ar: "حازم إمام — ويكيبيديا العربية (الإمبراطور، 14 لقبًا)", en: "Hazem Emam — Arabic Wikipedia (the Emperor, 14 titles)", url: "https://ar.wikipedia.org/wiki/حازم_إمام" },
    { ar: "عبد الحليم علي — ويكيبيديا العربية (العندليب، 138 هدفًا)", en: "Abdelhalim Ali — Arabic Wikipedia (the nightingale, 138 goals)", url: "https://ar.wikipedia.org/wiki/عبدالحليم_علي" },
    { ar: "حسين حجازي — ويكيبيديا العربية (أبو الكرة المصرية، 1889–1961)", en: "Hussein Hegazi — Arabic Wikipedia (father of Egyptian football, 1889–1961)", url: "https://ar.wikipedia.org/wiki/حسين_حجازي" },
    { ar: "عبد الرحمن فوزي — ويكيبيديا العربية (مونديال 1934، المختلط، التدريب)", en: "Abdelrahman Fawzi — Arabic Wikipedia (1934 World Cup, El Mokhtalat, coaching)", url: "https://ar.wikipedia.org/wiki/عبد_الرحمن_فوزي" },
    { ar: "حسن شحاتة — ويكيبيديا العربية (المعلم، تصحيح جائزة 1970، المدرب الثلاثي)", en: "Hassan Shehata — Arabic Wikipedia (the Teacher, the 1970 award correction, triple AFCON coach)", url: "https://ar.wikipedia.org/wiki/حسن_شحاتة" },
    { ar: "فاروق جعفر — ويكيبيديا العربية (ملك النصّ، ألقابه)", en: "Farouk Gaafar — Arabic Wikipedia (king of the midfield, honours)", url: "https://ar.wikipedia.org/wiki/فاروق_جعفر" },
    { ar: "إبراهيم يوسف — ويكيبيديا العربية (الغزال الأسمر، 1975–1988)", en: "Ibrahim Youssef — Arabic Wikipedia (the dusky gazelle, 1975–1988)", url: "https://ar.wikipedia.org/wiki/إبراهيم_يوسف" },
    { ar: "محمد لطيف — ويكيبيديا العربية (شيخ المعلقين، 16 لقبًا)", en: "Mohamed Latif — Arabic Wikipedia (dean of commentators, 16 titles)", url: "https://ar.wikipedia.org/wiki/محمد_لطيف" },
    { ar: "شيكابالا — ويكيبيديا العربية (الأباتشي، 18 لقبًا)", en: "Shikabala — Arabic Wikipedia (the Apache, 18 titles)", url: "https://ar.wikipedia.org/wiki/شيكابالا" },
    { ar: "ملف ويكيميديا كومنز: الرمز التقليدي (خطان أحمران) — رخصة CC BY 4.0", en: "Wikimedia Commons file: the traditional symbol (two red lines) — CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Zamalek_SC_symbol.png" },
    { ar: "ملف ويكيميديا كومنز: شعار 1913 وصور الفرق التاريخية — تراخيص حرة", en: "Wikimedia Commons files: 1913 crest and historical team photos — free licenses", url: "https://commons.wikimedia.org/wiki/Category:Zamalek_SC" },
    { ar: "الشعار الرسمي — ويكيبيديا الإنجليزية (استخدام تعليمي غير تجاري)", en: "The official crest — English Wikipedia (educational, non-commercial use)", url: "https://en.wikipedia.org/wiki/File:Zamalek_SC_logo.svg" }
  ],
  corrections: {
    ar: [
      "حسن شحاتة: جائزة 1970 هي أفضل لاعب في «آسيا» لا في أفريقيا (وثيقة ويكيبيديا العربية)، مع ثالث أفضل لاعب أفريقي 1974 وأفضل لاعب في أمم أفريقيا 1974.",
      "عبد اللطيف أبو رجيلة: الانتقال إلى ميتم أوكبا وافتتاح الملعب والمبنى الاجتماعي موثق بعام 1959، لا 1958.",
      "محمد حسن حلمي (زامورا): فترتا رئاسة (حتى يوليو 1971، ثم 1973–1984) — نحو 15 عامًا مجموعًا، لا أكثر من 30.",
      "نيلو فينجادا: لقب الدوري 2003–04 موثق؛ وصف «موسم بلا هزيمة» لا سند له في المصادر.",
      "جيسوالدو فيريرا: الثنائية الأولى 2014–15 موثقة؛ أما 2022 فألقابان في صيف واحد: نهائي كأس 2020–21 (يوليو 2022) ودوري 2021–22 (أغسطس 2022) — ولم يُوثق لهما لقب «ثنائية موسم».",
      "مؤسس النادي: المصادر الحديثة تصعد جورج مرزباخ، ووثيقة 1912 تصعد أنطوان بيانكي رئيسًا — الخلاف موثق في المنهجية."
    ],
    en: [
      "Hassan Shehata: the 1970 award was Asian Footballer of the Year, not African (Arabic Wikipedia), plus third in the 1974 African vote and best player of the 1974 AFCON.",
      "Abdel Latif Abou Regila: the Mit Okba move and the opening of the stadium and social building are documented in 1959, not 1958.",
      "Mohamed Hassan Helmy (Zamora): two presidential spells (until July 1971, then 1973–1984) — about 15 years in total, not 30+.",
      "Nelo Vingada: the 2003–04 league title is documented; the \"unbeaten season\" description has no source support.",
      "Jesualdo Ferreira: the 2014–15 double is documented; in 2022 he won two trophies in one summer — the delayed 2020–21 cup final (July 2022) and the 2021–22 league (August 2022) — not a documented \"season double\".",
      "The club's founder: modern sources credit George Merzbach; a 1912 document names Antoine Bianchi as president — the disagreement is documented in the methodology."
    ]
  }
};
