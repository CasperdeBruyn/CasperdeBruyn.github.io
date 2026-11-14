| 🆕 Missend | **Tier 1** | Branding/Design werk. |
| **Hu-begeleidt** | 🆕 Missend | **Tier 2** | Waarschijnlijk proces/ondersteunend. |
| **School-projecten** | 🆕 Missend | **Tier 2** | Educatief/Leerproces. |
| **Picknicken met Sophie** | 🆕 Missend | **Tier 2** | Lifestyle/Lichter project. |
| **De Grinch...** | 🆕 Missend | **Tier 2** | Creatief/Illustratief. |
| **OSRS Kerstposter** | 🆕 Missend | **Tier 2** | Digital/Niche craft. |
| **Samen Spelen** | 🆕 Missend | **Tier 2** | Digital/Community werk. |
---
### 💡 2. Inspiratie & Bron-Voorstel (Voor het Inspiratiebord)
Ik stel voor om de visuele stijl te definiëren als **"The Blueprint Workshop"**. Dit is de synthese tussen de warmte van de houtbewerking (DNA Optie 1) en de precisie van een Sci-Fi/CAD omgeving.
#### **A. Visuele Synthese (Aesthetic Details)**
*   **De "Tactile Tech" Overlay:** Gebruik de `The Dark Workshop` kleuren (#161412 basis), maar voeg een subtiele, interactieve **CAD-Grid** toe.
*   *Implementatie:* Een CSS `background-image` van een fijn grid met `opacity: 0.05` en `mix-blend-mode: overlay`.
*   *Interactie:* Het grid licht heel licht op (koperen kleur `#C87D4B`) wanneer de cursor over bepaalde secties beweegt (mouse-tracking).
*   **Texture Layering:** Voeg een zeer fijne `noise/grain` toe aan de achtergrond om het digitale karakter te verzachten en de "workshop" sfeer te versterken.
#### **B. Navigatie & Interactie (The Dossier Engine)**
*   **Project Modals (Dossier Stijl):** Geen simpele pop-ups, maar "Project Dossiers".
*   *UI:* Gebruik `backdrop-filter: blur(12px)` op de modal-achtergrond.
*   *UX:* Implementeer de `history.pushState` (zoals besproken in de strategie) zodat `casperdebruyn.github.io/#project/bomby-bird` werkt.
*   *Sluiten:* Een kruisje rechtsboven in koper (`#C87D4B`) én de mogelijkheid om te klikken buiten de modal.
*   **Header Update:** Het logo (de 3 cdb afbeeldingen) wordt direct linksboven in de header geplaatst als een hoogwaardig vector-achtig element of een scherp, goed geschaald PNG.
#### **C. Socials & Contact (The Clean Exit)**
*   **Social Icons:** Gebruik **FontAwesome** of directe **SVG** iconen voor Instagram en LinkedIn (geen pixelige png's).
*   **Contact Form:**
*   *Frontend:* Een modern, minimalistisch formulier.
*   *Backend logic:* De mail naar `casper.debruyn@hotmail.com` wordt via een service (zoals Formspree of een kleine serverless function) verstuurd, zodat het adres niet in de broncode leesbaar is voor bots.
*   *Feedback:* Directe transitie naar een "Transmission Received. Thank you." bericht na verzending.
---
### 🚀 3. Directe Actiepunten voor het Team (Prioriteit tot 10:00)
1.  **[CODE]** Implementeer de `Work-in-Progress` balk bovenaan de


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 217 (2026-11-15 00:29 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Hier is mijn analyse en het concrete voorstel voor de volgende fase van **Project CasperdeBruyn.github.io**. Als `deepsearch_scout` heb ik de huidige status van de code, de gescrapte content en het Design DNA naast elkaar gelegd om de hiaten te identificeren.
---
### 🕵️‍♂️ 1. Status Audit & Gap Analysis (De 'Scout' Bevindingen)
**Wat we hebben (The Foundation):**
*   **Kleurenpalet:** De `:root` variabelen in `style.css` matchen perfect met **DNA Optie 1: "The Dark Workshop"** (`#161412`, `#C87D4B`, etc.).
*   **Content Basis:** De `scraped_archive/pages/` bevat 16 pagina's. Dit is de "Source of Truth" voor de storytelling.
*   **Techniek:** De basisstructuur (`index.html`, `style.css`, `script.js`) is aanwezig en technisch valide.
**Wat er ontbreekt of cruciaal moet worden gecorrigeerd (The Gaps):**
1.  **De "Bomby Bird" Fout:** Er is een mismatch tussen de afbeeldingen en de projectbeschrijving. Dit is een prioriteit om de geloofwaardigheid van het portfolio te herstellen.
2.  **De "Missing 9" Integratie:** De huidige homepage toont slechts 7 projecten. De overige 9 (waaronder *Kodak*, *Grijpmachine*, en *Zeefdrukken*) moeten dynamisch worden ingeladen in de nieuwe "Dossier" structuur.
3.  **Logo & Header:** De 3 cdb-logo afbeeldingen moeten naar de header (links) en er moet een kwaliteitscheck (anti-pixelatie) plaatsvinden.
4.  **Interactie-gat:** De huidige site is nog een statische pagina; de "Immersive" belofte (moving elements, CAD-grid, Dossier modals) moet nog worden geprogrammeerd.
---
### 💡 2. Conceptueel Voorstel: "The Blueprint Workshop"
*Voor opname in het `Agent Deepsearch Inspiratiebord`*
Ik stel voor om de visuele stijl niet alleen "donker" te maken, maar te definiëren als **"Tactile Tech"**. Dit combineert het fysieke (hout, textuur, korrel) met het digitale (CAD-lijnen, grids, interactie).
#### **A. Visuele Details (UI/UX)**
*   **De CAD-Overlay:** Een interactief, semi-transparant grid over de gehele achtergrond.
*   *Effect:* Wanneer de gebruiker scrolt of beweegt, reageert het grid subtiel met een "parallax" of "glow" effect in koper (`#C87D4B`).
*   **De Dossier-Engine (Project Modals):** In plaats van simpele pop-ups gebruiken we "Project Dossiers".
*   *Stijl:* Een overlay met `backdrop-filter: blur(12px)` en een zeer fijne witte/koperen rand (0.5px) die lijkt op een technische tekening.
*   *Navigatie:* Gebruik van `history.pushState` zodat elk project een unieke URL/hash krijgt (`/#project/kodak`).
*   **Textuur:** Een subtiele `grain` (ruis) laag over de `#161412` achtergrond om het "organische" van de workshop te simuleren.
#### **B. Content Mapping (De 16 Projecten)**
We verdelen de 16 gescrapete pagina's in een hiërarchie:
*   **Tier 1 (Hero Projects):** *Bomby Bird, Kodak, Generation Plastic Soup, Grijpmachine, Zeefdrukken, Vechtclub-XL.* (Deze krijgen de grootste afbeeldingen en meest uitgebreide dossiers).
*   **Tier 2 (Process & Niche):** *Hu-begeleidt, School-projecten, Picknicken met Sophie, De Grinch, OSRS Kerstposter, Samen Spelen.* (Deze worden getoond in een compacter grid).
---
### 🚀 3. Directe Actiepunten voor het Team (Prioriteit tot 10:00)
Ik verdeel de taken direct onder de gespecialiseerde agents:
**1. [Content & Asset Agent] - *De Verificatie-ronde***
*   [ ] **Match Check:** Vergelijk alle afbeeldingen in `assets/images/` met de tekst op `casperdebruyn.myportfolio.com`. Herstel specifiek de **Bomby Bird** koppelingen.
*   [ ] **Logo Placement:** Selecteer de 3 beste kwaliteit cdb-logo's, schaal ze correct en plaats ze in de `header` links.
*   [ ] **Socials:** Vervang alle oude social buttons/links door hoogwaardige **SVG iconen** (Instagram & LinkedIn). Verwijder de "Join Discord" knop definitief.
**2. [Frontend & Interaction Agent] - *De Immersie-ronde***
*   [ ] **CAD-Grid Implementatie:** Voeg de CSS voor het interactieve grid toe aan `style.css`.
*   [ ] **Dossier System:** Bouw de modal-structuur in `index.html` en implementeer de `clo


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 218 (2026-11-15 00:33 | Team Score: 82%)
Sub-agent `deepsearch_scout` fout na retry (timeout=240s): HTTP 400: {"error":{"message":"gemini/lyria-realtime-exp: model — models/lyria-realtime-exp only supports real-time bidirectional streaming via WebSocket (bidiGenerateContent). Please use the Gemini Live API (b


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 219 (2026-11-15 00:37 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Ik ben de `deepsearch_scout`. Ik heb de huidige status van het project, het Design DNA en de gescrapete bronnen geanalyseerd.
**Mijn analyse:** We hebben de *grondstoffen* (16 gescrapete pagina's en de juiste kleuren), maar de *architectuur* is nog te statisch. De "Immersive" belofte uit het Design DNA is nog niet vertaald naar functionele UI/UX. Er is een kloof tussen de "Dark Workshop" (ambacht) en de "Sci-Fi/Futuristische" wens.
Hieronder volgt mijn concrete voorstel voor het team en de aanvulling voor het `Agent Deepsearch Inspiratiebord`.
---
## 🧭 DeepSearch & Inspiratie Voorstel — Iteratie 219
**Focus:** *Bridging the Gap: From Static Gallery to Tactile Tech Dossier*
### 1. Bron-Verificatie & Content-Audit (De 'Waarheid')
Ik heb vastgesteld dat er 16 subpagina's zijn gescrapte. De huidige `index.html` is een 'teaser' en bevat slechts een fractie hiervan.
**De Scout-eis:** We mogen niet alleen de titels overnemen, maar moeten de *storytelling* uit de `scraped_archive/pages/` (zoals de specifieke uitdagingen bij *Kodak* of de processtappen bij *Vechtclub-XL*) integreren in de Dossiers.
### 2. Conceptuele Uitbreiding: "The Blueprint Layer"
Om de combinatie van **Klassiek Houtwerk** en **Futuristische Sci-Fi** te bereiken, stel ik voor om een "Blueprint Layer" toe te voegen.
**Visuele & Interactieve Ideeën:**
*   **Blueprint Toggle:** Een kleine switch in de UI (bijv. een koperen schakelaar) die de site schakelt tussen 'Workshop Mode' (foto's, texturen, warme kleuren) en 'Blueprint Mode' (wireframes, CAD-lijnen, technische annotaties, koperen outlines op zwarte achtergrond).
*   **Technical Annotations:** In de project-dossiers voegen we kleine "technical callouts" toe (lijntjes met tekst) die naar specifieke details in een foto wijzen, alsof het een technische tekening is.
*   **The "Skeuomorphic" Digital:** Gebruik van `backdrop-filter: blur()` gecombineerd met een zeer fijne `grain` overlay om het gevoel van matglas of geschaafd hout in een digitale omgeving te simuleren.
### 3. Concreet Voorstel voor het `Agent Deepsearch Inspiratiebord`
Ik stel voor de volgende sectie toe te voegen aan `inspiratie_en_bronnen.md`:
#### **📂 Nieuwe Module: "The Tactile Interface"**
*   **Interactie-patroon:** *The Dossier Slide*. Geen center-pop-up, maar een zijpaneel (drawer) dat met een mechanische 'klik'-animatie openschuift, waardoor de homepage op de achtergrond vervaagt (`blur(10px)`).
*   **Navigatie-Logica:** Implementatie van `URL-hashes` (bijv. `casperdebruyn.github.io/#project/bomby-bird`). Dit maakt het mogelijk om direct naar een specifiek project te linken via socials.
*   **Asset-Mapping Matrix:**
*   **Tier 1 (Immersive):** *Bomby Bird, Kodak, Generation Plastic Soup, Grijpmachine, Zeefdrukken, Vechtclub-XL*. $\rightarrow$ Volledige Dossier met gallery + procestekst.
*   **Tier 2 (Archive):** *Hu-begeleidt, School-projecten, Picknicken met Sophie, etc*. $\rightarrow$ Compact Dossier met focus op resultaat.
---
### 🚀 Directe Actiepunten voor de Agents (Priority 10:00)
Ik adviseer de volgende taakverdeling om de deadline te halen:
**1. [Content Agent] $\rightarrow$ De "Match-Fixer"**
*   **Taak:** Loop door alle 16 `scraped_archive/pages/`. Koppel elke pagina aan de juiste afbeeldingen in `assets/images/`.
*   **Correctie:** Fix de **Bomby Bird** mismatch direct.
*   **Logo:** Implementeer de 3 logo's in de header links; pas `image-rendering: crisp-edges` of SVG-conversie toe om pixelvorming te voorkomen.
**2. [Frontend Agent] $\rightarrow$ De "Immersive Architect"**
*   **Taak:** Bouw de **Dossier-Engine**.
*   Maak een herbruikbare modal/drawer structuur.
*   Voeg de `CAD-Grid` achtergrond toe met een subtiele parallax-beweging op basis van muisbeweging.
*   Vervang social buttons door minimalistische **SVG-iconen** (Instagram/LinkedIn) in de kleur `#C87D4B`.
**3. [Backend/Logic Agent] $\rightarrow$ De "Secure Connector"**
*   **Taak:** Configureer het contactformulier.
*   Routeer mail


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 220 (2026-11-15 00:46 | Team Score: 82%)
Sub-agent `deepsearch_scout` fout na retry (timeout=240s): HTTP 400: {"error":{"message":"gemini/lyria-realtime-exp: model — models/lyria-realtime-exp only supports real-time bidirectional streaming via WebSocket (bidiGenerateContent). Please use the Gemini Live API (b


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 221 (2026-11-15 00:46 | Team Score: 82%)
Sub-agent `deepsearch_scout` fout na retry (timeout=240s): HTTP 400: {"error":{"message":"gemini/lyria-realtime-exp: model — models/lyria-realtime-exp only supports real-time bidirectional streaming via WebSocket (bidiGenerateContent). Please use the Gemini Live API (b
