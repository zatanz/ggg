# PoE Achievement Companion — Single consolidated implementation handoff
Date 2026-11-14 | repo zatanz/ggg | source branch docs/poe-final-content-ux-handoff-20261114

## Execution contract
Codex: implement and test on feature branch + PR, NOT a direct change to master. ChatGPT owns editorial source reconciliation and bilingual content. Do not modify game client or build Client.txt/OAuth sync; user explicitly paused game connection. Do not infer game completion or auto-tick from area navigation. Preserve all existing per-character localStorage, export/import, and checked state.

## Source and structural evidence
The companion currently tracks 484 All Ears + 140 Lore + 91 historical Waypoints + 30 Side Quests = 745 source rows; a 127-stage campaign references all 484 All Ears but lacks 25 Lore, 34 Waypoint, and 8 Side Quest references in its phase arrays. The adjacent route-mapping-67-20261114.json has the 67 exact canonical type/ID pairs and stage placement, 18 with sequencing/detour notes. No duplicate checkboxes. There are 29 out-of-campaign records: 10 Labyrinth lore, 16 Vaal lore, and one Labyrinth waypoint are already rendered by specialLoreRoute() and must be kept discoverable; 2 obsolete Epilogue waypoints need correction. These are structural findings, not game patch 3.30 verification.

## P0: editorial fixes — preserve canonical IDs
- Act 2 Silk: The Great White Beast local ID 57 (PoE Wiki row 62), not 62. Hear before completing sidequest.
- Act 6: Sin The Cloven One #328; Abberath #329; The Puppet Mistress #330; Ryslatha #331. Their Wiki row order differs. Fix visible actions/actionsEN only where incorrect, not already correct dialogueIds.
- Act 7: Sin Mother of Despair #376; Weylam Roth Kishara #377; Eramir Gruthkul preboss #378; Yeena Greust #379; Helena Greust #380; Eramir Gruthkul postboss #381. Avoid row/ID swapping.
- Act 8: Clarissa Ankh #411 and Tolman #413 in The Quay, separate from Maramoa Clarissa/Tolman #412 in town; Sin Yugul #409 and Hargan Yugul #410 precede boss.
- Act 9: Sin Garukhan #439 and Petarus/Vanja #440 prerequisite before Feather turn-in, Dark Ember #438 before Trarthan Powder and #445 after preparing ingredients. Do not mark Tasuni branch conversation as Irasha or vice versa (#441–444).
- Fix displayed Lily Roth to Lilly Roth for All Ears IDs 316,317,336,337,340. Lore #73 Godess to Goddess. Keep keys/IDs unchanged.
- Act 5 innocence-lore repeats the Sin Innocence stop but has no stopIds. Consolidate into one STOP at innocence-sin for All Ears #277.
- hub.js epilogueRoute() currently incorrectly tells users to collect two additional legacy waypoints after Act 10: #90 Oriath and #91 The Templar Laboratory. Preserve those keys and imported old checkmarks, but move to collapsed HISTORICAL records, not mandatory active route or current progress-to-100%. TH: "Waypoint สองจุดนี้เป็นข้อมูลเก่าที่เก็บไว้รองรับเซฟเดิม ไม่ใช่จุดที่ต้องเดินทางไปเปิดหลัง Act 10 โปรดเทียบตัวนับ Locomancer กับ Waypoint ที่มีอยู่จริงในเกม". EN: "These two waypoints are historical records kept for save compatibility, not destinations to unlock after Act 10. Verify the current Locomancer counter against active in-game waypoints."

