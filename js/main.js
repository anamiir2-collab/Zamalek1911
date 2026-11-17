/* ============================================================
   js/main.js — محرك العرض: التبديل اللغوي، التنقل، البحث، النافذة
   Vanilla JS · بدون أي اعتماد خارجي · يعمل على GitHub Pages مباشرة
   ============================================================ */

(function () {
  "use strict";

  var state = { lang: "ar", era: "all", query: "" };
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- ترجمة سريعة بين اللغتين ---------- */
  function T(obj) { return obj[state.lang]; }

  function eraOf(year) {
    for (var i = 0; i < ERAS.length; i++) {
      var e = ERAS[i];
      if (year >= e.from && year <= e.to) return e;
    }
    return ERAS[0];
  }

  function eraLabel(year) {
    var e = eraOf(year);
    return state.lang === "ar" ? e.ar : e.en;
  }

  /* ---------- تغيير اللغة ---------- */
  function applyLanguage() {
    var ar = state.lang === "ar";
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";
    document.body.classList.toggle("en", !ar);
    document.body.classList.toggle("rtl", ar);
    $$("[data-l]").forEach(function (el) {
      var key = el.getAttribute("data-l");
      var val = key.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, SITE[state.lang]);
      if (typeof val === "string") el.textContent = val;
    });
    $("#lang-btn").textContent = ar ? "English" : "العربية";
    buildEraSelect();
    renderAll();
    syncNavActive();
  }

  /* ---------- قائمة الحقب (تُحدَّث مع اللغة) ---------- */
  function buildEraSelect() {
    var sel = $("#era-select");
    var current = sel.value || "all";
    var opts = ['<option value="all">' + esc(state.lang === "ar" ? "كل الحقب" : "All eras") + "</option>"];
    ERAS.forEach(function (e) {
      opts.push('<option value="' + e.key + '">' + esc(state.lang === "ar" ? e.ar : e.en) + " (" + e.from + "–" + e.to + ")</option>");
    });
    sel.innerHTML = opts.join("");
    sel.value = Array.prototype.some.call(sel.options, function (o) { return o.value === current; }) ? current : "all";
  }

  /* ---------- الشعار المعروض (حسب المتوفر فعليًا في الأرشيف) ---------- */
  function crestSrc() {
    var pick = ["Zamalek_official_logo.png", "Zamalek_official_crest_photo.jpg",
                "Zamalek_SC_symbol.png", "zamalek-two-lines.svg", "Zamalek_SC_icon.png"];
    for (var i = 0; i < pick.length; i++) {
      if (typeof PHOTOS_OK !== "undefined" && PHOTOS_OK[pick[i]]) return "assets/photos/" + pick[i];
    }
    return "assets/photos/Zamalek_SC_icon.png";
  }
  var ASSET_CACHE = {};
  function hasAsset(src) { return ASSET_CACHE[src] !== false; }
  function imgFallback(el) {
    el.addEventListener("error", function () {
      el.style.display = "none";
      ASSET_CACHE[el.getAttribute("src")] = false;
    });
    el.addEventListener("load", function () { ASSET_CACHE[el.getAttribute("src")] = true; });
  }

  /* ---------- الغلاف ---------- */
  function renderCover() {
    var s = SITE[state.lang];
    $("#cover-title").textContent = s.title;
    $("#cover-tag").textContent = s.tagline;
    $("#cover-sub").textContent = s.subtitle;
    $("#cover-crest").src = crestSrc();
    imgFallback($("#cover-crest"));
  }

  /* ---------- الأبواب ---------- */
  function renderSections() {
    var host = $("#sections-host");
    host.innerHTML = "";
    BOOK_SECTIONS.forEach(function (sec) {
      var d = sec[state.lang];
      var block = document.createElement("section");
      block.className = "book-section";
      block.id = sec.id;
      var partHtml = sec.part ? '<div class="kicker">' + esc(sec.part) + "</div>" : '<div class="kicker">' + esc(d.kicker || "") + "</div>";
      var photos = (SECTION_PHOTOS[sec.id] || []).filter(function (p) { return PHOTOS_OK[p]; });
      var photoHtml = photos.length
        ? '<div class="photo-strip">' + photos.map(function (p) {
            return '<figure><img src="assets/photos/' + p + '" alt="' + esc(p) + '" loading="lazy" data-fb><figcaption>' +
              (SITE[state.lang].ui.photoCredit) + "</figcaption></figure>";
          }).join("") + "</div>"
        : "";
      block.innerHTML =
        '<div class="section-head">' + partHtml +
          "<h2>" + esc(d.title) + "</h2>" +
          '<div class="orn">◆ ◆ ◆</div>' +
        "</div>" +
        '<div class="prose">' + d.paras.map(function (p, i) {
          return '<p class="' + (i === 0 ? "dropcap" : "") + '">' + esc(p) + "</p>";
        }).join("") + "</div>" + photoHtml;
      host.appendChild(block);
    });
    $$("img[data-fb]", host).forEach(imgFallback);
  }

  /* ---------- دراسة الشعار ---------- */
  function renderLogo() {
    var d = LOGO_STUDY[state.lang];
    var block = document.createElement("section");
    block.className = "book-section";
    block.id = "logo";
    var figs = d.figures.filter(function (f) { return PHOTOS_OK[f.file.replace("assets/photos/", "")]; });
    block.innerHTML =
      '<div class="section-head"><div class="kicker">' + esc(d.kicker) + "</div><h2>" + esc(d.title) +
        '</h2><div class="orn">◆ ◆ ◆</div></div>' +
      '<div class="prose">' + d.intro.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      '<div class="logo-study">' +
        '<div class="ls-figure">' + figs.map(function (f) {
            return '<img src="' + f.file + '" alt="' + esc(f.caption) + '" style="margin:8px auto" loading="lazy">' +
                   '<div style="font-family:var(--sans);font-size:.7rem;color:var(--z-ink-soft)">' + esc(f.caption) + "</div>";
          }).join("") + "</div>" +
        '<ul class="ls-legend">' + d.elements.map(function (e, i) {
            var color = i % 2 === 0 ? "var(--z-red)" : "var(--z-ink)";
            return '<li><span class="dot" style="background:' + color + '"></span><span><b>' + esc(e.name) + "</b>" + esc(e.meaning) + "</span></li>";
          }).join("") + "</ul>" +
      "</div>";
    var host = $("#logo-host");
    host.innerHTML = "";
    host.appendChild(block);
    $$("img", block).forEach(imgFallback);
  }

  /* ---------- الخط الزمني الكبير ---------- */
  function renderMilestones() {
    var host = $("#milestones-host");
    host.innerHTML = "";
    var wrap = document.createElement("div");
    wrap.className = "timeline";
    wrap.innerHTML = MILESTONES.map(function (m) {
      var line = state.lang === "ar" ? m.ar : m.en;
      return '<div class="tl-item"><div class="tl-year">' + m.y + "</div><p>" + esc(line) + "</p></div>";
    }).join("");
    host.appendChild(wrap);
  }

  /* ---------- السجل السنوي ---------- */
  function renderChapters() {
    var host = $("#chapters-grid");
    var q = state.query.trim().toLowerCase();
    var list = CHAPTERS.filter(function (c) {
      if (state.era !== "all" && c.era !== state.era) return false;
      if (!q) return true;
      var hay = (c.y + " " + c.ar.t + " " + c.ar.x + " " + c.en.t + " " + c.en.x).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    host.innerHTML = list.map(function (c) {
      var d = c[state.lang];
      var e = eraOf(c.y);
      var photo = c.photo && PHOTOS_OK[c.photo];
      return '<div class="year-card' + (photo ? " has-photo" : "") + '" data-year="' + c.y + '" tabindex="0">' +
        (c.star ? '<span class="yc-star" title="' + esc(SITE[state.lang].ui.starLabel) + '">★</span>' : "") +
        '<div class="yc-year">' + c.y + "</div>" +
        '<div class="yc-era" style="color:' + e.color + '">' + esc(eraLabel(c.y)) + "</div>" +
        '<div class="yc-title">' + esc(d.t) + "</div>" +
        "</div>";
    }).join("");
    $("#chapters-count").textContent = SITE[state.lang].ui.showing + " " + list.length + " " + SITE[state.lang].ui.of + " " + CHAPTERS.length + " " + SITE[state.lang].ui.chapters;
    $$(".year-card", host).forEach(function (card) {
      card.addEventListener("click", function () { openChapter(parseInt(card.getAttribute("data-year"), 10)); });
      card.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") openChapter(parseInt(card.getAttribute("data-year"), 10));
      });
    });
  }

  function openChapter(year) {
    var c = CHAPTERS.filter(function (x) { return x.y === year; })[0];
    if (!c) return;
    var d = c[state.lang], s = SITE[state.lang];
    var e = eraOf(c.y);
    var photoHtml = (c.photo && PHOTOS_OK[c.photo])
      ? '<img class="ch-photo" src="assets/photos/' + c.photo + '" alt="" data-fb2>' +
        '<div class="credit">' + esc(s.ui.photoCredit) + " — Wikimedia Commons</div>"
      : "";
    $("#modal-body").innerHTML =
      '<div class="m-year">' + c.y + "</div>" +
      '<div class="m-era" style="color:' + e.color + '">' + esc(eraLabel(c.y)) + "</div>" +
      "<h3>" + esc(d.t) + "</h3>" + photoHtml +
      "<p>" + esc(d.x) + "</p>";
    $("#modal-back").classList.add("open");
    $("#modal-back").querySelector(".close-x").focus();
    $$("img[data-fb2]").forEach(imgFallback);
  }

  /* ---------- قاعدة البطولات ---------- */
  function renderHonours() {
    var d = HONOURS[state.lang];
    var host = $("#honours-host");
    host.innerHTML = "";
    d.groups.forEach(function (g) {
      var wrap = document.createElement("div");
      wrap.innerHTML = '<h3 style="margin:26px 0 12px;color:var(--z-red-deep)">' + esc(g.name) + "</h3>" +
        '<div class="honours-grid">' + g.items.map(function (it) {
          return '<div class="honour-card"><div class="hc-count">' + it.n + '</div><div class="hc-name">' + esc(it.name) +
            '</div><div class="hc-years">' + esc(it.years) + "</div></div>";
        }).join("") + "</div>";
      host.appendChild(wrap);
    });
  }

  /* ---------- سجل الشخصيات ---------- */
  function renderLegends() {
    var s = SITE[state.lang];
    var host = $("#legends-host");
    host.innerHTML = "";
    ["players", "admins", "coaches"].forEach(function (cat) {
      var catD = LEGEND_CATS[cat];
      var list = LEGENDS.filter(function (l) { return l.cat === cat; });
      var wrap = document.createElement("div");
      wrap.innerHTML =
        '<div class="legend-cat-title"><h3>' + esc(s.ui["legend" + (cat === "players" ? "Players" : cat === "admins" ? "Admins" : "Coaches")]) +
        '</h3><span class="count-pill">' + list.length + "</span></div>" +
        '<div class="legends-grid">' + list.map(function (l) {
          var d = l[state.lang];
          var photo = l.photo && PHOTOS_OK[l.photo];
          var ph = photo
            ? '<div class="lc-photo"><img src="assets/photos/' + l.photo + '" alt="' + esc(d.name) + '" loading="lazy" data-fb3></div>'
            : '<div class="lc-photo"><span class="no-photo">' + esc(d.name.trim().charAt(0)) + "</span></div>";
          return '<article class="legend-card">' + ph + '<div class="lc-body">' +
            '<div class="lc-name">' + esc(d.name) + '</div>' +
            '<div class="lc-nick">' + esc(d.nick) + "</div>" +
            '<div class="lc-years">' + esc(d.years) + "</div>" +
            '<div class="lc-reason"><b>' + esc(s.ui.reasonLabel) + " · " + esc(s.ui.selectedBy) + "</b><br>" + esc(d.reason) + "</div>" +
            '<div class="lc-honours"><b style="font-family:var(--sans);font-size:.72rem">' + esc(s.ui.honoursLabel) + ":</b> " + esc(d.honours) + "</div>" +
            "</div></article>";
        }).join("") + "</div>" +
        '<div class="prose" style="margin-top:14px"><p style="font-family:var(--sans);font-size:.8rem;color:var(--z-ink-soft)">' +
        esc(s.ui.noPhotoNote) + "</p></div>";
      host.appendChild(wrap);
    });
    $$("img[data-fb3]").forEach(imgFallback);
  }

  /* ---------- المراجع ---------- */
  function renderReferences() {
    var d = REFERENCES[state.lang];
    var host = $("#references-host");
    var corrections = REFERENCES.corrections[state.lang].map(function (c) {
      return '<li style="list-style:none;padding:8px 0;border-bottom:1px dashed var(--z-line);font-size:.95rem">◆ ' + esc(c) + "</li>";
    }).join("");
    host.innerHTML = "";
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<div class="fact-card" style="margin-bottom:22px"><div class="fc-title">' + esc(d.note) + "</div></div>" +
      '<ul class="ref-list">' + REFERENCES.list.map(function (r) {
        var label = state.lang === "ar" ? r.ar : r.en;
        return '<li><a href="' + r.url + '" target="_blank" rel="noopener">' + esc(label) + "</a>" +
          '<div class="src">' + esc(r.url) + "</div></li>";
      }).join("") + "</ul>" +
      '<h3 style="margin:34px 0 12px;color:var(--z-red-deep)">' + esc(state.lang === "ar" ? "قائمة التصحيحات الموثقة" : "Documented corrections") + "</h3>" +
      '<ul style="padding:0;margin:0">' + corrections + "</ul>";
    host.appendChild(wrap);
  }

  /* ---------- التنقل ---------- */
  function buildNav() {
    var s = SITE[state.lang];
    var items = [
      { id: "cover", label: s.navTitles.cover },
      { id: "intro", label: s.navTitles.intro },
      { id: "method", label: s.navTitles.method },
      { id: "logo", label: s.navTitles.logo },
      { id: "milestones", label: s.navTitles.milestones },
      { id: "chapters", label: s.navTitles.chapters },
      { id: "honours", label: s.navTitles.honours },
      { id: "legends", label: s.navTitles.legends },
      { id: "references", label: s.navTitles.references }
    ];
    var nav = $("#nav-main");
    nav.innerHTML = "";
    items.forEach(function (it) {
      var a = document.createElement("a");
      a.href = "#" + it.id;
      a.textContent = it.label;
      a.setAttribute("data-target", it.id);
      nav.appendChild(a);
    });
    var parts = document.createElement("div");
    parts.className = "nav-group";
    parts.innerHTML = "<h4>" + esc(s.navTitles.parts) + "</h4>";
    BOOK_SECTIONS.filter(function (x) { return x.part; }).forEach(function (x) {
      var a = document.createElement("a");
      a.href = "#" + x.id;
      a.textContent = x.part + ": " + x[state.lang].title;
      a.setAttribute("data-target", x.id);
      parts.appendChild(a);
    });
    nav.appendChild(parts);
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        $("#sidebar").classList.remove("open");
        syncNavActiveSoon(a.getAttribute("data-target"));
      });
    });
  }

  function syncNavActive() {
    var ids = $$("a[data-target]", $("#nav-main")).map(function (a) { return a.getAttribute("data-target"); });
    var current = ids[0];
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        var r = el.getBoundingClientRect();
        if (r.top <= 120) current = id;
      }
    });
    $$("a[data-target]", $("#nav-main")).forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-target") === current);
    });
  }
  function syncNavActiveSoon(id) {
    setTimeout(function () {
      $$("a[data-target]", $("#nav-main")).forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("data-target") === id);
      });
    }, 60);
  }

  /* ---------- أدوات ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderAll() {
    // الشعار في الغلاف والشريط والفهرس والتذييل — حاضر في كل صفحة
    var src = crestSrc();
    ["cover-crest", "top-crest", "side-crest", "footer-crest"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.src = src; imgFallback(el); }
    });
    renderCover();
    renderSections();
    renderLogo();
    renderMilestones();
    renderChapters();
    renderHonours();
    renderLegends();
    renderReferences();
    buildNav();
    document.title = SITE[state.lang].title;
  }

  function init() {
    // زر اللغة
    $("#lang-btn").addEventListener("click", function () {
      state.lang = state.lang === "ar" ? "en" : "ar";
      applyLanguage();
    });
    // بحث + حقبة
    $("#chapter-search").addEventListener("input", function () {
      state.query = this.value; renderChapters();
    });
    $("#era-select").addEventListener("change", function () {
      state.era = this.value; renderChapters();
    });
    // نافذة الفصل
    $("#modal-close").addEventListener("click", function () { $("#modal-back").classList.remove("open"); });
    $("#modal-back").addEventListener("click", function (ev) {
      if (ev.target === this) this.classList.remove("open");
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") $("#modal-back").classList.remove("open");
    });
    // قائمة الجوال
    $("#menu-btn").addEventListener("click", function () { $("#sidebar").classList.toggle("open"); });
    // دخول الكتاب
    $("#enter-btn").addEventListener("click", function () {
      document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
    });
    window.addEventListener("scroll", syncNavActive);

    renderAll();
    applyLanguage();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
