# PoE Achievement Companion — Uploaded Workbook / UI Audit
Date: 2026-11-12 (Asia/Bangkok)
Reference: User-uploaded `PoE_All_Ears_484_Checklist.xlsx` (read-only, not treated as live game progress).
Status: Historical references only — none of the rows is certified for PoE 3.30.

## 1. Workbook inventory (six sheets)

| Sheet | Observed content | Coverage |
| --- | --- | --- |
| All Ears Checklist | Rows 1–484; columns #, Num, Act, NPC, Dialogue, Locations and Conditions, Priority, Status | 484 unique IDs, Acts 1–10: 41/69/71/72/44/44/45/30/36/32 |
| No Stone | Lore 140 + Waypoints 91 laid out in parallel columns | Both ID sequences 1–140 and 1–91 complete |
| The Labyrinth | Dedicated reference to environmental lore IDs 73–82 | 10 existing No Stone IDs, not new achievements |
| Vaal Letter | Dedicated reference to lore IDs 125–140 | 12 Vaal Letters + 4 Research Journals; 16 existing IDs |
| Progress Summary | Workbook counts and manually updated statuses | 15 'Completed' and 469 'Not Started' in workbook **only**, not synced to site |
| Special Route Notes | Conditional Eramir Wiki rows 101–103 and Act 9 Highgate alternatives | Historical choices; not proven for patch 3.30 |

The workbook does **not** contain a stand-alone complete No Loose Ends 30-quest list or a verified current-patch complete quest-reward dataset. Those remain sourced separately in the application.

## 2. Warning crosswalk — important finding

The workbook contains exactly **77 `Priority = WARNING` rows** using Wiki/source row numbering. These are **not always equal** to the site's local All Ears ID. Cross-checking the workbook's 77 source rows against the canonical 2025 Wiki row crosswalk shows:
- 77/77 source Wiki rows still exist in the All Ears dataset.
- 55/77 are referenced by an existing risk checkpoint group.
- **22/77 are absent from those grouped risk checkpoints**, even though they remain in the full All Ears checklist.

The newly loaded `workbook-warnings.js` records all 77 Wiki rows and the Act UI now exposes the 22 ungrouped entries under `คำเตือนจาก Excel ที่ต้องตรวจเพิ่ม`, without inventing a strict walking order. This is a **discovery and visibility repair**, not independent proof of timing.

Ungrouped Wiki row numbers by Act:
- Act 1: 32, 33
- Act 2: 73, 74
- Act 3: 116, 154, 155, 156
- Act 4: 220, 224, 232, 234, 236, 237, 238, 239
- Act 6: 325
- Act 9: 438, 440, 446, 447, 449

A specific row should not be promoted into a 'before doing X' chronological stage until its trigger and irreversible state are independently supported.

## 3. New information architecture

Primary navigation remains **ตาม Act / เช็กลิสต์ทั้งหมด / ตรวจยอดและสำรอง**. Under `ตาม Act`, show Act 1–10 and two explicit destinations `Labyrinth · 10` and `Vaal Letter · 16`.

For campaign Acts: use a **single current checkpoint**, select control to jump between source risk stages, previous/next buttons, and keep the four long category lists **collapsed by default**. Add a dedicated collapsed disclosure for the workbook-only warnings. Rewards still belong to quests and do not change achievement progress.

For **The Labyrinth**, show a compact three-step overview with location groups: Aspirants' Plaza (ID 73), dynamically located Labyrinth rooms (74/76/77/79/80) and Aspirant's Trial areas (75/78/81/82). This is a location grouping, not a claim that all rooms follow a fixed route. A player must explore according to the dungeon layout on the day they play. Source: https://www.poewiki.net/wiki/The_Lord%27s_Labyrinth .

For **Vaal Side Areas**, start from finding a random campaign Vaal Side Area, then use the historical name-to-lore finder, and only mark newly discovered lore. Present 12 Vaal Letters separately from four Research Journals; they still count toward the same 140-item No Stone Achievement. No numbered acquisition order is imposed. Historical source mapping includes 47 named areas but is not a patch 3.30 guarantee. Source: https://www.poewiki.net/wiki/Vaal_side_area .

## 4. 3.30 update risks

The Wiki guide last updated in April 2025 describes using a single Sacrifice Fragment in the Map Device to open a random Vaal Side Area; **do not reuse that as 3.30 advice**. Patch 3.30 removes Sacrifice/Mortal Fragment functionality and Vaal Side Areas spawning in Maps according to published patch notes. Campaign-side Vaal availability and whether all historical Vaal documents remain obtainable need post-launch confirmation.

The current No Stone guide requires 140 discoveries, broken down as 114 campaign lore, 10 Labyrinth lore and 16 Vaal Side Area lore. The in-game Achievement shows counts rather than a complete reliable item-specific completion report.

## 5. Acceptance and unresolved limitations

- [x] Preserve all canonical IDs and no double-counting of 10 Labyrinth / 16 Vaal items.
- [x] Source-backed new category navigation and concise step guidance.
- [x] Surface the 22 workbook warning rows previously missing from prominent risk panels.
- [x] Preserve existing browser localStorage checkboxes and combined v2 backup schema.
- [ ] Independently test source mapping and source content in the released 3.30 game.
- [ ] Verify all dangerous quest states, Bandit alternatives and full walking order; warnings are not a proven step-by-step route.
- [ ] Human usability QA (desktop/mobile interaction time, contrast, keyboard flow) after latest visual changes.
- [ ] Confirm all 16 Vaal Side Area lore types remain accessible in released patch 3.30, including cases historically associated with Maps.
- [ ] Verify Labyrinth room names and actual lore object spawns in the released patch.
- [ ] Validate 30 No Loose Ends quests and 58 historic quest rewards against a current-patch external source.

## Primary sources
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement
- https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement
- https://www.poewiki.net/wiki/The_Lord%27s_Labyrinth
- https://www.poewiki.net/wiki/Vaal_side_area
- Local in-repository `critical-checkpoints.js`, `special-lore-guide.js`, `workbook-warnings.js`, `lore-data.js`
