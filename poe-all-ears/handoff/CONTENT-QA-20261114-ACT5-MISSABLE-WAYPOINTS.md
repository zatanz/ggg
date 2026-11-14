# PoE 1 Achievement Companion — Act 5 missable Waypoint STOP
Date: 2026-11-14 (Asia/Bangkok)
Scope: Act 5, *Death to Purity*, two pre-Avarius Waypoints
Evidence grade: PoE Wiki 2025 historical mapping; **NOT a live patch 3.30 game-client test**

## Verified source facts

| Area | Original tracker ID | PoE Wiki current row | Known change after defeating High Templar Avarius / Innocence |
|---|---:|---:|---|
| Oriath Square | #44 | [43] | Replaced by The Ruined Square; ordinary pre-Innocence area becomes inaccessible |
| The Templar Courts | #45 | [44] | Replaced by The Torched Courts; standard access to the old Waypoint is lost. The Wiki notes another player's instance may permit recovery |
| The Chamber of Innocence | #46 | [45] | Its waypoint remains; the boss-area exit switches toward The Torched Courts |

These row numbers are **not** the site's canonical IDs. The site keeps #44 and #45 exactly as saved in original progress.

- [PoE Wiki — Waypoint](https://www.poewiki.net/wiki/Waypoint) explicitly marks both Oriath Square and The Templar Courts as inaccessible after killing Innocence.
- [PoE Wiki — The Templar Courts](https://www.poewiki.net/wiki/The_Templar_Courts) describes the replaced zone and the possibility of recovering via someone else's instance. Do not claim the miss is always permanently unrecoverable.
- [PoE Wiki — Act 5](https://www.poewiki.net/wiki/Act_5) describes the story-state transition after Innocence, showing the old Waypoints disappear from normal progression.
- [PoE Wiki — Waypoint version history](https://www.poewiki.net/wiki/Waypoint) says Waypoints activate when the player walks near them since 3.25. Merely entering a zone does not prove its Waypoint was activated.

## User-facing change

**At the `oriath-courts` phase, before the Avarius fight**, show the concise Thai/English STOP: both Waypoints #44 and #45 must be personally checked on the in-game world map (`U`) before the quest-state transition. The STOP references the two **Waypoint IDs**, not an invented All Ears dialogue ID.

- Existing phase retains dialogue local #276, Waypoints #44/#45, and all previous original IDs.
- New optional `stopWaypointIds:[44,45]` is evaluated against the **current character's manual Waypoint checkmarks**.
- Next and forward-dropdown navigation warn before bypassing this phase while the Waypoints are unchecked; Cancel returns to the current phase. This prevents the old design from silently treating the Waypoint task as an ordinary recoverable note.
- Resuming from a later phase or opening the dashboard can surface the historical unresolved STOP.
- Each warning remains source-classified historical: completing these checkboxes is not an actual PoE 3.30 Achievement counter or gameplay-certified outcome.

## Acceptance and remaining HOLDs

1. Data inventory remains Act 5: 44 NPC, 12 Lore, 8 Waypoints, 2 side quests, in 12 source-led phases.
2. The STOP has two exact original Waypoint IDs #44/#45, matching the full Act 5 Waypoint inventory, not NPC IDs #44/#45.
3. Chromium checks STOP visibility, both labels, source note, canceled dropdown jump, and canceled Next preview. No automatic checkbox completion.
4. All 745 original IDs and new Karui Shores per-character supplemental mark remain unchanged, along with backup compatibility.
5. Real patch 3.30 gameplay remains unverified. To certify, capture both activated Waypoints, Avarius quest state, and the game's current Locomancer counter before/after the fight.

## Sources

- https://www.poewiki.net/wiki/Waypoint
- https://www.poewiki.net/wiki/The_Templar_Courts
- https://www.poewiki.net/wiki/Act_5
- https://www.poewiki.net/wiki/Oriath_Square
