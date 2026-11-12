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

## Continuation — canonical GitHub repo and Act 2 source-order integration (2026-11-12)
- Canonical repository: https://github.com/zatanz/ggg/tree/master/poe-all-ears (renamed from zatanz/Test; GitHub repository ID 24707296 remained the same). Use zatanz/ggg in all subsequent tool operations and links.
- Confirmed preexisting GitHub Actions data integrity run success (run 43168585675). Also confirmed Pages deployment action success for prior commits, but this does NOT certify functional page rendering or current-patch All Ears accuracy.
- Compared all 69 Act 2 legacy IDs (42–110) with PoE Wiki's Act 2 rows (42–110). Saved source-row mapping in route-act2.js and act2-inventory.json; 22 trigger annotations and 12 caution annotations in the route. Source: https://www.poewiki.net/wiki/Guide:All_Ears_achievement (last updated 2025-06-30).
- The Eramir wiki row 101 is local legacy ID 89, row 102 is local ID 101, row 103 is local ID 103. Do not mix these numbering systems. Bandit variants remain conditional.
- Both walkthrough.html and index.html now use wiki sequence for Acts 1–2 while preserving stable legacy IDs for localStorage checkboxes. Main checklist includes sourced missable warnings. Acts 3–10 still follow legacy order.
- Added validate-ui.cjs and included it in GitHub Actions. The job validates inline script syntax, script references, patch gating, and UI route integration. GitHub Actions run 43169342999 succeeded with both data and UI checks. Newer runs should also be checked after this checkpoint.
- This is SOURCE-ROW RECONCILIATION only. It does not establish safe in-game quest progression or certify PoE 3.29/3.30. Current patch certification remains 0/484. Browser interaction testing still outstanding.
- Next: validate real browser interactions, review Act 2 per-row quest trigger evidence, verify Act 3 source-order mapping, examine current patch's NPC changes and quest-state behavior.

## Continuation — Act 3 legacy audit (2026-11-12)
- Added act3-inventory.json with all 71 Act 3 legacy records, IDs 111–181. Identified 21 candidate missable/quest-state entries from existing dialogue markers and notes, of which 9 carry explicit legacy notes. These are triage flags, not verified game mechanics.
- Added seven Act 3 integrity assertions to validate-data.cjs: count, unique IDs, order, content fidelity, no false wiki/patch verification, routeSafe=false, and candidate risk count.
- Attempted to fetch the PoE Wiki source directly but the public web fetch returned cache miss; therefore Act 3 wikiRow remains null for all 71 records and no new wiki-ordered route was published. This avoids presenting guessed order as sourced.
- All Ears GitHub Actions was successful on the previous checkpoint. The run for the new validator commit should be confirmed before claiming this update passed.
- Continue by obtaining authoritative Act 3 source rows and 3.30 patch evidence, then reconcile order and check missable prerequisites. Do not treat 3.9 notes as current-patch truth.

## Continuation — Act 3 risk audit and renamed URLs (2026-11-12)
- Fixed stale Test repository and GitHub Pages links in README.md; canonical links now use zatanz/ggg. Pages action previously succeeded, but end-user browser verification remains pending.
- Added act3-risk-ledger.json: 9 exact legacy 3.9 source-note risks (IDs 140,142,146,148,149,153,154,158,161), all marked patch-unverified. Distinct from 21 broadly flagged candidates.
- Added 3 CI assertions checking source-note count, text/ID fidelity and no false patch certification.
- Wiki direct access still cache-missed, so no Act 3 row ordering was guessed. Act 3 remains 71 inventory entries / 0 source-row mappings.
- GitHub Actions run for the latest changes must be confirmed; do not claim green until readback.

## Continuation — Act 3 Wiki reconciliation completed (2026-11-12)
- Accessed PoE Wiki All Ears guide directly via public search; its Act 3 section lists 71 numbered rows 111–181. Source: https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3 (last updated 2025-06-30).
- Reconciled all 71 historical Act 3 IDs to source row numbers, preserving legacy IDs; added route-act3.js and updated act3-inventory.json to wiki-row-matched-patch-unverified.
- Wired Act 3 source ordering into index.html and walkthrough.html. Added source-derived critical warning: fighting Piety in Crematorium before freeing Clarissa may permanently remove one dialogue; exact one is unknown.
- Added source-row, unique-ID, quest-risk and UI wiring checks in validate-data.cjs and validate-ui.cjs. The new route remains routeSafe=false; current patch verification remains 0/484.
- Act 1–3 now have 41+69+71 = 181 source-row-mapped records; Acts 4–10 remain historical-only order.
- GitHub Actions results need checking after final checkpoint commit. Browser interaction QA and source-versus-patch review remain outstanding.

