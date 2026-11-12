# PoE 1 Achievement Companion — critical quest-sequence audit

Checkpoint: 2026-11-12, Asia/Bangkok.
Product state: historical preview, **not a certified 3.30 walkthrough**.

## Why the old ordering was insufficient

The old route grouped dialogues according to 2025 PoE Wiki row order and listed lore, waypoints, side quests, and rewards separately. A row order is not a dependency graph: NPC dialogue can require a quest to be accepted, an item to be absent from the inventory, a boss to remain alive, or a bandit choice to be made only after another step. Sorting rewards by passive-point value is not the order in which the quests should be completed.

## Priority implementation (P0)

Implemented **39 explicitly scoped checkpoints across Acts 1–9**, referencing **72 dialogue checklist IDs**. Each checkpoint now shows:
- A named **before** boundary (the action that should not be crossed yet), related quest and location.
- Short concrete action instructions and a link to the exact Act section in the 2025 Wiki guide.
- Interactive existing All Ears dialogue checkboxes, reading and writing the same per-character IDs as the master checklist. No duplicate achievement counters.
- Checked/incomplete status and matching **historical quest reward** when the quest exists in the 58-entry reward index.
- Act 2 manually tracked Bandits/Ancient Seal/The Darkness state and Eramir branch labels. No game telemetry.

### Act 1 (3 checkpoints, 12 references)

| Checkpoint | Before / dependency | Dialogue IDs |
| --- | --- | --- |
| Mud Flats / Breaking Some Eggs | Talk to Bestel and Tarkleigh after encountering the glyph sequence; check warnings **before inserting Glyphs / leaving the area** | 21, 22, 23 |
| Prison / The Caged Brute | After prison / journal conditions, check Tarkleigh, Bestel and Nessa before **killing Brutus** | 26, 27, 28, 29 |
| Ship Graveyard / The Marooned Mariner | Talk to Fairgraves, return to Bestel and back to Fairgraves **before taking Allflame** | 34–38 |

### Act 2 (7 checkpoints, 16 references)

