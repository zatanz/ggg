# 3.29 current-playable audit: Fairgraves and Bandits
Updated: November 13, 2026 (Asia/Bangkok). Historical source comparison, **NOT** official 3.29 achievement certification.

## 1. Fairgraves / All Ears — P0, reported blocker

**Source A**: [Steam guide (3.28 zone-by-zone)](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869), author Pill, updated July 25, 2026. Its intro reports that the reworked Fairgraves interaction is broken in 3.29, and warns that Standard may behave differently. The source guide also identifies pre-Allflame topics.
**Source B**: [Reddit July 25 2026 thread](https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/), corroborating player reports, identifies affected **five Wiki IDs #34–#38**: Fairgraves: The Allflame, Merveil, Merveil's Necklace; Bestel: Captain Fairgraves; Fairgraves: The Real Fairgraves.
**Source C**: [PoE Wiki All Ears](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_1), dated June 30, 2025, describes the prerequisite order: talk to Fairgraves before obtaining Allflame, return to Bestel for Captain Fairgraves, then speak to Fairgraves again before getting the Allflame.

**Conclusion:** July 2026 community reports make this a prominent 3.29 risk, not just a theoretical incomplete QA gate. We do **not** have official GGG confirmation that the issue affects every character, was fixed or is still present; no recorded fresh gameplay experiment. Warn players immediately, include source links, do not auto-check, and do not promise a new character can complete 484/484 in the affected league. A Standard character might behave differently, but that is only a player suggestion pending verification.

## 2. Act 2 Bandit chronology — P0, irreconcilable guide conflict

**Wiki June 30, 2025** states: talk to each Bandit **before** breaking Ancient Seal in The Vaal Ruins, but **do not kill** any Bandit until The Darkness dialogue is unlocked. Eramir topics **#101–#103** depend on the identity of the first defeated Bandit, survivor after second defeat, and all defeated. See: https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2

**Steam guide 3.28**, Act 2 part 1, explicitly says **DO NOT KILL OR TALK TO ANY OF THE BANDITS UNTIL AFTER TRIGGERING THE DARKNESS**, contrary to Wiki's first-talk timing. See: https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869

**Conclusion:** Do not silently merge these into "talk before Seal" or "never talk before Seal" as if source-verified for all 3.29 characters. The app displays both original interpretations and warns before any irreversible help/kill. For a character already past the decision, continue recording real observations, not speculative checkmarks.

## 3. No Stone Unturned — confirmation of count and random subsets

[PoE Wiki environmental lore guide](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement), last updated April 24, 2025: achievement requires 140 distinct discoveries on one character; "Letters of Exile" can repeat in Lioneye's Watch, and Library rolls one volume from each of three collections per instance. Merely interacting counts; reading to the end is unnecessary. Exact 3.29 random generation and Vaal map-opening method require separate observation.

**UX implication:** distinguish unique entry progress from repetitive interactions. Do not treat a duplicate book/letter as a new completed ID. Preserve original item ID and user checkmark schema.

## Source-quality labels used

- **Wiki documented:** dated public secondary guide, not automatically gameplay proof for 3.29.
- **Community-reported 3.29:** multiple player anecdotes or guide author statements; stronger practical warning, not an official patch confirmation.
- **Conflict:** sources give incompatible state-transition timing; do not imply a universally safe route.
- **Gameplay verified 3.29:** requires reproducible character state, action, in-game dialogue/achievement counter screenshots and build; currently none recorded here.

## Implementation in PR

- Top-of-dashboard Fairgraves warning with Steam/Reddit links, bilingual text, and one-click Act 1 route.
- Act 1 contextual warning expanded by default with source link.
- Act 2 source conflict states each side's *specific timing requirement* rather than vague disagreement.
- 3.29-first Vaal lookup, removing future patch advice from the current task surface.
- Browser regression tests check all three views. Canonical 745 IDs and browser progress remain unchanged.

## Follow-up review

- Search official GGG bug/patch history for a dated fix; if verified, update warning with dates.
- Verify five Fairgraves dialogues in 3.29 Standard and a 3.29 league character independently; absent direct proof, retain reported label.
- Compare exact Act 2 alternate route in a fresh 3.29 character without declaring an irreversible step safe.
