# Act 7 — Bilingual Quest Route & UX Source Audit

Reviewed: November 13, 2026 · Asia/Bangkok
Implementation: 19 quest-state stages in `steam-act7.js`; canonical storage and previous achievement IDs unchanged.
Certification: **HISTORICAL guidance only, NOT game-tested or certified for PoE patch 3.30**.

## Canonical coverage

| Tracked Achievement | Act 7 canonical local IDs | Count | In-context route |
| --- | --- | ---: | --- |
| All Ears | 342–386 | 45 | 45 unique dialogue references, matched to 45 Wiki rows |
| No Stone Unturned | 113–120 | 8 | Chamber of Sins, Ashen Fields, Dread Thicket, Causeway, Vaal City, Temple Level 1/2 |
| Locomancer | 60–68 | 9 | Bridge Encampment through Vaal City |
| No Loose Ends | 16–19 | 4 | The Silver Locket, In Memory of Greust, Queen of Despair, Kishara's Star |
| **Total** | Existing tracker records only | **66** | **19 stages** |

The entire project's four tracked achievement sets remain **484 + 140 + 91 + 30 = 745** records. No achievements are automatically verified. NPC dialogue is grouped by source- and quest-state chronology, **not strictly Wiki row order**; this matters because the Act 7 chain branches and the old local IDs are not always identical to Wiki row IDs.

## STOP and prerequisite checkpoints

1. **Sin after Maligaro** — Wiki row/local ID 369 must be heard after defeating Maligaro in his Sanctum, with historical advice to speak before leaving.
2. **Helena / The Den** — local ID 365 after finding the blocked old Forest Encampment passage but before The Den. The legacy inventory claims "before Fellshrine Ruins" while the current *historical* Wiki wording says before continuing toward The Den; show both, do not silently harmonize.
3. **Queen of Despair / Gruthkul** — Eramir: Gruthkul ID 378 (Wiki row 380) before killing Gruthkul; separate post-fight Eramir: Gruthkul ID 381.
4. **Seven Fireflies / Yeena** — Yeena: Arakaali's Temple ID 382 after finding all seven Fireflies but before meeting her in The Vaal City. Legacy inventory says before entering The Causeway; Wiki says before meeting Yeena in Vaal City. The discrepancy is visible and linked to the repo's source inventory.
5. **Yeena after Arakaali** — ID 384 after killing Arakaali, before exiting The Temple of Decay Level 2.
6. **Kishara's Star** — side quest item located in The Causeway near the exit to The Vaal City and returned to Weylam; its NPC introduction ID 377 is in a separate early phase.
7. **In Memory of Greust** — Greust's Necklace goes to the Azmeri shrine in The Northern Forest, then return to Helena. It is not merged with the post-boss Helena and Yeena Greust dialogues.

All warnings originate in the historical Wiki and previously audited data and require fresh in-game confirmation for patch 3.30. Do not confuse the local IDs in this guide with Wiki source row numbers.

## Bilingual and UX/UI changes

- Author-written Thai and English headings, quest action lists, and all critical STOP reasons for every Act 7 stage.
- Name-mode glossary adds 35 editorial Thai terms for quests, areas and key quest items; source English remains available and unknown translations fall back to canonical English.
- Quest illustrations' English check instructions now identify the exact NPC and before/after action instead of a generic note.
- New **First incomplete step** action returns to the earliest incomplete phase across all four linked achievement types. Disables when the current phase is already that phase or all tasks are checked.
- **Act 7 phase dropdown forward skips** count any unchecked STOP checkpoints between current and target phases and ask for confirmation. Cancelling preserves the current phase and resets the selection. The Next action retains its existing warning, and no jump checks dialogue on behalf of the player.
- Lore/Waypoint/side-quest-only phases do not show a dummy empty NPC section. The current stage remains first, with other categories accessible via quick jump controls and Act-wide summary collapsed.
- Three original SVG diagrams: `act7-den-helena-stop.svg`, `act7-fireflies-yeena-stop.svg`, `act7-arakaali-yeena-stop.svg`. Each is a concept diagram, NOT a game screenshot, and has a specific TH/EN check below. Total conceptual diagrams across Acts 1–7 is **16**.
- Existing repo-scoped skill `.agents/skills/poe-achievement-ux/SKILL.md` expanded with safe navigation and source conflicts; no new global ChatGPT skill installed.
- Player marks, characters and aggregate backup schema have not changed.

## Validation gates

Run `node poe-all-ears/validate-data.cjs`, `node poe-all-ears/validate-ui.cjs`, `node poe-all-ears/test-browser.cjs` (Playwright Chromium).

Requirements: exactly 66 original Act 7 ID references across 19 phases; no duplicate IDs; 16 source-labelled illustrations; correct 5 critical STOP IDs; two documented source discrepancies; independent language settings; canceled/accepted dropdown skips; no empty NPC panel; mobile 375px overflow check; prior Act1–6 regression suite.

## Authoritative historical references

- [All Ears Act 7 — PoE Wiki](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7), historical 2025.
- [No Stone Unturned — PoE Wiki](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement), historical 2025.
- [Act 7 progression map — PoE Wiki](https://www.poewiki.net/wiki/Act_7).
- [The Master of a Million Faces](https://www.poewiki.net/wiki/The_Master_of_a_Million_Faces).
- [Lighting the Way](https://www.poewiki.net/wiki/Lighting_the_Way).
- [The Silver Locket](https://www.poewiki.net/wiki/The_Silver_Locket).
- [Kishara's Star](https://www.poewiki.net/wiki/Kishara%27s_Star).
- [In Memory of Greust](https://www.poewiki.net/wiki/In_Memory_of_Greust).
- [Legacy route inventory with source discrepancies](./act7-inventory.json).
- [Original historical Steam guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869).

## Remaining work

Act 8–10 still require equivalent reviewed route phases; old Act1–4 English source notes need deeper author review; PoE 3.30 must be tested in game with a compatible character and actual achievement counter evidence before claiming 100% correctness.