## Continuation — Act 4 full wiki-row mapping (2026-11-12)
- Verified against PoE Wiki All Ears guide (last updated 2025-06-30): Act 4 has 72 dialogue points, numbered 182–253. Corrects the earlier conversational claim of 73; the historical data and existing validator both correctly counted 72.
- Added route-act4.js and act4-inventory.json with 72/72 ID-to-wiki-row mappings and nine explicit source-based missable warnings (Deshret, Dialla, Belly of the Beast, Harvest, Malachai).
- Updated index.html and walkthrough.html to use Act 4 source order and show warnings while keeping legacy stable IDs and patch gating unchanged.
- Added Act 4 integrity assertions and UI wiring checks to validate-data.cjs and validate-ui.cjs.
- Wiki source-order mapped total: Acts 1–4 = 41+69+71+72 = 253/484 (52.27%). Acts 5–10 remain historical-only. Current-patch verified 0/484; no certified safe route.
- GitHub Actions validation on final commit should be checked before claiming PASS. Browser interaction QA remains outstanding.

## Continuation — Act 5 wiki reconciliation (2026-11-12)
- Matched all 44 Act 5 legacy records to PoE Wiki numbered rows 254–297, using https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5 (guide last updated 2025-06-30). Note distinct first and post-Innocence Vilenta/Utula dialogue: Wiki row 270 = local ID 267; row 278 = local ID 278.
- Added route-act5.js and act5-inventory.json with 44 stable IDs and source-row mappings. Three critical missable warnings: Utula disappears after killing High Templar Avarius (row 275), Sin must be spoken to before leaving Chamber of Innocence (row 277), Sin must be spoken to before leaving Ossuary with Sign of Purity (row 295).
- Integrated Act 5 source ordering and warnings into index.html and walkthrough.html, retaining localStorage IDs and patch gating.
- Added Act 5 source-integrity and warning tests in validate-data.cjs and UI wiring checks in validate-ui.cjs.
- Source-row-mapped total: Acts 1–5 = 297/484 (61.36%). Acts 6–10 still use legacy order. Current-patch verified: 0/484; routeSafe remains false.
- Browser QA and current-patch evidence still pending; source-row ordering alone is not a certified safe playthrough.

## Continuation — Act 6 inventory and historical quest-state cautions (2026-11-12)
- Source guide direct web fetch returned cache miss; no independent Act 6 wiki row-by-row verification was possible. **Do not fabricate an Act 6 wiki route.** Act 6 remains in historical spreadsheet order, with 0/44 source-row mappings verified.
- Added act6-inventory.json: 44/44 legacy records, 16 candidate risks, all wikiRow=null and patchEvidence=null.
- Added act6-risk-ledger.json: 8 exact 3.9 source notes, IDs 318,321,322,326,332,336,338,339; all patch-unverified.
- Added act6-advisory.js grouping those eight notes into five cautionary milestones (Eye of Conquest, Shavronne, Nessa, Black Flag, Brine King) and displayed warnings in walkthrough.html without claiming safe route.
- Added Act 6 integrity and advisory coverage checks to validate-data.cjs and display assertions to validate-ui.cjs. Intermediate commit e91d0dca6f828311a763d6ce6dd1b1fe020d72be failed CI because the advisory JS had not yet been added; follow-up commit 98b63155914b21b46e37034441e21e3478a7a88c restored CI PASS. Check latest runs before reporting.
- Wiki source-row mappings remain 297/484 (Acts 1–5); 44 additional Act 6 rows inventoried but not source-row verified. Current patch certified remains 0/484.
- Next: independently access Act 6 wiki table and map 44 rows; audit current patch against live game; browser interaction QA.

## Continuation — Act 6 source reconciliation completed (2026-11-12)
- Successfully retrieved PoE Wiki's All Ears guide (https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6), updated 2025-06-30. It lists 44 Act 6 dialogues in rows 298–341.
- Reconciled all 44 source rows to stable legacy IDs; added route-act6.js and updated act6-inventory.json. For example Wiki row 298 = legacy ID 302 (Lilly introduction), Wiki row 302 = ID 298 (Sin Essence), and Wiki row 330 = ID 328 (Sin Cloven One). Source-derived warnings cover 12 rows; inventory risk candidates now 20.
- Wired Act 6 wiki ordering and warnings into index.html and walkthrough.html; retained historical act6-advisory.js as explicitly unverified legacy milestone notes.
- Updated validate-data.cjs and validate-ui.cjs for Act 6 source order and 12 cautions. Intermediate CI failed while validators still expected unverified wikiRow=null; updated checks now require the new source mapping. Latest run status must be checked before claiming pass.
- Wiki source-row mapped: 341/484 (Acts 1–6; 70.45%). Acts 7–10 remain historical order. Current patch verified: 0/484. routeSafe=false. Browser QA outstanding.

