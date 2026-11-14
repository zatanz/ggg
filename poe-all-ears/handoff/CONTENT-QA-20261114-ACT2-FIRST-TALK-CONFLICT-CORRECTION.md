# PoE 1 — Act 2 Bandit first-talk contradiction: source correction and safe-review checkpoint

**14 Nov 2026 (Asia/Bangkok) | Editorial/source QA | PoE 3.30 gameplay: NOT CERTIFIED**

## P0 finding: the old "Steam does not forbid early talking" assertion was false

The project's 14 Nov handoff and website incorrectly said that Steam 3.28 merely scheduled Bandit kills after The Darkness and **did not explicitly forbid talking** to Bandits before the Ancient Seal.

The original [Steam 3.28 All Ears / No Stone Unturned route](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869), Act 2 part 1, says (emphasis preserved as source): **"DO NOT KILL OR TALK TO ANY OF THE BANDITS UNTIL AFTER TRIGGERING THE DARKNESS"**.

The [PoE Wiki All Ears guide](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2), last updated **30 June 2025**, explicitly instructs players to **talk to each Bandit before breaking the Ancient Seal** in Vaal Ruins, **but not to kill** before the Darkness dialogue unlocks.

Therefore the guides are directly incompatible on first-talk timing. This is not merely a different kill order. **One character cannot literally obey both recommendations.** Neither guide is an in-game test of the released 3.30 patch. We cannot certify which route is safe from static public evidence.

## Player-facing remedy

- Insert a concise, distinct `bandits-before-seal` source-conflict review **immediately before** the `ancient-seal` stage (after `roots`). It has **zero All Ears / Lore / Waypoint / Side Quest IDs**: the user is reviewing competing advice, not claiming an achievement.
- STOP uses **manual per-character acknowledgement** in existing `confirmedStages["2:bandits-before-seal"]`; false by default. It explains the risk, displays direct source links, provides an expandable path to the existing Alira/Oak/Kraityn note fields and never auto-ticks a dialogue.
- Player can preview a later step after explicitly accepting a browser confirmation, but cannot unknowingly skip this STOP using the phase picker. Dismissing the dialog retains the current stage. An acknowledgement means **reviewed**, not "safe" or "complete in 3.30."
- Existing unified schema:2 combined backups already preserve per-character `confirmedStages`; no storage format change is required. Test backup roundtrip on a newly imported character ID.
- Preserve all original 69 Act 2 All Ears entries and their local ID mapping. The Act 2 route grows from 10 to 11 stages, total Acts 1–10 source-led stages grows from 128 to 129; **745 canonical IDs, 744 current manual marks, sidequests, 67 route bindings, Karui Shores mark and stored user progress are unchanged**.
- Reconcile the Thai and English editorial copy in the route, risk source panels, run preflight, Act 2 advisory, bilingual translations, and validation assertions. Static and Chromium QA must prove no copy still asserts "Steam does not forbid earlier talks."

## Hard limitations and safety

No recommendation of a guaranteed **All Ears 484/484** completion route is justified without 3.30 evidence. Suggested evidence collection: two separately recorded fresh 3.30 characters, starting from the same quest state but taking each first-talk order, screenshots of the Bandit NPC menus and the in-game All Ears count before Seal, after Seal/Darkness and after the Eramir intermediate kill dialogue. The game state/decision cannot be reconstructed by marking browser checkboxes.

Avoid incorrectly conflating numbers: **local** #101 is Eramir after killing Alira, local #102 is Oak: The Darkness, local #103 Eramir: Bandit Lords; the 2025 Wiki's 101–103 refer to alternative Eramir row meanings. The first/second/third kill sequence still requires a return to Eramir *between* kills; Book of Reform is not demonstrated to restore missed dialogue in 3.30.

## Provenance

1. [Steam walkthrough, Act 2 part 1](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869) — original explicit no-talk and no-kill instruction.
2. [PoE Wiki: All Ears, Act 2](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2) — opposite pre-Seal talk instruction, Eramir topic rows and prerequisites.
3. [PoE Wiki: Deal with the Bandits](https://www.poewiki.net/wiki/Deal_with_the_Bandits) — three-bandit quest branches and reward behavior, not proof of All Ears safety.
4. [Original project Act 1/2 source ledger](../ACT1-ACT2-329-EVIDENCE-LEDGER.md) — correctly recorded the direct contradiction earlier; subsequent 14 Nov handoff paraphrase was mistaken.
5. [Earlier handoff corrected by addendum](./CONTENT-QA-20261114-BANDITS-FAIRGRAVES-BRANCH.md).

**Status:** code changes require passing PR CI, merged-master CI and exact-SHA Pages deploy before marking the remedy as shipped. No in-game 3.30 validation has been performed.
