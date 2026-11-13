# PoE 3.30 — gameplay evidence acceptance protocol

Date: 2026-11-13 Asia/Bangkok
Status: READY FOR EVIDENCE COLLECTION — ZERO 3.30 IN-GAME CASES CERTIFIED
Scope: PoE 1, four historical achievements in `poe-all-ears` only.
Baseline: master commit `2f480f596a19a5e97b55c670ece348d2031ef9dd`.

## Why this exists

The website has 745 manually checkable historical entries and bilingual quest-first routes for Acts 1–10. A green CI and agreement with a 2025 guide are **not** proof of a 3.30 achievement unlock. Patch 3.30 was scheduled for **November 13, 2026 PST**, later than the morning of November 13 in Bangkok. This protocol separates tests that can be automated from evidence that can only be collected in a live client.

Do not modify canonical IDs, 484/140/91/30 baselines, save/export schemas, or patch-status labels merely to force the counts to agree.

## Evidence record — mandatory fields

Each gameplay assertion must have a stable case ID and one row with all the following columns. Use `UNTESTED`, `PASS`, `FAIL`, `CONFLICT`, or `NOT_APPLICABLE`; a missing record always means `UNTESTED`.

| Field | Required format |
|---|---|
| case_id | Fixed ID from this protocol, optional suffix for branching |
| build | Exact client version and build number, platform, league/standard |
| tested_at | Absolute ISO date and timezone |
| character | Pseudonymous fresh-character ID, class, act, level; do not publish account name |
| initial_state | Quest states, chosen Bandits, relevant item inventory, prior dialogues, relevant waypoint states |
| action | Exact interaction, target NPC/topic or object, and sequence |
| observed | Topic text or game UI changes seen, actual in-game achievement counter before/after |
| evidence | Screenshot/video URL or repository-relative evidence filename plus timestamp; avoid personal data |
| mapping | Historical local ID(s), Wiki row(s), route stage ID, and exact source URL |
| outcome | PASS/FAIL/CONFLICT/NOT_APPLICABLE, reviewer, repeatability and notes |

An unlinked screenshot, a quote from a guide, CI success, manually checked boxes, and a guess from quest order cannot be recorded as PASS.

## Priority case matrix — execute before any 3.30 safe-route claim

| Case ID | Act / area | Required controlled experiment | Evidence gate |
|---|---|---|---|
| BND-01 | Act 2 — Crossroads / Wetlands / Broken Bridge | Talk to Alira, Oak, Kraityn before killing any; record topics and Ancient Seal / Darkness state | All 3 exact topics, state and ID mapping |
| BND-02 | Act 2 — first killed | Repeat each of the 3 possible first kills on separate fresh characters; inspect Eramir | Three branch-specific topic captures |
| BND-03 | Act 2 — second killed | For each first-kill branch, test both remaining second kills; inspect survivor-dependent Eramir topic | Six ordered-pair captures; do not infer surviving NPC |
| BND-04 | Act 2 — all killed | Test three-kill state, then Eramir; distinguish it from helping a Bandit | All-killed topic and reward state captured |
| BND-05 | Act 2 — help a Bandit | Test a helped-Bandit branch on a separate fresh character; compare guide's conditional IDs | Clear reachable/unreachable outcome; no invented universal route |
| BND-06 | Act 2 — The Darkness | Capture before/after relevant kills, seal and key dialogue, including any irreversible gating | Quest and topic screenshots on each side of transition |
| FGR-01 | Act 1 — Fairgraves | Capture original and post-quest interactions on fresh 3.30 character; check 3.29 reported discrepancy | Repeatable state + game-side result |
| ACT-03 | Act 3 — Clarissa / Dialla / Piety | Test Bracelet, Spool/Sulphite and boss-transition before/after states | Screenshots with quest stages and exact topics |
| ACT-07 | Act 7 — Helena / Yeena | Test before The Den, seven Fireflies, and post-Arakaali transition | Exact timing for all source-conflicting warnings |
| ACT-08 | Act 8 — Clarissa / Hargan / Sin | Test post-Doedre, Tolman/Ankh hand-in and pre-Yugul topics | Each source-specific STOP proven |
| ACT-09 | Act 9 — Highgate ruler | Test Irasha and Tasuni branches with independent characters; inspect historical local IDs #443/#444 | No claimed 484 universal total until both branches mapped |
| LOC-01 | Campaign / Epilogue | Collect current 3.30 Locomancer in-game requirements, including Aspirants' Plaza/Epilogue | Reconcile historical 91 vs later 90 using actual counter |
| LORE-01 | Campaign | Confirm Vaal Side Areas spawn in campaign and test 16 historical Vaal Letter / Journal locations | Area instance, object, page/topic and ID evidence |
| LORE-02 | Labyrinth | Inspect 10 historical Labyrinth lore objects across rotating layouts | Evidence that location advice does not assume a fixed room layout |
| LORE-03 | Library / exile letters | Record duplicate books and randomized Letters of Exile handling | Object instance and achievement-counter behavior |
| SIDE-01 | Acts 1–10 | Verify 30 historical No Loose Ends quest completions and reward/turn-in timing | Per-quest counter/state evidence |