## Continuation — Act 7 source reconciliation and discrepancy preservation (2026-11-12)
- Read PoE Wiki All Ears guide Act 7 (https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7, last updated 2025-06-30). Source rows 342–386 = 45 dialogues.
- Added route-act7.js and act7-inventory.json, mapping all 45 source rows to stable local IDs. Explicitly disambiguated two Eramir/Gruthkul entries: Wiki row 380 = local ID 378 (before kill), row 381 = ID 381 (after kill).
- Preserved 3 conflicts between 3.9 legacy notes and Wiki conditions (IDs 365, 376, 382) in inventory.discrepancies. The Wiki condition takes precedence for provisional route annotations; do not silently overwrite historical notes. ID 369 retains a legacy-specific caution, explicitly labeled.
- Added five cautions around The Den, Maligaro, Gruthkul, Fireflies/Yeena, and Arakaali; wired route into index.html and walkthrough.html.
- Added 45-record, unique-ID, wiki-row, discrepancy, duplicate-topic and UI-wiring assertions. GitHub Actions status must be checked after latest commit.
- Wiki source-row mapped total Acts 1–7: 386/484 (79.75%); Acts 8–10 remain legacy order. Current patch certified 0/484, routeSafe=false. Browser interaction QA still outstanding.

## Continuation — Act 8 wiki reconciliation (2026-11-12)
- Read PoE Wiki All Ears guide, updated 2025-06-30: Act 8 rows 387–416 = 30 dialogues. Source: https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8.
- Added route-act8.js and act8-inventory.json with all 30 stable local IDs mapped to source rows. Important non-identity mappings: Wiki row 402 = local ID 391 (Hargan/Doedre); Wiki row 412 = local ID 413 (Clarissa/Tolman); Wiki row 413 = local ID 412 (Maramoa/Clarissa and Tolman).
- Four explicit source-derived missable warnings: Love is Dead completion (row 407), Yugul before killing (rows 409–410), and Clarissa in The Quay after Tolman (row 411). The 3.9 Doedre's Cesspool warning for ID 403 is retained as a legacy-only discrepancy; the Wiki row does not say to remain in the area.
- Wired Act 8 source order into index.html and walkthrough.html, preserved stable localStorage IDs and unsupported-patch gating. Added data integrity and UI script checks.
- Source-row mapped total Acts 1–8: 416/484 (85.95%); Acts 9–10 remain historical order. Current patch certified 0/484; routeSafe=false. Browser interaction QA still outstanding.
- PoE Wiki Act 4 prose says 73 points but its actual numbered rows 182–253 are 72 and the historical dataset has 72. Treat this as a source inconsistency, not an additional invented row.
- Check final GitHub Actions status before claiming all checks passed.

## Continuation — Act 9 inventory and historical risk warnings (2026-11-12)
- PoE Wiki All Ears Act 9 source could not be fetched in this turn (web cache miss and container network DNS failure). No independently verified Wiki row mapping was available. **Do not invent Act 9 Wiki order.**
- Added act9-inventory.json: all 36 legacy Act 9 dialogue records, 15 risk candidates, wikiRow=null and patchEvidence=null. Added act9-risk-ledger.json preserving all nine historical 3.9 notes (IDs 436,437,439,440,441,446,447,448,449).
- Added act9-advisory.js: four historical caution stages for Storm Blade/Foothills, Garukhan/Feather of Sekhema/Irasha or Tasuni, Trarthan Powder/Belly of the Beast, and Depraved Trinity/Act 10. Explicitly not a certified safe route.
- Integrated Act 9 warnings into walkthrough.html; Act 9 remains in legacy order in both pages. Also corrected Act 6 advisory heading to distinguish historical notes from its now Wiki-matched order.
- Added Act 9 inventory/source fidelity, nine-risk coverage and UI warning assertions. GitHub Actions must be checked after latest commit.
- Source-row matched remains 416/484 (Acts 1–8). Act 9 inventoried 36/36 but source-row unverified. Act 10 32 records still awaiting review. Current-patch verified 0/484. Browser interaction QA outstanding.

