# PoE Achievement Companion — UX/Scope triage
Date: 2026-11-12 (Asia/Bangkok)
Status: SINGLE-PAGE HISTORICAL PREVIEW. Not patch-3.30 gameplay certified.

## What the prior implementation got wrong

1. **Overloaded rows**: every unchecked entry displayed a name, category tag, Wiki row, Act, procedural explanation, risk warning and detail link at once. Too many similar visual treatments obscured what to do.
2. **Checklist vanished after check**: the default status filter was "ยังไม่ได้เก็บ", so marking an item removed it from view immediately. A player might interpret this as failure.
3. **Reward lookup required a second hunt**: rewards were available by Act in a separate collapsed section; only matching Side Quests showed rewards within their detail disclosure.
4. **"Required" lacked a defined scope**: users need to know whether an entry is required *for its achievement* vs whether its reward is valuable for build progression. Confusing the two may imply a quest can be skipped in the campaign without consequence.
5. **Deep, low-yield data competed with core flow**: class-specific gem/equipment branches are not necessary for manually tracking four achievements.

## Design decision: checklist first, details only when asked

- Keep **three primary destinations**: ตาม Act, เช็กลิสต์ทั้งหมด, ตรวจยอด/สำรอง. Do not add more top-level tabs.
- Default Act filter: **ทั้งหมด (เห็นสถานะ)**. Checking a row keeps it in the same order and changes a visible state label to **เก็บแล้ว**. Optional filters "ยังไม่เก็บ" and "เก็บแล้ว" remain available.
- Checklist cards show **item name, one contextual priority label, explicit state**. Only genuine source-backed risk warnings are visible by default; action, prerequisites, locations, caveats and source URLs are inside the expanded "วิธีเก็บ" section.
- An Act summary displays **done/total** across the four achievement checklists and **number of historical dialogue rows with risk warnings**. Never interpret "done" as confirmation from the game.
- Reward references appear under their **exact quest name** in a separate collapsed Act section. Matching No Loose Ends sidequest rows show a compact reward summary on the row itself. No rewards can change an achievement checklist.
- Mark rewards **ควรเก็บ · Passive/Refund Point** for character-building value, **ระวัง · มีผลต่อทางเลือก** for Deal with the Bandits, and **ตามความต้องการ** for gem/equipment. These are editorial priorities, not quest-state certification.
- Mark all items in the four lists "จำเป็นต่อ [specific Achievement]" in the context of pursuing those historical complete achievements, with source-flagged risk rows "ระวังพลาด". Historical side quest status *does not* prove a quest is optional for campaign completion.
- Keep source uncertainty visible at the page level and inside expanded details, rather than repeating long patch notices in every row.

## Scope gates and remaining work

| Priority | Work | Acceptance | State |
| --- | --- | --- | --- |
| P0 | Dense row / checkbox behavior | Completed entries persist in-place and visibly marked; no overload in collapsed card | Implemented; automated QA required |
| P0 | Quest rewards and priority | Exact names, Passive/Refund/choice emphasis; matching No Loose Ends sidequest reward on row; no reward checkbox | Implemented; automated QA required |
| P0 | Data integrity | 484 + 140 + 91 + 30 source IDs unchanged, character saves/backups and patch gating unaffected | Existing integrity gate + regression required |
| P0 | Act 2 irreversible branches | Manual bandit state, source-derived preflight and branch explanations, no unverified "safe" label | Historical preview; in-game 3.30 QA pending |
| P1 | Real user mobile/desktop test | Time-to-find-quest/reward, number of clicks, checkbox clarity, overflow, keyboard accessibility | Not independently user-tested |
| P1 | Patch 3.30 evidence | Source-by-source verification of all four historical achievement lists, actual gameplay steps | Blocked until available game build and testing |
| P1 | Reward accuracy | Verify current passive/choice reward data and reward quest lookup against current PoE Wiki/patch | Historical 58-item reference only |
| P2 | Location-specific full walkthrough | Only where source/game evidence establishes exact route, including missables | Deferred until verified |
| Later | All class-specific Skill Gem/item options and individual reward catalog | Only after core checklist usability and source accuracy | Explicitly deferred |
| Later | Class/build optimizer, pathfinding, dynamic recommendation engine | Out of scope; no need for manual checklist | Explicitly deferred |

## Verification caveat
A successful GitHub Actions browser smoke test means key flows execute in Chromium, not that a human gamer found the interface easy or that every PoE 3.30 line is accurate. Do not label the product final until evidence gates are met.
