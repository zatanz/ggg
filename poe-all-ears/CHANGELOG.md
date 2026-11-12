# Changelog — Path of Exile Achievement Companion

## 2026-11-12 — Unified preview (not patch-certified)

### One-page design
- Main GitHub Pages homepage is now the single-page Achievement Companion: **เล่นตาม Act**, **All Ears**, **Lore / Stone**, **Waypoints**, **Side Quests**, and **Recheck / Safety**.
- All four achievements appear together by Act, with a shared character selector and consistent status filters. Historical All Ears (484 IDs) and its localStorage v1 format stay intact.
- Classic original list remains available as a tab. The earlier companion.html, extras.html and walkthrough.html are retained as compatibility URLs, not required for the main workflow.
- Responsive navigation and sticky filter offset were adjusted for phone and desktop layouts.

### User-requested functionality
- **Act 2:** 69 dialogues source-order matched to PoE Wiki 2025, manual Bandit / Ancient Seal / The Darkness preflight, conditional branch notes, and confirmation prompts for source-marked risk rows.
- **No Stone Unturned:** 140 Lore entries; Letters of Exile and random Library text included as individual checks; 16 Vaal entries keep stable legacy IDs, with a distinct crosswalk to Wiki rows 125–140.
- **Vaal:** searchable list of 47 named side areas linked to historical lore topics; explicit 3.30 warning that Vaal Side Areas no longer appear in Maps.
- **Progress recheck:** manual game-total comparison and per-character baseline snapshots to identify items checked since the last matching count; no claims to automatic game data access.
- **Locomancer / No Loose Ends:** 91 waypoint entries and 30 side quests; matched to the original uploaded 3.9 workbook.
- **Unified backup v2:** one export for all characters and all four achievements, add-only profile import with schema/ID validation and rejection of malformed backups. Old All Ears v1 backup remains supported.

### Validation
- Source-fidelity checks: 140 Lore name/ID/location rows, 91 Waypoint names/IDs, 30 Side Quest names/IDs matched to the user-supplied historical Excel sheet. These are source-fidelity checks, not in-game patch certification.
- Node data and UI syntax validators; real Chromium browser test covers old checklist, new single-page tabs, character isolation, localStorage, export/import/invalid backup handling, Act 2 warnings, Vaal mapping, mobile viewport and unsupported-patch gating.
- GitHub Pages Actions deployment verified. Live human visual review and current-patch gameplay route certification remain outstanding.

### Known limitations — must remain visible to players
- All 484 dialogue rows follow source order from the PoE Wiki guide last updated in 2025, **not a proven safe 3.30 quest-state route**. Current-patch game-certified entries remain **0/484**.
- Supplemental 140 Lore / 91 Waypoints / 30 Side Quests still reflect historical references, not full 3.30 game verification.
- The 3.30 expansion was announced for November 13 PST. In-game certification cannot be completed before the relevant build is available and tested. See [3.30 audit](./PATCH-330-AUDIT.md).

## Previous checkpoints
See [Delivery Plan](./DELIVERY-PLAN.md).
