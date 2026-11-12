# PoE 1 Achievement Companion — critical quest-sequence audit

Checkpoint: 2026-11-12, Asia/Bangkok.
Product state: historical preview, **not a certified 3.30 walkthrough**.

## Why the old ordering was insufficient

The old route grouped dialogues according to 2025 PoE Wiki row order and listed lore, waypoints, side quests, and rewards separately. A row order is not a dependency graph: NPC dialogue can require a quest to be accepted, an item to be absent from the inventory, a boss to remain alive, or a bandit choice to be made only after another step. Sorting rewards by passive-point value is not the order in which the quests should be completed.

## Priority implementation (P0)

Implemented **15 explicitly scoped checkpoints across Acts 1–3**, referencing **35 dialogue checklist IDs**. Each checkpoint now shows:
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

### Important limitations

**These are risk checkpoints, not a globally optimal play order.** Within each chain, the source gives clear before/after constraints. Unrelated questlines can be interleaved; the UI intentionally labels the section as "จุดที่อาจพลาด" instead of "verified step-by-step route".

Original checklist totals remain 484 All Ears, 140 Lore, 91 Waypoints, 30 Side Quests; reward index remains 58 quests. No independent source authorizes adding more rows or automatically marking items complete.

## Release gates and next work

| Priority | Remaining work | Requirement |
| --- | --- | --- |
| P0 | Check each dangerous quest transition in the actual supported game build | Evidence per topic/quest state, client version, NPC, screenshots/video, before and after |
| P0 | Check bandit choice branches and Eramir first/second/survivor topics | Fresh-character matrix, including help vs kill alternatives |
| P1 | Extend evidence-led checkpoints to Acts 4–10 | Review route data triggers and missable warnings, create grouped dependencies only when sourced |
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
