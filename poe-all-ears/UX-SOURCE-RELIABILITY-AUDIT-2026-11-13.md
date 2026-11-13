# PoE Checklist — evidence-driven UX/UI and source-order audit
Date: 2026-11-13 (Asia/Bangkok)
Status: implementation pass 1; LIVE PATCH 3.30 NOT CERTIFIED.
Target: https://zatanz.github.io/ggg/poe-all-ears/
Scope: four achievements, 745 **historical checklist records**. This is not a promise of 100% of every achievement in Path of Exile.

## Audit method and limits

Reviewed repository's `index.html`, `hub.js`, `hub.css`, roadmap, patch audit and route documentation, and compared relevant assertions with PoE Wiki achievement guides, the Steam 3.28 zone-by-zone guide, PoE Wiki's Waypoint changelog, release/published patch descriptions, and WCAG 2.2 guidance. Code-based audit and browser CI do not replace screenshots of actual users completing the quests. Patch 3.30 release is scheduled on November 13 PST (after November 13 morning in Bangkok). No 3.30 gameplay footage or counters are available in the repository; no row is promoted to verified.

## UX finding register — user outcome, cause, remedy

| Severity | Finding and user impact | Treatment | Acceptance / residual risk |
|---|---|---|---|
| P0 | Historical manual mark appears like completed achievement | Existing dashboard distinguishes 745 manual entries from actual in-game unlock; keep distinctions in all translations | Require actual achievement counter evidence, never claim unlock |
| P0 | Quest lists were too dense, user could not tell what to do next | Existing Act focus mode, first-incomplete jump, progressive disclosures, STOP gates retained. New contextual source-conflict panel surfaces Act 2/9 directly before guided steps | Test novice first-task completion; no live user test yet |
| P0 | Bandit quest order differs between community sources, potentially locking All Ears | New Act 2 warning with both source links, explicit #101–103 branch semantics; preserve per-character first/second kill record | Needs fresh 3.30 character route experiments, not a static guess |
| P0 | A user may take historically obsolete fragment route for Vaal lore | New main dashboard warning cites 3.30 changes; keep existing Vaal route source caveats | Current farming route must be tested in live game before certified |
| P0 | Legacy 91 Locomancer entries can be interpreted as current required count | Main dashboard now discloses Wiki's 90-count history and 3.25 autoactivation, without silently deleting ID #91 | Runtime count and id-by-id reconciliation needed, backward-compatible migration required only after proof |
| P0 | Act 9 Irasha/Tasuni branch creates a false complete 484 result | Existing explicit Tasuni warning retained; new Act 9 local source-disagreement warning | Branch-dependent IDs and actual achievement comparison unresolved |
| P1 | Thai dialogue-note shown in English guidance mode | SourceConflict panel now presents meaningful English warning and keeps original Thai in explicit disclosure | Audit other scattered source-specific excerpts |
| P1 | Quest route headline sounded certified | Changed copy to "review source-led route" instead of asserting safe completion by following it | Campaign guide still historical |
| P1 | Missing evidence classification at point of player decision | Compact, keyboard-accessible evidence disclosures, source links and provenance labels | Human color contrast audit / screen-reader test outstanding |
| P1 | Important menu controls can be hard to distinguish on mobile | New source panels use compact summary/detail layout, display-block responsive headings, visible focus | Human testing at 320/375/768 widths outstanding |
| P1 | Thai names could be confused with in-game official terms | Existing two independent language selectors, canonical English fallback and editorial disclaimer retained | 745-item bilingual source review, especially proper nouns, remains incomplete |
| P2 | Different areas have random Lore placement and story checkpoints | Existing 13-scope journey and 24 diagrams retained; random Lore shown separately from fixed campaign order | Do not pretend a deterministic Labyrinth or Vaal spawn route |
| P2 | Too many controls before player's actual quest step | Existing navigation has three primary tabs but patch, profile, language and backup occupy substantial initial vertical height | Future visual pass should collapse low-frequency profile/backup tools; test against non-loss and restore workflows first |

## Claim-level source conflict ledger