| Checkpoint | Before / dependency | Dialogue IDs |
| --- | --- | --- |
| Great White Beast | Talk Silk **before finishing** the quest | 57 |
| Intruders in Black | Greust/Yeena about Chamber of Sins **before rescuing Helena / quest completion** | 69, 75 |
| Baleful Gem → Maligaro's Spike | Eramir with gem only; next with spike; then before dealing with Lorrata | 77, 91, 92 |
| Ancient Seal / The Darkness | **Speak to three bandits first; break the Seal; collect Darkness dialogue before killing bandits**. Kraityn lacks Darkness topic in 2025 Wiki | 95, 99, 98, 96, 97, 100, 102 |
| First bandit kill | Return to Eramir for **first-killed** bandit topic before next kill | 89 (Wiki #101; name depends on choice) |
| Second bandit kill | Return to Eramir for **surviving** bandit topic before final kill | 101 (Wiki #102; name depends on choice) |
| Third bandit kill | After all three killed, get Eramir's Bandit Lords topic | 103 (Wiki #103, kill-all branch only) |

The Bandits sequence describes the all-kill route in the historical Wiki and cannot be asserted correct for players who **help** a bandit without separately checking that path.

### Act 3 (5 checkpoints, 7 references)

| Checkpoint | Before / dependency | Dialogue IDs |
| --- | --- | --- |
| Lost in Love | Hargan after Tolman's Bracelet **before giving quest to Clarissa** | 118 |
| Lady Dialla / The Ribbon Spool | Introduction before holding the quest items; later Thaumetic Sulphite topic without Ribbon Spool | 148, 153 |
| Fairgraves / A Swig of Hope | Introduction before holding Decanter Spiritus or Chitus' Plum | 142 |
| Sever the Right Hand | Maramoa's Crossing the River after entering Ebony Barracks **before General Gravicius** | 158 |
| Lunaris Temple / Piety's Pets | Grigor and Maramoa after corresponding Gravicius/quest-reward states **before killing Piety** | 164, 161 |

### Acts 4–9 (24 checkpoints, 37 references)

The source route files already carried 37 **before-action** warnings across Acts 4–9. This pass surfaces **all 37** as accessible manual checkpoints, grouped by the related boss, area or quest state. They are *not* claimed to be a complete quest-by-quest walkthrough. Exact stage/ID relationships are in [critical-checkpoints.js](./critical-checkpoints.js).

| Act | Checkpoints | Source-linked warnings | Critical situations |
| --- | ---: | ---: | --- |
| 4 | 4 | 9 | Deshret before rescue, Crystal Veins before Belly of the Beast, Piety before The Harvest, Malachai before/after organs |
| 5 | 3 | 3 | Utula before Avarius, Sin after Innocence before exiting, Sin/Sign of Purity before leaving Ossuary |
| 6 | 6 | 12 | Eye of Conquest / Tukohama, Shavronne, Ryslatha, Ship Graveyard, Black Flag, Tsoagoth |
| 7 | 5 | 5 | The Den, Maligaro, Gruthkul, Yeena before Vaal City, Arakaali |
| 8 | 2 | 4 | Love is Dead / Clarissa and Tolman, Yugul dialogues before boss |
| 9 | 4 | 4 | General Adus before Foothills, Garukhan, Dark Ember before Belly of the Beast, Weylam Roth before Act 10 |
| 10 | 0 | 0 | The 2025 route source contains no before-action marker; **not** evidence of no missable dialogue |

For stages spanning different quest states, multiple dialogue IDs appear under the same disclosure but each **must be collected at its own trigger**, not all at once. The user's checkboxes record hearing dialogue, not merely arriving at a quest boundary.

### Important limitations

**These are risk checkpoints, not a globally optimal play order.** Within each chain, the source gives clear before/after constraints. Unrelated questlines can be interleaved; the UI intentionally labels the section as "จุดที่อาจพลาด" instead of "verified step-by-step route".

Original checklist totals remain 484 All Ears, 140 Lore, 91 Waypoints, 30 Side Quests; reward index remains 58 quests. No independent source authorizes adding more rows or automatically marking items complete.

## Audit increment — source-row timing and Act 10 after-quest checks (2026-11-12)

**Problem repaired:** Earlier the UI sorted any high-risk checkpoint ahead of prior checkpoints. This ordering was based on severity, not quest chronology. Now checkpoints retain authored source grouping, and the header explicitly says they are **not** a complete route. Every dialogue row in an expanded stage displays its own *unlock trigger* and *before-action caution* (or an explicit evidence gap). This prevents one stage summary from implying every topic unlocks simultaneously.

**Act 3:** All seven previously English-language route triggers and before-conditions are now translated into Thai from the old route records (IDs 118, 142, 148, 153, 158, 161, 164). These remain 2025-source conditions, unverified with 3.30 gameplay.

**Act 10:** New separate **post-quest reminders**, **not** irreversible-risk checkpoints: Lilly Roth/Tsoatha after Safe Passage (#471), Lilly Roth/Innocence after Death and Rebirth (#481), Lilly Roth/Kitava after An End to Hunger (#482). These three conditions are explicit in the [2025 PoE Wiki Act 10](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_10) and the repository's route-act10.js. No additional achievement IDs are created, and the absence of 'before' flags in Act 10 remains a source-data limitation.

**Bandit choice:** Added a prominent note that the Eramir first-kill, second-kill, all-killed series is based on the legacy *kill-all* branch; helping a Bandit must not be treated as an equivalent route. No current-patch Book of Reform recovery has been tested.

**Remaining verification:** 3.30 game client unavailable for proof at this checkpoint (launch scheduled Nov 13 PST), so do not publish a 3.30-safe or fully proven route. All 39 irreversible-risk groups in Acts 1–9 remain historical; the three Act 10 post-quest reminders are separately tagged. Human route playtesting and visual usability review remain open.

## Release gates and next work

| Priority | Remaining work | Requirement |
| --- | --- | --- |
| P0 | Check each dangerous quest transition in the actual supported game build | Evidence per topic/quest state, client version, NPC, screenshots/video, before and after |
| P0 | Check bandit choice branches and Eramir first/second/survivor topics | Fresh-character matrix, including help vs kill alternatives |
| P1 | Review evidence for Acts 4–9 source-flagged checkpoints; investigate Act 10 missing risk markers | 39 risk groups entered as historical references; each must be verified against current quest states |
| P1 | Cross-link all applicable side quests and useful passive-point rewards with the correct quest checkpoint | Avoid inferring required campaign steps from item value |
| P1 | Visual and task usability QA on real browser | Verify find-next-step, time-to-find-reward, checkbox comprehension, accessibility |
| Deferred | Build-specific and class-specific gem/equipment rewards | Intentionally out of scope until route data and UX are sound |

**Patch caution:** At this checkpoint the scheduled 3.30 release has not been independently tested in-game. The historical walkthrough must not be presented as safe in 3.30, regardless of passing GitHub Actions.

## References
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement (last updated June 30, 2025)
- https://www.poewiki.net/wiki/List_of_quest_rewards
- [Checkpoint source data](./critical-checkpoints.js)
- [Patch 3.30 evidence matrix](./PATCH-330-AUDIT.md)
- [UX priority backlog](./UX-PRIORITY-BACKLOG.md)
