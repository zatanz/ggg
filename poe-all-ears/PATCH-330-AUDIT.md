# PoE Achievement Companion — 3.30 source audit and gameplay sign-off matrix
Audit date: 2026-11-12 Asia/Bangkok
Product status: FUNCTIONAL SINGLE-PAGE PREVIEW — NOT GAMEPLAY CERTIFIED
Main URL: https://zatanz.github.io/ggg/poe-all-ears/

## Primary-source coverage and uncertainty

| Category | Historical reference records | Matched historical source | Confirmed for released 3.30 game |
|---|---:|---|---:|
| All Ears NPC dialogues | 484 | 484/484 mapped to PoE Wiki 2025 numbered rows | 0/484 |
| No Stone Unturned | 140 | 140/140 IDs, names and locations matched to user-provided original workbook | 0/140 |
| Locomancer | 91 | 91/91 IDs and names matched to original workbook | 0/91 |
| No Loose Ends | 30 | 30/30 IDs and names matched to original workbook | 0/30 |
| Vaal Letter / Research Journal subset | 16 | 16/16 local IDs mapped to Wiki 2025 rows #125–140 | 0/16 for patch 3.30 |

**Verification types must not be conflated.** Workbook fidelity does not establish Wiki validity; Wiki row agreement does not establish quest-state safety; passing CI does not establish current-patch gameplay correctness. "0" means no signed-off current-patch in-game proof, not necessarily invalid content.

## 3.30 patch notes review

- At the original **2026-11-12** checkpoint, release had not occurred. GGG scheduled 3.30 for **2026-11-13 19:00 UTC / 2026-11-14 02:00 Bangkok**, a time that has now passed. This is an archived checkpoint, **not an in-game 3.30 validation**.
- Public 3.30.0 Patch Notes are available, including significant endgame and Atziri/Fragment changes. Notes say **Vaal Side Areas no longer spawn in Maps** and remove associated Atlas modifiers; modifiers for Vaal Side Areas in Campaign are discussed separately, indicating campaign instances remain relevant. Old fragment / Map Device instructions must not be offered as applicable to 3.30.
- A note about skill rewards in the campaign is not proof NPC optional dialogue is unchanged. No row-by-row comparison with a running 3.30 game is available. No current-patch routeSafe flag may be enabled.
- Sources:
  - https://steamcommunity.com/app/238960/announcements/
  - https://poedb.tw/us/Version_3.30.0
  - https://www.poewiki.net/wiki/Guide:All_Ears_achievement
  - https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement
  - https://www.poewiki.net/wiki/Vaal_side_area

## Act 2 complaint — what is fixed vs what is not

- Source row mapping: all 69/69 Act 2 historic dialogue IDs mapped to 2025 Wiki row numbers #42–110; the user-facing **Act 2 route now follows Wiki source order**, not the original spreadsheet order.
- User workflow: single-page Act 2 preflight tracks whether each bandit was spoken to, whether Ancient Seal and The Darkness dialogue were completed, and the first/second killed bandit. Rows with source-derived "before" warnings request explicit confirmation before recording a check.
- Branch semantics: Wiki #101 has alternatives depending on the first bandit killed; #102 depends on the surviving bandit; #103 follows all three kills. They are mutually conditional variants, not three static NPC topics for every player.
- **Not complete:** no guarantee of the safe in-game exact order, no account/game telemetry, and no proof that any 3.30 change does or does not alter branch dialogue. The UI remains a manual aid and prevents silent false certification.

## Vaal and progress recheck

- A source-derived name-to-Lore lookup is available for 47 named Vaal Side Areas. It maps to 16 stable local Lore IDs and shows the distinct 2025 Wiki row for each. These are historical associations; missing or altered 3.30 areas must be verified before claiming a complete 3.30 farming guide.
- The game total and checklist total are manually compared. Baselines store both total and manually checked IDs per character. Differences provide a **candidate list for rechecking**, not reliable identification of missing dialogue/Stone.
- Preserved all previous per-character progress keys. Added a unified v2 export/import (add-only profiles), while original v1 All Ears backup remains supported.

## Pre-release Wiki rule review — November 12, 2026

- The [PoE Wiki All Ears guide](https://www.poewiki.net/wiki/Guide:All_Ears_achievement), last updated June 30, 2025, documents three branch-dependent Eramir topics (#101–103). The all-killed version cannot be presumed to work after helping a Bandit; no 3.30 character-level test is present.
- Act 10's guide lists Lilly Roth after Safe Passage (#471), after Death and Rebirth (#481), and after An End to Hunger (#482). These are **unlock-after** conditions, not proof of a permanently missable dialogue. They are displayed separately from source-marked irreversible warnings.
- The current UI displays row-level prerequisites and before-action constraints, and preserves the authored checkpoint grouping instead of sorting it by risk label. This is source-level clarification, **not** current-patch gameplay verification.
- Do not raise zero certified 3.30 counts based on the prior 2025 Wiki route, patch note text, or passing UI CI.

## Remaining game-dependent release gates

- [ ] Check the actual running 3.30 build on/after November 13 PST; record client version, date, and platform.
- [ ] Execute Act 2 quest-state matrix in fresh characters: speak to all three before seal, Darkness before kills, first-kill variants, second-kill survivor variants, all-kill state, and branch alternatives. Capture screenshots/video and exact dialogue topics.
- [ ] Verify the 69 Act 2 rows and source risk warnings independently in-game. Do not promote earlier rows from "Wiki-matched" merely because count and order match.
- [ ] Continue 484 dialogue checks across Acts 1–10, including missable transitions and alternative branches.
- [ ] Validate all 140 Lore in a single character; test Letters of Exile/Library generation and campaign Vaal Side Area availability in 3.30.
- [ ] Verify Waypoints (91) and Side Quests (30) against current game achievement counters (if available).
- [ ] End-to-end mobile/desktop human UX review in live GitHub Pages (automation tested, human review pending).
- [ ] Only after all gates: promote 3.30 profile, release a stable version, and tag a corresponding evidence manifest.

## CI gate vs release gate

GitHub Actions validates item IDs, source-order links, data structure, legacy persistence and import/export integrity, responsive viewport overflow, and real Chromium browser interactions. It does **not** certify dialogue availability, branch timing, quest reversibility, live game counters, game-state synchronization, or 3.30 source compatibility. A green build is a deployable preview, not a fully certified playthrough guide.
