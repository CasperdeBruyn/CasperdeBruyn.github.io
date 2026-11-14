EO en technische risico's) direct verwerkt in een nieuwe, robuuste architectuur.
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


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 216 (2026-11-15 00:22 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Hier is de resultaten van de deepscan en het concrete voorstel voor het team. Als `deepsearch_scout` heb ik de huidige status van de lokale bestanden vergeleken met de `Project Design DNA` en de gescrapte data om de gaten te dichten.
### 🔍 1. Audit & Discrepantie Analyse (De "Waar zijn ze?" Check)
Na analyse van de `scraped_archive/pages/` (16 pagina's) en de huidige `index.html` (die slechts 7 projecten/secties lijkt te tonen), heb ik de volledige lijst gecategoriseerd volgens de **Gelaagde Architectuur** uit het inspiratiebord.
**De "Missing 9" (De ontbrekende projecten/secties):**
Om aan de 16 te komen, moeten de volgende pagina's direct worden geïntegreerd in de nieuwe structuur:
| Project/Pagina | Status | Voorgestelde Tier | Motivering |
| :--- | :--- | :--- | :--- |
| **Bomby Bird** | ⚠️ Check nodig | **Tier 1** | Cruciaal project. *Actie: Controleer afbeeldingen tegenover myportfolio.* |
| **Kodak** | 🆕 Missend | **Tier 1** | Sterke visuele storytelling kans. |
| **Generation Plastic Soup** | 🆕 Missend | **Tier 1** | Immersieve/Maatschappelijke impact. |
| **Grijpmachine** | 🆕 Missend | **Tier 1** | Techniek/Fysiek vakmanschap. |
| **Zeefdrukken** | 🆕 Missend | **Tier 1** | Tactile/Craft aspect. |
| **Vechtclub-XL** | 🆕 Missend | **Tier 1** | Branding/Design werk. |
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
