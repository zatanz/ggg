---
name: poe-achievement-ux
description: Apply quest-driven UX/UI and bilingual accessibility standards when editing the Path of Exile Achievement Companion website.
---

# PoE Achievement UX/UI Skill — project-scoped

This skill applies only to `poe-all-ears/` in the `zatanz/ggg` repository. It is not a global ChatGPT skill.

## User job and information priority
Help players manually complete the four tracked achievements: All Ears, No Stone Unturned, Locomancer, No Loose Ends. Focus on the current Act and quest phase, the exact next action and STOP-before-missing requirements; keep historic source disclosures, deep lists, reward metadata and backups secondary.

1. Show Act, stage, area, quest title, progress of all four categories.
2. Show exact critical dialog with its before-action timing first. STOP must use text AND contrast, not color only.
3. Show 2–4 actionable steps. Hide long NPC/lore lists behind clearly labelled disclosures, but make all missable rows reachable directly.
4. Show only context-linked relevant item names, Waypoints and Side Quest entries, using canonical IDs once per phase.
5. Preserve optional images as original sourced conceptual artwork labelled NOT AN IN-GAME SCREENSHOT, never pretend official screenshots.

## Two independent languages
- Guidance preference: Thai or English. Name preference: English, Thai or both. Default guidance Thai / game names English. Keep these independent in their own localStorage key, separate from player and backup data.
- Official English names and canonical numerical IDs remain source truth. Thai names are editorial translations, not verified official game localization. Unknown names fall back to exact English, without invented Thai.
- All Acts 1–10 have authored Thai/English quest-stage headings, actions and STOPs. English translation of the early Acts lives in `poe-all-ears/poe-acts123-bilingual.js` and must cover all 31 original Act 1–3 phases; do not replace precise instructions with a generic English fallback. Row-level notes still originate in historical sources, and full human copy review of all 745 entries is not certified.
- Search works with both language name variants. Preserve item/quest identity when language changes.
- Avoid claiming that an English mode makes all 745 legacy row-level descriptions fully translated.

## Editorial copy acceptance — Thai first, English complete

- Each explanation should answer **what to do → which NPC/item/location → when → what must not happen first → when to mark complete**. Use short Thai conversational imperatives such as "กลับไปคุย", "ฟังให้จบ", "หยุดก่อน...", not a source-code-style sentence or an unexplained acronym. In English, use "After..., hear NPC: Topic BEFORE..." rather than filler like "Check the appropriate conditions."
- Keep official English NPC, quest, item and area names inside player instructions; show editorial Thai translations only through the independent name-mode preference. Do not alter canonical item strings or local achievement IDs.
- Never claim a Waypoint requires a manual click in every patch: newer PoE versions can activate Waypoints automatically. Instruct players to **verify that the map node is active** before marking it; keep historical ID/patch-count discrepancies visible.
- In English mode, cover the **main 100%-checklist dashboard, quest-stage steps, per-item help, source notices, Labyrinth, Vaal Side Area finder, Epilogue, in-game-count comparison and backup instructions**. A language toggle that changes only the heading is incomplete. Ensure gameplay details do not disappear when switching.
- Source-linked checklist rows should offer one action to navigate to the exact Act + source stage, without checking items or silently overwriting player state. If a row is only in Labyrinth/Vaal/Epilogue, keep its category's source detail rather than inventing a main-Act stage.
- Do not blur **bookkeeping marks** with a game-side achievement unlock. Source questions and conflicting deadlines must remain explicitly historical, including Act 2 Bandits, Act 7 Yeena/Helena timing and Act 9 alternate Highgate ruler dialogue.
- Verify **both languages in Chromium**, including search/filter, stop gates, linked quest steps, special-area Lore, source certification notices, and 375px layout. Check the meaningful instructions in both languages, not only whether the setting persists.

## Act 6 and later — source-state chronology

- Crosswalk Wiki row numbers to the original local IDs before building phases. Wiki numbers and local IDs can differ.
- Model **before using / after using / before entering** as separate phases whenever a quest object changes dialogue availability, especially Eye of Conquest.
- Show all categories present in the current stage via compact labeled jump controls. A tap must open the relevant group; never force the user to hunt through collapsed panels.
- Keep the active quest phase above all secondary Act-wide statistics and historical-risk research panels. Put redundant checklists under a clearly titled collapsed overview.
- When a user checks Lore, Waypoints or side quests, preserve that expanded group across re-renders so they can complete several tasks without reopening the same accordion.
- Keep bilingual stage headlines, step actions and STOP reasons paired. If an English translation of an older Act is incomplete, retain conservative English guidance and an expandable original Thai evidence note.
- Maintain phase-specific illustrations with explicit disclaimer and source link; visual design must make **which NPC to talk to BEFORE which irreversible action** legible without needing to interpret the illustration alone.

## Act 7 and later — safe navigation and conflicts

