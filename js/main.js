/* ================= i18n ================= */
(function () {
  document.documentElement.classList.add("js");

  var I18N = {
    nl: {
      "nav.work": "Werk", "nav.contact": "Contact",
      "hero.kicker": "Freelance Designer & Developer",
      "hero.sub": "Ik ontwerp en bouw apps en websites. Van eerste schets tot live product.",
      "hero.scroll": "Scroll",
      "about.title": "Ik ben Mert.",
      "about.p1": "27, uit Arnhem. Ik begon met een MBO-opleiding applicatieontwikkeling en zit nu in mijn derde jaar HBO-ICT aan de Hogeschool Utrecht. Ik bouw met React Native, React en TypeScript, en ik ontwerp het liefst zelf wat ik daarna bouw.",
      "about.p2": "Naast mijn studie werk ik als freelance designer en developer. Ik maak websites voor ondernemers en bouw mijn eigen app, ChoreShare, een huishoud-app voor studentenhuizen die ik van nul heb opgezet.",
      "about.p3": "Waar ik naartoe werk: een developer zijn die je een probleem geeft en een afgemaakt product teruggeeft. Geen half werk, geen buzzwords. In mijn vrije tijd vind je me aan de boulderwand of achter een film.",
      "home.workhead": "Recent werk", "home.morework": "Meer werk",
      "w1.cat": "App · Design & development",
      "w2.cat": "Website · Design & development",
      "w3.cat": "App · Teamproject HU",
      "w4.cat": "Website · Design & development",
      "services.head": "Waar ik je mee kan helpen",
      "s1.t": "Design",
      "s1.p": "Strak, functioneel design met oog voor typografie en detail. Geen templates. Elk scherm wordt op maat ontworpen voor jouw merk en jouw gebruikers.",
      "s2.t": "Development",
      "s2.p": "Websites en mobiele apps die snel zijn en lang meegaan. HTML, CSS en JavaScript voor het web, React Native voor iOS en Android.",
      "s3.t": "Het volledige pakket",
      "s3.p": "Van eerste schets tot livegang. Design, development en deployment uit één hand, met één aanspreekpunt en korte lijnen.",
      "cta.kicker": "Contact",
      "cta.h": "Laten we <span class=\"em\">samenwerken</span>",
      "foot.credit": "Ontworpen & gebouwd door mij",
      "foot.time": "Lokale tijd", "foot.version": "Versie", "foot.socials": "Socials",
      "work.h1": "Al het <span class=\"em\">werk</span>",
      "cols.project": "Project", "cols.cat": "Categorie", "cols.year": "Jaar",
      "contact.h1": "Laten we een project <span class=\"em\">starten</span>",
      "contact.sub": "Vertel kort wat je nodig hebt, dan hoor je snel van me.",
      "contact.details": "Contactgegevens",
      "meta.title.home": "Mert Altintas — Freelance Designer & Developer",
      "meta.title.work": "Werk — Mert Altintas",
      "meta.title.contact": "Contact — Mert Altintas"
    },
    en: {
      "nav.work": "Work", "nav.contact": "Contact",
      "hero.kicker": "Freelance Designer & Developer",
      "hero.sub": "I design and build apps and websites. From first sketch to live product.",
      "hero.scroll": "Scroll",
      "about.title": "I'm Mert.",
      "about.p1": "27, from Arnhem. I started with a software development degree at MBO level and I'm now in my third year of HBO-ICT at Hogeschool Utrecht. I build with React Native, React and TypeScript, and I prefer to design what I build myself.",
      "about.p2": "Alongside my studies I work as a freelance designer and developer. I make websites for business owners and I'm building my own app, ChoreShare, a household app for student houses that I set up from scratch.",
      "about.p3": "What I'm working towards: being a developer you hand a problem and get back a finished product. No half work, no buzzwords. In my spare time you'll find me on a bouldering wall or watching a film.",
      "home.workhead": "Recent work", "home.morework": "More work",
      "w1.cat": "App · Design & development",
      "w2.cat": "Website · Design & development",
      "w3.cat": "App · Team project at HU",
      "w4.cat": "Website · Design & development",
      "services.head": "I can help you with",
      "s1.t": "Design",
      "s1.p": "Clean, functional design with an eye for typography and detail. No templates. Every screen is designed specifically for your brand and your users.",
      "s2.t": "Development",
      "s2.p": "Websites and mobile apps built to be fast and to last. HTML, CSS and JavaScript for the web, React Native for iOS and Android.",
      "s3.t": "The full package",
      "s3.p": "From first sketch to launch. Design, development and deployment handled end to end, with one point of contact and short lines.",
      "cta.kicker": "Contact",
      "cta.h": "Let's work <span class=\"em\">together</span>",
      "foot.credit": "Designed & built by me",
      "foot.time": "Local time", "foot.version": "Version", "foot.socials": "Socials",
      "work.h1": "All <span class=\"em\">work</span>",
      "cols.project": "Project", "cols.cat": "Category", "cols.year": "Year",
      "contact.h1": "Let's start a <span class=\"em\">project</span>",
      "contact.sub": "Tell me briefly what you need and you'll hear from me soon.",
      "contact.details": "Contact details",
      "meta.title.home": "Mert Altintas — Freelance Designer & Developer",
      "meta.title.work": "Work — Mert Altintas",
      "meta.title.contact": "Contact — Mert Altintas"
    }
  };

  function getSaved() { try { return localStorage.getItem("mert-lang"); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem("mert-lang", l); } catch (e) {} }

  window.__lang = getSaved() || "nl";

  window.applyLang = function (l) {
    if (!I18N[l]) l = "nl";
    window.__lang = l;
    save(l);
    var dict = I18N[l];
    document.documentElement.lang = l;
    var pageKey = document.body.getAttribute("data-page") || "home";
    if (dict["meta.title." + pageKey]) document.title = dict["meta.title." + pageKey];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l));
    });
  };

  window.applyLang(window.__lang);
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { window.applyLang(b.getAttribute("data-lang")); });
  });
})();

