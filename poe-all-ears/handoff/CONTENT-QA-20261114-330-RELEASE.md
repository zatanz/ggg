# PoE 1 Achievement Companion — 3.30 source changeover (14 Nov 2026, Asia/Bangkok)

**Owner:** ChatGPT content research / TH–EN editorial QA. **Classification:** source-verified update, **not** gameplay-certified. **Implementation branch:** `fix/poe-330-release-source-editorial-20261114`.

## Scope and confirmed external evidence

1. GGG scheduled the 3.30 / *Covens of Umbra* release for 13 November 2026 (Pacific time); subsequent launch scheduling indicated **19:00 UTC on 13 November = 02:00 Bangkok on 14 November**. That scheduled time has passed. This does **not** by itself prove an individual client is online or that NPC routes were play-tested.
2. [GGG Content Update 3.30.0 patch notes](https://www.pathofexile.com/forum/view-thread/4013680), section on Atziri/side areas: **Vaal Side Areas no longer spawn in Maps**; related Atlas passives and Map corruption implicits were removed. Separately, the notes mention area modifiers on Vaal side areas **in the Campaign**, so it would be wrong to claim the entire mechanic or the legacy Lore entries were removed.
3. [GGG patch notes](https://www.pathofexile.com/forum/view-thread/4013680) also mention potential **Viridian Wildwood in Act 7** and **Mirage in Act 9**. These are environmental/league features; neither establishes new mandatory records for the *four achievements tracked here*. Do not add speculative checkboxes.
4. The 2025 [PoE Wiki All Ears guide](https://www.poewiki.net/wiki/Guide:All_Ears_achievement) is a **historical source**; the absence of a named All Ears change in patch notes **does not prove unchanged optional dialogue timing** in 3.30.

## Corrections implemented

- `patches.js`: identify 3.29 as prior version and 3.30 as most recent scheduled release; change 3.30 metadata from `announced-unverified` to `released-unverified` **without** giving it any dialogue guide or a pass flag.
- `hub.js`: label user-facing data status as historical **not 3.30-certified**; make the unsupported-patch warning patch-neutral (it previously referred only to 3.29).
- Replace vague Map Device/fragment caveats with **specific, sourced 3.30 behavior**: no Vaal Side Areas in Maps, historical Campaign area-to-Lore mapping must be verified in-game before manual checkmarks.
- Preserve 3.29 Fairgraves historical player-report language: this is evidence about **3.29**, not verification in 3.30. Act 2 Bandits and Act 9 Highgate branching remain HOLD.
- Archive `CURRENT-329-PRIORITY.md` as a dated 3.29 decision rather than silently presenting it as today's patch priority.
- Update `validate-data.cjs` and `test-browser.cjs` expectations to guard the metadata distinction and selected-patch caveat.

## Acceptance / game evidence still outstanding

- Historical records unchanged: **484 All Ears**, **140 No Stone Unturned**, **91 legacy Locomancer** (with #90/#91 historic only for current-route progress), **30 No Loose Ends**: **745** saved keys retained.
- No change to achievement unlock semantics, canonical IDs, per-character progress, localStorage, backup/import-export, or 67 stage bindings.
- PoE Wiki reports a **90-waypoint** Locomancer requirement but the exact 3.30 count and actual waypoint list require a client counter and map audit. Do not delete legacy records from saves.
- Still requires controlled fresh-character 3.30 gameplay evidence for Fairgraves #34–38, Bandit dialogues around Ancient Seal and *The Darkness*, both Irasha/Tasuni Highgate ruler outcomes, exact current Vaal Lore availability, other potential irreversible STOPs, and all four in-game counters.
- **CI success = code/data/browser checks only**, not achievement-completion or safe 3.30 gameplay certification.

## QA matrix

| Check | Expected |
|---|---|
| Version picker | 3.29 marked prior; 3.30 most recent; 3.30 remains unsupported |
| Patch safety gate | Selecting 3.30 must **not** expose 2025/3.9 entries as certified |
| Vaal guidance | Campaign research caveat; never suggest 3.30 Map Device Vaal farm |
| TH/EN | Both versions carry identical safety meaning |
| Data | Original 745 records, 484 All Ears, 127 campaign stages, 67 route bindings |
| Save | No schema migration or automatic checkbox completion |
| Playwright | Historical UI, mobile, keyboard, STOP/branch, backup regressions unchanged |

## Source URLs

- https://www.pathofexile.com/forum/view-thread/4013680
- https://steamcommunity.com/app/238960/announcements/
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement
- https://www.poewiki.net/wiki/Waypoint
- https://github.com/zatanz/ggg/issues/30
