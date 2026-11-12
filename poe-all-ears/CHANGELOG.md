# Changelog — Path of Exile Achievement Companion

## 2026-11-12 — Quest timing correction and Act 10 post-quest reminders

- Fixed **priority-sort vs game-order confusion**: source-authored checkpoint grouping is preserved; severity no longer reorders checkpoint display.
- Every dialogue row in an expanded checkpoint now shows its own source-derived **เปิดเมื่อ** and **ต้องตรวจ** conditions; missing evidence is explicitly labeled.
- Translated seven Act 3 trigger/quest-state rules into Thai without changing original stable dialogue IDs.
- Added a *separate* Act 10 after-quest checklist for source-confirmed Lilly Roth dialogues (#471 after Safe Passage, #481 after Death and Rebirth, #482 after An End to Hunger). These are not labelled irreversible.
- Clarified that the legacy Eramir All Ears branch assumes all three Bandits are killed; no 3.30 Book of Reform recovery was verified.
- Added source and Chromium tests for Act 2 group order, per-row Act 3 conditions, Act 10 three after-quest reminders, and patch gating.
- Historical sources only. No 3.30 game certification; do not confuse browser CI with in-game quest-state verification.

## 2026-11-12 — P0 quest-sequence risk checkpoints

- Added a source-labelled **Act 1–9 "ก่อนเดินเควสต์ต่อ · จุดที่อาจพลาด" panel** ahead of the long categories, covering 39 critical quest-state checkpoints and 72 linked historical All Ears rows.
- Expanded the high-priority UI through Acts 4–9, surfacing 37 additional route-file source warnings across 24 grouped checkpoints. Act 10 deliberately states that missing source risk markers do not prove safety.
- Sourced the before/after rules from the June 2025 PoE Wiki All Ears guide, including Mud Flats glyphs, Brutus, Fairgraves/Allflame, Act 2 quest completion gates, Ancient Seal/The Darkness, branch-dependent Eramir topics, and Act 3 Clarissa/Dialla/Gravicius/Piety.
- The same per-character All Ears IDs/checkboxes are reused: marking a checkpoint updates the canonical tracker. No duplicate counters; milestone completion means only user-marked entries, not automated in-game verification.
- Moved Act 2 manual Bandit/Seal/Darkness tracking into the expanded high-priority checkpoint, removing the redundant standalone safety panel in the Act 2 page.
- Each applicable quest risk checkpoint now displays its historical quest reward alongside the required dialogues. The other four achievement categories and source/order limitations remain visible.
- Static validator checks all 15 groups, 35 ID-to-Act links, source URLs, and routeSafe=false. Chromium regression checks initial Act 1 step visibility, shared save update, Act 2 Bandit preflight, and Act 3 Clarissa/Piety timing.
- Scope guardrails: not a complete campaign quest walkthrough; unrelated questlines have no proven overall sorting; no 3.30 game certification. Class-dependent reward tables remain deferred.
- See [Quest Sequence Audit](./QUEST-SEQUENCE-AUDIT.md) and [UX Priority Backlog](./UX-PRIORITY-BACKLOG.md).


## 2026-11-12 — Source-labelled contextual gameplay explanations

- Added guide-descriptions.js as an isolated presentation layer for **745 entries** (All Ears 484, Lore 140, Waypoints 91, side quests 30); original IDs, counts, localStorage and backup schema unchanged.
- Each item displays a compact **วิธีเก็บ** line. Expand **ดูวิธีเก็บและเงื่อนไข** for action, area, prerequisites, warnings, notes, source links and explicit patch verification status.
- Reused all 41 existing Act 1 draft walkthrough steps and available source-annotated route triggers/warnings, and translated **62** flagged legacy spreadsheet notes into Thai without labelling them as patch-certified.
- Highlighted randomized Letters of Exile, Library book instance rotations and Vaal Side Areas, including the 3.30 caveat against the old fragment Map Device farming method.
- Act 2 branch-sensitive descriptions: Eramir source rows #101 and #102 now display the first killed and remaining living bandit according to the player's manually recorded kill order; unknown choices produce neutral prompts rather than falsely displaying a fixed bandit.
- Fixed Act 2 **ดูเพิ่ม** so all 69 dialogue records are reachable, not just the first 40.
- Description links remain accessible in expandable panels, not repeated excessively on every list row. Source descriptions are historical 2025 Wiki / 3.9 spreadsheet; status remains unverified for 3.30.
- Expanded static data checks and Chromium tests for all 745 descriptions, Thai caution language, Act 1 / random Lore / side quest examples and Act 2 dynamic branch variants.
- **Still incomplete:** All 484 dialogue rules, 140 Lore locations/conditions, and 91/30 waypoint/quest paths have not been independently certified in 3.30; generic entries clearly say that row-specific prereqs are not confirmed. This is a documentation/UI upgrade, not an evidence-based gameplay certification.


## 2026-11-12 — Act-first usability and game-language refinement

- Replaced six persistent primary tabs with **ตาม Act**, **เช็กลิสต์ทั้งหมด**, and **ตรวจยอด / สำรอง**, reducing navigation choices while keeping all four Achievement lists reachable on the same URL.
- Added a horizontal one-tap Act 1–10 selector, and four collapsible achievement chapters inside each Act with done/total counters. NPC dialogue is expanded by default; Lore/Waypoints/Side Quests can be expanded when needed.
- On narrow phones, all four secondary Achievement choices appear as a visible 2x2 grid rather than a scrollable tab strip; added keyboard focus states and a sticky-menu offset for the classic list.
- Advanced rename/delete and old All Ears backup controls now live inside a disclosure called "จัดการตัวละครและสำรองข้อมูล All Ears แบบเดิม"; new-character control and the global character selection remain visible.
- Updated Thai gameplay vocabulary: **ฟังบทสนทนา NPC**, **สำรวจ Lore**, **เปิด Waypoint**, **ทำเควสต์รอง**, **ยังไม่ได้เก็บ / เก็บแล้ว**, and **ตรวจยอดกับเกม**. All NPC, quest and location proper nouns stay English as displayed in the game.
- The Lore description now specifies that interaction with the object counts, not fully reading the text. Random Letters of Exile/Library and Vaal-related cautions remain visible, with Vaal area lookup initially collapsed instead of dumping 25+ results.
- Act 2 preflight remains prominently available in the Act 2 flow; the same controls appear in a collapsed section under Recheck. No unverified quest-route order is presented as safe.
- Original v1 All Ears character data, legacy backups and v2 combined backup import/export are preserved. New UX test assertions check the 3-button menu, 10-Act picker, disclosure groups, category switching, backup and patch safety.
- References: [UX design decision and copy glossary](./UX-REDESIGN.md) · [Patch 3.30 certification gates](./PATCH-330-AUDIT.md).


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
