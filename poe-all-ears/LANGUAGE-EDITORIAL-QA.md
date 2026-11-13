# Editorial language and bilingual UX quality audit

Date: November 13, 2026 (Asia/Bangkok)
Scope: `poe-all-ears/` in `zatanz/ggg`; **four** tracked achievements, not every Path of Exile achievement.
Certification: **historical PoE Wiki 2025 / legacy 3.9 source only**. No PoE 3.30 in-game achievement proof.

## Problem addressed

1. In English mode, Acts 1–3 previously showed vague fallback instructions despite having detailed Thai stage guidance.
2. The prominent "100%" summary, historical-source status, Labyrinth and Vaal special routes, Epilogue and achievement-count comparison contained Thai-only descriptions when English was selected.
3. Checklist rows commonly said only "talk to NPC" or "finish quest" and did not link the item to the precise source-led quest step. English Waypoint copy incorrectly implied a manual click was always required.
4. The language panel and static status message inaccurately claimed that only Act 5 had full bilingual guidance and Acts 2–10 lacked complete Thai instructions.

## Editorial changes

- Added `poe-acts123-bilingual.js`: **31 reviewed early-Act phases, 88 English actions and 23 specific English STOPs** (Act 1: 9 phases, 24 actions, 5 STOPs; Act 2: 10 phases, 29 actions, 9 STOPs; Act 3: 12 phases, 35 actions, 9 STOPs). Each has the same action count and original STOP meaning as the Thai source. This preserves Act 2's disputed Bandit timing, Act 1's Fairgraves item-state deadline and Act 3's Bracelet/Piety hand-in transitions.
- Revised the wording of **20 source-critical Thai phases across Acts 4–10**, including Utula/Casticus, Sin after Innocence, Eye of Conquest before/after use, Weylam before Tsoagoth, Yeena's Fireflies timing, Clarissa after Tolman, Sin and Hargan before Yugul, both Sin Dark Ember states and Weylam before travelling to Act 10. Copy states: event, NPC, **exact topic/ID**, and what transition to avoid.
- Rewrote generic per-item Thai and English descriptions for All Ears, Lore, Waypoints and No Loose Ends as **do → verify → mark completed** guidance. Quest and item names are preserved as official English; optional Thai name mode remains editorial and independent.
- Checklist items now show their exact **related quest stage** and an accessible **Open this quest step / ดูขั้นตอนของช่วงนี้** button. Navigation does not mark dialogue or change character progress.
- For Waypoints, replaced universal "click the Waypoint" guidance with "check that the node is active on the in-game map" because newer versions can auto-activate nodes. The legacy **91-versus-90 Locomancer** total is left unresolved and explicitly caveated; no ID migration.
- Localized the main 100%-checklist goal (manual marks versus in-game count), source caution, search/filter controls, Labyrinth, Vaal finder, Epilogue, count comparison and combined-backup copy. Added specific `stepsEN`, `caveatEN` and Labyrinth group labels without removing Thai source evidence.
- Corrected stale language notices: **all ten campaign Acts now have two-language quest-stage instructions**, but this does **not** mean the historical fine-grained 745 item records were individually re-certified for current patch gameplay.

## Sample writing decisions

| Earlier wording | Current player-centered instruction |
|---|---|
| "คุยกับ NPC แล้วเลือกหัวข้อ..." | "คุยกับ NPC เลือกหัวข้อ ‘...’ แล้วฟังให้จบ จึงค่อยทำเครื่องหมาย" |
| "คลิก Waypoint เพื่อเปิดจุดวาร์ป" | "ตรวจจากแผนที่ว่าจุดวาร์ปใช้ได้ แล้วจึงติ๊ก" |
| "อย่าออกจาก The Quay ก่อนคุย" | "หยุดก่อนออกจาก The Quay: หลังสู้ Tolman ต้องฟัง Clarissa: The Ankh of Eternity (ID 411) และ Tolman (ID 413)" |
| English early-Act generic "Review the original Thai conditions" | Authored English phase actions and STOPs that identify the boss/item, NPC topic and before/after boundary |

## Acceptance and tests

- Validate exact unmodified 745-record canonical dataset and original character/backup schemas; no new achievement ID or auto-marking.
- Validate all 31 Act 1–3 English phase translations, equal original action count and required English STOP coverage; Act 4–10 bilingual entries remain present.
- Chromium real browser: Thai/English on Act 1 Fairgraves, Act 2 Bandits and Act 3 Tolman's Bracelet, 100% summary, source warning, glossary/name-mode independence, category-specific help and click-through, Labyrinth, Vaal, Epilogue, compare counts, backup, and 375px horizontal overflow.
- A manual usability pass and PoE 3.30 game achievement-counter comparison are **not** replaced by Chromium tests.

## Known unresolved source holds

- Irasha/Tasuni alternative dialogue IDs in Act 9 do not match the same historical checklist rows; don't mark one as the other.
- PoE Wiki's later Waypoint count differs from the original 91-point tracker. Preserve backward compatibility pending actual current patch validation.
- Acts 1–4 detailed English per-ID historical conditions have not undergone a full 745-row human editorial review; their source-led phase instructions are complete but patch-specific item state is not certified.
- Exact game requirements, permanent missability and successful unlocks require a compatible PoE client and real counter evidence.