## P0/P1: source-grounded stop rules
Act 1: Bestel Undead Rhoas #21 after Oozeback Bloom before Submerged Passage or Fetid Pool; Glyph Wall #22–23 before inserting glyphs; Bestel Brutus #27 before killing Brutus. Nessa Piety #28 and Bestel Marceus Lioneye #29 should NOT be asserted permanently blocked simply by Brutus death; Bestel Prisoner's Gate #31 is a trigger, not proven irreversible Ship Graveyard boundary. Fairgraves #34–38 patch issue stays HOLD pending actual game evidence.
Act 2: Eramir Baleful Gem #77 while holding gem but not Spike; Maligaro Creation #91 after both; Ancient Gateway #92 after Lorrata discovery before killing. Steam and Wiki disagree about talking to Bandits before Ancient Seal: present the conflict, not a fake safe route. Alira #100 and Oak #102 The Darkness while alive, Eramir kill-order subjects depend on order.
Act 3: Hargan Introduction #118 before returning Tolman's Bracelet; Maramoa Crossing River #140 after Sewers blockage, not unsupported Marketplace STOP; #158 after entering Ebony Barracks before Gravicius; Fairgraves Introduction #142 before quest items; Dialla Introduction #148 before Sulphite/Spool, Sulphite #153 without Spool; Maramoa Piety #161 and Grigor Lunaris #164 before killing Piety (not before Belly of Beast).
Act 4: Kira Deshret #220 before freeing Deshret; Dialla Kaom/Daresso #223/#224 before both boss tasks complete; Piety Godless Three #241 between boss and Harvest; Tasuni Apprentices #245 before Malachai; Piety Malachai #247 and Dialla Malachai #248 follow different item/boss triggers.
Act 5: Utula Casticus #275 after Casticus before Avarius, not invented entering-Oriath stop; Sin Innocence #277 after fight before leaving chamber, Sign of Purity #295 after pickup before Ossuary exit.
Act 6: Bestel Tukohama #320, Tarkleigh #321/322 surrounding Eye use, Weylam #338/339 before Tsoagoth.
Act 7: Helena Den #365 after path blockage, no invented Fellshrine stop; Yeena Arakaali Temple #382 after seven Fireflies before Vaal City meeting.
Act 8: Hargan Ankh #407 before Love is Dead closure; Sin Yugul #409 + Hargan Yugul #410 before boss; Clarissa #411/#413 in Quay and Maramoa #412 in town.
Act 9: General Adus Petarus/Vanja #436 after Storm Blade before Foothills, Sin Dark Ember #438 and #445 separate, Weylam #448/#449 after Trinity before Act 10.
Act 10: do not invent a STOP with no source metadata. All unverified hard stops get an explicit PATCH UNVERIFIED / HISTORICAL warning.

## P1: route binding
Read the entire JSON mapping file, validate unique type+ID count 67 (25/34/8), verify each source ID in lore-data.js or extra-data.js, and bind to its proposed stage within steam-quest-walkthrough.js and steam-act*.js. 18 rows have priority sequence notes.
Important: The Dweller of the Deep = The Flooded Depths detour; Etchings on Wood I–IV and Crossroads waypoint deserve a visible area substep; Caverns waypoint before Vaal Oversoul, Sceptre of God waypoint before Dominus; Sailor's Skin before Merveil, Damp Diary may be read after Merveil so no invented preboss STOP; Fairgraves and Silk dialogue completion cannot be inferred from sidequest checkbox. Preserve special 27 lore/waypoint items in noncampaign guides.

## P1: clean progress/quest UX
At top of the primary route, display a conspicuous compact Resume panel with current Act, area, quest name, next single task, checked X/Y for this step, unresolved STOP, and button "Continue from last viewed stage". Separate these 4 concepts: last viewed stage, actual manual checkmarks, player-confirmed quest completed, unresolved stop. Site cannot read actual game; never claim game-synced state. Remember last viewed per character. Make a simple novice-first path and collapse secondary tables/rewards; avoid nested overload and duplicate metrics. Mobile responsive, keyboard, screen-reader, TH/EN.

## P1: low-friction contextual community reports
Small "ข้อมูลตรงนี้ผิด?" / "Report issue" on dialogue, STOP, quest step, Lore, waypoint, sidequest, translation and UI help. Autofill local ID, type, Act, phase, guide revision/language; ask 1 problem type, optional short text, optional evidence. No re-entering ID/Act/NPC. GitHub Issues requires an account; do not describe it as anonymous no-login submission. If using anonymous backend, require spam/rate controls, duplicate triage, moderation, privacy-safe retention; reports must never auto-change canonical content. After successful server response, show actual issue status. Do not upload save backups or identify players automatically.

## Acceptance / signoff checklist
- One implementation PR that links to the tracking issue; no silent direct master edits.
- Source counts still 484/140/91 legacy/30, 745 persisted rows, 484 route records, 127 stages; every referenced ID resolves and no duplicate tick source.
- 67 route bindings are all discoverable and positioned correctly, TH/EN labels & actions are correct, correct named areas and STOP order, proper branch constraints.
- Legacy #90/#91 preserved on import but excluded from mandatory actionable route.
- 4 independently visible progress/quest state types. Navigation does not check content.
- Smoke-test Act 1/2/3 novice path, Act 6/7 numeric mismatch, Act 9 branch, special Labyrinth/Vaal, and mobile, keyboard focus, import/export and multi-character.
- Test feedback submit/failure state and duplicate triage; no false-success UI.
- Provide commit/PR links, test output, known HOLD and readback after deployment before calling this finished.

## Known factual HOLDs
Fairgraves #34–38, Bandits/Ancient Seal route contradiction, Act 9 Irasha/Tasuni variant coverage, active Locomancer 3.30 counter, all patch 3.30 gameplay-specific changes. No verified test gameplay from this handoff. Keep HOLD explicit instead of blocking safe frontend work.

## Reference sources
https://www.poewiki.net/wiki/Guide:All_Ears_achievement
https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement
https://www.poewiki.net/wiki/Waypoint
https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869
