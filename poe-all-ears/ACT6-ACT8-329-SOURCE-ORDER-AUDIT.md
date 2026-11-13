# PoE Achievement Checklist — Act 6–8 source-order reconciliation (current playable 3.29)
Date: 2026-11-13, Asia/Bangkok. Status: editorial/source audit; not an in-game 3.29 achievement-completion certification.

## Method and evidence hierarchy
Compared the current website's Act 6–8 phase definitions and legacy 484-dialogue checklist notes with [PoE Wiki: Guide:All Ears achievement](https://www.poewiki.net/wiki/Guide:All_Ears_achievement), last noted as updated June 30, 2025. Kept canonical checklist IDs and all local progress/backup formats unchanged. Explicitly distinguish (1) documented Wiki quest trigger, (2) stricter historical sheet warning, and (3) **no** fresh gameplay evidence that the earlier limit is irreversible in 3.29.

## Act 6: Bestel and Tarkleigh, The Ship Graveyard (IDs 332 and 333)
- Legacy item **332 Bestel**: after talking to Nessa; warns **do not enter The Western Forest**. Wiki row 332: *after speaking to Nessa in Prisoner's Gate*, without that no-entry clause.
- Legacy item **333 Tarkleigh**: after talking to Nessa; Wiki explicitly says **do not enter The Cavern of Anger**.
- Previous route showed both as a group but the STOP guarded **only #333** at the later Cavern condition, silently dropping historical #332 warning.
- **Fix:** Act 6 phase 10 now instructs returning for both topics immediately after Nessa, includes **both #332 and #333 in stopIds**, and explains different source claims. The Western Forest rule is an early **precaution**, not a proven point of no return in 3.29.

## Act 7: Helena, The Den (ID 365)
- Legacy checklist says after observing the blocked passage **before entering The Fellshrine Ruins**.
- Wiki 2025 says after seeing the old Forest Encampment blocked and **before continuing towards The Den**.
- Previously the headline and STOP said only before The Den, even though the detailed actions referenced Fellshrine.
- **Fix:** visible STOP now states immediately after the blocked passage and **before Fellshrine** as the older, conservative reminder. Inline source note explicitly says it is **not** confirmed that crossing Fellshrine removes the option in 3.29.

## Act 7: Yeena, Arakaali's Temple (ID 382)
- Legacy checklist: after collecting seven Fireflies, **before entering The Causeway**.
- Wiki: after collecting seven Fireflies, **before meeting Yeena in The Vaal City**.
- Previous STOP warned only before Vaal City, while a less-visible text block mentioned Causeway.
- **Fix:** after collecting all seven, return to Yeena at Bridge Encampment and hear the topic before Causeway. Clarify Wiki's later limit and uncertainty.

## Act 8: Sin, Doedre (ID 403)
- Legacy warns **after killing Doedre, before leaving Cesspool**.
- Wiki only states **after killing Doedre** and does not establish the same area-exit failure.
- **Fix:** player-facing STOP and Thai/English instructions now label this as a legacy precaution for 3.29, replacing misleading future-patch certification wording. No claim that departure irreversibly removes the conversation in 3.29.

## Unchanged scope and verification gaps
- All 484 original All Ears dialogue IDs, 140 historical Lore entries, 91 historical Waypoint IDs and 30 sidequests remain unchanged.
- This pass changes three early STOP boundaries plus one explicit evidence classification; it does **not** certify all 45 Act 7 / 30 Act 8 dialogues or prove the game unlocks achievements.
- Source discrepancies are surfaced in individual Act steps and covered by browser smoke tests. The next verification should compare remaining Act 7/8 missing cases and interaction design on mobile, including exactly when NPC conversations become inaccessible.
- Do not promote these older source warnings into certified current-patch facts without reproducible client/version/character/quest-state screenshots.

Evidence:
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8
- local `data.js` historical source notes for IDs 332, 333, 365, 382 and 403