## Coverage ledger (initial state)

- All Ears: 0/484 current-patch NPC rows proven in-game.
- No Stone Unturned: 0/140 current-patch Lore rows proven in-game; Labyrinth and Vaal are subsets, not extra checklist items.
- Locomancer: 0/91 legacy rows proven in-game; current requirement unresolved, do not change it to 90 or mark 91 current.
- No Loose Ends: 0/30 current-patch side quests proven in-game.
- Source-led bilingual routes Acts 1–10 and concept SVGs exist, but none is current-patch gameplay certified.
- Automated code smoke test is separate from independent human comprehension and accessibility testing.

## Publication gates

1. **Source-matched (existing):** evidence source and historical local ID agree; explicitly label as historical.
2. **Client-observed:** evidence record is complete, topic, quest state and build verified; may annotate individual row only.
3. **Branch-safe:** each possible player choice is represented by repeatable character-state proof; do not label a branch-independent route safe based on one successful run.
4. **Achievement-confirmed:** counters before and after correspond to the correct achievement and character; manual site marks do not qualify.
5. **Patch-certified:** only after complete 484/140/Locomancer-current/30 audit, reconciliation of branch-specific denominators, independent review and passed full live campaign regression. Do not automatically promote based on date.

For failures: mark CONFLICT, cite the original historical guidance, retain the stable local ID, show a player-facing caution, and log a source-safe proposed correction separately. Do not overwrite live progress or infer false negative unlocks.

## Bilingual and UX acceptance

For every tested dangerous transition, compare the Thai and English versions of: **where to go, who to speak to, what topic to select, what not to do yet, what opens only afterward, and what makes the dialogue unavailable**. Quest/item/NPC canonical English names must stay recoverable even when editorial Thai is selected. STOP needs a clear on-screen reason, not just a color. Ensure keyboard focus and 375px layout, first-incomplete navigation, and that checking an entry never hides it unexpectedly. Concept diagrams must remain labelled as illustrations, not in-game screenshots.

## Sources and reference files

- GGG published 3.30 schedule (13 November 2026 PST): https://steamcommunity.com/app/238960/announcements/
- Current patch notes / community mirror: https://poedb.tw/us/Version_3.30.0
- Historical dialogue sequence: https://www.poewiki.net/wiki/Guide:All_Ears_achievement
- Historical Lore corpus: https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement
- Existing source audit: [PATCH-330-AUDIT.md](./PATCH-330-AUDIT.md)
- Existing route QA: [FINAL-CAMPAIGN-QA-STATUS.md](./FINAL-CAMPAIGN-QA-STATUS.md)

This file is a test specification, **not** evidence that tests were executed.