- Treat **all forward route controls** as potential skip actions. If a user selects a later phase that bypasses an unchecked STOP, show the count and first critical warning and ask for explicit confirmation. On Cancel, leave the current phase and selection unchanged. Never mark skipped dialogue as heard.
- Keep a **First incomplete step** button alongside phase navigation, using existing per-character marks across all four categories. Disable it when already at that phase or everything is checked.
- For phases consisting only of lore, waypoints and side quests, do not render empty NPC sections or irrelevant shortcut buttons. Display the actual current-stage progress across the present categories.
- Source contradictions (legacy Excel, historical Steam and PoE Wiki) must be separately identified with links to each available primary source. Do not silently choose one source and label it verified for patch 3.30.
- Model *after boss but before leaving the location* as a standalone phase when the source identifies a missable NPC, such as Sin after Maligaro and Yeena after Arakaali. Preserve the correct local ID as well as its separate Wiki row.
- A visual check in English must name the exact NPC, topic and before/after boundary, rather than falling back to a generic English translation. Every figure must still be explicitly a conceptual illustration if not taken from a verified game client.
- Check quest order against the game map: optional side quests may branch off the main route. Do not force linear Wiki row order when it conflicts with area progression; validate the exact ID set and document the branch.

## Act 8 and later — shared waypoint nodes and prerequisite gates

- Quest-order guidance must explain any **pre-quest dialogue / after-boss dialogue / before-leaving-zone** separately. Keep the local tracker IDs and source Wiki rows distinct, especially when they are out of order (Act 8 Clarissa, Tolman and Maramoa).
- **Love is Dead**: hearing Hargan: The Ankh of Eternity before completion and Clarissa: The Ankh of Eternity after the Tolman encounter but before exiting The Quay are different decision points; don't collapse into one check.
- **Reflection of Terror**: The Wings of Vastiri quest enables Sin: Yugul, then Hargan: Yugul. Both must be heard before the player kills Yugul. Show the dependency before a boss quest step.
- For source records containing **shared world-map nodes** (e.g., historic Act 8 "The Toxic Conduits" Waypoint but physically reached in Doedre's Cesspool), never urge players to check the waypoint on first entering the named zone. Explain the unlock event and show the historical discrepancy with exact evidence.
- PoE Waypoints may auto-activate after the change in 3.25; distinguish "visit/verify waypoint active in the game" from a false requirement to manually click every waypoint.
- If the historical total differs from a newer source (the retained 91 Locomancer records vs Wiki's later 90 Waypoints), preserve the existing player's progress schema and flag the count as **not patch-certified** rather than silently editing all canonical IDs. A versioned migration requires patch/test evidence, reconciliation and backup compatibility.
- Add screenshot disclaimers for every conceptual quest-state diagram. Its bilingual textual instructions must stand alone without interpreting colors or arrow imagery.
- Source quality checks must differentiate item availability, source-matched quest state, webpage UI tests and **real-client achievement validation**; only the last can certify 100% in-game completeness.

## Acts 9–10 and final achievement audit

- Act 9's **The Ruler of Highgate** is an irreversible dialogue branch: the canonical historical 484-ID data only includes **Irasha chosen** (Tasuni: Feather and Petarus and Vanja: Irasha at local IDs #443/#444). If Tasuni is selected, alternative Wiki rows refer to different NPC dialogue with no stable local ID. Persist the player's ruler choice per character, separately from checkbox and backup schemas. Never auto-mark branch IDs and never certify 100% for unsupported branch. Put the limitation on the *main dashboard* as well as in the quest step.
- Differentiate Sin: The Dark Ember while **without Trarthan Powder** from Sin: The Dark Ember **after both ingredients**. Preserve separate STOP phases and do not claim pre-Belly dialogues can be replayed later.
- After Depraved Trinity, stop and hear Weylam Roth: Rescue and Lilly before advancing to Act 10. Link four achievements to the same stage without changing canonical record counts.
- For Act 10, finish optional tasks (Map to Tsoatha = The Teardrop at Reliquary; No Love for Old Ghosts = Elixir of Allure at Ossuary; Vilenta's Vengeance = Control Blocks + Lani turn-in). Completion is only after in-game turn-in.
- Read Cultist Tracts in The Ravaged Square, The Desecrated Chambers and The Canals in their correct areas. Keep Staff of Purity before Bannon's Death and Rebirth and Lilly: Innocence after it. For Act 10 endings do not treat Karui Shores dialogue as part of the historical 484-ID All Ears corpus.
- The quest illustration accordion must remain open across language switches or checkbox refreshes. Static concept images need source-linked, accurate TH/EN verification text and explicit **NOT AN IN-GAME SCREENSHOT** labels.
- Do not equate browser/pass data tests with game patch validation. Preserve unresolved 91-vs-90 Waypoint discrepancy, alternate dialogue branch uncertainty, and post-3.29 reports as clearly named patch holds until gameplay evidence supports a versioned change.

## UX and accessibility
- One task per phase as primary surface; present progressive disclosure. Keep explicit Previous and Next; warn but do not permanently block when stepping past unchecked STOP lines.
- Maintain 44px minimum interactive target and visible keyboard focus, legible contrast, labelled controls, correct language semantics and mobile 375px with no horizontal document overflow.
- On mobile, display all ten Act choices without sideways scrolling; keep selection state and scroll orientation obvious.
- Switching modes must not change character, checked records, Act/phase, backup schema or quest state.
- Verify names and warnings in English and Thai using source links; do not use approximate OCR or screenshots as proof of game state.

## Validation and release
- Check Act ID coverage once per category and exact 745 canonical records unchanged.
- Run `node poe-all-ears/validate-data.cjs`, `node poe-all-ears/validate-ui.cjs`, and Playwright `node poe-all-ears/test-browser.cjs`.
- Exercise English description + Thai and bilingual game name modes, reload persistence, checkbox and character preservation, STOP Next warning, keyboard focus, mobile grid and alt text.
- Inspect GitHub Actions and Pages after PR/merge. Mark 3.30 gameplay unverified until personally reproduced in a compatible game client.