## Continuation — Act 10 complete legacy inventory (2026-11-12)
- Direct PoE Wiki All Ears Act 10 guide was not accessible in this turn; no independently checked wiki row-by-row order. **Do not claim Act 10 wiki mapping or fabricate a route.**
- Added act10-inventory.json with 32/32 legacy records (IDs 453–484), 11 risk candidates, wikiRow=null and patchEvidence=null.
- Added act10-advisory.js with three explicitly unverified historical dialogue checkpoints: returning to Oriath; Bannon/Innocence conversation ordering; before Kitava. No source claims of a certified missable condition.
- Wired Act 10 advisory into walkthrough.html and added integrity and UI tests. The UI still uses legacy order for Acts 9–10.
- All ten acts are now inventoried as historical 3.9 records, 484/484. Wiki source-row mappings remain 416/484 (Acts 1–8). Act 9 (36) and Act 10 (32) remain unverified. Current-patch certified 0/484; browser interaction QA still outstanding.
- Latest GitHub Actions result must be checked before reporting PASS.

## Continuation — All 484 Wiki source rows reconciled (2026-11-12)
- Retrieved complete PoE Wiki Guide:All Ears achievement (last updated 2025-06-30), including Act 9 rows 417–452 and Act 10 rows 453–484.
- Added route-act9.js and route-act10.js; updated act9-inventory.json (36) and act10-inventory.json (32) with source-row IDs. Source-row mapping now 484/484 across Acts 1–10; still not current-patch verified.
- Act 9 reordered Petarus/Tasuni/Irasha introductory topics (e.g. Wiki 421=ID 422, Wiki 422=ID 431). Explicitly preserved mutually exclusive Highgate ruler branches: 441–442 can be Tasuni/Irasha or Irasha/Tasuni depending on Feather choice. The historical 3.9 dataset only contains one branch's local IDs 443/444; alternate branch ID=null and must not be counted as an additional mandatory dialogue. Added branch guidance in walkthrough.
- Act 10 reordered Lani topics: Wiki 467=local ID 469 (Sin), Wiki 468=ID 470 (Kitava), Wiki 469=ID 467 (Lilly), Wiki 470=ID 468 (Weylam). Wiki 471, 481 and 482 retain source quest state triggers.
- Wired source routes in index.html and walkthrough.html. Updated validators for all 484 source row IDs, unique IDs, stable local IDs, branch options, and UI wiring.
- **QA limitation:** CI validates internal consistency against historical data, not independent external correctness for every row; PoE Wiki itself is a 2025 guide. Current patch verified 0/484, routeSafe=false. Real browser interaction QA and in-game patch evidence remain outstanding.
- Intermediate CI failures occurred while route data was added ahead of validators; check latest final CI run before reporting PASS.

## Continuation — Persistence integrity repair and real Chromium QA gate (2026-11-12)
- Reviewed index.html and found non-atomic state changes for character selection/add/rename/delete/reset and JSON import: in-memory state was changed even when localStorage.setItem failed. Fixed via snapshot() and commit(next) that restores prior state on save failure.
- JSON import now rejects invalid app/version, empty or oversized character arrays, invalid character names and out-of-range/noninteger dialogue IDs; caps total characters at 100. Valid import adds characters atomically; invalid import does not mutate state. Defined validIds from the actual dialogue catalog. Removed implicit startup save to avoid silently overwriting existing data.
- Added test-browser.cjs using real Chromium/Playwright: 484 visible checkboxes, persistence across reload, independent characters, JSON export/import, invalid backup rejection, localStorage quota failure rollback, 3.30 patch gate, 375px mobile horizontal overflow, and walkthrough runtime errors.
- Added browser-smoke job to .github/workflows/all-ears-validation.yml. This downloads Chromium and executes the browser tests in GitHub Actions. Existing data and static UI checks remain.
- **Do not mark browser QA PASS until the browser-smoke job has completed successfully.** Latest test run: https://github.com/zatanz/ggg/actions/runs/43172151668. Initial browser setup may take several minutes.
- Wiki mapping remains 484/484 historical 2025 source rows; current patch certified 0/484. In-game patch and quest-state evidence remain outstanding.

