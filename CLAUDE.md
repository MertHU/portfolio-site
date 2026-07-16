# CLAUDE.md — Portfolio-site Mert Altintas

Persoonlijke portfolio- en bedrijfssite in één. Doel: klanten binnenhalen als freelance designer en developer (websites voor eenmanszaken) en later dienen als developer-portfolio voor stages en werk.

## Stack

- Alles in één HTML-bestand (CSS en JS inline). Geen build-stap, geen framework. V4 volgt NIET meer het ChoreShare-template
- GSAP via CDN (V4-concept gebruikt alleen core, geen ScrollTrigger/Lenis: het is een fullscreen kompas-layout, geen scroll-pagina)
- Fonts (15 jul, Merts keuze): Comic Sans MS overal, koppen bold. Fallback-stack: "Comic Sans MS", "Comic Sans", "Comic Neue" (Google Fonts webfont voor apparaten zonder Comic Sans, zoals Android), cursive. Bricolage Grotesque + Instrument Sans staan nog in de Google Fonts-link maar zijn ongebruikt (Claude adviseerde tegen Comic Sans, Mert koos bewust)
- Tweetalig NL/EN via data-i18n attributen, dictionary inline in index.html, keuze in localStorage
- Nog geen git-repo, nog niet gedeployed. Doel: Vercel

## Bestanden

- `hero-concept.html` — V4-CONCEPT, HIER WERKEN WE NU AAN. Losse concept-pagina, wordt naar index.html geport zodra Mert de opzet goedkeurt
- Stand na sessie 15-16 jul: hero herzien (naam op 1 regel, nieuwe bio-tekst, Comic Sans), nieuwe pfp via rembg+Real-ESRGAN met perzik offset-schaduw, wipe-navigatie (0.85s) met per-richting terugknoppen en placeholder-paginakleuren, dock-nav rechts (verving roadmap), gooey pixel trail, muis-parallax. LET OP bij testen: in een hidden Chrome-tab draaien GSAP-animaties niet (rAF gepauzeerd), pagina lijkt dan leeg; tab focussen of reveal forceren met gsap.set
- `index.html` — de oude V3 one-pager (ChoreShare-template look). Nog intact, maar V3 is afgekeurd: Mert vond hem te veel op choreshare.nl lijken
- `work.html`, `contact.html` — alleen nog redirects naar index.html#werk / #contact
- `css/style.css`, `js/main.js` — ONGEBRUIKT (restanten van V2), kunnen weg zodra Mert akkoord is
- `assets/cartoon.png` — cartoon line-art versie van Mert (via ChatGPT), DE hero-visual van V4. Bron: `~/OneDrive/Afbeeldingen/cartoonpfp.png` (Mert vervangt die soms, dan opnieuw kopiëren)
- Pfp-keuze (14 jul): line-art (cartoonpfp.png) gekozen boven de anime-versie (cartoonpfp2.png, transparante PNG 1024x1536). Mert uploadt nog een BETERE versie van de line-art, die dan naar assets/cartoon.png kopiëren. Let op browsercache bij het wisselen: img met ?v= cache-buster herladen
- Pfp DEFINITIEF (15 jul): `~/OneDrive/Afbeeldingen/mertpfp.png` (witte achtergrond) door rembg gehaald, gecropt en met Real-ESRGAN (realesrgan-x4plus-anime, ncnn-vulkan portable build) 4x geupscaled, terug naar 966x1378 (2x display) met Lanczos, alpha-rand aangescherpt tegen witte fringe. Display: min(100%, 483px), img op ?v=8, edge-mask VERWIJDERD. Workflow nieuwe pfp: rembg, crop op alpha-bbox (12px padding, onderkant strak), Real-ESRGAN 4x, downscale naar 966 breed, alpha hardening met int32 (LET OP: int16 overflowt bij (a-90)*255 en wist dan de hele vulling, die bug is 1x gemaakt)
- Muis-parallax op home (15 jul): portrait beweegt 14/7px mee met de muis, gsap.quickTo, alleen bij pointer:fine en current===0. Portrait img heeft margin-bottom -10px zodat er geen naad onder de figuur verschijnt
- Gooey pixel trail op home (15 jul, 21st.dev @danielpetho gooey-filter/background, geport naar vanilla): muis laat blokjes (28px, 22px mobiel) achter in --second #EFD9C8 die via een SVG goo-filter samensmelten, na 500ms abrupt weg. #pixelCanvas absolute z0 in .home, content erboven via z-index. Alleen actief op home. LET OP: op 16 jul kort vervangen door een svg-follower (@designali-in, vijf doodle-vormpjes achter de cursor aan) maar Mert koos dezelfde avond TERUG voor de gooey trail; de follower-code is verwijderd
- Catdoodle: op de pagina gezet en weer VERWIJDERD op Merts verzoek (15 jul). Het transparante bestand staat nog klaar in `assets/catdoodle.png` (lijnen als alpha, inkt-kleur) mocht hij ergens terugkomen
- Eerdere pogingen: cartoonpfp3.png had een door Google Flow ingebakken nep-schaakbordpatroon (0% echte transparantie), cutout daarvan staat nog op `~/OneDrive/Afbeeldingen/cartoonpfp3-cutout.png`. Daarvoor cartoonpfp.png (met ingebakken cream-verloop, daarom bestond de edge-mask)
- `assets/portrait-front.png` — nette frontale foto (cream achtergrond), nu ongebruikt, evt. voor About-pagina
- `assets/` verder: portrait.png, portrait-cutout.png, foto.jpg, drie ChoreShare screenshots (screen-taken, screen-potje, screen-calender)
- Merts schets voor V4: `~/OneDrive/Afbeeldingen/paintexample.jpg`
- Lokaal testen: `python -m http.server 8991` in de projectroot, dan http://localhost:8991/hero-concept.html (Chrome-extensie kan geen file:// openen)

