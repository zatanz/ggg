# Act 5–6: earliest source-dependent dialogue deadlines — 3.29 editorial audit

Date: 2026-11-13 (Asia/Bangkok). Status: source comparison, NOT a fresh in-game 3.29 certification.

## Scope and method
Review prior historical All Ears dataset IDs against the 2025 [PoE Wiki All Ears guide](https://www.poewiki.net/wiki/Guide:All_Ears_achievement) and quest-stage itinerary. The route's numbered IDs are **local canonical checklist IDs** matching current 484-point Wiki rows in this range; no new achievements or automatic progress. Preserve all original character marks and backups.

## Finding 1 — Act 5, Utula: Justicar Casticus, ID #275

| Evidence | Timing |
| --- | --- |
| Legacy `data.js` record #275 | "After killing Justicar Casticus - Do NOT enter Oriath Square" |
| PoE Wiki, [Act 5](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5), #275 | After killing Justicar Casticus; talk to Utula **before killing High Templar Avarius**, because Utula disappears |
| Previous player route | Only warned before killing Avarius |

**Change:** route instructions, Thai/English STOP and source-note disclosure now explicitly advise returning to Overseer's Tower to hear Utula **before entering Oriath Square** as a conservative earlier precaution. The note explains this is stricter than the published Wiki deadline; it does not claim proven disappearance upon area entry in 3.29. Keeping this precaution may require one extra town visit but prevents the route from inadvertently crossing the legacy warning.

Relevant additional NPC context: [Utula's Wiki page](https://www.poewiki.net/wiki/Utula) documents disappearance after completing Death to Purity.

## Finding 2 — Act 6, Lilly Roth: The Black Flag, ID #336

| Evidence | Timing |
| --- | --- |
| Legacy `data.js` record #336 | "After getting The Black Flag - Do NOT enter The Beacon" |
| PoE Wiki, [Act 6](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6), #336 | After getting The Black Flag; hear Lilly **before burning it at the lighthouse** |
| Previous player route | Warned only before burning The Black Flag |

**Change:** route heading, actions and STOP instruct the player to return to Lioneye's Watch and hear Lilly **before entering The Beacon** as a conservative precaution. The note makes clear that the Wiki's published deadline is later and a 3.29 zone-entry disappearance has not been independently reproduced.

## Actionable UX rule

A source-level hard boundary should never be silently postponed by a route card. When evidence conflicts, give the player the safer earlier **precaution** with the reason, source dates, and an explicit "not gameplay-verified" classification. Don't invent a definite miss if the source only warns about potential loss. Both cases now include an expandable bilingual source discrepancy in the relevant stage; detailed entries still carry original canonical names.

## Unresolved current-patch work

- Act 5 ID #275: fresh 3.29 campaign proof for entering Oriath Square before/after topic vs killing Avarius.
- Act 6 ID #336: fresh 3.29 proof for entering Beacon vs burning the flag.
- Act 6 ID #332: legacy note warns before entering Western Forest, while Wiki #332 only provides the prerequisite of talking to Nessa in Prisoner's Gate. Do not elevate that early threshold into a verified warning until the context is reconciled.
- Every other Act 5–6 danger row should undergo the same two-source inspection and phase-level UX validation before claiming a complete current-patch route.

This audit covers two sourced deadline discrepancies; it does not certify the 44+44 dialogues or patch-3.29 achievement completion.
