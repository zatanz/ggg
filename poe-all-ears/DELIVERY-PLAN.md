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

## Continuation update — integrity checks
- Added validate-data.cjs to assert 484 unique entries, 10 Act counts, 41 Act 1 route rows, draft-only guide and unsupported current patch. Cross-file equivalent checks were executed against GitHub readback and passed 11/11. Node CLI execution itself is not yet confirmed.
- Fixed walkthrough checkbox rollback if localStorage write fails; browser interaction still needs testing.
- Current patch verified: 0/484. Act 1 order mapped: 41/41, but not patch-certified. Source audit and patch verification remain critical path.
- Next: obtain source row evidence and confirm live patch, reconcile Act 1 risk notes and Act 2 branches; run browser and Node tests before release.

## Continuation update — Act 2 branching and persistence safety
- Added act2-advisory.js with three conditional/unknown quest-state advisories; integrated warning in walkthrough Act 2 preview. No branch route certified.
- Main checklist now rolls back checkbox state if localStorage persistence fails, matching walkthrough safety fix.
- Rechecked walkthrough inline JavaScript syntax via new Function: PASS; GitHub readback confirms both changes. Browser test still pending.
- PoE Wiki live fetch in this session failed (cache miss); do not claim new patch/source verification. Current patch verified remains 0/484.
- Next: obtain independently accessible latest patch notes and source table, resolve Act 1 exact row mapping and Act 2 branches; execute browser/Node regression suite.

## Continuation update — Act 2 conditional model
- Re-accessed PoE Wiki All Ears guide (last updated 2025-06-30). It documents Eramir rows 101–103 as conditional, with first-killed/surviving bandit alternatives; also describes Ancient Seal/The Darkness order.
- act2-advisory.js schema 2 now models 3 branch rows with 3/3/1 topic variants and 3 quest-state dependencies; explicitly patchCertified=false.
- walkthrough.html now renders Act 2 Eramir variants with a patch-unverified label. Inline JavaScript syntax PASS; GitHub readback confirmed.
- validate-data.cjs includes Act 2 model assertions; CLI execution not yet independently confirmed.
- Current patch verification still 0/484. Act 2 has a branch model, NOT a fully verified 69-dialogue route.
- Next: reconcile all Act 2 IDs to Wiki rows; obtain current PoE 1 patch evidence, verify Act 1 conditions and branch validity, execute Node/browser tests.

## Continuation update — patch version and CI gate
- Public official announcement states PoE 1 expansion 3.30 Covens of Umbra scheduled for 2026-11-13 PST (source: https://steamcommunity.com/app/238960/announcements/). At this 2026-11-12 checkpoint, no 3.30 All Ears verification is claimed.
- patches.js now has separate legacy-3.9, unsupported 3.29, and announced-unverified 3.30 profiles. All 3.29/3.30 dialogue pointers are null and UI blocks their walkthrough.
- validate-data.cjs updated to require both new patch profiles and reject legacy data exposure for unsupported profiles.
- Added .github/workflows/all-ears-validation.yml to run Node 22 validation on repository changes and manual dispatch. Workflow execution/result is not yet confirmed; code review/readback is not equivalent to CI PASS.
- Next: confirm GitHub Actions execution, research 3.30 patch changes, reconcile all Act 2 rows and complete patch-specific source audit. No verified-current-patch count increase.

## Continuation update — Act 2 inventory and CI visibility (2026-11-12)
- Source checked: official PoE 3.30 announcement schedules release Nov 13 PST; 3.30 patch notes are published, but no evidence yet certifies All Ears dialogue behavior in the new patch. Patch remains unsupported.
- Added act2-inventory.json with 69/69 historical Act 2 records (IDs 42–110), 15 candidate risk records, and explicit null wikiRow/patchEvidence. This is an inventory audit, not row-by-row wiki reconciliation.
- Updated validate-data.cjs with five inventory consistency and no-false-certification assertions.
- GitHub connector's fetch_commit_workflow_runs returned no PR-triggered runs for the checkpoint commit; the API is PR-filtered, so this does NOT prove the push workflow failed or never ran. CI result remains unknown.
- IMPORTANT: Wiki row numbers 101–103 in act2-advisory.js must not be conflated with local legacy IDs 101–103. They are different coordinate systems until mapping is established.
- Next: obtain source-by-source Wiki row reconciliation for Act 2; inspect 3.30 patch note campaign impacts; execute real Node/CI and browser checks.
