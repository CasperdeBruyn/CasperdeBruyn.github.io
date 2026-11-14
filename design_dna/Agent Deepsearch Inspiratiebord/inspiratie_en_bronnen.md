n de essentiële storytelling die we nu vertalen naar het Engels.
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


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 216 (2026-11-15 00:00 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Hier is mijn verbeterde voorstel voor het `Agent Deepsearch Inspiratiebord`. Ik heb de kritiek van de 5 testers (dataverlies, kwaliteit, UX-barrières, SEO en technische risico's) direct verwerkt in een nieuwe, robuuste architectuur.
---
# 🧭 DeepSearch & Inspiratie Vondst — Iteratie 216 (Gecorrigeerd)
**Status:** 🚀 Voorstel voor Team-Goedkeuring (>60% Target)
**Focus:** Data-integriteit, High-Res Asset Management & SEO-vriendelijke Immersie.
## 🛠 De "Integrity & Immersive" Strategie
Om de score van de vorige ronde te overtreffen, stappen we af van het "versimpelen" van data en gaan we over op een **Gelaagde Architectuur**. We gaan de 16 gescrapte projecten niet reduceren, maar categoriseren.
### **I. Data-Architectuur: De "16-Project Unified Archive"**
*In plaats van 12 projecten te kiezen en 4 te verliezen (zoals Tester 4 kritiseerde), gebruiken we een hiërarchische structuur:*
1.  **Tier 1: "Signature Dossiers" (12 Projecten):** De kern van het portfolio. Deze krijgen de volledige immersieve behandeling: Diepe storytelling, hoge-resolutie carrousels en de "Dossier Modal".
2.  **Tier 2: "The Maker's Lab" (4 Projecten):** Voor de resterende 4 projecten (bijv. snellere schetsen of experimenten). Deze worden gepresenteerd in een compacte, technische "Grid View" die minder zwaar is voor de performance, maar wel de volledige breedte van Casper's vaardigheden toont.
*   **Resultaat:** 100% data-behoud van de `scraped_archive/pages/`.
### **II. Asset Quality Protocol (Anti-Pixelatie Garantie)**
*In plaats van lage kwaliteit te maskeren met een retro-stijl (zoals Tester 1 opmerkte), implementeren we een strikte bron-audit:*
1.  **Cross-Reference Scan:** De developers moeten elke afbeelding uit `assets/images/` vergelijken met de bron-URL's op `casperdebruyn.myportfolio.com`.
2.  **High-Res Fallback:** Als een afbeelding in de lokale map lage resolutie heeft, wordt deze **niet** gebruikt. De agent moet de instructie krijgen om de directe image-link van de Adobe Portfolio-site te extraheren en te downloaden voor de `assets/` map.
3.  **Contextual Styling:** Alleen als een project (zoals *Bomby Bird*) inherent een "digital/retro" karakter heeft, wordt een subtiele `CSS grain` of `scanline` overlay gebruikt om de kwaliteit te *ondersteunen*, niet om een fout te *verbergen*.
### **III. UX & Accessibility: De "Hybrid Interface"**
*Om de recruiter-barrière te doorbreken (zoals Tester 2 opmerkte), maken we de Terminal-stijl optioneel/complementair, niet exclusief:*
1.  **Contact Form:** Een "Dual-Layer" formulier.
*   *Basis:* Een helder, modern, leesbaar formulier (Input: Naam, Email, Bericht).
*   *Aesthetic:* Een subtiele "Terminal Skin" (monospace fonts, koperen randen, een knipperende cursor in de tekstbox) die de stijl geeft zonder de bruikbaarheid te hinderen.
2.  **The "Quick-Link" Contact:** Voor recruiters die geen zin hebben in een terminal-interface: een directe `mailto:` knop in de footer in koper (`#C87D4B`).
### **IV. Technische Structuur: SEO & Deep-Linking**
*Om de SEO-kritiek van Tester 5 weg te nemen, implementeren we de Modals met URL-routing:*
1.  **Hash-based Routing:** Elke project-modal krijgt een unieke URL-hash: `casperdebruyn.github.io/#project/bomby-bird`.
2.  **Functionality:**
*   Gebruikers kunnen een specifiek project direct delen via de URL.
*   De "Terug"-knop van de browser werkt correct om de modal te sluiten.
*   Implementeer `history.pushState` bij het openen van een modal voor een naadloze ervaring.
---
## 📋 Conceptueel Voorstel voor het `Agent Deepsearch Inspiratiebord`
| Pijler | Implementatie Detail | Doel |
| :--- | :--- | :--- |
| **Visual Identity** | **"The Blueprint Workshop"**: `The Dark Workshop` (warm hout/donker) met een `CAD-Grid` overlay (technisch/blauw/wit) via `mix-blend-mode: overlay`. | Synthese van Ambacht & Sci-Fi. |
| **Navigation** | **"The Dossier Engine"**: Modals met `backdrop-filter: blur(12px)` en unieke URL hashes. | Immersie zonder SEO/U
