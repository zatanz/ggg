# PoE 1 Achievement Companion — Locomancer Epilogue source reconciliation

**Date:** 14 November 2026, Asia/Bangkok. **Owner:** ChatGPT editorial/source QA. **Status:** source-backed guidance and a separately saved user checkbox; game patch 3.30 counter **NOT** tested. **Update:** migration-safe supplemental mark implemented in PR #38 (no legacy ID renumbering).

## Verified crosswalk of two numbering systems

| Concept | Legacy project ID | PoE Wiki 2025 row | Current status |
|---|---:|---:|---|
| The Aspirants' Plaza | `#35` | `[90]` | Labyrinth waypoint, part of legacy checklist |
| Karui Shores | **no legacy ID** | `[89]` | Current Epilogue town / waypoint; must check in the game |
| Oriath (Epilogue) | `#90` | **removed** | Historical import/export record, not Karui Shores |
| The Templar Laboratory | `#91` | **removed** | Historical import/export record, not Karui Shores |

These **numbers must not be substituted for one another**. The project has 91 original saved waypoint keys, but the source-led active view excludes local #90 and #91: **89 mapped legacy keys**. [PoE Wiki Waypoint](https://www.poewiki.net/wiki/Waypoint) lists a **90-waypoint** Locomancer requirement after removing Oriath, including Karui Shores. [Epilogue](https://www.poewiki.net/wiki/Epilogue) calls Karui Shores the only Epilogue town/waypoint; [Karui Shores](https://www.poewiki.net/wiki/Karui_Shores) confirms a Waypoint is present. Version history: The Templar Laboratory waypoint removed / moved in 3.9; Oriath removed in 3.17; automatic waypoint activation near the device since 3.25.

**Source-level finding:** The project's apparent 89/89 completion **is not** sufficient to claim the 90-waypoint game achievement, because **Karui Shores is absent from the original tracker**. This is an evidence-backed discrepancy, not a claim that patch 3.30 has been independently tested.

## Player-facing repair

- **Epilogue next task:** After Act 10, visit Karui Shores. Open the world map (`U`), verify its Waypoint and **manually tick the dedicated supplemental checkbox**. Do not check historical local #90 Oriath or #91 Templar Laboratory as a substitute.
- Show **89 legacy mapped + 1 separately marked Karui Shores = 90** in the progress explanation and achievement-count comparison.
- Keep the two obsolete ID records in an expandable **Historical records** section, preserving existing marks, saves, and imports.
- Link directly to PoE Wiki Waypoint as the external evidence. Write equivalent Thai and English guidance.
- Do **not** silently relabel #90/#91 as Karui Shores (that would reinterpret old saves), invent a new canonical ID, auto-check a game state, or change the 745 historical item count. The new per-character `poe-karui-shores-waypoint-v1` stores a boolean independently and travels through the optional `karuiShores` field in combined schema:2 backups.

## What is still needed before claiming current-patch completeness

- Verify a fresh 3.30 league character reaches Karui Shores with the game waypoint visible and its actual in-game Locomancer counter.
- Reconcile all 90 current Wiki locations and any patch-specific differences against the game's own progress data.
- Dedicated Karui Shores checkbox is implemented as a migration-safe **manual** per-character supplement. Its value is not inferred from the game, never writes legacy #90/#91, and imports old backups without the field as unchecked.
- Browser CI validates the warning and historical backup compatibility. It is not gameplay completion proof.

## Acceptance tests

- `validate-data.cjs`, `validate-ui.cjs`, `test-browser.cjs` succeed.
- An old unified backup with waypoint IDs `[90,91]` imports and exports unchanged.
- Current Epilogue route prominently mentions Karui Shores and the historical 90-waypoint Wiki claim.
- Manual progress is 89 mapped legacy Waypoints plus Karui Shores (90 Locomancer; 744 active marks across the four categories). This is *not* represented as a certified 3.30 100%-route.
- No changes to `extra-data.js`, canonical IDs, scores calculated from actual marks, storage schema, 67 campaign bindings or existing imports.

## Sources

- https://www.poewiki.net/wiki/Waypoint
- https://www.poewiki.net/wiki/Epilogue
- https://www.poewiki.net/wiki/Karui_Shores
- https://www.poewiki.net/wiki/Guide:Frequently_asked_questions
- https://github.com/zatanz/ggg/issues/30