## Status en richting

- V1 was een te letterlijke kopie van dennissnellenberg.nl. Afgekeurd door Mert
- V2: eigen opzet met papier-wit, inktzwart, terracotta, Fraunces. Afgekeurd
- V3: gebouwd op het ChoreShare-website-template (petrol teal). Afgekeurd: te veel choreshare.nl
- V4 (huidig, in `hero-concept.html`): artsy line-art richting op basis van Merts paint-schets
  - Palet: cream #F0EDDE (gelijk aan cartoon-achtergrond), inkt #22272B, lijnen #2A2620, terracotta #C05B2E (primary, door Mert gekozen), deep #8F3E1C, amber #F0A84B als tweede accent
  - Fonts: zelfde als V3 (Bricolage Grotesque + Instrument Sans)
  - Home = fullscreen hero: links naam + "Junior Developer" badge + korte bio (27, HBO-ICT, websites/webapps/apps, boulderen) + Arnhem NL; midden cartoon exact gecentreerd, onderkant tegen viewport-rand, randen weggemaskeerd (mask-image fade, want cartoon-bg is een subtiel verloop); rechts verticale roadmap-nav
  - Nav rechts = DOCK (15 jul, vervangt de roadmap-nav): 21st.dev @ibelick dock geport naar vanilla, gefuseerd met Merts items About me/Projects/Skills/Contact. Witte pill met inkt-rand en offset-schaduw, line-art SVG-iconen (Lucide-paths inline: user, briefcase, code, mail), label-tooltip links bij hover. Magnificatie: knoppen groeien 46 naar 70px op basis van muisafstand (gsap.quickTo op width/height, RANGE 110px), alleen pointer:fine en current===0. Game-style selectiepijltje (16 jul, Merts idee): obsidian driehoekje (::after, 16x20, clip-path + 135deg facet-gradient #4A525A naar #0C0E10 + offset drop-shadow) op 24px rechts van het gehoverde dock-item, wijst naar links zoals een selectie-cursor in games, schuift in met 0.15s. Eerste versie was een plat border-driehoekje dicht op de dock, Mert wilde meer gap en 3D/obsidian. Mobiel: horizontale rij, labels en pijltje verborgen. De oude roadmap-CSS (.stop/.rail) is verwijderd
  - KOMPAS-NAVIGATIE (Merts idee): pagina's liggen in vier windrichtingen rond home. About boven, Projects rechts, Skills onder, Contact links. Terug-knop per pagina met richtingspijl, Esc gaat ook terug. Implementatie: absolute panels met .pos-up/right/down/left, OFFSETS-array in JS
  - CIRCLE-REVEAL navigatie (16 jul, DEFINITIEF, Mert keurde de About-test goed en liet hem uitrollen): elke pagina cirkelt open vanuit zijn eigen dock-knop (clip-path circle + GSAP proxy-tween, 0.9s power3.inOut, radius tot verste viewport-hoek). Terugknop (.back-circle) staat op exact dezelfde plek als de dock-knop en zuigt de pagina terug (0.75s): compacte witte cirkel (52px) met home-icoon (lucide house). Toetsen B en Esc gaan ook terug. Route ernaartoe: eerst pijl-links, toen console button-hint met (B)-roundel + Terug-label (Mert vond hem te groot), toen dit. De B-sneltoets is een overblijfsel van de console-variant dat Mert hield. BUGFIX 16 jul: .back-circle moet position ABSOLUTE zijn, niet fixed; met fixed bleef de knop na het sluiten zichtbaar op home hangen onder de dock (Mert zag ghost-knoppen, screenshot). Absolute verhuist mee met het geparkeerde panel. Implementatie: PANELS-array in JS, .circle-mode class zet het panel op position:fixed z30, de track BEWEEGT NOOIT meer. Alle vier getest (open en dicht)
  - VERWIJDERD op 16 jul: de richtings-wipe (#wipe overlay, COLORS/OFFSETS-arrays, ovale wipe uit de windrichting, 15 jul gebouwd) en de richtings-terugknoppen (.back met .pos-* overrides). Het kompas-idee (pagina's in windrichtingen) is daarmee de facto vervallen; de pos-* classes bestaan alleen nog om panels buiten beeld te parkeren
  - Placeholder-paginakleuren (15 jul, nog geen definitief design): About amber #F0A84B, Projects terracotta #C05B2E, Skills deep #8F3E1C, Contact zacht perzik #EFD9C8. Projects/Skills hebben cream tekst
  - De vier subpagina's zijn nog placeholders
- Mert stuurt de redesign punt voor punt aan. NIET zelf vooruitlopen of adjacent dingen redesignen

## Vaste content (door Mert aangeleverd, niet herschrijven)

- V4 hero (herzien 15 jul, tweede ronde): geen "Portfolio" eyebrow meer, naam "Mert Altintas" op EEN regel (Altintas in terracotta), daaronder "Ik zet ideeën om in digitale oplossingen. Met een passie voor development, design en gebruiksvriendelijke interfaces.", dan de "Junior Developer" badge, dan Arnhem, NL. De oude 27/HBO-ICT/boulderen-bio is voor de About-pagina, niet de hero
- About: titel NL "Ik ben Mert." / EN "I'm Mert." plus drie vaste alinea's (staan in js/main.js onder about.p1 t/m about.p3) — herbruikbaar voor de About-pagina van V4

## Skills bij het bouwen (verplicht, door Mert gevraagd 15 jul)

Bij het maken of aanpassen van UI op deze site altijd deze skills/tools inzetten:

- `frontend-design` — basis voor elk nieuw stuk UI, voorkomt generieke AI-look
- `ui-ux-pro-max` — stijlen, palettes, font pairings, UX-review van gebouwde onderdelen
- 21st.dev Magic (`mcp__magic__*` tools) — component-inspiratie en component-builder
- Anti-AI-slop pass: `high-end-visual-design` tijdens het bouwen, `design-review` als QA achteraf ("ai_slop" zoals Mert het noemt, deze twee dekken dat)
- Bij de deploy-fase: `serp-markup-builder` (16 jul geinstalleerd op Merts verzoek) voor title/meta/OG/Twitter-tags en JSON-LD Person-schema, zodat de link er goed uitziet als iemand hem deelt

## Werkafspraken

- Mert geeft per ronde één aanwijzing, Claude voert exact dat uit, verifieert met een screenshot en wacht op de volgende ronde
- Verifiëren met gstack browse: desktop 1440x900 en mobiel 375x812, plus console errors checken
- Geen em dashes en geen emojis in teksten op de site of naar Mert
- Projecten op de site: ChoreShare (app), ChoreShare.nl (website, linkt naar https://choreshare.nl), EventKit (teamproject HU), Portfolio (deze site)
- Contact: mertanil_61@outlook.com, github.com/MertHU. Arnhem, NL

## Openstaand (V4)

- Volgende stap: de vier subpagina's vullen (About me, Projects, Skills, Contact). Projecten: ChoreShare (app), ChoreShare.nl (website, linkt naar https://choreshare.nl), EventKit (teamproject HU), Portfolio (deze site)
- Achtergrond aankleden: Mert vindt de pagina nog wat leeg. Claudes voorstel (16 jul, nog niet besproken/gebouwd): 2-3 kleine doodles in dezelfde line-art stijl als catdoodle verspreid op home (assets/catdoodle.png ligt al klaar), heel licht en klein zodat de trail de hoofdrol houdt. Alternatieven: faint oversized monogram, hairline-cirkels. NIET doen zonder Merts akkoord
- Pfp-schaduw (16 jul): drop-shadow op .portrait img, harde perzik-offset 14/14 rgba(228,182,149,0.65) + zachte diepte-schaduw. Mert wilde "meer schaduw", dit is ronde 1, mogelijk nog tunen
- Handgetekende accenten in de hero-linkerkolom (16 jul, Merts keuze uit 4 opties, hij vond de kolom te leeg): inline SVG doodles in line-art stijl. Terracotta krabbel-onderstreping onder "Altintas" (.squiggle, absolute onder de span), inkt-pijl die van de badge naar de portrait wijst (.doodle-arrow, rechts van de bio), amber sparkle boven de M (.doodle-spark-a), kleine inkt-sparkle rechts van de badge (.doodle-spark-b). Posities via clamp() gekoppeld aan de intro-padding. Verborgen op mobiel. Afgewezen opties: CTA-knoppen, beschikbaar-badge+GitHub, tech-chips (kunnen later alsnog)
- Retro cursor (16 jul, Merts idee): N64-achtig pixel-art wijzend handje als cursor OVERAL, `assets/cursor-hand.png` (26x26 na -20% op Merts verzoek, door Claude gegenereerd uit een pixel-map, wit + inkt-rand, hotspot 11 1 op de vingertop). Bij mousedown zet JS de class .pressing op <html> en wisselt de cursor naar `assets/cursor-hand-click.png?v=2` (zelfde hand, vinger diep gebogen tot net boven de knokkels, hotspot 11 7) tot mouseup/mouseleave. Een twee-cursor variant (open hand standaard + wijzend op klikbaar) is gebouwd en TERUGGEDRAAID; `assets/cursor-hand-open.png` staat er nog ongebruikt (wel nog op 32px). De losse cursor:pointer declaraties zijn VERWIJDERD uit .lang button/.dock-item/.back. Bij nieuwe klikbare elementen: geen cursor:pointer toevoegen maar aan de twee cursor-regels bovenin de CSS toevoegen
- Interactieve items op home: gooey pixel trail is er (zie hierboven). Eerder: twee mini-games (bug squash + boulder) GEBOUWD EN WEER VERWIJDERD (14 jul). Bekende bug uit die poging: bug-squash teller liep vanzelf op zonder kliks, oorzaak nooit gevonden
- Mert werkt aan een nieuwe artsy foto-versie van zichzelf (naast de cartoon)
- NL/EN taalswitch in V4 is nog dood (alleen knopjes), i18n-dictionary moet nog
- Click sparks (16 jul, ReactBits ClickSpark geport naar vanilla, Mert linkte het verwijderde @deleted_reactbits profiel en Claude nam aan dat dit effect bedoeld werd): bij elke mousedown schieten 8 streepjes uit het klikpunt (radius 17, size 10, 420ms ease-out cubic) op een fixed canvas z45 (#sparkCanvas, boven de wipe). Kleur: inkt op lichte pagina's, cream op projects/skills (donkere bg's). rAF-loop draait alleen zolang er sparks leven
- Tekstselectie staat UIT op de hele pagina (user-select: none op body, 16 jul, tegen blauwe selectie bij klikken/slepen) en images zijn niet sleepbaar. BIJ HET BOUWEN VAN CONTACT: user-select: text terugzetten op het mailadres zodat bezoekers het kunnen kopieren
- V4 mobiel (<980px) is een snelle stack, nog niet echt ontworpen; kompas-navigatie op mobiel nog testen
- Zodra V4 goedgekeurd: porten naar index.html, dan hero-concept.html weg
- 0-byte junkbestanden in root (`376`, `gooWordsByLang[lang]`) verwijderen, Mert moet nog akkoord geven
- EventKit-screenshot: screen-calender.png is een ChoreShare-screenshot, echte EventKit-screenshot nodig
- css/style.css en js/main.js (V2-restanten) verwijderen
- Git: KLAAR (16 jul). Publieke repo https://github.com/MertHU/portfolio-site, main branch gepusht. gh CLI geinstalleerd en ingelogd als MertHU, dus committen en pushen kan voortaan gewoon vanuit de sessie. Junkbestanden (376, gooWordsByLang[lang]) staan in .gitignore tot Mert akkoord geeft op verwijderen. Werkafspraak: git status checken voor elke commit, nooit blind git add -A
- Deploy naar Vercel, domein kiezen
- NA DE LAUNCH (afspraak 16 jul): v2-migratie naar Next.js. Besluit: eerst afmaken en shippen in vanilla (smoothness komt van GSAP, niet van het framework), daarna migreren voor de voordelen die dan wel tellen: CV-waarde richting stages (React/Next op het portfolio zelf), ruimte voor meer pagina's/routes (blog, cases, CMS), SEO over meerdere routes, next/image optimalisatie. Let op bij migratie: alle imperatieve GSAP-code (wipe, pixel trail, dock-magnificatie, parallax) moet naar refs + useEffect met cleanup
- Check of mertanil_61@outlook.com het adres is dat Mert zakelijk wil gebruiken
