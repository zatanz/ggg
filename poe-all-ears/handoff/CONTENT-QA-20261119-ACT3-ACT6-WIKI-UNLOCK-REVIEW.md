# PoE All Ears — source-only editorial QA: seven canonical IDs

**Reviewed:** 19 Nov 2026 (Asia/Bangkok)
**Scope:** seven existing All Ears dialogue IDs, Acts 3 and 6; not an exhaustive 745-record audit.
**Source:** [PoE Wiki All Ears achievement guide, historical table last updated 30 June 2025](https://www.poewiki.net/wiki/Guide:All_Ears_achievement).
**Evidence type:** maintained-guide row text and repository crosswalk. No PoE 3.30 client/session verification.

| Local ID | Wiki row | Exact reference prerequisite | Finding and repair |
| ---: | ---: | --- | --- |
| 145 | Act 3 #157 | Fairgraves: Resurrection after his Chitus' Plum conversation | Added the specific after-topic trigger; removed old generic instruction to hand in both quest items immediately after The Undying (#146), which the cited row does not establish |
| 147 | Act 3 #142 | Clarissa: The Lunaris Temple after first entering The Solaris Temple | Added explicit bilingual source-based action and route trigger |
| 149 | Act 3 #144 | Hargan: The Undying after first talking to Lady Dialla | Removed unsupported warning *do not continue talking to Dialla*; retained a return-to-Hargan instruction without claiming a permanent cutoff |
| 151 | Act 3 #146 | Grigor: Gemlings after completing quest The Gemling Queen | Moved the canonical ID out of the initial Dialla introduction stage and into the subsequent quest/item stage; kept its single original checkbox |
| 154 | Act 3 #149 | Lady Dialla: The Sewers after **giving** her The Ribbon Spool | Corrected misleading *after obtaining Ribbon Spool* to *after handing it in* in per-row TH/EN, source trigger and step instructions |
| 155 | Act 3 #152 | Lady Dialla: Infernal Talc after **giving** her Thaumetic Sulphite | Added the missing per-ID hand-in prerequisite and bilingual stage guidance |
| 332 | Act 6 #332 | Bestel: The Ship Graveyard after talking to Nessa in Prisoner's Gate | Removed historical *do not enter The Western Forest* assertion, which is not the cited prerequisite; added Nessa trigger and bilingual action |

**Adjacent reviewed but unchanged:** Act 3 #142 (Fairgraves introduction before carrying Decanter Spiritus or Chitus' Plum), #148 (Dialla introduction before Sulphite/Ribbon Spool), and #153 (Sulphite dialogue while not carrying Ribbon Spool). Those precautions were already present. No extra STOP was added for an after-event prerequisite.

## Data and engineering acceptance

- `route-act3.js` and `route-act6.js`: exact Wiki row number and unique source trigger verified in static validation.
- `steam-quest-walkthrough.js`: Act 3 stage-level source chronology adjusted without adding a phase or a canonical ID. Local #151 belongs to `dialla-items`, not `dialla-intro`.
- `guide-descriptions.js`: item-specific Thai/English actions corrected; incorrect hard warnings removed. All historical 745 records and per-character save/backup schemas unchanged.
- `validate-data.cjs` and `test-browser.cjs`: regression coverage for exact source mapping, TH/EN item actions, missing fake STOPs and staged route placement. Require existing full integrity/UI/browser CI before release.
- **Limitations:** The Wiki is a maintained historical guide (June 2025). These corrections are source-level QA, not confirmation of the 3.30 running-game achievement counter, dialogue state or 100% unlock rate. Voluntary player reports are accepted post-release, not a development blocker.

Future batches should use this exact mapping method on other canonical IDs, rather than treating either a passing CI build or a workbook row match as proof of current-patch achievement completion.
