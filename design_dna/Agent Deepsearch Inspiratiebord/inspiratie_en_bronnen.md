html` en het **Project Design DNA**.
Hier is de gedetailleerde blauwdruk om de ontbrekende schakels te smeden, de projecten uit te breiden naar de volledige **12 opdrachten**, en de visuele hiërarchie in lijn te brengen met de "The Dark Workshop"-esthetiek.
---
### 🎨 1. De Volledige Project-Matrix (De 12 Meesterwerken)
In de huidige live-versie ontbreken er nog 5 projecten of zijn deze niet correct gekoppeld. Om de volledige breedte van Casper's portfolio te weerspiegelen, stellen we voor om **12 specifieke projectkaarten** in de interactieve Workbench te integreren, opgedeeld in drie overzichtelijke categorieën (ambacht, digitaal, immersief):
1. **Poul Cadovius Wandmeubel** (Houtbewerking / Berken & Falcata Multiplex)
2. **Zwevende Bank met French Cleats** (Houtbewerking / Ruimtelijk Ontwerp)
3. **De Grijpmachine** (Interactieve, fysieke installatie)
4. **Vechtclub XL** (Grootschalige, immersieve evenementen-ervaring)
5. **De Grinch sloopt de Kerstboom** (Interactief kerst-project)
6. **Zeefdrukken (Custom Designs)** (Fysiek analoog ambacht)
7. **Bomby Bird** (Interactieve game - *let op: afbeeldingen corrigeren naar game assets!*)
8. **Generation Plastic Soup** (Digitale & maatschappelijke CMD-campagne)
9. **OSRS Kerstposter** (Nostalgisch grafisch ontwerp / vector-art)
10. **Picknicken met Sophie** (User experience & storytelling)
11. **HU Begeleidt** (Digitaal platform / UX-onderzoek)
12. **Kodak Retro Rebranding** (Conceptueel grafisch & UX-werk)
---
### 🛠️ 2. UX- & Interactiepatronen (The "Workshop-Terminal" Fusion)
*   **De Header-Logo Correctie:** De 3 logo-afbeeldingen van Casper (`cdb` logo's) die nu soms abusievelijk in de body-secties zweven, verplaatsen we definitief naar een haarscherpe, inline vector-SVG linksboven in de vaste header. Dit voorkomt pixelvorming en creëert rust.
*   **De Modals / Detail Pop-ups:** Elk van de 12 projecten krijgt een interactieve `.workbench-card` die bij een klik een fullscreen of gecentreerd modalvenster opent.
*   *Sluit-interactie:* Sluiten kan intuïtief door op de `[X]` knop te klikken, op de `ESC`-toets te drukken, of simpelweg buiten het modal-oppervlak te klikken.
*   *Rijke Content:* Binnen de modal tonen we een fotogalerij (diashow) met afbeeldingen die specifiek horen bij die subpagina, plus de gedetailleerde storytelling (CMD Utrecht, geboortejaar '97, de passie voor immersieve sferen).
*   **Het Contactformulier & Veilige Routing:**
*   Het e-mailadres `casper.debruyn@hotmail.com` blijft in de frontend gemaskeerd. We configureren de formulieractie via een veilige endpoint-versleuteling (bijvoorbeeld Formspree of een soortgelijke handler).
*   Bij het indienen wordt de pagina niet herladen, maar verschijnt er een gestileerd terminal-schermpje: `[STATUS: TRANSMISSION SECURED - THANKS CASPER]`.
*   **Socials Integration:** De Discord join-knop wordt volledig verwijderd. In plaats daarvan plaatsen we in de footer en contactsectie subtiele, koperkleurige SVG-iconen voor:
*   **Instagram:** `https://www.instagram.com/cdb.creative/`
*   **LinkedIn:** `https://www.linkedin.com/in/casper-de-bruyn-0191561a0/`
---
### 📋 Voorstel voor het Agent Inspiratiebord (`inspiratie_en_bronnen.md`)
Ik stel voor om de volgende update direct vast te leggen in `inspiratie_en_bronnen.md`:
*Vraag aan het team: Stemt het team in met deze uitwerking (>60% goedkeuring) om de ontbrekende 5 projecten en de pop-up-galerij in `index.html` en `script.js` te implementeren?*


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 213 (2026-11-14 23:30 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Als de **DeepSearch, Bron-Verkenner & Inspiratie Scout (`deepsearch_scout`)** heb ik de diepte-scan van de 16 gescrapete subpagina's en de lokale mappen voltooid. Op basis van het **Project Design DNA (The Dark Workshop)** en de specifieke tekortkomingen die je noemde (ontbrekende projecten, verkeerde afbeeldingen, pixelvorming), leg ik hierbij het volgende concrete voorstel voor.
---
### 1. Bron-Verificatie & Status-Check
*   **Gescrapete Data:** De 16 subpagina's in `scraped_archive/pages/` bevatten de essentiële storytelling die we nu vertalen naar het Engels.
*   **Beeldmateriaal:** De `assets/images/` map wordt gesynchroniseerd met de project-matrix om te zorgen dat **Bomby Bird** de juiste game-assets krijgt en de houtbewerking-projecten (`Poul Cadovius`, `French Cleat Bench`) de focus krijgen.
*   **Logo Fix:** De huidige logo-afbeeldingen worden vervangen door een **inline-SVG** (gebaseerd op je logo-ontwerp) om pixelvorming op hoge resoluties te voorkomen.
---
### 2. Inspiratie-Matrix: "The Blueprint Terminal"
Om de balans tussen "Vakmanschap" (Hout) en "Futurisme" (AI/Linux) te vinden, stel ik de volgende interactie-patronen voor:
*   **Het 'Blueprint' Grid:** De 12 projecten worden gepresenteerd in een grid dat subtiele technische hulplijnen (grid lines) heeft, zoals een CAD-tekening of een snijmat in een workshop.
*   **Immersieve Modals (De Focus-modus):** Bij het klikken op een project dimmen de lichten van de rest van de site (vignette effect). De pop-up opent als een 'dossier' met een subtiele 'grain' overlay, waarbij afbeeldingen in een carrousel verschijnen.
*   **De 'Terminal' Sidebar:** Een zwevend element (of subtiele footer) dat live-statistieken toont van je "Linux AI Homelab" (bijv. uptime, of een 'connection established' bericht), wat de scifi-vibe versterkt.
---
### 3. Concreet 'Inspiratie & Bron-Voorstel'
*Ik verzoek het team om de volgende elementen direct op te nemen in het `Agent Deepsearch Inspiratiebord`:*
#### **A. De 12-Projecten Architectuur (Integratie)**
We koppelen de data van de 16 subpagina's aan deze 12 kaarten:
1.  **Poul Cadovius System** (Focus: Multiplex textuur)
2.  **French Cleat Bank** (Focus: Ruimtelijk ontwerp)
3.  **De Grijpmachine** (Focus: Interactieve elektronica)
4.  **Vechtclub XL** (Focus: Immersieve sfeer/branding)
5.  **De Grinch** (Focus: Storytelling & Feestdagen)
6.  **Custom Zeefdrukken** (Focus: Analoog ambacht)
7.  **Bomby Bird** (Correctie: Game-sprites & UI screenshots)
8.  **Plastic Soup** (Focus: Maatschappelijke impact)
9.  **OSRS Kerstposter** (Focus: Vector/Nostalgie)
10. **Picknicken met Sophie** (Focus: UX/Service Design)
11. **HU Begeleidt** (Focus: UX Research)
12. **Kodak Retro** (Focus: Branding & Typografie)
#### **B. UI & Social Componenten**
*   **Vector Icons:** Gebruik van `Lucide` of `Feather` icons voor Instagram en LinkedIn, uitgevoerd in de accentkleur **#C87D4B (Koper)**.
*   **Contact-Flow:** Een 'Terminal-style' feedback na het versturen van het formulier naar `casper.debruyn@hotmail.com` (bijv: `> MESSAGE TRANSMITTED TO THE WORKSHOP...`).
*   **Navigatie:** Een 'Terug naar boven' of 'Sluit' knop die aanvoelt als een fysieke schakelaar.
#### **C. Visuele Afwerking**
*   Toevoegen van een `mix-blend-mode: multiply` grain-overlay over de achtergrond (`#161412`) om de "The Dark Workshop" sfeer te verdiepen.
---
### 📋 Voorstel voor het Agent Inspiratiebord (`inspiratie_en_bronnen.md`)
**Status:** *Wacht op goedkeuring van het team (>60%)*
> **Voorstel:** Implementeer de "Blueprint Terminal" hybride-stijl.
> 1. Herstel de project-matrix naar 12 unieke kaarten met data uit de `scraped_archive`.
> 2. Vervang logo-images door SVG voor 0% kwaliteitsverlies.
> 3. Bouw de modal-view met een 'Focus-licht' effect (dimming background).
> 4. Verwijder Discord en implementeer koperen social icons.
**Gaan we akkoord om deze structuur in de volgende iteratie van `index.html` en `script.js` door te voeren?**


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 214 (2026-11-14 23:43 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Hier is het rapport en het concrete voorstel van de **DeepSearch Scout (`deepsearch_scout`)**.
Ik heb de `qa_inspector` audit gecombineerd met een diepe analyse van de `scraped_archive` en de `Project Design DNA`. Mijn doel is om de kloof te dichten tussen de huidige technische staat (die de basis legt) en de gewenste "Immersive Blueprint Terminal" ervaring.
---
### 🕵️‍♂️ Scout Analyse: De "Missing Link" Audit
**1. Content Mapping (De 12 Projecten vs. 16 Scraped Pages):**
De huidige mismatch (7 projecten zichtbaar, 5 missend) komt voort uit een gebrek aan een harde koppeling tussen de `scraped_archive/pages/` en de `index.html` project-sectie.
*   **Status:** De 16 pagina's bevatten niet alleen 12 projecten, maar ook ondersteunende content (`about-me`, `contact`, `home`).
*   **Risico:** Als we alleen de 7 huidige projecten behouden, verliest het portfolio zijn narratieve kracht en de "Maker" breedte.
*   **Oplossing:** De 12-projecten architectuur uit het eerdere voorstel is de *enige* juiste weg om de data uit de 16 pagina's te homogeniseren.
**2. De "Bomby Bird" & Image Quality Crisis:**
De DNA-instructie is glashelder: *geen pixelvorming*.
*   **Probleem:** Bomby Bird heeft nu verkeerde assets.
*   **DeepSearch Inzicht:** De afbeeldingen van `bomby-bird` in de scraped archive moeten direct worden gekoppeld aan de specifieke `assets/images/` map. Indien de kwaliteit daar laag is, moet de UI de nadruk leggen op de *retro/pixel-art* stijl (intentionaliteit) in plaats van slordige resolutie.
**3. Tactile vs. Digital (De Esthetische Paradox):**
De gebruiker wil "Sci-Fi" én "Houtbewerking/Ambacht".
*   **Synthese:** Dit bereiken we niet door een keuze te maken, maar door **UI-layering**.
*   *Basislaag:* Warme houttexturen en organische vormen (The Dark Workshop).
*   *Interactielaag:* Een "Digital Overlay" van technische CAD-lijnen, monospace fonts en een terminal-interface (The Blueprint).
---
### 📋 Voorstel voor het `Agent Deepsearch Inspiratiebord`
Ik stel voor om de volgende drie pijlers direct te vergrendelen voor de volgende ontwikkelingsronde.
#### **I. De "Project Dossier" Modal (UX Engine)**
In plaats van nieuwe pagina's (die de flow onderbreken), implementeren we een **Immersive Modal System**:
*   **Trigger:** Klik op projectkaart $\rightarrow$ Overlay met `backdrop-filter: blur(10px)`.
*   **Content:** Een "Dossier" layout. Links de project-beschrijving (Engelse storytelling uit de scraped data), rechts een interactieve foto-carrousel.
*   **Interactie:** Gebruik een "X" knop die aanvoelt als een mechanische drukknop en een "Close" actie die de modal met een subtiele 'fade-out' en 'scale-down' sluit.
*   **Navigatie:** Een subtiele "Back to Workshop" knop onderaan de modal.
#### **II. De "Terminal" Contact & Socials Integratie**
*   **Contact Form:** Geen standaard formulier. Een interface die lijkt op een Linux terminal.
*   *Input:* `user@casper:~$ message --send "..."`
*   *Feedback:* Na verzenden naar `casper.debruyn@hotmail.com`: Een animatie van een voortgangsbalk die eindigt met: `[SUCCESS] MESSAGE TRANSMITTED TO THE WORKSHOP.`
*   **Socials:** Vervang de Discord-knop door een minimalistische koperen (`#C87D4B`) social-bar in de footer met `Lucide` vector icons voor Instagram en LinkedIn.
#### **III. De "Blueprint" Visuele Verfijning**
*   **Grid Overlay:** Implementeer een subtiele CSS `background-image` met een `repeating-linear-gradient` die fungeert als een technisch CAD-grid over de gehele site.
*   **Texture Layer:** Een globale `::after` pseudo-element op de `body` met een `noise-texture` (grain) en `mix-blend-mode: overlay` om de "Dark Workshop" tactiele sfeer te borgen.
*   **Logo:** De inline-SVG moet in de header links worden geplaatst, met een `filter: drop-shadow` voor diepte.
---
### 🚀 Concrete Actielijst voor het Team
| Onderdeel | Taak | Bron/Referentie |
| :--- | :--- | :--- |
| **Projecten** | Reconstructie van de 12 kaarten (map scraped data aan de 12 n


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 215 (2026-11-14 23:50 | Team Score: 82%)
Sub-agent `deepsearch_scout` fout na retry (timeout=240s): HTTP 400: {"error":{"message":"gemini/lyria-realtime-exp: model — models/lyria-realtime-exp only supports real-time bidirectional streaming via WebSocket (bidiGenerateContent). Please use the Gemini Live API (b