## Relevant files

`poe-acts123-bilingual.js`, `steam-act4.js`–`steam-act10.js`, `guide-descriptions.js`, `poe-language.js`, `special-lore-guide.js`, `hub.js`, `hub.css`, `index.html`, `validate-data.cjs`, `test-browser.cjs`, and the project-scoped skill `.agents/skills/poe-achievement-ux/SKILL.md`.

## Additional source-specific bilingual quality pass — November 13, 2026

The next review found 23 original historical NPC source warnings without corresponding English row-specific timing. **Twenty-one** are now explicitly translated at their unchanged local IDs in the English risk table (Acts 1–4), and **two** conditional Eramir entries in Act 2 (first Bandit killed and Bandit still alive) instead use **per-character dynamic English wording**. Source-wide validation covers all **62** historical flagged NPC dialogues, preserving both irreversible timing and the 2025/3.9 evidence limitation.

Specific cases include:
- Before Brutus, return to Bestel; before completing The Great White Beast, hear Silk; before finishing Intruders in Black, hear Yeena.
- Do not let Maligaro's Spike or Ribbon Spool enter the inventory before their relevant Eramir or Dialla dialogue. Before destroying Tree Roots / fighting Lorrata, hear the relevant Eramir topics.
- Alira and Oak each have a *living NPC* Darkness topic. Act 2 Eramir's first-kill topic and surviving-Bandit topic depend on the player's actual chosen first and second kills; they cannot safely be represented by fixed example names.
- Before handing Tolman's Bracelet to Clarissa, hear Hargan. Before collecting Decanter Spiritus / Chitus' Plum, hear Fairgraves. Before Piety, hear Maramoa and Grigor. Before entering The Belly of the Beast, hear the source-flagged Act 4 follow-up conversations.

Additional per-item English writing now distinguishes **15 randomly repeated Letters of Exile**, Library books that repeat by instance, changing Labyrinth room layouts, Vaal Side Area availability and obsolete Map Device instructions, and the separate requirement to complete a side quest's hand-in. It also identifies each NPC's actual **source-led Act, quest-stage headline and area** instead of the generic "find this topic at the appropriate quest stage."

Browser QA now checks English Bandit names tied to selected Alira / Kraityn with Oak surviving, while leaving historic Thai source evidence available inside the original-source disclosure. No canonical ID, checked progress, locale setting key, ruler metadata or backup/export schema is changed. None of these editorial improvements establish 3.30 game-side achievement certification.

## Bilingual historical risk-panel completion (November 13, 2026)

Previously the standard source-led walkthrough was bilingual, but opening **More historic quest warnings** exposed an older Thai-only secondary interface. That undermined player comprehension at the most sensitive irreversible quest points. This follow-up addresses the presentation gap without treating historical events as patch-3.30 facts.

- Added `poe-critical-language.js` with editorial English **title, exact event/timing, action to avoid and risk explanation** for **39 historic NPC risk groups** in Acts 1–9. Three Act 10 post-quest cards now also have specific English NPC and quest timing. The 39+3 group ID crosswalk is checked against the unchanged source file `critical-checkpoints.js`.
- Per-topic source-linked cards now show **Available when** and **Do not miss** in English, using the existing source-specific English caution where supported. The original Thai source text remains available in a collapsed disclosure. The STOP gate still uses the same required canonical dialogue IDs and does not auto-complete or bypass a warning.
- The **Bandits / Ancient Seal safety helper** has specific Thai/English wording for first and second Bandit kills, Darkness conversation checks, uncertain order across Steam/Wiki, and unsupported Book of Reform recovery. It keeps the current character's existing saved choices and does not assume one survivor.
- The secondary reward panel now distinguishes useful Passive/Refund Point rewards from entries actually counted in **No Loose Ends**. English-mode headings, hints and links are translated; no quest reward is marked as an achievement by opening the panel.
- The combined Lore, Waypoint, optional-quest and All Ears collection category descriptions are also bilingual. The 91 versus newer 90 Locomancer discrepancy remains explicitly unresolved.
- **Act 10** now explains in both languages that the absence of a separate historic STOP group does not prove its current quest state is safe.

Tests: a static validation checks all **39/39** risk-group captions, three post-quest captions, correspondence to unchanged source IDs, absence of Thai script inside English captions and absence of claims of patch certification. Chromium tests cover Act 2 Darkness/Safety and the survivor-specific Eramir gate, Act 5 Utula STOP, Act 10 post-quest notes and reward copy, and Lore collection text on 375px mobile. The suite also retains legacy route, backup, character isolation and original 745-record integrity tests.

**Remaining acceptance holds:** patch 3.30 gameplay reproduction, source disagreements and the live Achievement-counter proof are not completed by editorial changes. Some other historical source-note disclosures may intentionally preserve Thai for provenance. Their presence is not evidence of a verified in-game localization.
