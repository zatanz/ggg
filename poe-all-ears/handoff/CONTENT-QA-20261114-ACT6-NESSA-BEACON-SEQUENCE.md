# PoE 1 Achievement Companion — Act 6 quest-time ordering: Nessa + Beacon

**Date:** 14 Nov 2026, Asia/Bangkok. **Owner:** ChatGPT editorial/source QA. **Grade:** source-backed 2025 Wiki and historical user notes; **not** a fresh 3.30 character walkthrough.

## Confirmed source conflict that affects a first-time 100% run

| Topic | Source-supported unlock / deadline | Former web-route issue | Correction |
| --- | --- | --- | --- |
| Bestel: The Ship Graveyard, local #332 (Wiki #332) | Unlocks after speaking to Nessa at Prisoner's Gate; **only the legacy dataset**, not the Wiki, warns before entering Western Forest | Stage `nessa-ships` appeared **after** `ryslatha` (Western Forest), so its early caution was too late | Move `nessa-ships` immediately after `umbra-complete` (Prisoner's Gate) and before `ryslatha` |
| Tarkleigh: The Ship Graveyard, local #333 (Wiki #333) | Unlocks after Nessa; Wiki explicitly cautions before entering The Cavern of Anger | Same misplaced stage encouraged advancing into later zones before checking | Check with Bestel at the earlier return-to-town step; note actual Wiki deadline is later |
| Lilly Roth: The Black Flag, local #336 (Wiki #336) | Obtain Black Flag in The Cavern of Anger; **Wiki says listen before burning it**. The legacy checklist separately cautions before entering The Beacon | One mixed stage held **both** pre-entry #336 and post-entry #337 along with Beacon Waypoint/Lore | One explicit pre-Beacon STOP for #336 only, historical earlier precaution labelled as unverified 3.30 |
| Lilly Roth: The Brine King, local #337 (Wiki #337) | Available after first entering The Beacon | Same pre-entry phase could lead a newcomer to search for an unavailable dialogue before entering | Dedicated `beacon-entered` phase with #337 and return to Lilly in Lioneye's Watch |
| Southern Forest Waypoint local #57 | The Southern Forest is beyond The Western Forest / Riverways on the campaign progression map | Mistakenly attached to early `nessa-ships` when moving that stage | Reassign #57 to `cavern-sin` in the later correct geographical phase |
| Beacon Waypoint local #58 and Lore #110–111 | Inside The Beacon | Included in the old mixed pre/post stage | Move to `beacon-entered` only; no item added/removed |

### Primary sources

- [All Ears Act 6](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6): #332, #333, #336, #337 and their different unlock / missable conditions
- [Act 6 progression map](https://www.poewiki.net/wiki/Act_6): Prisoner's Gate → The Western Forest → The Riverways → The Southern Forest → The Cavern of Anger → The Beacon
- [Prisoner's Gate](https://www.poewiki.net/wiki/Prisoner%27s_Gate_(Act_6)): connection to Western Forest
- [The Black Flag](https://www.poewiki.net/wiki/The_Black_Flag): quest item found in Cavern of Anger, burned at Beacon
- [Lilly Roth](https://www.poewiki.net/wiki/Lilly_Roth): Black Flag dialogue discusses granting permission to burn the flag at Beacon
- [No Stone Unturned](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement): Letter Fragment + Templar Report inside Beacon, Wiki rows #100–101 but **local** Lore IDs #110–111

## Changes and compatibility

- Act 6 now has **16 source-led phases**, rather than 15, by separating `beacon-flag` and `beacon-entered`.
- The quest-time route no longer forces strict *Wiki row numerical order* when that order would make the **legacy earlier safety precaution impossible to obey**. The original 44 local All Ears IDs are still each present exactly once; 6 Lore, 10 Waypoints, and 4 side quests also preserve their original exact ID multisets.
- Safe forward dropdown navigation now prompts for either unchecked `nessa-ships` or `beacon-flag` when moving across it, with Cancel keeping the original phase. This does **not** add prompts across all Act 6 phases; the preexisting Act 7–10 guards and the Act 5 two-Waypoint guard are unchanged.
- Saved route positions are **phase-ID keyed**, so inserting a phase and moving `nessa-ships` preserves existing resume targets. All per-character marks, backups, legacy original 745 IDs and Karui Shores per-character supplemental checkbox remain untouched.
- Current step stays succinct: what is available **now**, what to check on returning to town, what action to avoid. Source discrepancies remain expandable. Do **not** assert that entering Western Forest definitely removes #332, or that entering Beacon definitely removes #336: the Wiki documents later/other thresholds. The project uses an explicitly labelled conservative early check.

## Regression acceptance

- Static integrity: 16 phases, exact 44/6/10/4 original-ID coverage, Nessa after Prisoner's Gate and before Western Forest, Southern Forest Waypoint #57 after Western Forest, pre-Beacon #336 only, post-Beacon #337 plus Waypoint #58 and Lore #110–111.
- Chromium browser: source and STOP text visible in Thai and English, cancellation of forward skip over the two specific risk phases, explicit acceptance to preview, no pre-Beacon Waypoint/Lore, and post-Beacon content preserved.
- GitHub Actions validate and browser-smoke pass on PR head and merged master; Pages success on exact merged commit.
- Game 3.30 NPC appearance, dynamic quest state, and actual 100% achievement counters still **HOLD**, pending verified client evidence.

**Historical note:** Original 13 Nov 2026 discrepancy audit remains date-scoped at [ACT5-ACT6-329-DEADLINE-AUDIT](../ACT5-ACT6-329-DEADLINE-AUDIT.md). This source QA does not override that work's game-play uncertainty.
