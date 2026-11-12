# All Ears — Delivery Plan & Continuation Checkpoint
Updated: 2026-11-12 (Asia/Bangkok)
Status: IN PROGRESS — NOT RELEASE-READY

## Scope
Thai PoE 1 All Ears guided walkthrough; manual checkboxes, character profiles, backup/restore, evidence-based missable warnings, patch-specific content. No game telemetry or automatic achievement detection.

## Release gates
- [ ] G1: Exact supported patch version, dated sources and coverage manifest.
- [ ] G2: All 484 required dialogue records reviewed for NPC, topic, Act, location, prerequisites, route order, source and uncertainty.
- [ ] G3: Missable flags, branching and irreversible quest transitions backed by evidence.
- [ ] G4: Guided route engine follows verified dependencies; unverified legacy order is never labelled safe.
- [ ] G5: Patch-specific character progress, migration and backup compatibility verified.
- [ ] G6: Desktop/mobile/browser, keyboard, storage and corrupted import regression tests pass.
- [ ] G7: Public GitHub Pages deployment confirmed, README and changelog updated.

## Work sequence and acceptance
| Priority | Work | Acceptance |
| --- | --- | --- |
| P0 | Source inventory and evidence ledger | Each row marked verified/conflict/unknown with source |
| P1 | Act 1 pilot (41 entries) | Fully sourced route, branches and risk gates |
| P1 | Acts 2–10 (443 entries) | Same checks, all exceptions documented |
| P1 | Patch-specific source review | No 3.9 records passed off as current |
| P2 | Guided engine and UI | Only verified steps marked usable |
| P2 | UX and accessibility | Desktop/mobile and keyboard testing |
| P3 | Regression and release | G1–G7 pass |

## Evidence record schema
id, patch_id, act, area, npc, topic, trigger, prerequisites, before_actions, missable(true/false/unknown), branch, source_url, source_locator, verified_at, review_status.
Use official patch notes/game evidence first, then current PoE Wiki, then community guides, then legacy 3.9 spreadsheet. Record contradictions; do not invent resolutions.

## Verified checkpoint of implementation
- index.html: 484-entry historical checklist, filters, localStorage characters, backup/import. Browser QA incomplete.
- walkthrough.html: sequential preview following legacy data order; NOT a validated route or dependency engine.
- guide-act1.js: 41 draft notes; NOT verified.
- AUDIT-484.md: inventory, NOT evidence-based QA.
- patches.js: legacy 3.9 and unverified current placeholder; no current patch dataset.
- quest-rewards.js: 58 unverified reference quest records.
- GitHub Pages availability not independently verified.

## Continuation instructions
1. Read this checkpoint, current GitHub tree and newest evidence before changing files.
2. Resume first incomplete gate, preserving completed work.
3. Validate in batches; record item-level source and patch, update data/code, run tests and read back.
4. Do not increment verified totals without evidence. Record unknowns and conflicting claims.
5. End each session with actual commits, passed/failed tests, next Act/row and blockers.
6. Do not announce production release until G1–G7 pass.

Deadline requested: 2026-11-12 Asia/Bangkok. This is a target, not a guarantee. No unattended execution is active; continued work requires an active session or a configured automation.

## Continuation update — 2026-11-12
- Added route-act1.js mapping all 41 local Act 1 IDs to PoE Wiki row order, including six documented risk conditions. Source date: 2025-06-30; current patch still unverified.
- Walkthrough Preview now uses wiki order for Act 1; Acts 2–10 still use legacy order with warnings. This is source-order reconciliation, not full verification of prerequisites or a current-patch release.
- Next: independently review each Act 1 precondition and cross-check against latest patch, then reconcile Act 2 branch model and remaining Acts.
