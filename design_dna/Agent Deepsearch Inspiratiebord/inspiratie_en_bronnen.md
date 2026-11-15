en opgelost via de MyPortfolio-bron.
*   **Logo/Header Discrepantie:** De 3 logo-varianten moeten van de huidige positie naar de **Header Left** worden verplaatst, met een harde eis voor SVG-gebruik om pixelvorming te voorkomen.
## 2. 💡 Voorstel voor het `Agent Deepsearch Inspiratiebord`
Ik stel voor om de volgende module direct te laten verankeren om de "Futuristische Klassieke" stijl te waarborgen.
### **Nieuwe Module: "The Digital Blueprint Archive"**
| Element | Visuele/Technische Richtlijn | Doel |
| :--- | :--- | :--- |
| **Core Aesthetic** | *Tactile Sci-Fi*: Een combinatie van ruw hout (textures) en strakke CAD-lijnen (UI). | De unieke persoonlijkheid van Casper (Maker + Digital Designer). |
| **Interaction** | **The Dossier Drawer**: Een `side-drawer` met `backdrop-filter: blur(12px)`. | Voorkomt 'overwhelming' homepage; biedt diepgang zonder contextverlies. |
| **Typography** | Heading: *Playfair Display* (Klassiek) / Body: *Inter* (Modern) / Data: *JetBrains Mono* (Tech). | Creëert de balans tussen ambacht en digitalisme. |
| **Visual Overlay** | Subtiele `grain` texture + `CAD-Grid` parallax op de achtergrond. | Geeft de site een tastbaar, bijna fysiek gevoel. |
| **Navigation** | Minimalistische Vector Icons (IG/IN) in `#C87D4B`. | Scherpe, professionele uitstraling zonder zware assets. |
---
## 🚀 Directe Actie-instructies voor het Team (Focus tot 10:00)
### **🤖 [Content Agent] — "The Data Architect"**
1.  **Project Reconstruction:** Gebruik de 16 gescrapete pagina's om de 5 "ontbrekende" projecten te identificeren. Voeg deze toe aan de project-grid op de homepage als 'Tier 2' of 'Archive' items.
2.  **Asset Verification:** Match elke subpagina uit `scraped_archive/pages/` 1-op-1 met de juiste high-res afbeelding in `assets/images/`.
*   *Specifieke opdracht:* Fix `bomby-bird` door de assets van `casperdebruyn.myportfolio.com` te gebruiken.
3.  **Storytelling Sync:** Zorg dat de teksten (English only!) de "Maker Manifesto" stijl volgen (geen standaardteksten, maar persoonlijke storytelling over CMD, houtbewerking en de Linux AI Homelab).
### **🎨 [Frontend Agent] — "The Immersive Architect"**
1.  **Implementeer de 'Drawer Engine':** Vervang alle standaard links naar projecten door een trigger voor de `side-drawer`. Gebruik `URL-hashes` (`#project-name`) voor navigatiegeschiedenis.
2.  **Color System Audit:** Forceer de "The Dark Workshop" variabelen in de CSS.
*   *Backgrond:* `#161412`
*   *Accent:* `#C87D4B` (Koper)
*   *Verbied:* `#FFFFFF` (Hard wit).
3.  **Header Rebuild:** Verplaats de 3 logo-varianten naar de linkerbovenhoek. Implementeer `image-rendering: crisp-edges` of wissel naar SVG.
4.  **Contact Form 'Ghost' Mode:** Bouw het formulier zo dat het mailadres `casper.debruyn@hotmail.com` via een API/Backend wordt verstuurd zonder dat het in de broncode zichtbaar is voor scrapers. Voeg een "Success Window" toe na verzending.
5.  **Social Clean-up:** Verwijder de Discord-knop. Voeg de Instagram en LinkedIn links toe met zuivere vector iconen.
---
**Scout Opmerking:** *De basis is technisch gezond (geen dode


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 227 (2026-11-15 01:25 | Team Score: 82%)
Sub-agent `deepsearch_scout` fout na retry (timeout=240s): HTTP 400: {"error":{"message":"gemini/lyria-realtime-exp: model — models/lyria-realtime-exp only supports real-time bidirectional streaming via WebSocket (bidiGenerateContent). Please use the Gemini Live API (b


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 228 (2026-11-15 01:42 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Hier is mijn analyse en het concrete voorstel voor het team. Ik heb de gescrapete subpagina's, de huidige technische status en de visuele moodboards naast elkaar gelegd om de "missing links" te identificeren.
---
# 🧭 DeepSearch Scout Rapport: Project CasperdeBruyn.github.io
**Status:** `INSPIRATIE & BRON-MATCHING VOLTOOID`
**Focus:** De brug slaan tussen de 16 gescrapete data-punten en de "Tactile Sci-Fi" visie.
## 1. 🔍 De "Missing Project" Audit (Data Reconciliation)
Uit de scan van `scraped_archive/pages/` (16 items) en de vergelijking met de huidige `index.html` (7 projecten zichtbaar), heb ik de ontbrekende schakels gevonden.
**De 5 "Verloren" Projecten (Identificatie):**
Op basis van de scrape zijn dit de projecten die momenteel waarschijnlijk ontbreken in de homepage-grid maar wel in de data zitten:
1.  `de-grinch-sloopt-de-kerstboom` (Storytelling/Design)
2.  `generation-plastic-soup` (Social/Design)
3.  `grijpmachine` (Techniek/Maker)
4.  `osrs-kerstposter` (Digital Art/Community)
5.  `zeefdrukken` (Fysiek Ambacht/Craft)
*(Andere kandidaten: `vechtclub-xl` of `picknicken-met-sophie` – deze moeten als 'Tier 2' of 'Archive' worden ingedeeld om de homepage niet te overladen).*
**Kritieke Fix:**
*   **`bomby-bird` Error:** De huidige afbeeldingen op de site matchen niet. De `scraped_archive` bevat de juiste visuele context van MyPortfolio. De Frontend Agent moet de assets uit de scrape direct mappen naar de `assets/images/bomby-bird/` map.
## 2. 💡 Voorstel voor het `Agent Deepsearch Inspiratiebord`
Ik stel voor om de volgende visuele laag toe te voegen om de "Futuristische Klassieke" stijl te verankeren.
### **Nieuwe Module: "The Materiality & Blueprint Overlay"**
| Element | Visuele/Technische Richtlijn | Doel |
| :--- | :--- | :--- |
| **The Hybrid Texture** | Een overlay die wisselt tussen `grain` (papier/hout) en `scanlines` (digitale terminal) tijdens interactie. | De dualiteit tussen de houtbewerker en de CMD-student benadrukken. |
| **CAD-Interface UI** | Gebruik van `border-style: dashed` en `accent-copper` (Koper) voor de kaders van de `side-drawer`. | Projecten voelen aan als 'blueprints' die worden geopend. |
| **Micro-Interaction** | Wanneer een project wordt geopend: een korte "flicker" of "draw-in" animatie (als een CAD-tekening die getekend wordt). | Maakt de overgang naar de diepte (drawer) immersief en high-tech. |
| **Typography Layering** | `Playfair Display` voor de titels van de projecten, maar met een subtiele `text-shadow` die lijkt op een inbranding in hout. | Verbindt het klassieke design met het fysieke ambacht. |
---
## 🚀 Directe Actie-instructies voor het Team (Prioriteit tot 10:00)
### **🤖 [Content Agent] — "The Data Architect"**
1.  **Project Re-Integration:** Voeg de 5 geïdentificeerde ontbrekende projecten toe aan de `project-grid`. Gebruik een "Archive" sectie voor de minder centrale projecten (`vechtclub-xl`, etc.) om de focus op de kern te houden.
2.  **The Maker Manifesto (English):** Schrijf voor elk van de 12 projecten een korte, krachtige Engelse tekst.
*   *Focus:* "How did I build this?" (The Maker aspect) + "What was the design intent?" (The CMD aspect).
3.  **Asset Mapping:** Forceer de koppeling: `scraped_archive/pages/bomby-bird/` $\rightarrow$ `assets/images/bomby-bird/`. Check op pixelvorming.
### **🎨 [Frontend Agent] — "The Immersive Architect"**
1.  **Drawer Engine Deployment:** Implementeer de `side-drawer` (pop-up) voor álle 12 projecten.
*   *Eis:* Gebruik `backdrop-filter: blur(15px)` en de `--bg-secondary` (#231F1D) voor de achtergrond van de drawer.
*   *Exit-strategie:* Zorg voor een duidelijk 'X' icoon (vector) in de rechterbovenhoek en een "click-outside-to-close" functie.
2.  **Header & Logo Fix:**
*   Verplaats de 3 logo-varianten naar de **Header Left**.
*   Gebruik enkel SVG. Als er geen SVG is, gebruik `image-rendering: crisp-edges` op de hoogste resolutie bron.
3.  **The Ghost Contact Form:**
*   Maak het formulier werkend


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 229 (2026-11-15 01:51 | Team Score: 82%)
Sub-agent `deepsearch_scout` fout na retry (timeout=240s): HTTP 400: {"error":{"message":"gemini/lyria-realtime-exp: model — models/lyria-realtime-exp only supports real-time bidirectional streaming via WebSocket (bidiGenerateContent). Please use the Gemini Live API (b


---
## 🧭 DeepSearch & Inspiratie Vondst — Iteratie 230 (2026-11-15 01:55 | Team Score: 82%)
🤖 **[Sub-Agent `deepsearch_scout`]:**
Hier is mijn analyse en het concrete voorstel voor het team. Ik heb de gescrapete data, de huidige technische status en de Design DNA gecombineerd om een brug te slaan tussen de "fysieke maker" en de "digitale designer".
---
# 🧭 DeepSearch Scout Rapport & Voorstel
**Status:** Klaar voor uitvoering | **Focus:** Integratie, Herstel & Immersie | **Deadline:** 10:00
## 1. 🔍 Analyse van de Bronnen (DeepScan Resultaten)
### **A. De Project-Puzzel (Content Mapping)**
Uit de `scraped_archive/pages/` (16 pagina's) heb ik de 12 kernprojecten geïdentificeerd die nodig zijn om de website compleet te maken (7 aanwezig + 5 missend).
*   **De 7 huidige projecten:** (Geïdentificeerd via de audit)
*   **De 5 "Missing Links" (Prioriteit voor Content Agent):**
1.  `de-grinch-sloopt-de-kerstboom` (Storytelling/Design)
2.  `osrs-kerstposter` (Digital Art/Community)
3.  `zeefdrukken` (Fysiek Ambacht)
4.  `grijpmachine` (Techniek/Maker)
5.  `generation-plastic-soup` (Social/Design)
*   **De "Archive" Sectie (Tier 2):** `vechtclub-xl`, `picknicken-met-sophie`, `samen-spelen`, `school-projecten`, `hu-begeleidt`. *Deze worden niet op de homepage getoond om de focus te behouden, maar zijn wel vindbaar via een 'Archive' link of in de drawer.*
### **B. Kritieke Foutdetectie**
*   **`bomby-bird` Error:** De audit bevestigt dat de huidige `<img>` tags op de live site niet matchen met de visuele context in de `scraped_archive`.
*   **Logo-fout:** De 3 logo-varianten zijn momenteel niet correct gepositioneerd in de header (links).
*   **Socials:** De huidige implementatie mist de vector-kwaliteit (SVG) voor Instagram en LinkedIn.
---
## 2. 💡 Voorstel voor het `Agent Deepsearch Inspiratiebord`
Ik stel voor om de visuele identiteit te verankeren met de volgende nieuwe module. Dit is de "lijm" tussen je houtbewerking en je CMD-studies.
### **Nieuwe Module: "The Blueprint & Grain Overlay"**
| Element | Visuele/Technische Richtlijn | Psychologisch Doel |
| :--- | :--- | :--- |
| **The Hybrid Texture** | Een subtiele CSS-overlay: bij rust `grain` (papier/hout), bij hover/interactie een lichte `scanline` (digitale terminal). | Laat de overgang zien van fysiek naar digitaal. |
| **CAD-Interface UI** | Gebruik van `border-style: dashed` en `--accent-copper` (#C87D4B) voor de kaders van de `side-drawer`. | Projecten voelen aan als technische blauwdrukken die worden geopend. |
| **Typography Layering** | `Playfair Display` voor koppen (Klassiek/Hout) met een zeer subtiele `text-shadow` (inbranding-effect). `JetBrains Mono` voor meta-data (Digital/Linux). | De dualiteit van de "Maker" en de "Coder". |
---
## 3. 🚀 Directe Actie-instructies voor het Team (Prioriteit tot 10:00)
### **🤖 [Content Agent] — "The Data Architect"**
1.  **Project Re-Integration:** Voeg de 5 geïdentificeerde missende projecten toe aan de `project-grid`.
2.  **The Maker Manifesto (English):** Schrijf voor elk van de 12 projecten een korte tekst. *Template: "The Concept" (CMD) + "The Build" (Maker aspect).*
3.  **Asset Mapping (CRITICAL):** Map `scraped_archive/pages/bomby-bird/` $\rightarrow$ `assets/images/bomby-bird/`. Controleer op pixelvorming (gebruik `image-rendering: crisp-edges` indien nodig).
### **🎨 [Frontend Agent] — "The Immersive Architect"**
1.  **Side-Drawer Deployment:** Implementeer de pop-up voor projectdetails.
*   **Eis:** `backdrop-filter: blur(15px)` met `--bg-secondary` (#231F1D).
*   **Exit:** 'X' vector icoon + `click-outside-to-close`.
2.  **Header & Logo Fix:**
*   Verplaats de 3 logo-varianten naar **Header Left**. Gebruik SVG of hoogste resolutie met `crisp-edges`.
3.  **Socials & Contact:**
*   Vervang huidige sociale iconen door **SVG vectors** voor IG en LinkedIn.
*   Implementeer de **Ghost Contact Form**: Mail naar `casper.debruyn@hotmail.com` (hidden), gevolgd door een "Thank You" overlay/window.
### **🛠️ [Technical Agent] — "The System Integrator"**
1.  **Color Enforcement:** Forceer **Optie 1: "The Dark Workshop"** in `style.
