# Act 4 All Ears — source-only after-event timing review

**Review date:** 19 November 2026 (Asia/Bangkok)
**Evidence:** [PoE Wiki, Guide: All Ears achievement — Act 4](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4), last updated 30 June 2025. This is **source review**, not observed PoE 3.30 gameplay.

## Ten previously underexplained dialogue IDs

| Original local ID | Wiki row | Dialogue | Guide prerequisite confirmed |
|---:|---:|---|---|
| 217 | 218 | Oyun: Kaom | After completing **Breaking the Seal** and speaking with Lady Dialla |
| 225 | 225 | Petarus and Vanja: Daresso | After speaking with Lady Dialla **in The Crystal Veins** |
| 240 | 240 | Tasuni: Ghasts | After first entering **The Belly of the Beast** |
| 242 | 242 | Petarus and Vanja: Piety | After defeating Piety in The Belly of the Beast |
| 244 | 245 | Tasuni: Cataclysm | After hearing **Tasuni: Malachai** |
| 249 | 249 | Kira: Malachai | After defeating Malachai |
| 250 | 250 | Petarus and Vanja: Malachai | After defeating Malachai |
| 251 | 251 | Tasuni: Malachai | After defeating Malachai |
| 252 | 252 | Tasuni: Malachai's Apprentices | After defeating Malachai |
| 253 | 253 | Oyun: Malachai | After defeating Malachai |

**Important distinction:** Tasuni: Malachai's Apprentices **#252** is the post-boss topic. The same-named **#245** is a separate earlier topic that must be checked before defeating Malachai (Wiki #246). Both original IDs remain independently trackable; do not mark one as a substitute for the other.

## Changes

- Added exact per-row `trigger` metadata in `route-act4.js` without adding any unsourced `before` / irreversible STOP flags.
- Added distinct Thai and English `sourcedActions` to the individual help panel for all ten original IDs.
- Made the five relevant Act 4 stage cards explain *which NPC to revisit and why*, in Thai and English: Voll/Mines; Crystal Veins; first Belly entry; post-Piety Highgate; post-Malachai Highgate.
- Regression checks bind local ID → Wiki row → NPC → topic → after-event prerequisite, assert consistent Thai/English output, and exercise stage instructions on a 390px Chromium viewport.
- Preserved all canonical All Ears, Lore, Waypoint and Side Quest IDs, per-character checked values, backups, existing source-based missable STOP checkpoints, and patch uncertainty. The repository's 745 total historical rows and existing Act 4 phase structure remain untouched.

**Release gate:** Static/data/route/UI QA, Chromium browser-smoke and exact SHA Pages deployment. Player-run patch 3.30 tests are **not** a development acceptance checkbox; user reports are optional post-release evidence. No 3.30 achievement completion is certified by this source review.
