/* ============================================================
   js/sections.js — الزمالك.. حكاية وطن أبيض
   روافد الكتاب: المقدمة، المنهجية، والأبواب التسعة الكبرى
   كل الروايات هنا موثقة من مصادر مدرجة في قائمة المراجع.
   ============================================================ */

const BOOK_SECTIONS = [

  /* ---------------- المقدمة ---------------- */
  {
    id: "intro",
    ar: {
      kicker: "المقدمة",
      title: "مرجعٌ يُحفظ، لا مقالٌ يُقرأ ثم يُنسى",
      paras: [
        "وُلد هذا الكتاب من سؤال بسيط: كيف نحفظ قرنًا وربع قرن من حياة نادٍ واحد؟ من الخامس من يناير 1911، يوم أُسّس النادي على ضفاف النيل، إلى موسم 2026 الذي أُغلق فيه سجل الألقاب على رقم قياسي جديد: خمسة عشر لقب دوري. الكتاب ليس مقالًا عابرًا؛ إنه مرجع يُحفظ على الرف وقلب المشجع معًا، يعود إليه القارئ في كل مرة يسأل فيها: متى؟ كيف؟ ولماذا؟",
        "بُني الكتاب على قاعدة صارمة: بابٌ لكل عصر، وفصلٌ لكل سنة. تسعة أبواب كبرى تروي التحولات الكبرى — من التأسيس إلى الهوية، ومن الجيل الذهبي إلى ما وراء كرة القدم — وتحيط بها 116 فصلًا سنويًا بلا فجوة ولا دمج، من 1911 إلى 2026، بحيث يجد القارئ لكل سنة مكانها الموثق.",
        "في هذه النسخة الرقمية نضيف ما يخص الهوية: فصل كامل عن الشعار ورموزه، وسجل بشخصيات عشرين رجالًا صنعوا هذا التاريخ: عشرة من أساطير المستطيل الأخضر، وخمسة من رجال الإدارة، وخمسة من العقول الفنية — بأسباب اختيارهم كما دوّنها صاحب الكتاب، وبأرقامهم كما وثّقتها المصادر.",
        "ونؤكد ما قرره الكتاب منذ أول يوم: التاريخ الحقيقي لا يحتاج زخرفة. كل رقم في هذه الصفحات مرّ على قائمة تحقق، وكل رواية متداولة لم نجد لها سندًا كافيًا أُشير إليها بأمانة. هذه ليست نقطة ضعف؛ إنها وعد."
      ]
    },
    en: {
      kicker: "INTRODUCTION",
      title: "A reference to keep, not an article to read and forget",
      paras: [
        "This book was born from a simple question: how do we preserve a century and a quarter in the life of one club? From 5 January 1911, the day the club was founded on the Nile, to the 2026 season that closed the record on a new landmark: fifteen league titles. This is not a passing article; it is a reference to be kept on the shelf and in the supporter's heart, returned to whenever the reader asks: when? how? and why?",
        "The book is built on one strict rule: a part for each era, a chapter for each year. Nine major parts narrate the great transformations — from founding to identity, from the golden generation to what lies beyond football — surrounded by 116 yearly chapters with no gaps and no merging, from 1911 to 2026, so that every year finds its documented place.",
        "This digital edition adds what concerns identity: a full chapter on the club crest and its symbols, and a register of twenty men who made this history: ten legends of the green rectangle, five administrative figures, and five tactical minds — with the reasons for their selection as written by the book's author, and with their numbers as documented by the sources.",
        "We affirm what the book decided on day one: real history needs no ornament. Every number on these pages passed a verification checklist, and every circulating claim without sufficient support is honestly flagged. That is not a weakness; it is a promise."
      ]
    }
  },

  /* ---------------- المنهجية ---------------- */
  {
    id: "method",
    ar: {
      kicker: "المنهجية والمصادر",
      title: "الدقّة أولًا: القواعد التي كُتب بها هذا التاريخ",
      paras: [
        "قواعد الكتاب أربع. أولًا: لا حقيقة بلا مصدر — كل تاريخ وكل رقم له مرجع، إما وثيقة معاصرة أو مرجع رياضي معتمد. ثانيًا: نُصحّح علنًا — حين يثبت خطأ رواية شائعة نعتمد المصدر الأدق ونذكر التصحيح في قائمة التحقق. ثالثًا: نفصل بين الموثَّق والمتداول — ما لم نجد له سندًا لا يدخل الكتاب إلا معلَنًا بأنه رواية متداولة. رابعًا: المصدر يُذكر دائمًا، والقائمة الكاملة في آخر الكتاب.",
        "وفي رحلة التحقق ظهرت تصحيحات مهمة سجلناها علنًا: حسن شحاتة لم يفز بجائزة أفضل لاعب في أفريقيا عام 1970 كما يتداول، بل كان أفضل لاعب في آسيا عام 1970 أثناء لعبه في الكويت، وجاء ثالثًا في تصويت أفضل لاعب أفريقي عام 1974 ومهزمًا لجائزة أفضل لاعب في كأس أمم أفريقيا 1974. والانتقال إلى مقر ميتم أوكبا وافتتاح ملعب النادي ومبناه الاجتماعي موثَّق بعام 1959 في رئاسة عبد اللطيف أبو رجيلة، لا بعام 1958 كما يتداول. ومحمد حسن حلمي (زامورا) قاد النادي في فترتين — حتى يوليو 1971 ثم 1973 حتى 1984 — أي نحو خمسة عشر عامًا مجموعًا، لا ثلاثين. ونيلو فينجادا قاد الزمالك إلى لقب الدوري 2003–04، بينما لا سند موثقًا لوصف الموسم بأنه «بلا هزيمة».",
        "وحين اختلفت المصادر حول أقدم صفحة في سجل النادي — مؤسس نادي قصر النيل — أوثقنا الخلاف بدل حسمه بالتخمين: المصادر الحديثة تصعد جورج مرزباخ مؤسسًا ورئيسًا أول (1911–1915)، بينما تشير وثيقة معاصرة (كتاب أحمد ذكي باشا، 1912) إلى أن أنطوان بيانكي كان رئيسًا آنذاك، وتذكر صحافة 1912 اسم «نادي الرياضة الدولي بالقاهرة». هذا النوع من الشفافية هو عين المنهج، وإنهاء الخلاف ليس من مهام الكتاب؛ تسجيله هو.",
        "المراجع الأساسية التي اعتمدناها: ويكيبيديا العربية والإنجليزية في مداخل النادي واللاعبين والمدربين والبطولات، وقوائم رابصة (RSSSF) التاريخية لكأس مصر وأبطال الدوري، وصفحات نهائيات الكاف، وملفات ويكيميديا كومنز للصور التاريخية وتراخيصها. القائمة الكاملة مع الروابط في قسم المراجع."
      ]
    },
    en: {
      kicker: "METHODOLOGY & SOURCES",
      title: "Accuracy first: the rules this history was written by",
      paras: [
        "The book has four rules. First: no fact without a source — every date and number has a reference, either a contemporary document or an established sporting record. Second: we correct publicly — when a circulating claim proves wrong, we adopt the more accurate source and log the correction in the verification checklist. Third: we separate documented from circulated — anything without sufficient support enters the book only when openly labelled as a circulating claim. Fourth: sources are always cited; the full list appears at the end of the book.",
        "The verification journey surfaced important corrections we log openly: Hassan Shehata did not win the African Footballer of the Year award in 1970 as is commonly repeated; he was Asian Footballer of the Year in 1970 while playing in Kuwait, came third in the 1974 African vote, and was named best player of the 1974 Africa Cup of Nations. The move to the Mit Okba headquarters and the opening of the club's stadium and social building are documented in 1959, under Abdel Latif Abou Regila — not 1958 as often circulated. Mohamed Hassan Helmy (\"Zamora\") led the club in two spells — until July 1971, then 1973 to 1984 — roughly fifteen years in total, not thirty. Nelo Vingada led Zamalek to the 2003–04 league title, but there is no documented support for calling that season \"unbeaten\".",
        "Where sources disagreed about the oldest page in the club's record — the founder of Qasr el-Nil Club — we documented the disagreement instead of settling it by guesswork: modern sources credit George Merzbach as founder and first president (1911–1915), while a contemporary document (Ahmed Zaki Pasha's 1912 book) states that Antoine Bianchi was president at the time, and the 1912 press referred to a \"Cairo International Sports Club\". This kind of transparency is the essence of the method; settling the dispute is not the book's task — recording it is.",
        "The core references: Arabic and English Wikipedia entries for the club, players, coaches and competitions; RSSSF historical lists of the Egypt Cup and league champions; CAF finals pages; and Wikimedia Commons files for the historical photographs and their licenses. The full list with links appears in the References section."
      ]
    }
  },

  /* ---------------- الباب الأول ---------------- */
  {
    id: "part1",
    part: "الباب الأول",
    ar: {
      title: "التأسيس والهوية المبكرة (1911–1925)",
      paras: [
        "في الخامس من يناير 1911 وُلد النادي باسم «نادي قصر النيل»، من اجتماع أفكار شباب القاهرة في أحد مباني حديقة الأزبكية. لم يكن النادي الجديد الأول في مصر، لكنه كان الأكثر جرأة في فكرته: نادٍ يفتح أبوابه للمصريين في زمن كانت فيه الأندية الكبرى شبه مقصورة على الأجانب والمقيمين. وفي 1913 صار الاسم «النادي المختلط» — واسمٌ يختصر فلسفة كاملة: مختلطٌ من المصريين والجاليات، من الطوائف والطبقات، تحت سقف واحد.",
        "وفي 1915 تكوّنت نواة فريق الكرة، ومن هنا بدأ الطريق الذي سيصنع أطول قصة ألوان في تاريخ الكرة المصرية. وكان للرجلين الأثر الأعمق في هذه الحقبة: حسين حجازي، «أبو الكرة المصرية»، الذي انتقل إلى النادي عام 1919 عائدًا من إنجلترا حيث لعب لدولويتش هاملت وفولهام، ثم قاد أول منتخب مصري منذ 1916؛ ومحمد لطيف الذي التحق بالنادي احترافيًا عام 1926 ليصير مهاجمه الأول لسنوات.",
        "وجاء يوم التتويج الأول في 1921: كأس السلطان حسين، أول بطولة وطنية تشاركية للمصريين، فاز بها المختلط بعد قطع الطريق على الفرق الأجنبية، وختمها بفوز تاريخي على الإنجليزي «شيروود فوريسترز» في النهائي بمشاركة حجازي. ثم كرر الفريق اللقب عام 1922، وأول كأس مصر في تاريخها (1921–22) جاءت إلى خزائن النادي بفوز نظيف بخماسية أهداف. هكذا تشرقت هوية النادي: أول من كسر الاحتكار الأجنبي، وأول من رفع أول لقب وطني في الكرة المصرية."
      ]
    },
    en: {
      title: "Founding and early identity (1911–1925)",
      paras: [
        "On 5 January 1911 the club was born as \"Qasr el-Nil Club\", from the ideas of Cairo's youth meeting in a building in the Ezbekieh gardens. The new club was not Egypt's first, but it was the boldest in its idea: a club open to Egyptians at a time when the big clubs were largely reserved for foreigners and residents. In 1913 the name became \"El Mokhtalat Club\" — a name that compresses an entire philosophy: a mixture of Egyptians and communities, of classes and sects, under one roof.",
        "In 1915 the football nucleus took shape, and from there began the road that would build the longest colour story in Egyptian football. Two men left the deepest mark on this era: Hussein Hegazi, \"the father of Egyptian football\", who joined in 1919 after returning from England where he played for Dulwich Hamlet and Fulham and had led the first Egyptian national team from 1916; and Mohamed Latif, who joined professionally in 1926 and became the club's leading striker for years.",
        "Crowning day came in 1921: the Sultan Hussein Cup, the first national competition open to Egyptians, won by El Mokhtalat after cutting through the foreign teams and finishing with a historic win over England's Sherwood Foresters in the final, with Hegazi in the side. The club repeated the title in 1922, and the first Egypt Cup in history (1921–22) went to its cabinet with a clean five-goal win. Thus the club's identity was written: the first to break the foreign monopoly, and the first to lift a national trophy in Egyptian football."
      ]
    }
  },

  /* ---------------- الباب الثاني ---------------- */
  {
    id: "part2",
    part: "الباب الثاني",
    ar: {
      title: "العهد الملكي: من «المختلط» إلى «فاروق» (1925–1952)",
      paras: [
        "في عام 1923 وقف محمد حيدر باشا على رأس مجلس النادي، فرأسه نحو ثلاثة عقود هي أطول عهد رئاسي في تاريخ النادي. تحت هذا العهد اكتمل تحوّل النادي من نادٍ «مختلط» إلى مؤسسة مصرية بالمليم، وتراكمت الكؤوس: 1931–32 و1934–35 و1937–38 و1940–41 — غالبها بفوز مباشر على الأهلي في النهائي، وهي سنوات التراكم الأولى لما سيعرف لاحقًا باسم ديربي القاهرة.",
        "وفي عام 1941 تغيّر الاسم إلى «نادي فاروق الأول» بعد الرعاية الملكية، وعاش النادي سنواته الذهبية الأولى: فريق عبد الرحمن فوزي ومحمد لطيف، اللذين مثّلا مصر في مونديال 1934 بإيطاليا — أول مشاركة أفريقية وعربية في تاريخ كأس العالم — حيث سجل فوزي هدفين أمام المجر ليصير أول مصري وأفريقي وعربي يهز شباك في المونديال.",
        "وجاءت اللحظة الأعلى في العهد الملكي بنهائي كأس مصر 1943–44: ستة أهداف نظيفة أمام الأهلي، وهي أعلى نتيجة في تاريخ الديربي حتى اليوم، وقد سجل فيها فوزي هدفين. وقُسمت الكأس بين الفريقين لمرة واحدة في 1942–43، وفي 1951–52 — آخر موسم ملكي — جاء اللقب الثامن للكأس إلى خزائن «فاروق» قبل أن يصير الزمالك. ولم يكن الدوري قد وُلد بعد — انطلق في 1948–49 وتقلد الأهلي أول ثلاثة ألقابه — لكن العهد الملكي ترك النادي أكبر: ملعبًا ومقرًا وجمهورًا، وسمعة «قاهر الفرنجة» التي بدأت من إقصاء الفرق الأجنبية في العشرينيات."
      ]
    },
    en: {
      title: "The royal era: from El Mokhtalat to Farouk (1925–1952)",
      paras: [
        "In 1923 Mohamed Haidar Pasha took the club's chair for nearly three decades, the longest presidency in the club's history. Under him the club completed its transformation from a \"mixed\" club into a fully Egyptian institution, and the cups accumulated: 1931–32, 1934–35, 1937–38 and 1940–41 — most won directly against Al Ahly in finals, the early accumulation of what would later be known as the Cairo derby.",
        "In 1941 the name changed to \"King Farouk I Club\" under royal patronage, and the club lived its first golden years: the team of Abdelrahman Fawzi and Mohamed Latif, who represented Egypt at the 1934 World Cup in Italy — the first African and Arab participation in World Cup history — where Fawzi scored twice against Hungary to become the first Egyptian, African and Arab scorer in the tournament.",
        "The era's highest moment came with the 1943–44 Egypt Cup final: six clean goals against Al Ahly, still the biggest result in the derby's history, with Fawzi scoring twice. The cup was shared with Al Ahly once, in 1942–43, and in 1951–52 — the last royal season — the club's eighth Egypt Cup entered Farouk's cabinet before the club became Zamalek. The league had not yet been born — it started in 1948–49, with Al Ahly taking the first three titles — but the royal era left the club larger: a stadium, a headquarters, a fanbase, and the reputation of \"conqueror of the foreigners\" that began with eliminating foreign teams in the 1920s."
      ]
    }
  },

  /* ---------------- الباب الثالث ---------------- */
  {
    id: "part3",
    part: "الباب الثالث",
    ar: {
      title: "ما بعد ثورة 1952: ولادة «الزمالك» (1952–1970)",
      paras: [
        "بعد ثورة يوليو 1952 صار اسم «فاروق» خارج القانون، فحُمل النادي على اسم الحي الذي يسكنه: الزمالك. ومع الاسم الجديد جاء مجلس جديد برئاسة محمود شوقي، ثم رئاسة عبد اللطيف أبو رجيلة (منذ 1956) التي أتمت أكبر مشروع عمراني في تاريخ النادي: الانتقال إلى ميتم أوكبا، وافتتاح ملعب النادي ومبناه الاجتماعي عام 1959 — والملعب افتُتح رسميًا بمباراة أمام دكلا براغ التشيكوسلوفاكي.",
        "وجاءت الثمار سريعًا: موسم 1959–60 حمل أول دوري في تاريخ النادي، ومعه كأس مصر أيضًا. ثم جيل حمادة إمام «الثعلب» — الابن الصغير لحارس مصر يحيى إمام — الذي جمع ثلاثة دوريات (1959–60، 1963–64، 1964–65) وأربعة كؤوس بين 1959 و1974، وكان قلب الزمالك في ستينياته المضيئة.",
        "وقصى العقد كانت لعنة الحرب: في 1967 توقفت المسابقة نحو أربع سنوات، ولُعبت مواسم لم تُكتمل (1971–72 و1973–74)، وتهجّر كثير من النجوم — منها حسن شحاتة إلى الكويت حيث فاز بجائزة أفضل لاعب في آسيا عام 1970. ومع ذلك صمد النادي: كأس أكتوبر 1974 خُتمت بجلاء حمادة إمام عن الملاعب، وأعيد بناء الجيل من جديد على أساس الجودة لا الكثافة."
      ]
    },
    en: {
      title: "After the 1952 revolution: the birth of \"Zamalek\" (1952–1970)",
      paras: [
        "After the July 1952 revolution the name \"Farouk\" was out of the law, so the club took the name of the neighbourhood it lived in: Zamalek. With the new name came a new board under Mahmoud Shouki, then the presidency of Abdel Latif Abou Regila (from 1956), which completed the largest construction project in the club's history: the move to Mit Okba, and the opening of the club's stadium and social building in 1959 — the stadium officially inaugurated with a match against Czechoslovakia's Dukla Prague.",
        "The fruit came quickly: the 1959–60 season carried the club's first league title, together with the Egypt Cup. Then came the generation of Hamada Emam, \"the Fox\" — the young son of Egypt's goalkeeper Yehia Emam — who collected three leagues (1959–60, 1963–64, 1964–65) and four cups between 1959 and 1974, the heart of Zamalek in its bright sixties.",
        "The decade's end was cursed by war: in 1967 the league stopped for nearly four years, seasons were left unfinished (1971–72 and 1973–74), and stars were displaced — among them Hassan Shehata to Kuwait, where he was named Asian Footballer of the Year in 1970. Yet the club held on: the 1974 October Cup closed with Hamada Emam's farewell, and the generation was rebuilt from scratch on quality rather than quantity."
      ]
    }
  },

  /* ---------------- الباب الرابع ---------------- */
  {
    id: "part4",
    part: "الباب الرابع",
    ar: {
      title: "الهوية والألوان واللقب: علم القلعة البيضاء",
      paras: [
        "اختيار الأبيض لم يكن تفصيلًا جماليًا؛ كان بيانًا. قميص أبيض نقي من الأطراف إلى القلب، يتوسطه الخطان الأحمران — الرمز التقليدي الذي تحمله قمصان النادي منذ عقود — فصار النادي «الأبيض» بحق اسمه، وهوية بصرية لا تشبه أحدًا: بياضة لا تعرف الشطب، وحمرة لا تعرف التراجع.",
        "ومن الألقاب التي تراكمت على الاسم: «القلعة البيضاء» — التحصين الذي لا يُؤخذ — و«الفرسان البيضاء»، و«قاهر الفرنجة» التي تشير إلى سبق النادي في هزيمة الفرق الأجنبية منذ العشرينيات. والألوان نفسها لها منطقها: الأبيض للنقاء والسلام، والأحمر للشغف والحمرة والحياة.",
        "ولأن الهوية ليست لونًا فقط، خصّص الكتاب فصلًا كاملًا لدراسة الشعار ورموزه — من القلعة إلى الخطين إلى سنة التأسيس — يأتي بعد هذا الباب مباشرة؛ فالشعار هو اختصار القصة كلها في شكل صغير."
      ]
    },
    en: {
      title: "Identity, colours and the nickname: the White Castle's flag",
      paras: [
        "The choice of white was not an aesthetic detail; it was a statement. A pure white shirt from hem to heart, crossed by the two red lines — the traditional symbol the club's shirts have carried for decades — making the club \"the White\" by right of its name, a visual identity unlike any other: a whiteness that knows no erasure, and a redness that knows no retreat.",
        "The nicknames accumulated on the name: \"the White Castle\" — the fortress that cannot be taken — \"the White Knights\", and \"conqueror of the foreigners\", pointing to the club's precedence in defeating foreign teams since the 1920s. And the colours have their own logic: white for purity and peace, red for passion, determination and life.",
        "And because identity is more than a colour, the book dedicates a full chapter to studying the crest and its symbols — the castle, the two lines, the founding year — which follows directly after this part; the crest is the whole story compressed into a small shape."
      ]
    }
  },

  /* ---------------- الباب الخامس ---------------- */
  {
    id: "part5",
    part: "الباب الخامس",
    ar: {
      title: "الجيل الذهبي: خمسة تيجان إفريقية في تسعة عشر عامًا",
      paras: [
        "بين عامي 1984 و2002 رفع الزمالك كأس أفريقيا للأندية (دوري الأبطال لاحقًا) خمس مرات: 1984، 1986، 1993، 1996، 2002 — خمسة تيجان في تسعة عشر عامًا رسّخت مكانة القلعة بين أعرق سجلات القارة. قلب المشروع في تيجاني الثمانينيات كان مصريًا خالصًا: فاروق جعفر «ملك النصّ» في خط الوسط، وإبراهيم يوسف «الغزال الأسمر» في قلب الدفاع.",
        "وفي 1993 عاد التاج مع محمود الجوهري، وفي 1996 — عام تولي كمال درويش الرئاسة — جاء التاج الرابع، ثم استثمر درويش عصرًا ذهبيًا أحدث: كأس أفريقيا للأندية أبطال الكؤوس 2000، ودوري 2000–01، وتاج دوري الأبطال الخامس في 2002، وسوبر أفريقيا 2003، وبطولة الأندية العربية 2003 — أكثر من عشر بطولات موثقة في عقد واحد تقريبًا.",
        "وكان للفيلسوف الألماني أوتو فيستر — بين ديسمبر 1999 ويونيو 2002 — أثره في أبرز قفزة: كأس الكؤوس 2000 على حساب كانون الياوندي الكاميروني (4–3 في مجموع المباراتين)، ودوري 2000–01، وكأس مصر 2001–02، وأول سوبر مصري في التاريخ عام 2001 — أربع بطولات موثقة في عهده. هذا الباب يروي الجيل: لاعبو الثمانينيات الذين أسسوا، ولاعبو التسعينيات الذين ورثوا، ومدربو الألفينية الذين حصدوا."
      ]
    },
    en: {
      title: "The golden generation: five African crowns in nineteen years",
      paras: [
        "Between 1984 and 2002 Zamalek lifted the African Club Championship (later the Champions League) five times: 1984, 1986, 1993, 1996 and 2002 — five crowns in nineteen years that fixed the Castle's place among the continent's greatest records. The heart of the 1980s triumphs was purely Egyptian: Farouk Gaafar, \"king of the midfield\", and Ibrahim Youssef, \"the dusky gazelle\", at the core of the defence.",
        "In 1993 the crown returned with Mahmoud El-Gohary, and in 1996 — the year Kamal Darwish took the presidency — came the fourth crown, before Darwish invested a newer golden age: the African Cup Winners' Cup in 2000, the 2000–01 league, the fifth Champions League crown in 2002, the 2003 African Super Cup, and the 2003 Arab Club championship — more than ten documented trophies in roughly one decade.",
        "The German philosopher Otto Pfister — between December 1999 and June 2002 — left his mark on a striking leap: the 2000 Cup Winners' Cup against Cameroon's Canon Yaoundé (4–3 on aggregate), the 2000–01 league, the 2001–02 Egypt Cup, and history's first Egyptian Super Cup in 2001 — four documented trophies under him. This part tells the generation: the players of the eighties who built, the players of the nineties who inherited, and the coaches of the 2000s who harvested."
      ]
    }
  },

  /* ---------------- الباب السادس ---------------- */
  {
    id: "part6",
    part: "الباب السادس",
    ar: {
      title: "الزمالك في إفريقيا: سجل الـ15 لقبًا القاريًّا",
      paras: [
        "سجل الزمالك القاري يُقرأ في سطر واحد: خمسة دوري أبطال أفريقيا (1984، 1986، 1993، 1996، 2002)، وخمسة سوبر أفريقي (1994، 1997، 2003، 2020، 2024)، وكأس أفريقيا للأندية أبطال الكؤوس مرة واحدة (2000)، وكأس الكونفدرالية الإفريقية مرتين (2019، 2024)، وبطولة أفروآسيا للأندية مرتين (1987، 1997) — خمسة عشر لقبًا قاريًّا موثقًا في خزائن القلعة.",
        "وخلف الألقاب ست وصافات تحكي وجهًا آخر من الوفاء: وصافة دوري الأبطال في 1994 و2016 و2020، ووصافة السوبر الأفريقي 2001، ووصافة أفروآسيا 1994، ثم وصافة الكونفدرالية 2025–26 أمام اتحاد الجزائر: تعادل 1–1 في مجموع المباراتين بعد فوز 1–0 في القاهرة، فحسم الجزائريون اللقب بركلات الترجيح 8–7 في مايو 2026. القلعة لا تعرف الإنجاز إلا بشقيه المرّ: القرب من الكأس.",
        "ومن أجمل صفحات السجل: السوبر الأفريقي 2020 في الدوحة أمام الترجي التونسي، ثم «سوبر القرن» عام 2024 في الرياض أمام الأهلي، الذي حسمه الزمالك بركلات الترجيح 4–3 بعد تعادل 1–1 — لقبٌ خامس يجعل القلعة من أكثر الأندية تتويجًا في تاريخ المسابقة."
      ]
    },
    en: {
      title: "Zamalek in Africa: the record of 15 continental titles",
      paras: [
        "The club's continental record reads in one line: five African Champions League titles (1984, 1986, 1993, 1996, 2002), five African Super Cups (1994, 1997, 2003, 2020, 2024), one African Cup Winners' Cup (2000), two CAF Confederation Cups (2019, 2024), and two Afro-Asian Club Championships (1987, 1997) — fifteen documented continental titles in the Castle's cabinet.",
        "Behind the titles stand six runner-up finishes that tell the other face of loyalty: Champions League runners-up in 1994, 2016 and 2020; the 2001 Super Cup; the 1994 Afro-Asian final; and the 2025–26 Confederation Cup against USM Alger — 1–1 on aggregate after a 1–0 win in Cairo, with the Algerians taking it 8–7 on penalties in May 2026. The Castle knows no achievement without its bitter twin: the nearness of the cup.",
        "Among the record's finest pages: the 2020 African Super Cup in Doha against Espérance de Tunis, then the \"Super of the Century\" in 2024 in Riyadh against Al Ahly, decided by Zamalek 4–3 on penalties after a 1–1 draw — a fifth title placing the Castle among the most decorated clubs in the competition's history."
      ]
    }
  },

  /* ---------------- الباب السابع ---------------- */
  {
    id: "part7",
    part: "الباب السابع",
    ar: {
      title: "الساحة المحلية: 15 دوريًّا و29 كأسًا و4 سوبر",
      paras: [
        "الدوري المصري: خمسة عشر لقبًا — 1959–60، 1963–64، 1964–65، 1977–78، 1983–84، 1987–88، 1991–92، 1992–93، 2000–01، 2002–03، 2003–04، 2014–15، 2020–21، 2021–22، و2025–26 الأحدث، الذي أُغلق به السجل على الرقم القياسي الجديد: خمسة عشر لقبًا بعد صراع موسم كامل.",
        "وكأس مصر: تسعة وعشرون لقبًا من أول نسخة في تاريخها (1921–22 بفوز 5–0 على اتحاد الإسكندرية) حتى 2024–25 بركلات الترجيح أمام بيراميدز، بينها الكأسان المشتركتان مع الأهلي في 1942–43 و1957–58، وأربع كؤوس متتالية في المواسم 2012–13 حتى 2015–16. والسوبر المصري: أربعة ألقاب — 2001 و2002 و2016 و2020، اثنان منهما حُسما من ركلات الترجيح في أبو ظبي.",
        "وما قبل الدوري كان له سجل أيضًا: كأس السلطان حسين مرتين (1921، 1922) — أول بطولتين في تاريخ الكرة الوطنية — وبطولة دوري القاهرة أربع عشرة مرة، ثم البطولة العربية للأندية 2003 والسوبر المصري السعودي في 2003 و2018 تُكملان الجملة: قلعة تحكم داخلًا وقاريًّا وعربيًّا."
      ]
    },
    en: {
      title: "The domestic arena: 15 leagues, 29 cups, 4 super cups",
      paras: [
        "The Egyptian Premier League: fifteen titles — 1959–60, 1963–64, 1964–65, 1977–78, 1983–84, 1987–88, 1991–92, 1992–93, 2000–01, 2002–03, 2003–04, 2014–15, 2020–21, 2021–22, and the newest, 2025–26, closing the record on fifteen after a full season's fight.",
        "The Egypt Cup: twenty-nine titles, from the very first edition in history (1921–22, a 5–0 win over Ittihad of Alexandria) to 2024–25 on penalties against Pyramids — including the two cups shared with Al Ahly (1942–43 and 1957–58) and four consecutive cups across 2012–13 to 2015–16. The Egyptian Super Cup: four titles — 2001, 2002, 2016 and 2020, two of them decided on penalties in Abu Dhabi.",
        "And the pre-league era has its own record: the Sultan Hussein Cup twice (1921 and 1922) — the first two trophies in national football history — and the Cairo League fourteen times, then the 2003 Arab Club championship and the Egyptian–Saudi Super Cup of 2003 and 2018 complete the sentence: a castle that rules at home, on the continent, and in the Arab arena."
      ]
    }
  },

  /* ---------------- الباب الثامن ---------------- */
  {
    id: "part8",
    part: "الباب الثامن",
    ar: {
      title: "ديربي القاهرة: قرن من النار على كرسي المدينة",
      paras: [
        "الديربي ليس مباراة؛ إنه نظام الطاقة في الكرة المصرية. من نهائي كأس مصر الأول في العشرينيات إلى نهائيات الألفينية، مرّ القرن بكل حالاته: أقصى انتصار موثق للزمالك في المواجهة هو ستة أهداف نظيفة في نهائي كأس مصر 1943–44 — أعلى نتيجة في تاريخ الديربي حتى اليوم — وسلسلة عجيبة بلا خسارة رسمية أمام الأهلي من 1962 إلى 1973.",
        "وفي العصر الحديث صارت النهائيات لونًا للديربي: نهائي الكأس 2014–15 فاز فيه الزمالك 2–0، و2015–16 بثلاثية نظيفة، وسوبر مصر 2016 و2020 حُسما من ركلات الترجيح في أبو ظبي، ثم نهائي كأس مصر المؤجَّل لنسخة 2020–21 الذي لُعب في يوليو 2022 وحسمه الزمالك 2–1.",
        "والديربي أيضًا مدرسة الأسماء: عبد الرحمن فوزي سجل هدفين في سداسية 1943–44، وحمادة إمام يسجل ستة أهداف في المواجهات التاريخية، وعبد الحليم علي — هداف النادي التاريخي برصيد 138 هدفًا — صنع أرقامه في قلب هذا الصراع، وشيكابالا أضاف سحر «الأباتشي» إلى صفحاته الحديثة. قرن من النار، والكرسي لم يعد يومًا بيده واحدة."
      ]
    },
    en: {
      title: "The Cairo derby: a century of fire for the city's chair",
      paras: [
        "The derby is not a match; it is the power grid of Egyptian football. From the first Egypt Cup finals of the 1920s to the finals of the 2000s, the century passed through every state: Zamalek's biggest documented win in the fixture is six clean goals in the 1943–44 Egypt Cup final — still the largest result in the derby's history — plus a strange unbeaten run in official matches against Al Ahly from 1962 to 1973.",
        "In the modern era finals became the derby's colour: the 2014–15 cup final won 2–0, 2015–16 by three clean goals, the 2016 and 2020 Egyptian Super Cups decided on penalties in Abu Dhabi, and the delayed 2020–21 Egypt Cup final played in July 2022, settled by Zamalek 2–1.",
        "The derby is also a school of names: Abdelrahman Fawzi scored twice in the 1943–44 six, Hamada Emam scored six goals in the fixture's history, Abdelhalim Ali — the club's all-time top scorer with 138 goals — built his numbers in the heart of this battle, and Shikabala added the Apache's magic to its modern pages. A century of fire, and the chair was never held by one alone."
      ]
    }
  },

  /* ---------------- الباب التاسع ---------------- */
  {
    id: "part9",
    part: "الباب التاسع",
    ar: {
      title: "ما وراء كرة القدم: قصرٌ بأربع عشرة قاعة",
      paras: [
        "الزمالك ليس فريق كرة قدم له ملحق؛ إنه قصر رياضي — كما يسميه الكتاب: قصر بأربع عشرة قاعة. منذ العقود الأولى والنادي يزرع الرياضات الأخرى في جسده: كرة السلة وكرة الطائرة وكرة اليد وألعاب أخرى، ومن قاعاته خرجت فرق وأبطال شاركوا باسم مصر داخل القارة وخارجها.",
        "وقصة القاعات هي نفسها قصة القلعة: نادٍ بدأ بفريق واحد صار مؤسسة رياضية كاملة الأركان، تخرّج فيه رجالٌ في كل ملاعب الحياة — من الرؤساء الذين جاءوا من صفوف اللاعبين، إلى حارس المرمى الذي صار رئيسًا، إلى المعلق الرياضي الأول في التلفزيون المصري الذي خرج من هذا البيت.",
        "وهذا الباب يذكّر القارئ بأن حكاية الوطن الأبيض ليست تسعين دقيقة فقط؛ إنها مشروع حياة: مدرسة وقاعة وملعب واسمٌ يحمل اسم مصر في كل سجل عالمي. فالزمالك كما وثّق الكتاب ليس ناديًا في مدينة؛ إنه مدينة داخل نادٍ."
      ]
    },
    en: {
      title: "Beyond football: a palace with fourteen halls",
      paras: [
        "Zamalek is not a football team with an annex; it is a sporting palace — as the book names it: a palace with fourteen halls. From its earliest decades the club has planted other sports in its body: basketball, volleyball, handball and more, and from its halls came teams and champions who competed in Egypt's name inside and outside the continent.",
        "The story of the halls is the story of the Castle itself: a club that began with one team became a full sporting institution, producing men in every arena of life — presidents who came from the players' ranks, a goalkeeper who became president, and the first sports commentator on Egyptian television, who grew out of this house.",
        "This part reminds the reader that the story of the white homeland is not ninety minutes only; it is a life project: a school, a hall, a stadium, and a name that carries Egypt's name in every world record. Zamalek, as the book documents, is not a club in a city; it is a city inside a club."
      ]
    }
  }
];

/* الملحق الجغرافي: صور الكتاب المؤرشفة (تُعرض في الأبواب المناسبة) */
const SECTION_PHOTOS = {
  intro: [],
  part1: ["Zamalek_logo_1913.jpg", "Hussien_Hegazi.jpg"],
  part2: ["Zamalek_SC_1940-41.jpg", "King_Farouk_I_of_Egypt.jpg", "Abdulrahman_Fawzi_(1952).jpg"],
  part3: ["Zamalek_SC_(1952).jpg", "Zamalek_SC_(1964).jpg", "Zamalek_SC_1969.jpg"],
  part5: ["H_Shehata_-_F_Gaafar_(1981).jpg", "1928_zamalek.jpg"],
  part8: ["Hassan_Shehata_(1975_Cup_final).jpg"],
  part9: ["Mohamed_Hassan_Helmy_1.jpg"],
  legends: ["Shikabala_2024_(cropped).jpg", "zamalek-two-lines.svg"]
};
