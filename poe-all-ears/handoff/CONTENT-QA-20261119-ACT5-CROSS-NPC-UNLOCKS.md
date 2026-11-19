# Act 5 All Ears — first-contact dialogue unlock QA

**Reviewed:** 19 November 2026 (Asia/Bangkok).
**Scope:** Seven original All Ears IDs in Act 5. This is a source-specific editorial audit, not an exhaustive pass across 745 records.
**Source:** [PoE Wiki — Guide:All Ears achievement, Act 5](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5), a historical guide last updated 30 June 2025.

## Findings

The legacy local-ID order differs from Wiki row order in this section. The original route mapped all 44 Act 5 IDs but omitted the *unlock-after-first-talk* dependencies, so its generic item instructions did not tell first-time players when to return to another NPC.

| Local ID | Wiki row | NPC: dialogue | Source unlock | Updated guide |
| ---: | ---: | --- | --- | --- |
| 264 | 269 | Lani: Utula | After first talking with Utula | Talk to Utula; revisit Lani |
| 267 | 270 | Vilenta: Utula | After first talking with Utula | Talk to Utula; revisit Vilenta |
| 266 | 271 | Vilenta: Lani | After first talking with Lani | Talk to Lani; revisit Vilenta |
| 272 | 272 | Utula: Lani | After first talking with Lani | Talk to Lani; revisit Utula |
| 273 | 273 | Utula: Vilenta | After first talking with Vilenta | Talk to Vilenta; revisit Utula |
| 274 | 274 | Lani: Vilenta | After first talking with Vilenta | Talk to Vilenta; revisit Lani |
| 276 | 276 | Lani: Oriath Square | After first entering The Templar Courts | Enter The Templar Courts; revisit Lani |

The Wiki table visually groups some adjacent rows under shared availability conditions; this audit records those dependencies as **after-event unlocks**, not evidence of a permanent lockout if the player fails to talk immediately.

## Implementation and confidence

- Add Thai source-trigger metadata to `route-act5.js` and individual bilingual actions to `guide-descriptions.js` for all seven canonical IDs. No new IDs or checkboxes.
- Improve the `tower-intros` stage in `steam-act5.js` to explain which two dialogue topics unlock after meeting each NPC, while retaining the separately sourced Vilenta: Piety → Research ordering (#270 → #271).
- Correct the `oriath-courts` stage: Lani: Oriath Square (#276) is an **after entering The Templar Courts** topic, not asserted to unlock at the first entrance to Oriath Square.
- Preserve all 44 Act 5 dialogue records and 12 stages, original 745 historical IDs, existing canonical checkbox state, STOP guards, local storage and backup formats. `routeSafe` and `patchCertified` remain false.
- Static validation checks precise local-ID/Wiki-row mapping, NPC, source condition, no invented `before`, all 745 item descriptions, and bilingual route content. Chromium browser regressions inspect the seven Thai/English descriptions and step instructions at 390px.
- **Limitations:** Historical source review is not patch 3.30 client certification. Community in-game reports remain voluntary post-release feedback and are not an engineering release gate.

## Follow-up approach

Repeat the same row-by-row source crosswalk for other historical NPC triggers and the separate Lore/Waypoint/Side Quest tables. Do not mark an All Ears item collected based on route navigation or guide review alone.
