# Act 9–10 quest-state audit — current 3.29 guide
Date: 2026-11-13, Asia/Bangkok.
Scope: Source/UX validation of the 484-entry All Ears historical route; NOT a 3.29 live-game achievement certification.

## Critical repair: Sin dialogue before Belly of the Beast (Act 9)

Earlier web route placed Sin: **The Black Core (local #446)** and **Cataclysm (local #447)** inside `black-core`, which followed **entering The Belly of the Beast**. This contradicted the original historical checklist notes, which state for both entries: *After getting Trarthan Powder — DO NOT enter The Belly of the Beast*. A user relying on that stage sequence would have passed the earlier caution before seeing the item.

Source distinction:
- Original `data.js` #446 and #447: obtain Trarthan Powder, then check both before entering Belly.
- [PoE Wiki All Ears, Act 9](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9): entries #446–447 after obtaining Trarthan Powder, topic names The Black Core and Cataclysm; #445 requires **both** Basilisk Acid and Trarthan Powder and is warned before Belly.
- This is a **source-derived** quest-state ordering, not independently verified with a current 3.29 character.

Repair:
- Place #446 and #447 in the `powder-acid` stage with #445, as **three separate manually marked topics** and an explicit pre-Belly STOP.
- Explain both subconditions within the same quest stage: #446–447 after Trarthan Powder; #445 after both ingredients (Quarry and Highgate in older notes).
- Remove #446–447 from the later `black-core` stage to prevent misguiding players into trying for a pre-entry dialogue after they have entered.
- Keep original canonical IDs, existing per-character checkmarks and backup schema unchanged.
- Static regression asserts exact set of pre-Belly STOP IDs #445–447, no post-Belly duplication; Chromium browser regression verifies three checklist items at the pre-Belly stage and none in the later one.

## Act 9 ruler choice — clarity, no invented branch data

[PoE Wiki Act 9](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9) lists alternative dialogues #441–442 depending on whether Irasha or Tasuni receives Sekhema Feather. The historical local #443/#444 map to **Irasha** as ruler and must not be silently checked to represent the Tasuni variant.

UX now explicitly labels the Irasha/Tasuni dropdown as a record of **what the user already selected in-game**, not as an interactive choice affecting the real game. The existing Tasuni source mismatch warning remains. This change does not claim that Tasuni is inherently impossible for the real Steam achievement; the limitation is the historical tracker crosswalk.

## Act 10 — post-quest checks, not imaginary irreversible STOPs

[PoE Wiki All Ears Act 10](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_10):
- Lilly Roth: Tsoatha (#471) appears **after Safe Passage**; Lilly: The Teardrop (#472) is separate and does not itself complete Map to Tsoatha.
- Lilly Roth: Innocence (#481) appears **after Death and Rebirth**; the related Sin #479/#480 topics are distinct.
- Lilly Roth: Kitava (#482) appears **after An End to Hunger**; Innocence #483/#484 are separate topics. Karui Shores dialogue is excluded from the historical 484 counter.

The route now expands source-labeled **after-quest review panels** by default in these three quest stages. This provides direct context above the item lists without inventing a "do not advance" assertion unsupported by the reference. English/Thai source notes describe the prerequisite and remind users that completing a quest is not the same as hearing its optional NPC dialogue.

## Release and integrity gates
- No changes to 484 All Ears, 140 lore, 91 legacy waypoint, or 30 side quest records.
- No localStorage key changes, renumbering or auto-marking. Browser smoke and validation run on the exact PR head.
- Do not claim actual 3.29 game completion without reproducible game footage or source client-state confirmation.

Sources:
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_10
- https://www.poewiki.net/wiki/Act_9
- https://www.poewiki.net/wiki/Act_10