### A. Act 2 Bandits: potentially irreversible P0
- [PoE Wiki: All Ears](https://www.poewiki.net/wiki/Guide:All_Ears_achievement) lists Eramir #101 as dialogue after the **first** Bandit kill with different NPC names, #102 after **second** kill depending on survivor, and #103 after all kills. It discusses Book of Reform; this should not be interpreted as proof that any skipped old dialogue can be recovered in 3.30.
- [Steam 3.28 All Ears / Lore guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869) says kill all Bandits, speak to Eramir after each, and warns that Chamber of Sins ahead of Western Forest may remove dialogue. It gives a specific kill order and interactions that are not identical to the Wiki tabular constraints.
- **Decision:** retain historical branch/state-dependent UI; require preflight before kills; mark conflict rather than choose a universally safe order. Capture 3 first-kill possibilities, 6 second-kill ordered pairs, all-kill and helped-Bandit routes separately.

### B. Locomancer: denominator drift P0
- [PoE Wiki: Waypoint version history](https://www.poewiki.net/wiki/Waypoint) states an undocumented correction from **91 to 90** after Oriath's removal, and that 3.25 began automatically unlocking Waypoints as players pass them.
- Existing dataset has 91 historical IDs including Epilogue; removing one without confirmed item/backup reconciliation would corrupt existing progress.
- **Decision:** label as legacy 91, do not claim current 3.30 requires 91 or simply switch the UI to 90. Confirm game count and per-node mapping before a version-specific profile.

### C. Vaal Side Areas and fragments P0
- [PoE Wiki No Stone Unturned](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement), last updated April 2025, advises Sacrifice Fragment -> Map Device and defines 140 lore. Its specific fragment instruction predates 3.30.
- [3.30 patch notes mirror](https://poedb.tw/us/Version_3.30.0) and [Mobalytics summary](https://mobalytics.gg/poe/guides/3-30-patch-notes-covens-of-umbra) report Vaal Side Areas removed from Maps; fragment use is reworked/removed. This does not establish that 16 historical Lore items are impossible, nor guarantee all exact campaign spawns.
- **Decision:** remove reliance on Map Device farming method in current advice, keep a historical location list with "unverified 3.30" tag, track random encounters as they happen. Verify campaign availability separately.

### D. No Stone Unturned random generation P1
- [PoE Wiki lore guide](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement) notes 15 Letters of Exile, Library book variants and one-character discovery requirements. A repeated object is not necessarily a new unique achievement counter increment.
- **Decision:** no rigid per-session route or auto-check. Confirm actual item/page and game counter before marking, keeping Labyrinth / Vaal as existing **subsets**, not new categories.

### E. Act 9 ruler branch P0
- Historical IDs #443/#444 reflect Irasha-linked route conditions. Alternative Tasuni source mapping remains unresolved. Existing app detects per-character selection but does not establish 3.30 equivalence.
- **Decision:** keep conspicuous branch warning and do not infer a universal 484 count from the alternative.

## Recommended end-user information architecture

1. **What next?** One currently chosen Act/phase, immediate action in plain language, current missing tasks, highlighted STOP. This is the primary task.
2. **Before moving on:** Unresolved risky topics and branch decisions; explain why and when, not just a red color.
3. **Detailed lists on request:** Four achievement-specific task groups under the chosen phase; checkmarks stay visible rather than vanishing.
4. **Progress and reconciliation:** Store per-character manual progress; compare in-game counter; original backup/import preserved.
5. **Sources / uncertainty:** Source-specific link alongside disputed actions and global explanation of historical/verified status; avoid 2025 source interpreted as a 2026 patch guarantee.

Avoid treating game-lore names as translated official client terms. UI instructions and game terminology are separate preferences. Default danger action remains explicit; never auto-complete an achievement.

## Language QA style

Use actionable Thai imperatives: "ไปที่ [พื้นที่] → คุย [NPC] → เลือกหัวข้อ [EN canonical]" with conditional timing "ก่อน [เหตุการณ์]" or "หลัง [เหตุการณ์]" only if source-established. English should include the same actor, topic, deadline, uncertainty and branch condition. Avoid a generic "do not progress" if the event is known; never translate source confusion into invented certainty. All high-risk English messages must be authored, not raw Thai source data.

## Accessibility QA

WCAG 2.2 targets: keyboard operable summary/links, clear `:focus-visible`, status communicated by text instead of color, min 24px touch targets or sufficient spacing, no clipping at 320/375px, and translated page language metadata. Source disclosures use native `details/summary` and text labels, not icon-only warnings. **Not a WCAG compliance certification**; no independent assistive-tech testing was performed.

W3C reference: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/

## Implementation evidence

- Added contextual source-conflict disclosures for Acts 1, 2, 7 and 9, with Act 2 and 9 initially open.
- Added global Locomancer/ Vaal/ Bandits evidence panel near manual-progress dashboard.
- Changed source-conflict copy in English mode to English with inspectable Thai original.
- Reworded route heading to indicate reference-driven, non-certified guidance.
- Added contrast, focus and mobile layout for evidence cards; no new application state or storage schema.
- Planned static source assertions plus Chromium smoke; CI status must be read for exact branch head before merge.

## Further work requiring real evidence

- Gameplay QA of 484/140/Locomancer-current/30 per-character counters with screenshots and patch/build IDs.
- Independent user test tasks: find next action (<30 seconds target), identify STOP and reason, change language independently, find hidden completed entry, restore backup. Targets are hypotheses, not measured results.
- Detailed review of each of the 745 canonical descriptions and route stage ordering vs conflicting sources.
- Audit below-fold information overload and sticky navigation at 320px using recorded browser screenshots.
- Do not convert untested source differences into hard-blocking "guaranteed" step order.

This audit documents one implementation pass. It does **not** certify full redesign completion or a verified 3.30 100% achievement path.