## QA repair — browser quota-failure test (2026-11-12)
- Investigated failed GitHub Actions run https://github.com/zatanz/ggg/actions/runs/43172294583. Static data/UI checks PASS; Chromium smoke failed at test-browser.cjs:45 because Playwright locator.uncheck() auto-retried for 30 seconds after the application rerendered and replaced the checkbox DOM node. This was a test-harness synchronization failure, not evidence that storage rollback itself failed.
- Changed the test to invoke a single DOM click in page.evaluate(), then assert the persisted progress remains unchanged while Storage.prototype.setItem throws. No production checklist changes in this repair.
- Follow-up CI run https://github.com/zatanz/ggg/actions/runs/43172444966. Await successful browser-smoke conclusion before marking the rollback QA PASS.

## Continuation — Cross-page walkthrough QA and storage integrity (2026-11-12)
- Hardened walkthrough.html persisted state loading: require version 1, active character in collection, valid character shape, valid dialogue IDs from 484-item catalog. Reject malformed storage instead of using invalid state.
- Fixed walkthrough character switching to restore previous active character and select control when localStorage.setItem fails.
- Expanded Playwright Chromium smoke to verify Act 9 36 steps, mutually exclusive Highgate warning, Act 10 32 steps, shared checklist/walkthrough checkbox state, walkthrough mark rollback on storage failure, and runtime errors.
- First extended CI failed because the test opened two isolated browser contexts; next failed because browser.newPage() implicit context cannot open a second page. Fixed test to explicitly create one BrowserContext and two pages sharing localStorage. These were test harness issues, not product failures.
- **Verified PASS:** GitHub Actions https://github.com/zatanz/ggg/actions/runs/43172952037, both validate and browser-smoke jobs successful.
- Remaining: independent in-game/current-patch verification of quest conditions and branch alternatives; patch 3.30 certified 0/484. 484/484 historical Wiki row mappings do not establish current-patch correctness.


## Continuation — Player feedback implementation (2026-11-12 Asia/Bangkok)
User feedback: classic list works but Act 2 order causes misses; add Stone lore, count recheck, and a Vaal Letter random-area aid while preserving existing profiles. The historical 3.9 workbook also tracks 91 Waypoints and 30 Side Quests.

Implementation on master:
- Added lore-data.js with 140 historical factual identifiers/areas split into Acts 1–10, Labyrinth 10 and Vaal 16 (12 Vaal Letters and 4 Research Journals). Descriptive prose in the legacy spreadsheet was not republished.
- Added companion.html: accessible Classic/Guided lore views, character-isolated progress, Act 2 manual safety preflight for bandits/Ancient Seal/The Darkness and branch hints, manual game-total reconciliation with optional historical matching checkpoint, Vaal area search for four source-matched examples, and Lore-only backup/import.
- Added extra-data.js and extras.html: 91 Locomancer Waypoints and 30 No Loose Ends side quests (3.9 historical reference only), per-character marks, filters and separate backup/import.
- Added navigation links from index.html and walkthrough.html. Walkthrough Act 2 now requires explicit confirmation when marking Wiki risk rows. Existing 484 All Ears stable IDs, v1 localStorage key and old backup/import schema were not changed.
- New companion and extras pages store active-character selection in their own keys without overwriting main All Ears storage. All three manual trackers retain independent backups; export all three when switching devices.
- Expanded validate-data.cjs and real Chromium Playwright smoke to test dataset counts, checkboxes and persistence, mobile overflow, manual game count mismatch and matching checkpoint, Vaal lookup, Act 2 safety persistence, character independence and selection persistence.
- **Verified passing pre-selection-fix CI:** GitHub Actions run https://github.com/zatanz/ggg/actions/runs/43176895076 (validate + browser-smoke successful). Newer CI status after the selection-fix commit must be confirmed before the latest release is considered tested.

Hard limits:
- The 484 mapped All Ears dialogue rows are from a 2025 Wiki guide; **current 3.30 patch certification is still 0/484**. Act 2 dependency correctness cannot be certified from route order alone. All supplemental 3.9 factual lists remain patch-unverified; they must not be advertised as a safe guaranteed route.
- This app cannot inspect game telemetry: count recheck only identifies numerical discrepancies and possible manually checked items since the last matched checkpoint, not definitive missing content.
- The Vaal area name lookup currently includes only four sourced examples; remaining area-to-lore relationships and patch-specific farm locations need evidence audit. Patch 3.30 removes Vaal Side Areas from Maps; pre-3.30 Map Device farming advice is obsolete.
- QA/Release Gates G1–G6 still need current patch evidence and in-game route testing. Do not claim production accuracy based only on green CI.
- Future improvement: unify a robust cross-page backup format with explicit migration and rollbacks; add source-level 3.30 evidence/quest-state gate for every risk item.
