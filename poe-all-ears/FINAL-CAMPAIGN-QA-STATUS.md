# Campaign route coverage — current source and QA status

Date: 2026-11-13 Asia/Bangkok.
Scope: **four targeted PoE achievements only**. Not all game achievements.

## Implemented

- Main campaign quest-first routes: **Act 1 through Act 10**.
- Original All Ears corpus: **484 original local IDs** represented by Act routes (Act totals 41, 69, 71, 72, 44, 44, 45, 30, 36, 32).
- No Stone Unturned corpus: 140 existing records, including specialized Labyrinth/Vaal scopes and the three Act 10 Cultist Tracts.
- Locomancer: 91 legacy records remain unchanged pending patch reconciliation; includes Epilogue.
- No Loose Ends: 30 existing original side quest records.
- Quest-state high-risk alerts, category shortcuts, context items, per-character manually recorded checklist, original backup export and import.
- Independent language preferences: Thai/English for instructions; English/Thai/both for quest and item names.
- 24 original diagram assets, explicitly concept art not an in-game screenshot.
- Project-scoped UX Skill rules documented and maintained.
- Act 9 Highgate ruler choice selector keyed by character ID, with visible warning in route and global summary when Tasuni branch conflicts with historical ID mapping.

## Automated release acceptance

1. Run `node poe-all-ears/validate-data.cjs`.
2. Run `node poe-all-ears/validate-ui.cjs`.
3. Run Playwright Chromium: `node poe-all-ears/test-browser.cjs`.
4. Verify GitHub Actions **validate** and **browser-smoke** success on branch head before PR merge.
5. Verify merged `master` contents and GitHub Pages deployment on the exact merged commit.
6. No checklist ID changes, no migration of backup/export schema, and no automatic achievement marking.

## Not certified / next acceptance gate

- No compatible PoE patch 3.30 fresh-character gameplay reproduction, game Achievement count screenshots or comparison with the in-game H achievement tab.
- Alternate Highgate Tasuni branch can't be represented faithfully by only the original Irasha-side IDs #443/#444. The 484-point counter must not be treated as a branch-independent proof.
- Locomancer historical 91-vs-newer 90 discrepancy remains unresolved, requiring explicit patch-version mapping and backup-safe reconciliation.
- Original sources differ on Act 2 Bandit quest state; reported Fairgraves Act 1 NPC issues on patch 3.29 require targeted runtime verification.
- All Acts 1–10 now have authored bilingual quest-stage steps, including the Act 1–3 editorial pass, but fine-grained per-row historical conditions have not received 745 separate human reviews or patch certification.
- A human user testing pass for color contrast, cognitive load and effective "what do I do next" is still valuable; browser smoke tests are not a substitute for player usability testing.

Conclusion: **The web application's source-guided coverage of Acts 1–10 is implemented. Verified 100% achievement unlock rate is NOT established.**

See [Acts 9–10 detailed evidence](./ACT9-ACT10-BILINGUAL-UX-AUDIT.md), [Act 8 evidence](./ACT8-BILINGUAL-UX-AUDIT.md) and [Road to 100%](./ROAD-TO-100-PERCENT.md).

## Editorial language QA update (2026-11-13)

Quest-stage bilingual copy covers Acts 1–10. The newest pass added 31 early-Act English stages, revised 20 high-risk Thai stages, improved four-category item explanations and linked items to their exact quest stage. It also translated the Labyrinth/Vaal/Epilogue guidance, game-count comparison, backup controls, main 100% summary and source-status notices. Check [LANGUAGE-EDITORIAL-QA.md](./LANGUAGE-EDITORIAL-QA.md) for acceptance criteria, source status and remaining limitations. Manual checks remain distinct from verified in-game achievement progress.
