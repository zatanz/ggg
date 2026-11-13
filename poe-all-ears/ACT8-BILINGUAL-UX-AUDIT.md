# Act 8 — bilingual guide, quest-state and UX/source verification

Reviewed: November 13, 2026 (Asia/Bangkok)
Status: source-led historical staging complete; **NOT tested in-game on Path of Exile 3.30**.

## Coverage

| Achievement | Act 8 original local IDs | Count | Verified stage coverage |
|---|---|---:|---|
| All Ears | 387–416 | 30 | Each original dialogue ID exactly once, crossed to Wiki row numbers |
| No Stone Unturned | 121 | 1 | Official Orders, The Grain Gate |
| Locomancer | 69–78 | 10 | Sarn Ramparts through Lunaris Temple, including post-Doedre shared Waypoint |
| No Loose Ends | 20–23 | 4 | Love is Dead, The Gemling Legion, The Wings of Vastiri, Reflection of Terror |
| **Total** | Existing IDs only | **45** | **16 chronological/branching source-led phases** |

The project's prior four-achievement master totals remain **484 + 140 + 91 + 30 = 745 tracker records**. These are preserved for user progress/backup compatibility; they are not declared current-client certified. All four achievements depend on actual game state, not checking the website.

## Chronological critical checkpoints

1. **Doedre**: after defeating Doedre the Vile, hear **Sin: Doedre** (original ID 403). Older warning says before leaving Doedre's Cesspool; PoE Wiki 2025 only requires after the kill. The narrower timeframe is historical and flagged, not guaranteed current.
2. **Hargan before Love is Dead**: start with Clarissa, get the Ankh of Eternity, hear Hargan: The Ankh of Eternity **local ID 407** before completing the quest. Ankh comes from a Sealed Casket in The Quay and is used at the Resurrection Site.
3. **Clarissa after Tolman**: after the boss encounter at the Resurrection Site, hear Clarissa: The Ankh of Eternity **local ID 411** and her Tolman conversation **local ID 413 (Wiki row 412)** before leaving The Quay. After returning to town, hear **Maramoa: Clarissa and Tolman local ID 412 (Wiki row 413)**. Local IDs and Wiki row numbers differ; UI deliberately separates the stages.
4. **Yugul before boss**: complete **The Wings of Vastiri** by returning the quest item from Hector Titucius at The Bath House to Hargan; then hear **Sin: Yugul ID 409** followed by **Hargan: Yugul ID 410**, BEFORE killing Yugul in The High Gardens. After defeating Yugul, finish Reflection of Terror and check the in-game passive point reward.
5. **Orbs before sisters**: obtain both **Sun Orb** and **Moon Orb** from their respective temple quest lines, then hear **Maramoa ID 414** and **Hargan ID 415** before concluding the Solaris/Lunaris story. After completing Solar Eclipse and Lunar Eclipse, return to Hargan for **ID 416**.

No live-game evidence was supplied for 3.30. These source conditions are not a guarantee that an earlier/skipped character can still achieve 100%.

## Waypoint integrity discrepancy — NOT resolved by data manipulation

Existing local Waypoint **ID 71** is labelled **The Toxic Conduits** (consistent with the historical PoE Wiki Waypoint list), but [Doedre's Cesspool](https://www.poewiki.net/wiki/Doedre%27s_Cesspool) is where the actual accessible post-boss Waypoint lies. The Wiki explicitly says the waypoint shares its world-map node with Toxic Conduits. The Act 8 journey and English per-Waypoint help now tell players to mark ID 71 only after the post-boss exit/actual activation, not when first arriving at Toxic Conduits.

A separate cross-version conflict exists: our **91 legacy Locomancer tracker records** versus [PoE Wiki Waypoint](https://www.poewiki.net/wiki/Waypoint) version history reporting **90 required** after removal of Oriath, and its 3.25 automatic-activation change. The old base cannot be silently rewritten without canonical ID migration, backup compatibility and game-side confirmation. This is a future **patch reconciliation HOLD**, not a validated claim that a 91-point checklist is identical to the present achievement.

## UX/UI and localization delivered

- 16 short quest-centric phases with authored **Thai/English headings, actions and explicit STOPs**. Quest/title labels remain separate from description language as prior UX contract requires.
- 37 Act 8 editorial Thai terms for areas, quests and items. English official source strings remain recoverable, including in Thai-only mode via original title.
- 30 per-dialogue English prerequisite/timing summaries, including post-boss and quest turn-in boundaries.
- 3 original 960×540 SVG concept quest-state figures (Doedre, Tolman/Clarissa, Yugul) with accurate ID callouts, source links, Thai/English verification text and visible **NOT AN IN-GAME SCREENSHOT**. Total source-associated conceptual assets: **19** across Acts 1–8.
- Active step remains ahead of collapsed Act-wide summary; one-tap links reach source-linked NPC/Lore/Waypoint/sidequest rows, checkbox categories retain their disclosure state.
- Act 8 inherits Act 7's **forward dropdown skipped-STOP confirmation** and **first incomplete step** recovery. Next button also warns without auto-checking player state.
- Lore/Waypoint/sidequest-only Act 8 stages omit empty NPC lists. 375px mobile presentation and independent language/character persistence tested in Chromium.
- Project-scoped UX Skill updated to document shared Waypoint nodes, patch-driven activation, source disagreements and quest-state transitions.

## Verification workflow and remaining limitations

- Static `validate-data.cjs`: exact ID coverage, source mapping, images, English cues, phase boundaries, original backups intact.
- `validate-ui.cjs` and Chromium `test-browser.cjs`: page renders, Act 8 16 phases, priority hierarchy, STOP cancel/accept, source-note disclosure, 3 image loads, both language controls, Waypoint/Lore/sidequests, mobile overflow and Acts 1–7 regression.
- **No captured proof of quest unlocks in the PoE 3.30 client**; no visual QA from live game screenshots.
- Acts 9–10 still require route authoring. Earlier English legacy notes remain conservatively rendered where not fully source-reviewed. No global ChatGPT Personal Skill installed.

## Sources

- [All Ears, Act 8 (PoE Wiki)](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8), historical updated June 30, 2025.
- [No Stone Unturned](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement), historical updated April 24, 2025.
- [Act 8 campaign map/progression](https://www.poewiki.net/wiki/Act_8).
- [Love is Dead](https://www.poewiki.net/wiki/Love_is_Dead) and [Ankh of Eternity](https://www.poewiki.net/wiki/Ankh_of_Eternity).
- [Reflection of Terror](https://www.poewiki.net/wiki/Reflection_of_Terror); [Wings of Vastiri](https://www.poewiki.net/wiki/The_Wings_of_Vastiri).
- [Doedre's Cesspool Waypoint](https://www.poewiki.net/wiki/Doedre%27s_Cesspool); [Waypoint and version history](https://www.poewiki.net/wiki/Waypoint).
- [Legacy Act 8 source inventory](./act8-inventory.json).
- [Historical Steam source guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869).