/* ================= Clock (Europe/Amsterdam) ================= */
(function () {
  var els = document.querySelectorAll("[data-clock]");
  if (!els.length) return;
  function tick() {
    var t = new Intl.DateTimeFormat("nl-NL", { timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit" }).format(new Date());
    els.forEach(function (el) { el.textContent = t + " CET"; });
  }
  tick();
  setInterval(tick, 10000);
})();

/* ================= Animation system ================= */
(function () {
  if (typeof gsap === "undefined") return;
  document.documentElement.classList.add("gsap-init");
  gsap.registerPlugin(ScrollTrigger);

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    gsap.set("[data-reveal], [data-hero]", { opacity: 1 });
    return;
  }

  /* ---- Lenis smooth scroll ---- */
  if (typeof Lenis !== "undefined") {
    var lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---- Hero entrance: one staggered load ---- */
  var heroEls = gsap.utils.toArray("[data-hero]");
  if (heroEls.length) {
    gsap.fromTo(heroEls,
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, stagger: 0.09, ease: "power3.out", delay: 0.15 }
    );
  }

  /* ---- Scroll hint fades once you actually scroll ---- */
  var hint = document.querySelector(".scroll-hint");
  if (hint) {
    ScrollTrigger.create({
      start: 60,
      onEnter: function () { gsap.to(hint, { opacity: 0, duration: 0.4 }); },
      onLeaveBack: function () { gsap.to(hint, { opacity: 1, duration: 0.4 }); }
    });
  }

  /* ---- Scroll reveals ---- */
  gsap.set("[data-reveal]", { opacity: 0, y: 36 });
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    onEnter: function (els) {
      gsap.to(els, { opacity: 1, y: 0, duration: 0.85, stagger: 0.09, ease: "power3.out" });
    }
  });
})();
